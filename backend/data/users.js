import bcrypt from "bcryptjs";
const users = [
    {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10), // bcrypt.hashSync() generates a random salt and EMBEDS it in the hash string. The salt is part of the hash itself (no separate salt field needed). Each user gets a unique salt automatically.
    isAdmin: true,
    },
    {
    name: "Kumar Amit",
    email: "KumarAmit@example.com",
    password: bcrypt.hashSync("123456", 10),
    },
    {
    name: "Amit Kumar",
    email: "AmitKumar@example.com",
    password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
