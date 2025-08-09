# 🍕 Food Delivery App

A full-stack food delivery application built with React, Node.js, Express, and MongoDB. This application allows users to browse food items, add them to cart, place orders, and includes an admin panel for managing the restaurant.

## 🌐 Live Demo

- **Frontend (Customer App)**: [https://food-del-frontend-kamc.onrender.com/](https://food-del-frontend-kamc.onrender.com/)


## 🚀 Features

### Customer Features
- 🏠 **Home Page** with featured food items
- 🔍 **Browse Menu** by categories
- 🛒 **Shopping Cart** functionality
- 👤 **User Authentication** (Login/Register)
- 📱 **Responsive Design** for mobile and desktop
- 💳 **Order Placement** with delivery details
- 📋 **Order History** and tracking
- ✅ **Order Verification** system

### Admin Features
- ➕ **Add New Food Items** with image upload
- 📝 **Manage Food List** (view, edit, delete)
- 📦 **Order Management** and status updates
- 📊 **Dashboard** with order overview

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **React Router Dom 7.6.3** - Client-side routing
- **Axios 1.11.0** - HTTP client
- **Vite 7.0.3** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Bcrypt** - Password hashing

### Deployment
- **Render** - Cloud hosting platform
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
food-del/
├── frontend/          # Customer-facing React app
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context for state management
│   │   ├── assets/        # Static images and icons
│   │   └── ...
│   └── package.json
├── backend/           # Node.js API server
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded food images
│   └── server.js        # Main server file
├── admin/             # Admin panel React app
│   ├── src/
│   │   ├── components/   # Admin UI components
│   │   ├── pages/        # Admin pages
│   │   └── ...
│   └── package.json
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/swapnil12348/food-del.git
cd food-del
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

Start the backend server:
```bash
npm start
```
Backend will run on `http://localhost:4000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```
Admin panel will run on `http://localhost:5174`

## 🚀 Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `cd backend && npm install`
4. Set the start command: `cd backend && npm start`
5. Add environment variables in Render dashboard

### Frontend Deployment (Render)
1. Create a new Static Site on Render
2. Set the build command: `cd frontend && npm install && npm run build`
3. Set the publish directory: `frontend/dist`

### Admin Panel Deployment
1. Follow the same steps as frontend deployment
2. Use `admin` folder instead of `frontend`

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Items
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify order payment
- `POST /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🎨 Key Components

### Frontend Components
- **Navbar** - Navigation with cart and user menu
- **Header** - Hero section with call-to-action
- **ExploreMenu** - Category-based menu navigation
- **FoodDisplay** - Grid of food items
- **FoodItem** - Individual food item card
- **LoginPopup** - Authentication modal
- **Footer** - App download links and contact info

### Backend Models
- **User** - User authentication and profile
- **Food** - Food item information
- **Order** - Order details and status

## 🔐 Authentication Flow

1. User registers/logs in through the frontend
2. JWT token is generated and stored in localStorage
3. Token is sent with API requests in headers
4. Backend middleware verifies token for protected routes

## 🛒 Order Flow

1. User browses food items and adds to cart
2. User proceeds to checkout and fills delivery details
3. Order is placed and stored in database
4. Order verification system confirms the order
5. Admin can view and update order status

## 🐛 Known Issues & Solutions

### CORS Issues
If you encounter CORS errors, ensure your backend `server.js` has proper CORS configuration:
```javascript
app.use(cors({
  origin: ['https://your-frontend-url.com', 'http://localhost:5173'],
  credentials: true
}))
```

### Image Upload Issues on Render
Render has ephemeral file systems. Consider using cloud storage services like:
- Cloudinary
- AWS S3
- Firebase Storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Swapnil**
- GitHub: [@swapnil12348](https://github.com/swapnil12348)

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB for flexible database solutions
- Render for easy deployment platform
- All contributors who helped improve this project

---

⭐ If you found this project helpful, please give it a star on GitHub!
