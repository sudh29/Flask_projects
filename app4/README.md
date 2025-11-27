# Flask API with Swagger Documentation

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-green.svg)](https://swagger.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A Flask application demonstrating API documentation with Swagger/OpenAPI. This project shows how to integrate Swagger UI with Flask using APISpec and Marshmallow for schema validation and automatic API documentation generation.

## 🌟 Highlights

- 📖 **Auto-Generated Documentation** - Swagger UI automatically generated from code
- 🔍 **Interactive API Explorer** - Test endpoints directly from the browser
- ✅ **Schema Validation** - Type-safe request/response with Marshmallow
- 📝 **OpenAPI 3.0.2** - Industry-standard API specification
- 🎨 **Beautiful UI** - Modern Swagger UI interface
- 🐳 **Production Ready** - Docker support with multi-stage builds

---

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [API Endpoints](#-api-endpoints)
- [Swagger Documentation](#-swagger-documentation)
- [Running Locally](#-running-locally)
- [Testing](#-testing)
- [Docker Deployment](#-docker-deployment)
- [Configuration](#️-configuration)
- [Key Concepts](#-key-concepts)
- [Schema Examples](#-schema-examples)
- [Troubleshooting](#-troubleshooting)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## ✨ Features

- **Swagger/OpenAPI Integration** - Automatic API documentation generation
- **Interactive API Docs** - Swagger UI for testing endpoints in browser
- **Marshmallow Schemas** - Request/response validation and serialization
- **APISpec Integration** - OpenAPI 3.0.2 specification support
- **Todo API Example** - Demonstrates CRUD operations with documentation
- **Schema Validation** - Type-safe request/response handling
- **Auto-Discovery** - Endpoints automatically appear in Swagger UI
- **Try It Out** - Test API calls directly from documentation
- **Docker Ready** - Multi-stage Docker build for production
- **Docker Compose** - Easy orchestration with docker-compose

---

## ⚡ Quick Start

Get the application running in under a minute:

### Option 1: Using UV (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app4

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
cd Flask_projects/app4

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

Visit:
- **API**: **http://127.0.0.1:5000/**
- **Swagger Docs**: **http://127.0.0.1:5000/docs**

---

## 🔌 API Endpoints

### **Home**
```http
GET /
```
Simple hello world endpoint.

**Response:**
```
Hello, World
```

**Usage:**
```bash
curl http://localhost:5000/
```

---

### **Get Todo List**
```http
GET /todo
```
Returns a list of todos with their status.

**Response (200 OK):**
```json
{
  "todo_list": [
    {
      "id": 1,
      "title": "Finish this task",
      "status": false
    },
    {
      "id": 2,
      "title": "Finish that task",
      "status": true
    }
  ]
}
```

**Schema:**
- `id` (integer): Unique identifier
- `title` (string): Todo description
- `status` (boolean): Completion status

**Usage:**
```bash
curl http://localhost:5000/todo
```

---

### **Swagger JSON Specification**
```http
GET /api/swagger.json
```
Returns the OpenAPI specification in JSON format.

**Response (200 OK):**
```json
{
  "openapi": "3.0.2",
  "info": {
    "title": "flask-api-swagger-doc",
    "version": "1.0.0"
  },
  "paths": {
    "/todo": {
      "get": {
        "description": "Get List of Todos",
        "responses": {
          "200": {
            "description": "Return a todo list",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TodoResponseSchema"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "TodoResponseSchema": {
        "type": "object",
        "properties": {
          "id": {"type": "integer"},
          "title": {"type": "string"},
          "status": {"type": "boolean"}
        }
      }
    }
  }
}
```

**Usage:**
```bash
curl http://localhost:5000/api/swagger.json
```

---

### **Swagger UI Documentation**
```http
GET /docs
```
Interactive Swagger UI for exploring and testing the API.

**Features:**
- 📋 Browse all available endpoints
- 📝 View request/response schemas
- 🧪 Test endpoints directly from the browser
- 📊 See example requests and responses
- 🔍 Search and filter endpoints
- 📥 Download OpenAPI spec

**Usage:**
Open in browser: **http://localhost:5000/docs**

---

## 📚 Swagger Documentation

### Accessing Swagger UI

1. **Start the application:**
   ```bash
   python app.py
   ```

2. **Open your browser:**
   Navigate to: **http://localhost:5000/docs**

3. **Explore the API:**
   - Click on endpoints to expand them
   - View request/response schemas
   - Click "Try it out" to test endpoints
   - Execute requests and see real responses
   - View example values

### Using Swagger UI

**Step 1: Select an Endpoint**
- Click on any endpoint (e.g., `GET /todo`)
- The endpoint details will expand

**Step 2: Try It Out**
- Click the "Try it out" button
- Fill in any required parameters
- Click "Execute"

**Step 3: View Response**
- See the actual response from the server
- View response headers
- Check response status code

### Adding New Endpoints

To add a new endpoint with Swagger documentation:

1. **Define a Marshmallow Schema:**
   ```python
   from marshmallow import Schema, fields

   class MyResponseSchema(Schema):
       id = fields.Int()
       name = fields.Str()
       created_at = fields.DateTime()
   ```

2. **Create the endpoint with docstring:**
   ```python
   @app.route("/myendpoint")
   def my_endpoint():
       """Get My Data
       ---
       get:
           description: Get my data
           responses:
               200:
                   description: Return my data
                   content:
                       application/json:
                           schema: MyResponseSchema
       """
       return MyResponseSchema().dump({
           "id": 1,
           "name": "Test",
           "created_at": datetime.now()
       })
   ```

3. **Register the path:**
   ```python
   with app.test_request_context():
       spec.path(view=my_endpoint)
   ```

4. **Refresh Swagger UI** - Your new endpoint will appear automatically!

---

## 💻 Running Locally

### Prerequisites
- Python 3.12+
- pip or uv

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd app4
   ```

2. **Install dependencies:**
   ```bash
   # Using UV (recommended)
   uv venv
   source .venv/bin/activate
   uv pip install -r requirements.txt

   # Or using pip
   pip install -r requirements.txt
   ```

   **Note:** Core dependencies include:
   ```bash
   pip install flask apispec apispec-webframeworks marshmallow flask-cors
   ```

3. **Run the application:**
   ```bash
   # Using UV
   uv run python app.py

   # Or using pip
   python app.py
   ```

4. **Access the Application:**
   - **API**: http://localhost:5000/
   - **Swagger UI**: http://localhost:5000/docs
   - **Swagger JSON**: http://localhost:5000/api/swagger.json

---

## 🧪 Testing

### Manual Testing via Swagger UI

1. **Open Swagger UI**: http://localhost:5000/docs
2. **Select an endpoint** (e.g., GET /todo)
3. **Click "Try it out"**
4. **Click "Execute"**
5. **View the response**

### Testing with curl

```bash
# Test home endpoint
curl http://localhost:5000/

# Test todo endpoint
curl http://localhost:5000/todo

# Get Swagger spec
curl http://localhost:5000/api/swagger.json

# Pretty print JSON
curl http://localhost:5000/todo | python -m json.tool
```

### Automated Testing

Create a test script (`test_api.py`):

```python
import requests
import json

BASE_URL = "http://localhost:5000"

def test_home():
    """Test home endpoint"""
    response = requests.get(f"{BASE_URL}/")
    assert response.status_code == 200
    assert response.text == "Hello, World"
    print("✅ Home endpoint works!")

def test_todo_list():
    """Test todo list endpoint"""
    response = requests.get(f"{BASE_URL}/todo")
    assert response.status_code == 200
    data = response.json()
    assert "todo_list" in data
    assert isinstance(data["todo_list"], list)
    print(f"✅ Todo endpoint works! Found {len(data['todo_list'])} todos")

def test_swagger_spec():
    """Test Swagger spec endpoint"""
    response = requests.get(f"{BASE_URL}/api/swagger.json")
    assert response.status_code == 200
    spec = response.json()
    assert "openapi" in spec
    assert spec["openapi"] == "3.0.2"
    assert "paths" in spec
    print("✅ Swagger spec is valid!")

def test_swagger_ui():
    """Test Swagger UI is accessible"""
    response = requests.get(f"{BASE_URL}/docs")
    assert response.status_code == 200
    assert "swagger" in response.text.lower()
    print("✅ Swagger UI is accessible!")

if __name__ == "__main__":
    test_home()
    test_todo_list()
    test_swagger_spec()
    test_swagger_ui()
    print("\n🎉 All tests passed!")
```

Run tests:
```bash
python test_api.py
```

### Schema Validation Testing

Test that schemas properly validate data:

```python
from marshmallow import ValidationError

# Test valid data
try:
    result = TodoResponseSchema().load({
        "id": 1,
        "title": "Test",
        "status": True
    })
    print("✅ Valid data accepted")
except ValidationError as e:
    print(f"❌ Validation failed: {e}")

# Test invalid data
try:
    result = TodoResponseSchema().load({
        "id": "not_an_int",  # Should be integer
        "title": "Test",
        "status": True
    })
except ValidationError as e:
    print(f"✅ Invalid data rejected: {e}")
```

---

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the image
docker build -t flask-swagger-api .

# Run the container
docker run -d -p 5000:5000 --name flask-swagger-api flask-swagger-api

# View logs
docker logs -f flask-swagger-api

# Stop and remove
docker stop flask-swagger-api
docker rm flask-swagger-api

# Rebuild and restart
docker stop flask-swagger-api && docker rm flask-swagger-api
docker build -t flask-swagger-api .
docker run -d -p 5000:5000 --name flask-swagger-api flask-swagger-api
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
- ✅ Smaller final image size (~60MB)
- ✅ Faster deployments
- ✅ Better security (no build tools in production)
- ✅ Optimized for production

**Environment Variables:**
```bash
# Run with custom port
docker run -d -p 8080:5000 -e PORT=5000 --name flask-swagger-api flask-swagger-api

# Run with custom workers
docker run -d -p 5000:5000 -e WORKERS=4 --name flask-swagger-api flask-swagger-api
```

The API will be available at **http://localhost:5000/**

---

## ⚙️ Configuration

### Application Settings

**Default Configuration:**
- **Host:** 0.0.0.0 (all interfaces)
- **Port:** 5000
- **Debug Mode:** Enabled in development, disabled in production
- **CORS:** Enabled for all origins
- **OpenAPI Version:** 3.0.2

### Swagger Configuration

**APISpec Settings:**
```python
spec = APISpec(
    title="flask-api-swagger-doc",
    version="1.0.0",
    openapi_version="3.0.2",
    plugins=[FlaskPlugin(), MarshmallowPlugin()],
)
```

**Customization Options:**
- **Title**: API name displayed in Swagger UI
- **Version**: API version number
- **Description**: API description (optional)
- **Terms of Service**: URL to terms (optional)
- **Contact**: Contact information (optional)
- **License**: License information (optional)

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
- **Worker Class:** sync (default)
- **Timeout:** 30 seconds
- **Keep-alive:** 2 seconds

---

## 🎯 Key Concepts

### APISpec

APISpec is a library that generates OpenAPI specifications from your Flask routes and docstrings.

**How it works:**
1. You write Flask routes with docstrings
2. APISpec parses the docstrings
3. Generates OpenAPI spec automatically
4. Swagger UI renders the spec

**Benefits:**
- ✅ Documentation stays in sync with code
- ✅ No separate documentation files
- ✅ Type-safe with schemas
- ✅ Interactive testing built-in

### Marshmallow Schemas

Marshmallow provides a simple way to:
- **Validate** request data
- **Serialize** response data
- **Define** data structures
- **Generate** OpenAPI schemas automatically

**Example Schema:**
```python
class TodoResponseSchema(Schema):
    id = fields.Int(required=True, description="Unique identifier")
    title = fields.Str(required=True, description="Todo description")
    status = fields.Bool(required=True, description="Completion status")
```

**Usage:**
```python
# Serialize (Python object → JSON)
schema = TodoResponseSchema()
result = schema.dump(todo_object)

# Deserialize (JSON → Python object)
todo = schema.load(request.json)
```

### OpenAPI 3.0.2

The OpenAPI Specification (formerly Swagger) is a standard for describing REST APIs.

**Key Components:**
- **Paths**: API endpoints
- **Operations**: HTTP methods (GET, POST, etc.)
- **Parameters**: Query params, path params, headers
- **Request Bodies**: POST/PUT data
- **Responses**: Response schemas and status codes
- **Components**: Reusable schemas, parameters, responses

**Benefits:**
- ✅ Industry standard
- ✅ Language agnostic
- ✅ Tool ecosystem (code generators, validators)
- ✅ Client SDK generation

### Swagger UI

Swagger UI is a web-based interface for exploring and testing APIs.

**Features:**
- **Interactive**: Test endpoints in browser
- **Visual**: See schemas and examples
- **Searchable**: Find endpoints quickly
- **Exportable**: Download spec file

---

## 📋 Schema Examples

### Basic Schema

```python
from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Email(required=True)
    created_at = fields.DateTime(dump_only=True)
```

### Nested Schema

```python
class AddressSchema(Schema):
    street = fields.Str()
    city = fields.Str()
    zipcode = fields.Str()

class UserWithAddressSchema(Schema):
    id = fields.Int()
    username = fields.Str()
    address = fields.Nested(AddressSchema)
```

### List Schema

```python
class TodoListSchema(Schema):
    todos = fields.List(fields.Nested(TodoResponseSchema))
    count = fields.Int()
```

### Validation Schema

```python
from marshmallow import validates, ValidationError

class CreateTodoSchema(Schema):
    title = fields.Str(required=True)
    status = fields.Bool(missing=False)

    @validates('title')
    def validate_title(self, value):
        if len(value) < 3:
            raise ValidationError("Title must be at least 3 characters")
```

### Response Schema with Status

```python
class ApiResponseSchema(Schema):
    success = fields.Bool()
    message = fields.Str()
    data = fields.Dict()
```

---

## 🔧 Troubleshooting

### Common Issues

**Swagger UI Not Loading:**
```
Solution: Check that Swagger static files are in the correct location
- Ensure Swagger/ directory exists
- Verify static files are present
- Check browser console for errors
```

**Schema Not Appearing in Swagger:**
```
Solution: Ensure schema is registered with APISpec
```

**Example:**
```python
# Register schema
spec.components.schema("TodoResponse", schema=TodoResponseSchema)

# Reference in docstring
"""
responses:
    200:
        content:
            application/json:
                schema: TodoResponseSchema
"""
```

**Endpoint Not Showing in Swagger:**
```
Solution: Ensure endpoint is registered with spec.path()
```

**Example:**
```python
with app.test_request_context():
    spec.path(view=my_endpoint)
```

**Marshmallow Validation Errors:**
```python
# Handle validation errors
from marshmallow import ValidationError

try:
    result = schema.load(data)
except ValidationError as err:
    return {"errors": err.messages}, 400
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
docker logs flask-swagger-api

# Check if port is available
docker ps -a

# Remove old containers
docker rm -f flask-swagger-api
```

**CORS Issues:**
```python
# Ensure CORS is enabled
from flask_cors import CORS
CORS(app)
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
logger.info(f"Generating Swagger spec")
logger.debug(f"Registered endpoints: {spec.to_dict()['paths']}")
```

---

## 📂 Project Structure

```
app4/
├── app.py                  # Main Flask application with Swagger
├── Swagger/                # Swagger UI files
│   ├── template/           # Swagger UI templates
│   │   └── index.html      # Swagger UI HTML
│   └── static/             # Swagger UI static files (JS, CSS)
│       ├── swagger-ui.css
│       ├── swagger-ui-bundle.js
│       └── swagger-ui-standalone-preset.js
├── templates/              # Flask templates
│   └── index.html          # Main page template
├── static/                 # Static files
│   ├── css/
│   └── js/
├── requirements.txt        # Python dependencies
├── Dockerfile             # Multi-stage Docker build
├── docker-compose.yml     # Docker Compose configuration
├── .dockerignore          # Docker ignore patterns
└── README.md              # This file
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.12+ | Programming language |
| **Flask** | 3.1.2 | Web framework |
| **APISpec** | Latest | OpenAPI specification generation |
| **Marshmallow** | Latest | Schema validation and serialization |
| **Swagger UI** | Latest | Interactive API documentation |
| **Gunicorn** | 23.0.0 | WSGI HTTP Server |

### Dependencies

- **Flask** (3.1.2) - Lightweight WSGI web application framework
- **Flask-CORS** (5.0.0) - Cross-Origin Resource Sharing support
- **apispec** - OpenAPI specification generator
- **apispec-webframeworks** - Flask plugin for APISpec
- **marshmallow** - Schema validation and serialization
- **Gunicorn** (23.0.0) - Production-grade WSGI server
- **Werkzeug** - WSGI utility library (Flask dependency)
- **Jinja2** - Template engine (Flask dependency)

---

## 🚀 Future Enhancements

Potential improvements for this project:

### API Features
- [ ] Add POST/PUT/DELETE endpoints for todos
- [ ] Implement authentication (JWT, OAuth)
- [ ] Add pagination support
- [ ] Implement filtering and sorting
- [ ] Add rate limiting
- [ ] Version the API (v1, v2)

### Documentation Improvements
- [ ] Add request/response examples
- [ ] Include error response schemas
- [ ] Add authentication documentation
- [ ] Create API usage guides
- [ ] Add code samples in multiple languages

### Schema Enhancements
- [ ] Add more complex nested schemas
- [ ] Implement custom validators
- [ ] Add schema inheritance
- [ ] Create reusable schema components

### Swagger UI Customization
- [ ] Custom branding and styling
- [ ] Add API key authentication UI
- [ ] Custom header/footer
- [ ] Dark mode support
- [ ] Export to Postman collection

### Testing & Quality
- [ ] Add unit tests for all endpoints
- [ ] Integration tests
- [ ] Schema validation tests
- [ ] API contract testing
- [ ] Performance testing

### Database Integration
- [ ] Connect to PostgreSQL/MySQL
- [ ] Add SQLAlchemy models
- [ ] Implement migrations
- [ ] Add database seeding

### Monitoring & Analytics
- [ ] API usage analytics
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] Request logging

---

## 📝 License

This project is licensed under the MIT License.

---

## 🎓 Learning Resources

### Flask Documentation
- [Official Flask Docs](https://flask.palletsprojects.com/)
- [Flask Best Practices](https://flask.palletsprojects.com/en/latest/patterns/)
- [Flask RESTful APIs](https://flask.palletsprojects.com/en/latest/tutorial/)

### Swagger/OpenAPI
- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [APISpec Documentation](https://apispec.readthedocs.io/)
- [OpenAPI Tutorial](https://swagger.io/docs/specification/about/)

### Marshmallow
- [Marshmallow Documentation](https://marshmallow.readthedocs.io/)
- [Schema Validation](https://marshmallow.readthedocs.io/en/stable/quickstart.html)
- [Marshmallow with Flask](https://marshmallow.readthedocs.io/en/stable/examples.html)

### API Design
- [REST API Best Practices](https://restfulapi.net/)
- [API Design Patterns](https://www.apiopscycles.com/)
- [HTTP Status Codes](https://httpstatuses.com/)

### Docker Documentation
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Built with ❤️ using Flask and Swagger**

*Last Updated: November 27, 2024*

---

## 📊 Quick Stats

- **Lines of Code:** ~200
- **API Endpoints:** 3 (Home, Todo, Swagger)
- **Schemas:** 1 (TodoResponseSchema)
- **OpenAPI Version:** 3.0.2
- **Docker Image Size:** ~60MB (multi-stage build)
- **Response Time:** <10ms
- **Supported Python:** 3.12+
- **Documentation:** Auto-generated with Swagger UI
