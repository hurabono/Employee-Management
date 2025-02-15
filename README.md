
# Employee Management System (COMP3133_101083889_Assignment1)

### Table of Contents
1. [Overview](#overview)  
2. [Technologies Used](#technologies-used)  
3. [Features](#features)  
4. [Installation & Setup](#installation--setup)  
6. [Environment Variables](#environment-variables)  
7. [Running the Server](#running-the-server)   
9. [Postman Testing](#postman-testing)  
11. [Author](#author)

---

## Overview

This project is an **Employee Management System** built for **COMP3133 - Full Stack Development II** at George Brown College. The backend is implemented using:
- **Node.js** (JavaScript runtime)
- **Express** (Web framework)
- **GraphQL** (API query language and runtime)
- **MongoDB** (NoSQL database)

The system allows for user account creation & login, as well as managing employee records (CRUD + search).

---

## Technologies Used
- **Node.js** v14+ (or higher)
- **Express** v4+
- **Apollo Server Express** v3+ (for GraphQL integration)
- **GraphQL** v16+
- **Mongoose** v6+ (for MongoDB)
- **bcrypt** (password hashing)
- **dotenv** (environment variables)
- **express-validator** (optionally for input validation)
- **Postman** or **GraphiQL** for testing

---

## Features
1. **User Account Management**  
   - **Signup** (create account)  
   - **Login** (access system)
2. **Employee Management**  
   - **Add** new employee  
   - **Get** all employees  
   - **Get** an employee by ID  
   - **Update** an employee by ID  
   - **Delete** an employee by ID  
   - **Search** employees by designation or department
3. **Validation & Error Handling**  
4. **Testing with Postman**  
5. **Version Control (GitHub)**

---



## Installation & Setup

1. **Clone** the repository:
   ```bash
   git clone https://github.com/<username>/COMP3133_101083889_Assignment1.git
   cd COMP3133_101083889_Assignment1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env`** in the project root (see [Environment Variables](#environment-variables)).

---

## Environment Variables

In the project root, create a file named **.env** containing:
```
MONGO_URI=mongodb://localhost:27017/comp3133_101083889_assignment1
JWT_SECRET=SomeSecretKey (if needed)
```
- **MONGO_URI** can be your local MongoDB connection or an Atlas URI.
- **JWT_SECRET** is optional if implementing JWT authentication.

Ensure that **.env** is listed in your **.gitignore** to keep credentials secure.

---

## Running the Server

1. In the project root, run:
   ```bash
   npm start
   ```
2. By default, the server listens on **localhost:4000**.  
   Access **GraphQL Playground** at:
   ```
   http://localhost:4000/graphql
   ```

If everything is set up correctly, you should see a log message like:
```
Server running on http://localhost:4000/graphql
MongoDB connected...
```


## Postman Testing

1. Open **Postman** and create a new request:
   - **Method**: `POST`
   - **URL**: `http://localhost:4000/graphql`
   - **Headers**: `Content-Type: application/json`
   - **Body (raw/JSON)**:  
     ```json
     {
       "query": "query { getAllEmployees { _id first_name last_name } }"
     }
     ```
2. Click **Send** and verify the response.
3. Repeat for all queries/mutations listed above, capturing **screenshots** for submission.

---


## Author
- **Name**: Heesu Cho  
- **Student ID**: 101083889  
- **Course**: COMP3133 - Full Stack Development II  
- **Professor**: Pretesh Patel

---

