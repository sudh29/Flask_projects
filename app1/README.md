# Flask Store API

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A RESTful API built with Flask for managing stores and their items. This application demonstrates basic CRUD operations, RESTful endpoint design, and Docker deployment.

---

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [API Endpoints](#-api-endpoints)
- [Running Locally](#-running-locally)
- [Docker Deployment](#-docker-deployment)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## ✨ Features

- **RESTful API Design** - Clean and intuitive REST endpoints with proper HTTP methods
- **Store Management** - Create, retrieve, and delete stores
- **Item Management** - Add and retrieve items for each store
- **Input Validation** - Comprehensive validation for all requests
- **Error Handling** - Consistent error responses with appropriate HTTP status codes
- **Duplicate Prevention** - Prevents duplicate stores and items
- **JSON Responses** - All responses in standardized JSON format
- **Docker Ready** - Multi-stage Docker build for production
- **Docker Compose** - Easy orchestration with docker-compose
- **Production Ready** - Gunicorn WSGI server for production deployment

---

## ⚡ Quick Start

Get the API running in under a minute:

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app1

# Install dependencies
pip install -r requirements.txt

# Run the application
python myapp.py
```

Visit: **http://127.0.0.1:5000/**

---

## 🔌 API Endpoints

### **Home**
```http
GET /
```
Returns API information and available endpoints.

**Response:**
```json
{
  "message": "Welcome to Flask Store API",
  "version": "1.0.0",
  "endpoints": {
    "stores": "/store",
    "create_store": "/store [POST]",
    "get_store": "/store/<name>",
    "store_items": "/store/<name>/item",
    "add_item": "/store/<name>/item [POST]"
  }
}
```

---

### **Get All Stores**
```http
GET /store
```
Returns a list of all stores with their items.

**Response (200 OK):**
```json
{
  "success": true,
  "stores": [
    {
      "name": "beautiful store",
      "items": [{"name": "flowers", "price": 100}]
    }
  ],
  "count": 2
}
```

---

### **Get Store by Name**
```http
GET /store/<name>
```
Returns a specific store by name.

**Response (200 OK):**
```json
{
  "success": true,
  "store": {
    "name": "beautiful store",
    "items": [{"name": "flowers", "price": 100}]
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Store 'xyz' not found"
}
```

---

### **Create Store**
```http
POST /store
```
Creates a new store. Store names must be unique.

**Request Body:**
```json
{
  "name": "my new store"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "store": {
    "name": "my new store",
    "items": []
  }
}
```

**Error Response (409 Conflict):**
```json
{
  "success": false,
  "error": "Store 'my new store' already exists"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Store name is required"
}
```

---

### **Delete Store**
```http
DELETE /store/<name>
```
Deletes a store by name.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Store 'my store' deleted successfully"
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Store 'xyz' not found"
}
```

---

### **Get Store Items**
```http
GET /store/<name>/item
```
Returns all items in a specific store.

**Response (200 OK):**
```json
{
  "success": true,
  "store": "beautiful store",
  "items": [
    {"name": "flowers", "price": 100}
  ],
  "count": 1
}
```

---

### **Add Item to Store**
```http
POST /store/<name>/item
```
Adds a new item to a specific store. Item names must be unique within a store, and price must be a positive number.

**Request Body:**
```json
{
  "name": "laptop",
  "price": 1500
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "item": {
    "name": "laptop",
    "price": 1500
  },
  "store": "beautiful store"
}
```

**Error Response (409 Conflict):**
```json
{
  "success": false,
  "error": "Item 'laptop' already exists in store 'beautiful store'"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Price must be a positive number"
}
```

---

## 💻 Running Locally

### Prerequisites
- Python 3.12+
- pip

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd app1
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   python myapp.py
   ```

4. **Access the Interactive Testing Page:**

   Open your browser and visit: **http://localhost:5000/**

   The landing page provides an interactive interface to test all API endpoints with:
   - ✅ Easy-to-use forms for each endpoint
   - ✅ Real-time response display with syntax highlighting
   - ✅ HTTP status codes and success/error indicators
   - ✅ No need for curl or Postman!

5. **Test the API via Command Line (Optional):**
   ```bash
   # Get all stores
   curl http://localhost:5000/store

   # Create a new store
   curl -X POST http://localhost:5000/store \
     -H "Content-Type: application/json" \
     -d '{"name": "tech store"}'

   # Add an item to a store
   curl -X POST http://localhost:5000/store/tech%20store/item \
     -H "Content-Type: application/json" \
     -d '{"name": "laptop", "price": 1500}'
   ```

---

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the image
docker build -t flask-store-api .

# Run the container
docker run -d -p 5000:5000 --name flask-store-api flask-store-api

# View logs
docker logs -f flask-store-api

# Stop and remove
docker stop flask-store-api
docker rm flask-store-api
```

### Using Docker Compose

```bash
# Start the service
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the service
docker-compose down
```

The API will be available at **http://localhost:5000/**

---

## 📂 Project Structure

```
app1/
├── myapp.py              # Main Flask application with API endpoints
├── index.html            # Interactive testing interface (landing page)
├── requirements.txt      # Python dependencies
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── .dockerignore        # Docker ignore patterns
└── README.md            # This file
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.12+ | Programming language |
| **Flask** | 3.1.2 | Web framework |
| **Gunicorn** | 23.0.0 | WSGI HTTP Server |

### Dependencies

- **Flask** (3.1.2) - Lightweight WSGI web application framework
- **Flask-CORS** (5.0.0) - Cross-Origin Resource Sharing support
- **Gunicorn** (23.0.0) - Production-grade WSGI server
- **Werkzeug** - WSGI utility library (Flask dependency)
- **Jinja2** - Template engine (Flask dependency)

---

## 📝 License

This project is licensed under the MIT License.

---

## 🎓 Learning Resources

### Flask Documentation
- [Official Flask Docs](https://flask.palletsprojects.com/)
- [Flask RESTful API Tutorial](https://flask.palletsprojects.com/en/latest/quickstart/)
- [Flask Best Practices](https://flask.palletsprojects.com/en/latest/patterns/)

### Docker Documentation
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Built with ❤️ using Flask**

*Last Updated: November 2024*
