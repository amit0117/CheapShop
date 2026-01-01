# CheapShop - Full Stack E-Commerce Platform

A modern, full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js) and Redux for state management.

![Homepage](https://user-images.githubusercontent.com/123208927/214512172-7512fb3f-7ba7-4a2e-bf41-bbbed899e353.PNG)

## 🎯 Overview

CheapShop is a complete e-commerce solution that provides a seamless shopping experience for customers and comprehensive management tools for administrators. The platform features a modern, responsive design with secure payment processing, real-time inventory management, and robust user authentication.

## 🚀 Key Features

### For Customers

- 🛒 **Shopping Cart** - Full-featured cart with persistent storage
- 🔍 **Product Search** - Advanced search with pagination and filtering
- ⭐ **Reviews & Ratings** - Customer reviews and product ratings
- 👤 **User Accounts** - Registration, login, and profile management
- 📦 **Order Tracking** - Complete order history and status tracking
- 💳 **Secure Payments** - PayPal and credit card integration
- 🚚 **Shipping Management** - Address management and delivery tracking

### For Administrators

- 📊 **Dashboard** - Overview of orders, products, and users
- 🎨 **Product Management** - Create, update, and delete products
- 👥 **User Management** - Manage user accounts and permissions
- 📋 **Order Management** - Process orders and mark as delivered
- 🖼️ **Image Upload** - Cloudinary integration for product images
- 📈 **Analytics** - Order details and sales tracking

## 🛠️ Tech Stack

**Frontend:** React 18, Redux, React Router, React Bootstrap, Axios, PayPal SDK
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Cloudinary
**Deployment:** Vercel (Serverless Functions)

## 🚀 Quick Start

### Prerequisites

- Node.js (v14.6+)
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)
- PayPal developer account (for payments)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/amit0117/CheapShop.git
   cd cheapshop
   ```

2. **Install dependencies**

   ```bash
   npm install
   cd frontend && npm install && cd ..
   ```

3. **Set up environment variables**

   Create `backend/.env` file with the following:

   ```env
   NODE_ENV=development
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTEND_URL=http://localhost:3000
   ```

4. **Seed the database** (optional)

   ```bash
   npm run data:import
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5001

## 📝 Available Scripts

- `npm run dev` - Run both frontend and backend concurrently
- `npm run server` - Run backend only (with nodemon)
- `npm run client` - Run frontend only
- `npm start` - Run backend in production mode
- `npm run data:import` - Seed database with sample data
- `npm run data:destroy` - Clear all database data

## 🌐 How to Use

### As a Customer

1. Browse products on the homepage
2. Search for specific items
3. View product details and reviews
4. Add items to cart
5. Proceed to checkout
6. Complete payment via PayPal or credit card
7. Track your orders in the profile section

### As an Administrator

1. Login with admin credentials
2. Access admin dashboard
3. Manage products (add, edit, delete)
4. View and manage user accounts
5. Process orders and mark as delivered
6. Upload product images via Cloudinary

## 🚀 Deployment

The application is configured for deployment on Vercel. See detailed deployment instructions in the [Backend README](./backend/README.md#deployment).

**Quick Steps:**

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings (already in `vercel.json`)
4. Add environment variables
5. Deploy!

## 📚 Documentation

For detailed documentation, please refer to:

- **[Frontend README](./frontend/README.md)** - React app structure, components, state management, and frontend-specific setup
- **[Backend README](./backend/README.md)** - API endpoints, authentication, database models, and backend configuration

## 🧪 Testing

### Sample Login Credentials

**Admin User:**

- Email: `admin@example.com`
- Password: (check seeder data)

**Regular User:**

- Email: `amit@gmail.com`
- Password: `amit`

## 🔒 Security

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Role-based access control (Admin/User)
- CORS configuration
- Secure environment variables

## 📁 Project Structure

```
cheapshop/
├── api/              # Vercel serverless function
├── backend/          # Express API server
├── frontend/         # React application
└── vercel.json       # Deployment configuration
```

For detailed structure, see [Frontend README](./frontend/README.md#project-structure) and [Backend README](./backend/README.md#project-structure).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License

## 👤 Author

**Kumar Amit (Amit)**

- GitHub: [@amit0117](https://github.com/amit0117)

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Cloudinary for image storage
- PayPal for payment processing
- Vercel for deployment platform

---

**Note**: This project uses ES Modules. Make sure you have Node.js v14.6+ or use the `--experimental-modules` flag.
