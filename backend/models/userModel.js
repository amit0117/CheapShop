import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  // bcrypt.compare() automatically extracts the salt from this.password (which is the stored hash)
  // The salt is EMBEDDED in the hash string itself (format: $2b$10$[22-char-salt][31-char-hash])
  // bcrypt.compare() uses the embedded salt to hash enteredPassword and compares the results
  return await bcrypt.compare(enteredPassword, this.password);
};

// to encrypt password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // if password modify nhi hua hai means
    // if we change our username or password
    // not creating new username or pssword then
    // no need to rehash the password
    next();
  }

  // IMPORTANT: bcrypt.hash() generates a RANDOM salt and EMBEDS it in the resulting hash string
  // The hash format is: $2b$10$[22-character-salt][31-character-hash]
  // Each user gets a UNIQUE salt automatically - no separate salt field needed in database!
  // When comparing passwords later, bcrypt.compare() extracts the salt from the stored hash
  // bcrypt.hash(password, 10) generates a random salt
  // The salt is embedded in the resulting hash string
  // Hash format: $2b$10$[22-char-salt][31-char-hash]
  // Example: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
  // $2b$10$ = algorithm and rounds
  // Next 22 chars = the salt
  // Remaining 31 chars = the hash

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("User", userSchema);
export default User;
