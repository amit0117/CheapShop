# CheapShop Frontend

React-based frontend application for the CheapShop e-commerce platform.

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **Redux** - State management
- **React Router 6** - Client-side routing
- **React Bootstrap** - UI component library
- **Axios** - HTTP client for API calls
- **PayPal SDK** - Payment integration
- **React Helmet Async** - SEO and meta tags

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── images/          # Product images
│   └── ...
├── src/
│   ├── actions/         # Redux action creators
│   │   ├── cartActions.js
│   │   ├── orderActions.js
│   │   ├── productActions.js
│   │   └── userActions.js
│   ├── components/      # Reusable React components
│   │   ├── CheckoutSteps.js
│   │   ├── Footer.js
│   │   ├── FormContainer.js
│   │   ├── Header.js
│   │   ├── Loader.js
│   │   ├── Message.js
│   │   ├── Meta.js
│   │   ├── Paginate.js
│   │   ├── Product.js
│   │   ├── ProductCarousel.js
│   │   ├── Rating.js
│   │   └── SearchBox.js
│   ├── constants/       # Redux action constants
│   │   ├── cartConstants.js
│   │   ├── orderConstants.js
│   │   ├── productConstant.js
│   │   └── userConstants.js
│   ├── reducers/        # Redux reducers
│   │   ├── cartReducer.js
│   │   ├── orderReducer.js
│   │   ├── productReducers.js
│   │   └── userReducer.js
│   ├── screens/         # Page components
│   │   ├── CartScreen.js
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── OrderListScreen.js
│   │   ├── OrderScreen.js
│   │   ├── PaymentScreen.js
│   │   ├── PlaceOrderScreen.js
│   │   ├── ProductEditScreen.js
│   │   ├── ProductListScreen.js
│   │   ├── ProductScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── ShippingScreen.js
│   │   ├── UserEditScreen.js
│   │   └── UserListScreen.js
│   ├── utils/
│   │   └── axiosConfig.js  # Axios configuration
│   ├── App.js           # Main app component
│   ├── App.css
│   ├── index.js         # Entry point
│   ├── store.js         # Redux store configuration
│   └── ...
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.6+)
- npm or yarn

### Installation

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

### `npm start`

Runs the app in development mode.

- Opens [http://localhost:3000](http://localhost:3000)
- Hot reload on file changes
- Shows lint errors in console

### `npm run build`

Creates a production build in the `build` folder.

- Optimized and minified
- Ready for deployment
- Includes source maps

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run eject`

**⚠️ One-way operation!** Ejects from Create React App to get full control over configuration.

## 🔧 Configuration

### API Configuration

The frontend uses Axios for API calls. Configuration is in `src/utils/axiosConfig.js`:

**Development:**

- Uses proxy from `package.json` (`http://127.0.0.1:5001`)
- Relative paths like `/api/products` are proxied to backend

**Production:**

- Set `REACT_APP_API_URL` environment variable
- Or leave empty if frontend and backend are on same domain

### Environment Variables

Create a `.env` file in the `frontend` directory (optional):

```env
REACT_APP_API_URL=https://your-backend-url.com
```

**Note:** All React environment variables must be prefixed with `REACT_APP_`

## 🎨 Features

### State Management (Redux)

The app uses Redux for global state management:

- **User State**: Authentication, user profile
- **Product State**: Product list, product details, search
- **Cart State**: Cart items, shipping address, payment method
- **Order State**: Order history, order details

### Routing

React Router handles client-side routing:

- `/` - Homepage
- `/product/:id` - Product details
- `/cart` - Shopping cart
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/shipping` - Shipping address
- `/payment` - Payment method
- `/placeorder` - Order summary
- `/order/:id` - Order details
- `/admin/*` - Admin routes (protected)

### Components

#### Reusable Components

- **Header** - Navigation bar with cart icon
- **Footer** - Footer section
- **Loader** - Loading spinner
- **Message** - Alert messages
- **Rating** - Star rating display
- **Product** - Product card component
- **ProductCarousel** - Top products carousel
- **SearchBox** - Product search
- **Paginate** - Pagination component
- **CheckoutSteps** - Checkout progress indicator
- **FormContainer** - Form wrapper
- **Meta** - SEO meta tags

### Screens/Pages

- **HomeScreen** - Product listing with search and pagination
- **ProductScreen** - Individual product details with reviews
- **CartScreen** - Shopping cart management
- **LoginScreen** - User authentication
- **RegisterScreen** - User registration
- **ProfileScreen** - User profile management
- **ShippingScreen** - Shipping address form
- **PaymentScreen** - Payment method selection
- **PlaceOrderScreen** - Order summary and confirmation
- **OrderScreen** - Order details
- **OrderListScreen** - User's order history
- **ProductListScreen** - Admin product management
- **ProductEditScreen** - Admin product edit/create
- **UserListScreen** - Admin user management
- **UserEditScreen** - Admin user edit

## 🔌 API Integration

### API Calls

All API calls are made through Redux actions:

```javascript
// Example: Fetch products
import { listProducts } from "../actions/productActions";
dispatch(listProducts(keyword, pageNumber));
```

### Authentication

JWT tokens are stored in localStorage and sent with requests:

```javascript
// Token is automatically added via axios interceptor
const config = {
  headers: {
    Authorization: `Bearer ${userInfo.token}`,
  },
};
```

## 🎯 Key Features

### Shopping Cart

- Add/remove products
- Update quantities
- Persistent storage (localStorage)
- Calculate totals

### Product Search

- Real-time search
- Keyword filtering
- Pagination support

### User Authentication

- JWT-based authentication
- Protected routes
- Role-based access (Admin/User)

### Payment Integration

- PayPal integration
- Credit card support
- Order confirmation

## 🚀 Building for Production

1. **Create production build**

   ```bash
   npm run build
   ```

2. **Build output**

   - Files are in `build/` directory
   - Optimized and minified
   - Ready for static hosting

3. **Deploy**
   - Deploy `build/` folder to hosting service
   - Or use Vercel (configured in root `vercel.json`)

## 🔒 Security Considerations

- JWT tokens stored in localStorage
- Protected routes with authentication checks
- Admin routes require admin role
- API calls include authentication headers
- CORS handled by backend

## 📦 Dependencies

### Core

- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing
- `redux` - State management
- `react-redux` - React bindings for Redux
- `redux-thunk` - Async Redux actions

### UI

- `react-bootstrap` - Bootstrap components
- `bootstrap` - CSS framework

### HTTP & API

- `axios` - HTTP client

### Payment

- `@paypal/react-paypal-js` - PayPal integration

### Utilities

- `react-helmet-async` - SEO and meta tags

## 🐛 Troubleshooting

### Proxy not working

- Ensure backend is running on port 5001
- Check `package.json` proxy setting
- Verify CORS is configured on backend

### API calls failing

- Check `REACT_APP_API_URL` is set correctly
- Verify backend is accessible
- Check browser console for errors

### Build fails

- Clear `node_modules` and reinstall
- Check Node.js version (14.6+)
- Verify all dependencies are installed

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Documentation](https://redux.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

**Note:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
