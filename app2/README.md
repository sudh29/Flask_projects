# StackOverflow Unanswered Questions Viewer

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A Flask web application that displays the latest unanswered questions from StackOverflow using the StackExchange API. Features a beautiful, modern UI with real-time data fetching.

## 🌟 Highlights

- 🎨 **Beautiful Modern UI** - Gradient design with smooth animations and hover effects
- 🔄 **Real-time Data** - Live fetching from StackOverflow API
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🚀 **Fast & Lightweight** - Optimized performance with minimal dependencies
- 🐳 **Production Ready** - Docker support with multi-stage builds
- 🔍 **Easy to Use** - No configuration needed, just run and go

---

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [API Endpoints](#-api-endpoints)
- [Running Locally](#-running-locally)
- [Testing](#-testing)
- [Docker Deployment](#-docker-deployment)
- [Configuration](#️-configuration)
- [Key Concepts](#-key-concepts)
- [Troubleshooting](#-troubleshooting)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [StackExchange API](#-stackexchange-api)
- [Future Enhancements](#-future-enhancements)
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

### Option 1: Using UV (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app2

# Create virtual environment with UV
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
uv pip install -r requirements.txt

# Run the application
uv run python app.py
```

### Option 2: Using pip

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

## 🧪 Testing

### Manual Testing

**Web Interface Testing:**
1. Start the application
2. Open **http://localhost:5000/** in your browser
3. Verify the UI displays unanswered questions
4. Click the "Refresh" button to fetch new data
5. Click on question links to verify they open on StackOverflow

**API Testing with curl:**
```bash
# Test the questions API
curl http://localhost:5000/api/questions

# Test health check
curl http://localhost:5000/health

# Pretty print JSON response
curl http://localhost:5000/api/questions | python -m json.tool
```

### Automated Testing

Create a simple test script (`test_app.py`):

```python
import requests

def test_home_page():
    response = requests.get('http://localhost:5000/')
    assert response.status_code == 200
    print("✅ Home page works!")

def test_api_questions():
    response = requests.get('http://localhost:5000/api/questions')
    assert response.status_code == 200
    data = response.json()
    assert 'success' in data
    assert 'questions' in data
    print("✅ API endpoint works!")

def test_health_check():
    response = requests.get('http://localhost:5000/health')
    assert response.status_code == 200
    assert response.json()['status'] == 'healthy'
    print("✅ Health check works!")

if __name__ == '__main__':
    test_home_page()
    test_api_questions()
    test_health_check()
    print("\n🎉 All tests passed!")
```

Run tests:
```bash
python test_app.py
```

### Performance Testing

Test API response time:
```bash
# Using curl with timing
curl -w "@-" -o /dev/null -s http://localhost:5000/api/questions <<'EOF'
    time_namelookup:  %{time_namelookup}\n
       time_connect:  %{time_connect}\n
    time_appconnect:  %{time_appconnect}\n
      time_redirect:  %{time_redirect}\n
 time_starttransfer:  %{time_starttransfer}\n
                    ----------\n
         time_total:  %{time_total}\n
EOF
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

# Rebuild and restart
docker stop flask-stackoverflow-app && docker rm flask-stackoverflow-app
docker build -t flask-stackoverflow-app .
docker run -d -p 5000:5000 --name flask-stackoverflow-app flask-stackoverflow-app
```

### Using Docker Compose

```bash
# Start the service
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the service
docker-compose down

# Restart with rebuild
docker-compose down && docker-compose up -d --build

# View container status
docker-compose ps
```

### Docker Configuration

**Multi-stage Build Benefits:**
- ✅ Smaller final image size (~50MB)
- ✅ Faster deployments
- ✅ Better security (no build tools in production)
- ✅ Optimized for production

**Environment Variables:**
```bash
# Run with custom port
docker run -d -p 8080:5000 -e PORT=5000 --name flask-stackoverflow-app flask-stackoverflow-app

# Run with custom workers
docker run -d -p 5000:5000 -e WORKERS=4 --name flask-stackoverflow-app flask-stackoverflow-app
```

**Docker Health Check:**
```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' flask-stackoverflow-app
```

The application will be available at **http://localhost:5000/**

---

## ⚙️ Configuration

### Application Settings

**Default Configuration:**
- **Host:** 0.0.0.0 (all interfaces)
- **Port:** 5000
- **Debug Mode:** Enabled in development, disabled in production
- **CORS:** Enabled for all origins
- **API Endpoint:** StackExchange API v2.3

### StackExchange API Configuration

**Rate Limits:**
- **Without API Key:** 300 requests per day per IP
- **With API Key:** 10,000 requests per day

**To use an API key (optional):**
```python
# In app.py, modify the API URL:
params = {
    'order': 'desc',
    'sort': 'activity',
    'site': 'stackoverflow',
    'key': 'YOUR_API_KEY_HERE'  # Add this line
}
```

Get your API key: [StackApps Registration](https://stackapps.com/apps/oauth/register)

### Production Deployment

For production deployment with Gunicorn:

```bash
# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn --workers 4 --bind 0.0.0.0:5000 app:app

# Or with custom configuration
gunicorn --workers 4 \
         --bind 0.0.0.0:5000 \
         --access-logfile - \
         --error-logfile - \
         --timeout 30 \
         app:app
```

**Recommended Gunicorn Settings:**
- **Workers:** 2-4 × CPU cores
- **Worker Class:** sync (default) or gevent for async
- **Timeout:** 30 seconds (for API calls)
- **Keep-alive:** 2 seconds

### Caching (Optional Enhancement)

To reduce API calls, implement caching:

```python
from flask_caching import Cache

cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/api/questions')
@cache.cached(timeout=300)  # Cache for 5 minutes
def get_questions():
    # ... existing code
```

---

## 🎯 Key Concepts

### API Integration

This application demonstrates:

1. **External API Consumption** - Fetching data from StackExchange API
2. **Error Handling** - Graceful handling of API failures
3. **JSON Processing** - Parsing and transforming API responses
4. **Template Rendering** - Displaying API data in HTML

### StackExchange API Flow

```
User Request → Flask App → StackExchange API → Process Response → Display UI
```

**API Request Parameters:**
- `order=desc` - Get newest questions first
- `sort=activity` - Sort by recent activity
- `site=stackoverflow` - Target StackOverflow specifically
- Filter: Only questions with `answer_count == 0`

### Data Structure

**API Response Format:**
```json
{
  "items": [
    {
      "title": "Question title",
      "link": "https://stackoverflow.com/questions/...",
      "tags": ["python", "flask"],
      "score": 0,
      "answer_count": 0,
      "creation_date": 1699123456
    }
  ],
  "has_more": true,
  "quota_remaining": 299
}
```

### UI Design Principles

- **Card-based Layout** - Each question in a separate card
- **Gradient Background** - Modern purple-to-blue gradient
- **Hover Effects** - Interactive feedback on user actions
- **Responsive Grid** - Adapts to different screen sizes
- **Loading States** - User feedback during API calls

---

## 🔧 Troubleshooting

### Common Issues

**API Rate Limit Exceeded:**
```
Error: "quota_remaining": 0
```

**Solution:**
- Wait 24 hours for quota reset
- Register for an API key (10,000 requests/day)
- Implement caching to reduce API calls

**Connection Timeout:**
```bash
# Increase timeout in requests
response = requests.get(url, timeout=10)  # 10 seconds
```

**Port Already in Use:**
```bash
# Find process using port 5000
lsof -i :5000  # On macOS/Linux
netstat -ano | findstr :5000  # On Windows

# Kill the process or use a different port
python app.py  # Modify port in app.py
```

**Docker Container Won't Start:**
```bash
# Check container logs
docker logs flask-stackoverflow-app

# Check if port is available
docker ps -a

# Remove old containers
docker rm -f flask-stackoverflow-app
```

**No Questions Displayed:**
1. Check internet connection
2. Verify StackExchange API is accessible:
   ```bash
   curl "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
   ```
3. Check browser console for JavaScript errors
4. Verify API response in `/api/questions` endpoint

**CORS Issues:**
The application has CORS enabled by default. If you still face issues:
```python
# In app.py, CORS is configured as:
CORS(app)  # Allows all origins
```

### Debug Mode

To enable detailed error messages:

```python
# In app.py, set debug=True
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
```

**Note:** Never use debug mode in production!

### Logging

Add logging for better debugging:

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# In your routes:
logger.info(f"Fetching questions from StackExchange API")
logger.error(f"API request failed: {str(e)}")
```

---

## 📂 Project Structure

```
app2/
├── app.py               # Main Flask application
├── templates/           # Jinja2 templates
│   └── index.html       # Main template with StackOverflow UI
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

Potential improvements for this project:

### UI/UX Improvements
- [ ] Add filtering by tags (Python, JavaScript, etc.)
- [ ] Implement pagination for browsing more questions
- [ ] Add search functionality for specific topics
- [ ] Dark/Light theme toggle
- [ ] Question preview on hover
- [ ] Sorting options (newest, most viewed, etc.)

### Performance Optimization
- [ ] Cache API responses (5-10 minutes)
- [ ] Implement lazy loading for images
- [ ] Add service worker for offline support
- [ ] Optimize bundle size

### Features
- [ ] Display question metadata (views, votes, bounty)
- [ ] Show user avatars and reputation
- [ ] Add "Watch" feature for specific tags
- [ ] Email notifications for new questions
- [ ] Integration with other Stack Exchange sites (ServerFault, SuperUser)

### API Enhancements
- [ ] Register for API key (10,000 requests/day)
- [ ] Implement rate limit handling
- [ ] Add retry logic for failed requests
- [ ] WebSocket support for real-time updates

### Analytics & Monitoring
- [ ] Track most viewed questions
- [ ] Monitor API quota usage
- [ ] Add application metrics (response time, error rate)
- [ ] User analytics dashboard

---

**Built with ❤️ using Flask and StackExchange API**

*Last Updated: November 27, 2024*

---

## 📊 Quick Stats

- **Lines of Code:** ~150
- **API Endpoints:** 3 (Home, API, Health)
- **External APIs:** StackExchange API v2.3
- **Docker Image Size:** ~50MB (multi-stage build)
- **Response Time:** <500ms (depends on StackExchange API)
- **Supported Python:** 3.12+
- **Rate Limit:** 300 requests/day (without API key)
