# CheapShop Backend API

Express.js REST API backend for the CheapShop e-commerce platform.

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage and management
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                    # MongoDB connection configuration
├── constants/
│   └── uploadConstants.js       # File upload constants
├── controller/                  # Route controllers (business logic)
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
├── data/                        # Seed data
│   ├── products.js
│   └── users.js
├── middleware/                  # Custom middleware
│   ├── authMiddleware.js        # JWT authentication & authorization
│   └── errorMiddleware.js       # Error handling
├── models/                      # Mongoose models
│   ├── orderModel.js
│   ├── productModel.js
│   └── userModel.js
├── routes/                      # API route definitions
│   ├── orderRoutes.js
│   ├── productRoute.js
│   ├── uploadRoutes.js
│   └── userRoutes.js
├── utils/
│   └── generateTokens.js        # JWT token generation
├── uploads/                     # Local uploads (if not using Cloudinary)
├── cloudinary.js                # Cloudinary configuration
├── server.js                    # Express server (local development)
└── seeder.js                    # Database seeder script
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.6+)
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account (for image uploads)

### Installation

1. **Navigate to project root**

   ```bash
   cd cheapshop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   Create `backend/.env`:

   ```env
   NODE_ENV=development
   PORT=5001
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
   JWT_SECRET=your_super_secret_jwt_key_min_32_chars
   PAYPAL_CLIENT_ID=your_paypal_client_id
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server**

   **Development (with nodemon):**

   ```bash
   npm run server
   ```

   **Production:**

   ```bash
   npm start
   ```

   Server runs on `http://localhost:5001`

## 📚 API Documentation

### Base URL

- Development: `http://localhost:5001`
- Production: `https://your-domain.com`

### Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### API Endpoints

#### Products

| Method | Endpoint                    | Description                                 | Auth Required |
| ------ | --------------------------- | ------------------------------------------- | ------------- |
| GET    | `/api/products`             | Get all products (with pagination & search) | No            |
| GET    | `/api/products/:id`         | Get single product                          | No            |
| GET    | `/api/products/top`         | Get top rated products                      | No            |
| POST   | `/api/products`             | Create new product                          | Admin         |
| PUT    | `/api/products/:id`         | Update product                              | Admin         |
| DELETE | `/api/products/:id`         | Delete product                              | Admin         |
| POST   | `/api/products/:id/reviews` | Create product review                       | User          |

**Query Parameters (GET /api/products):**

- `keyword` - Search keyword
- `pageNumber` - Page number for pagination

**Example:**

```bash
GET /api/products?keyword=laptop&pageNumber=1
```

#### Users

| Method | Endpoint             | Description         | Auth Required |
| ------ | -------------------- | ------------------- | ------------- |
| POST   | `/api/users`         | Register new user   | No            |
| POST   | `/api/users/login`   | Login user          | No            |
| GET    | `/api/users/profile` | Get user profile    | User          |
| PUT    | `/api/users/profile` | Update user profile | User          |
| GET    | `/api/users`         | Get all users       | Admin         |
| GET    | `/api/users/:id`     | Get user by ID      | Admin         |
| PUT    | `/api/users/:id`     | Update user         | Admin         |
| DELETE | `/api/users/:id`     | Delete user         | Admin         |

**Register Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Orders

| Method | Endpoint                  | Description             | Auth Required |
| ------ | ------------------------- | ----------------------- | ------------- |
| POST   | `/api/orders`             | Create new order        | User          |
| GET    | `/api/orders`             | Get all orders          | Admin         |
| GET    | `/api/orders/myorders`    | Get user's orders       | User          |
| GET    | `/api/orders/:id`         | Get order by ID         | User/Admin    |
| PUT    | `/api/orders/:id/pay`     | Update order to paid    | User          |
| PUT    | `/api/orders/:id/deliver` | Mark order as delivered | Admin         |

**Create Order Request Body:**

```json
{
  "orderItems": [
    {
      "name": "Product Name",
      "qty": 2,
      "image": "image-url",
      "price": 99.99,
      "product": "product_id"
    }
  ],
  "shippingAddress": {
    "address": "123 Main St",
    "city": "City",
    "postalCode": "12345",
    "country": "Country"
  },
  "paymentMethod": "PayPal",
  "itemsPrice": 199.98,
  "taxPrice": 20.0,
  "shippingPrice": 10.0,
  "totalPrice": 229.98
}
```

#### Upload

| Method | Endpoint      | Description                | Auth Required |
| ------ | ------------- | -------------------------- | ------------- |
| POST   | `/api/upload` | Upload image to Cloudinary | Admin         |

**Upload Request:**

- Method: `POST`
- Content-Type: `multipart/form-data`
- Field name: `image`
- Returns: Cloudinary URL string

#### Config

| Method | Endpoint             | Description          | Auth Required |
| ------ | -------------------- | -------------------- | ------------- |
| GET    | `/api/config/paypal` | Get PayPal client ID | No            |
| GET    | `/api/health`        | Health check         | No            |

## 🔒 Authentication & Authorization

### JWT Authentication

1. User registers/logs in
2. Server returns JWT token
3. Client stores token and includes in subsequent requests
4. Middleware validates token on protected routes

### Middleware

#### `protect` - User Authentication

- Validates JWT token
- Attaches user to request object
- Required for user-specific routes

#### `admin` - Admin Authorization

- Checks if user has admin role
- Must be used after `protect` middleware
- Required for admin-only routes

**Example:**

```javascript
router.get("/admin-route", protect, admin, adminController);
```

## 🗄️ Database Models

### User Model

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean,
  createdAt: Date
}
```

### Product Model

```javascript
{
  name: String,
  image: String (Cloudinary URL),
  description: String,
  brand: String,
  category: String,
  price: Number,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
  reviews: [{
    name: String,
    rating: Number,
    comment: String,
    user: ObjectId
  }]
}
```

### Order Model

```javascript
{
  user: ObjectId (ref: User),
  orderItems: [{
    name: String,
    qty: Number,
    image: String,
    price: Number,
    product: ObjectId (ref: Product)
  }],
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentMethod: String,
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String
  },
  itemsPrice: Number,
  taxPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
  isPaid: Boolean,
  paidAt: Date,
  isDelivered: Boolean,
  deliveredAt: Date
}
```

## 🗃️ Database Seeding

### Import Sample Data

```bash
npm run data:import
```

This will:

- Create sample users (including admin)
- Create sample products
- Populate the database

### Clear All Data

```bash
npm run data:destroy
```

**⚠️ Warning:** This will delete all users, products, and orders!

## 🔧 Configuration

### MongoDB Connection

Connection is handled in `config/db.js`:

- Uses Mongoose for connection
- Handles connection pooling
- Works with both local MongoDB and MongoDB Atlas
- Optimized for serverless (Vercel)

### Cloudinary Setup

Image uploads are handled via Cloudinary:

- Direct upload from client
- Automatic image optimization
- Secure URL generation
- No local file storage needed

### CORS Configuration

CORS is configured to allow requests from:

- Frontend URL (from `FRONTEND_URL` env var)
- All origins in development (`*`)

## 🚀 Deployment

### Vercel Deployment

The backend is configured to work with Vercel serverless functions:

1. **Serverless Function**: `api/index.js` exports the Express app
2. **Server Detection**: `server.js` detects Vercel environment and doesn't start HTTP server
3. **Database**: Connection is optimized for serverless (reuses connections)

### Environment Variables for Production

Set these in your deployment platform:

```
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=https://your-frontend-url.com
```

## 🛡️ Security Features

- **Password Hashing**: Bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Protected Routes**: Middleware-based route protection
- **Role-Based Access**: Admin/user role separation
- **CORS**: Configured cross-origin resource sharing
- **Input Validation**: Request validation in controllers
- **Error Handling**: Centralized error handling middleware

## 📝 Error Handling

Errors are handled by `errorMiddleware.js`:

- Custom error classes
- Consistent error response format
- Development vs production error messages
- 404 handling for undefined routes

**Error Response Format:**

```json
{
  "message": "Error message",
  "stack": "Error stack (development only)"
}
```

## 🧪 Testing

### Sample Data

After seeding, you can use:

- Admin user (check seeder data)
- Regular users (check seeder data)
- Sample products

### API Testing

Use tools like:

- Postman
- Insomnia
- curl
- Thunder Client (VS Code)

**Example curl request:**

```bash
# Login
curl -X POST http://localhost:5001/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'

# Get products (with token)
curl -X GET http://localhost:5001/api/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📦 Dependencies

### Core

- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables

### Authentication

- `jsonwebtoken` - JWT tokens
- `bcryptjs` - Password hashing

### File Upload

- `multer` - File upload middleware
- `cloudinary` - Cloud image storage
- `multer-storage-cloudinary` - Cloudinary storage for Multer

### Utilities

- `cors` - CORS middleware
- `express-async-handler` - Async error handling
- `morgan` - HTTP request logger
- `colors` - Console colors

## 🐛 Troubleshooting

### MongoDB Connection Issues

- Verify `MONGO_URI` is correct
- Check MongoDB Atlas network access (allow 0.0.0.0/0)
- Verify database user permissions

### JWT Token Issues

- Ensure `JWT_SECRET` is set
- Check token expiration
- Verify token format in Authorization header

### File Upload Issues

- Verify Cloudinary credentials
- Check file size limits
- Ensure `multer-storage-cloudinary` is configured

### CORS Errors

- Set `FRONTEND_URL` environment variable
- Check CORS configuration in `server.js`
- Verify frontend URL matches

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

**Note:** This backend uses ES Modules. Ensure Node.js v14.6+ or use `--experimental-modules` flag.
