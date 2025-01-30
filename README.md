# Vishal Railway Booking System

This is a railway booking system built with Node.js, Express, and MySQL. It allows users to register, login, book train seats, and view bookings. Admins can add new trains to the system.

## Features

- User registration and login
- JWT-based authentication
- Train booking with race condition handling
- Admin routes for adding trains
- Middleware for user and admin authentication

## Prerequisites

- Node.js
- MySQL

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vishal-railway-booking.git
cd vishal-railway-booking
```

2. Install Dependencies
```
npm install
```
3. Set yp the database:
CREATE DATABASE railway_db;
USE railway_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE trains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    total_seats INT NOT NULL,
    available_seats INT NOT NULL
);

CREATE TABLE bookings (
    booking_id VARCHAR(36) PRIMARY KEY,
    user_id INT,
    train_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (train_id) REFERENCES trains(id)
);

4. Create a .env file in the root directory and add the following environment variables:
   
PORT=6000
DB_HOST=localhost
DB_USER=root
DB_PASS="asdf@#7367"
DB_NAME=railway_db
JWT_SECRET=your_jwt_secret
ADMIN_API_KEY=your_admin_api_key

5. Start the server:
```
npm Start
```
## API Endpoints
Auth Routes:
POST /auth/register - Register a new user
POST /auth/login - Login a user
Train Routes
POST /trains - Add a new train (Admin only)
GET /trains - Fetch trains
Booking Routes
POST /bookings - Book a seat (Authenticated users only)
GET /bookings/:id - Get booking details (Authenticated users only)
Middleware
authMiddleware.js - Authenticates users using JWT
adminMiddleware.js - Authenticates admins using an API key

