# StackOverflow Unanswered Questions Viewer

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A Flask web application that displays the latest unanswered questions from StackOverflow using the StackExchange API. Features a beautiful, modern UI with real-time data fetching.

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

- **Real-time Data** - Fetches latest unanswered questions from StackOverflow
- **Beautiful UI** - Modern, responsive interface with gradient design
- **Interactive Cards** - Hover effects and smooth animations
- **API Endpoint** - JSON API for programmatic access
- **Error Handling** - Graceful error handling with user-friendly messages
- **Health Check** - Built-in health check endpoint for monitoring
- **Docker Ready** - Multi-stage Docker build for production
- **Docker Compose** - Easy orchestration with docker-compose
- **Production Ready** - Gunicorn WSGI server for production deployment

---

## ⚡ Quick Start

Get the application running in under a minute:

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app2

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

Visit: **http://127.0.0.1:5000/**

---

## 🔌 API Endpoints

### **Home Page**
```http
GET /
```
Displays a beautiful web interface showing unanswered StackOverflow questions with:
- Question titles
- Direct links to StackOverflow
- Total count of unanswered questions
- Refresh button to fetch latest data

---

### **API - Get Unanswered Questions**
```http
GET /api/questions
```
Returns unanswered questions as JSON data.

**Response (200 OK):**
```json
{
  "success": true,
  "count": 15,
  "questions": [
    {
      "title": "How to fix React useState hook?",
      "link": "https://stackoverflow.com/questions/...",
      "tags": ["javascript", "reactjs", "hooks"],
      "score": 0,
      "creation_date": 1699123456
    }
  ]
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Failed to fetch questions: Connection timeout"
}
```

---

### **Health Check**
```http
GET /health
```
Returns the health status of the application.

**Response (200 OK):**
```json
{
  "status": "healthy"
}
```

---

## 💻 Running Locally

### Prerequisites
- Python 3.12+
- pip
- Internet connection (to fetch StackOverflow data)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd app2
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   python app.py
   ```

4. **Access the Application:**

   Open your browser and visit: **http://localhost:5000/**

   The landing page displays:
   - ✅ Latest unanswered StackOverflow questions
   - ✅ Beautiful gradient UI with card design
   - ✅ Direct links to each question
   - ✅ Refresh button to get latest data
   - ✅ Responsive design for all devices

5. **Test the API via Command Line (Optional):**
   ```bash
   # Get unanswered questions as JSON
   curl http://localhost:5000/api/questions

   # Check application health
   curl http://localhost:5000/health
   ```

---

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the image
docker build -t flask-stackoverflow-app .

# Run the container
docker run -d -p 5000:5000 --name flask-stackoverflow-app flask-stackoverflow-app

# View logs
docker logs -f flask-stackoverflow-app

# Stop and remove
docker stop flask-stackoverflow-app
docker rm flask-stackoverflow-app
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

The application will be available at **http://localhost:5000/**

---

## 📂 Project Structure

```
app2/
├── app.py               # Main Flask application
├── requirements.txt     # Python dependencies
├── Dockerfile          # Multi-stage Docker build
├── docker-compose.yml  # Docker Compose configuration
├── .dockerignore       # Docker ignore patterns
└── README.md           # This file
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.12+ | Programming language |
| **Flask** | 3.1.2 | Web framework |
| **Requests** | 2.32.3 | HTTP library for API calls |
| **Gunicorn** | 23.0.0 | WSGI HTTP Server |

### Dependencies

- **Flask** (3.1.2) - Lightweight WSGI web application framework
- **Flask-CORS** (5.0.0) - Cross-Origin Resource Sharing support
- **Requests** (2.32.3) - HTTP library for making API calls to StackExchange
- **Gunicorn** (23.0.0) - Production-grade WSGI server
- **Werkzeug** - WSGI utility library (Flask dependency)
- **Jinja2** - Template engine (Flask dependency)

---

## 🌐 StackExchange API

This application uses the [StackExchange API v2.3](https://api.stackexchange.com/docs) to fetch questions:

- **Endpoint**: `https://api.stackexchange.com/2.3/questions`
- **Parameters**:
  - `order=desc` - Descending order
  - `sort=activity` - Sort by recent activity
  - `site=stackoverflow` - StackOverflow site
- **Filter**: Questions with `answer_count == 0`

No API key required for basic usage (subject to rate limits).

---

## 📝 License

This project is licensed under the MIT License.

---

## 🎓 Learning Resources

### Flask Documentation
- [Official Flask Docs](https://flask.palletsprojects.com/)
- [Flask Quickstart](https://flask.palletsprojects.com/en/latest/quickstart/)
- [Flask Best Practices](https://flask.palletsprojects.com/en/latest/patterns/)

### StackExchange API
- [API Documentation](https://api.stackexchange.com/docs)
- [Authentication](https://api.stackexchange.com/docs/authentication)
- [Rate Limiting](https://api.stackexchange.com/docs/throttle)

### Docker Documentation
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

## 🚀 Future Enhancements

- Add filtering by tags
- Implement pagination
- Add search functionality
- Cache API responses
- Add user authentication for personalized feeds
- Display question metadata (views, votes, etc.)

---

**Built with ❤️ using Flask and StackExchange API**

*Last Updated: November 2024*
