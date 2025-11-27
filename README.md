# Restaurant API

A RESTful API for managing restaurant operations including menu items, customers, orders, and user authentication.

## Features

- **Authentication**: User signup and login with JWT tokens
- **Menu Management**: Create, read, update, and delete menu items
- **Customer Management**: Manage customer information
- **Order Management**: Handle customer orders
- **In-Memory Storage**: Data stored in memory (resets on server restart)
- **Input Validation**: Request validation using express-validator
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: HTTP request logging with custom middleware

## Technologies

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **express-validator** - Request validation
- **dotenv** - Environment variables
- **ES6 Modules** - Modern JavaScript syntax

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dofiie/restaurant-api.git
cd restaurant-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1h
```

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Root
- `GET /` - Welcome message

### Authentication
- `POST /auth/signup` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /auth/login` - Login and receive JWT token
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Menu
- `GET /menu` - Get all menu items
- `POST /menu/add` - Add a new menu item
  ```json
  {
    "name": "Burger",
    "price": 9.99
  }
  ```
- `PUT /menu/:id` - Update a menu item
- `DELETE /menu/:id` - Delete a menu item

### Customers
- `GET /customers` - Get all customers
- `POST /customers/add` - Add a new customer
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "555-0001"
  }
  ```
- `PUT /customers/:id` - Update customer information
- `DELETE /customers/:id` - Delete a customer

### Orders
- `GET /orders` - Get all orders
- `POST /orders/add` - Create a new order
  ```json
  {
    "customerId": 1,
    "items": [{"name": "Burger", "qty": 1}],
    "totalAmount": 9.99,
    "status": "pending"
  }
  ```
- `PUT /orders/:id` - Update an order
- `DELETE /orders/:id` - Delete an order

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-token-here>
```

To protect a route, import the auth middleware:
```javascript
import auth from './middleware/auth.js';
router.get('/protected', auth, controller);
```

## Project Structure

```
restaurant-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── customerController.js
│   │   ├── menuController.js
│   │   └── orderController.js
│   ├── database/
│   │   └── memory.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── 404handler.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── customerRoute.js
│   │   ├── menuRoute.js
│   │   └── orderRoute.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Error Handling

The API uses centralized error handling with appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Data Storage

Currently using in-memory storage via `database/memory.js`. Data includes:
- **users** - User credentials (with hashed passwords)
- **customers** - Customer information
- **menu** - Menu items
- **orders** - Customer orders

**Note**: All data resets when the server restarts. For persistent storage, consider integrating a database like MongoDB or PostgreSQL.

## Development

```bash
# Install dependencies
npm install

# Run in development mode (with auto-reload)
npm run dev

# Run in production mode
npm start
```

## Testing with Postman

1. Import the API into Postman
2. Create a new user via `/auth/signup`
3. Login via `/auth/login` to get a token
4. Use the token in Authorization header for protected routes
5. Test CRUD operations on menu, customers, and orders

## License

ISC

## Author

Restaurant API Team
