# 🐍 Flask Projects Repository

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red.svg)](https://www.sqlalchemy.org/)
[![UV](https://img.shields.io/badge/UV-Package%20Manager-blueviolet)](https://astral.sh/uv/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A comprehensive collection of **6 production-ready Flask projects** demonstrating various functionalities, from basic REST APIs to advanced applications with Swagger documentation, database integration, authentication, and form handling. All projects use Python 3.12+ and modern development tools including [`uv`](https://astral.sh/uv/) for blazing-fast package management.

## 🌟 Repository Highlights

- 📚 **6 Complete Flask Applications** - From basic APIs to full-stack web apps
- ⚡ **Modern Tooling** - Uses `uv` for 10-100x faster package management
- 🐳 **Docker Ready** - All projects include Docker and Docker Compose configurations
- 🚀 **Production Ready** - Includes best practices, error handling, and validation
- 📖 **World-Class Documentation** - Each project has comprehensive README (30KB+ each)
- ✅ **Code Quality** - Pre-commit hooks with Black, Ruff, and Flake8
- 📈 **Learning Path** - Projects progress from basic to advanced concepts
- 🔧 **Self-Contained** - Each project is independent and can be run standalone
- 🧪 **Testing Included** - Manual and automated testing guides
- 🔐 **Security Best Practices** - CSRF protection, password hashing, input validation

---

## 📑 Table of Contents

- [Repository Highlights](#-repository-highlights)
- [Projects Overview](#-projects-overview)
- [Quick Start](#-quick-start)
- [Environment Setup with UV](#️-environment-setup-with-uv)
- [Docker Deployment](#-docker-deployment)
- [Development Workflow](#️-development-workflow)
- [Repository Structure](#-repository-structure)
- [Tech Stack](#-tech-stack)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [Learning Resources](#-learning-resources)
- [Project Statistics](#-project-statistics)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 📁 Projects Overview

### 📌 [App1: Flask Store API](app1/)

**A RESTful API for managing stores and their items with an interactive testing interface.**

A production-ready REST API demonstrating comprehensive CRUD operations, RESTful endpoint design, input validation, and error handling. Features an interactive web UI for testing all endpoints without needing Postman or curl.

**Key Features:**
- ✅ RESTful API design with proper HTTP methods (GET, POST, DELETE)
- 🏪 Store and item management with duplicate prevention
- ✔️ Input validation and comprehensive error handling
- 🎨 Interactive testing interface (beautiful web UI)
- 🔄 CORS enabled for cross-origin requests
- 📝 JSON responses with consistent format
- 🐳 Docker and Docker Compose support
- 🧪 Complete test suite included

**Tech Stack:** Flask, Flask-CORS, Gunicorn
**Complexity:** ⭐ Beginner
**Lines of Code:** ~200
**Documentation:** 15.2 KB

**[📖 Read Full Documentation](app1/README.md)**

---

### 📌 [App2: StackOverflow Questions Viewer](app2/)

**Real-time unanswered questions from StackOverflow with a beautiful modern UI.**

A Flask web application that fetches and displays the latest unanswered questions from StackOverflow using the StackExchange API. Features a stunning gradient UI with glassmorphism effects and smooth animations.

**Key Features:**
- 🔄 Real-time data fetching from StackExchange API
- 🎨 Beautiful, modern UI with gradient design and glassmorphism
- 🃏 Interactive cards with hover effects and animations
- 📊 JSON API endpoint for programmatic access
- ❤️ Health check endpoint for monitoring
- 📱 Fully responsive design
- 🐳 Docker support with multi-stage builds
- ⚙️ Configurable API rate limits

**Tech Stack:** Flask, Requests, Flask-CORS, Gunicorn
**Complexity:** ⭐⭐ Beginner-Intermediate
**Lines of Code:** ~150
**Documentation:** 17.5 KB

**[📖 Read Full Documentation](app2/README.md)**

---

### 📌 [App3: Restaurant Menu API](app3/)

**Time-based menu filtering with CSV processing and cookie-based state management.**

A Flask API that determines available menu items based on time, date, and day exclusions. Processes CSV files containing menu items with complex availability rules including midnight-spanning time ranges.

**Key Features:**
- ⏰ Smart time-based filtering (supports midnight spanning)
- 📊 CSV file processing with validation
- 📅 Date and day exclusion rules
- 🍪 Cookie-based timestamp management
- 🔄 Multiple time ranges per item
- 🎯 Flexible availability rules
- 🐳 Docker support
- 🧪 Comprehensive testing scenarios

**Tech Stack:** Flask, CSV (built-in), Flask-CORS, Gunicorn
**Complexity:** ⭐⭐ Intermediate
**Lines of Code:** ~400
**Documentation:** 21 KB

**[📖 Read Full Documentation](app3/README.md)**

---

### 📌 [App4: Flask API with Swagger Documentation](app4/)

**Auto-generated API documentation with Swagger UI and OpenAPI 3.0.2 specification.**

A Flask application demonstrating comprehensive API documentation using Swagger/OpenAPI. Features interactive API explorer, schema validation with Marshmallow, and automatic documentation generation from code.

**Key Features:**
- 📖 Auto-generated Swagger UI documentation
- 🔍 Interactive API explorer (test in browser)
- ✅ Schema validation with Marshmallow
- 📝 OpenAPI 3.0.2 specification
- 🎨 Beautiful Swagger UI interface
- 🔄 Auto-discovery of endpoints
- 🧪 "Try it out" feature for testing
- 🐳 Production-ready Docker setup

**Tech Stack:** Flask, APISpec, Marshmallow, Swagger UI, Gunicorn
**Complexity:** ⭐⭐⭐ Intermediate-Advanced
**Lines of Code:** ~200
**Documentation:** 25 KB

**[📖 Read Full Documentation](app4/README.md)**

---

### 📌 [App5: Flask Blog Application](app5/)

**Complete blog with user authentication, password hashing, and session management.**

A modern Flask blog application featuring secure user authentication, blog post management, and a minimalist dark theme with glassmorphism. Demonstrates production-ready authentication patterns with Bcrypt and Flask-Login.

**Key Features:**
- 🔐 Secure user authentication (Bcrypt password hashing)
- 👤 User registration and login system
- 📝 Blog post management (CRUD operations)
- 🎨 Minimalist Dark Theme with glassmorphism
- 📝 WTForms integration with CSRF protection
- 💾 SQLAlchemy ORM with SQLite
- 🖼️ Profile picture support
- 🐳 Docker support with database persistence

**Tech Stack:** Flask, Flask-SQLAlchemy, Flask-Bcrypt, Flask-Login, Flask-WTF, Gunicorn
**Complexity:** ⭐⭐⭐ Advanced
**Lines of Code:** ~500
**Documentation:** 28 KB

**[📖 Read Full Documentation](app5/README.md)**

---

### 📌 [App6: Flask Task Manager with SQLAlchemy](app6/)

**Full CRUD operations with SQLAlchemy ORM and thread-safe database initialization.**

An advanced Flask application demonstrating complete CRUD operations with SQLAlchemy ORM. Features thread-safe database initialization using file locking to prevent race conditions with multiple Gunicorn workers.

**Key Features:**
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- 🗄️ SQLAlchemy ORM with SQLite
- 🔒 Thread-safe database initialization (file locking)
- 📝 WTForms validation and CSRF protection
- 🎨 Template rendering with Jinja2
- 💬 Flash messages for user feedback
- 📅 Automatic date tracking
- 🐳 Production-ready Docker with Gunicorn multi-worker support

**Tech Stack:** Flask, Flask-SQLAlchemy, Flask-WTF, WTForms, Gunicorn
**Complexity:** ⭐⭐⭐⭐ Advanced
**Lines of Code:** ~500
**Documentation:** 30 KB

**[📖 Read Full Documentation](app6/README.md)**

---

## ⚡ Quick Start

Get started with any project in this repository in under 2 minutes:

### Option 1: Using UV (Recommended - 10-100x Faster!)

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects

# Set up environment with UV
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Navigate to any project
cd app1  # or app2, app3, app4, app5, app6

# Install dependencies (blazing fast!)
uv pip install -r requirements.txt

# Run the application
uv run python app.py  # Entry point varies by project
```

### Option 2: Using Docker (Zero Setup!)

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects

# Navigate to any project
cd app1  # or app2, app3, app4, app5, app6

# Build and run with Docker Compose
docker-compose up -d --build

# View logs
docker-compose logs -f
```

### Option 3: Traditional pip

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects

# Navigate to any project
cd app1  # or app2, app3, app4, app5, app6

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

### Project Entry Points

Each project has a different entry point:

| Project | Entry Point | Default Port |
|---------|-------------|--------------|
| **App1** | `python app.py` | 5000 |
| **App2** | `python app.py` | 5000 |
| **App3** | `python app.py` | 5000 |
| **App4** | `python app.py` | 5000 |
| **App5** | `python flaskblog.py` | 5000 |
| **App6** | `python app.py` | 5000 |

Visit: **http://127.0.0.1:5000/** (or check individual project READMEs for specific endpoints)

---

## ⚙️ Environment Setup with UV

[`uv`](https://astral.sh/uv/) is an extremely fast Python package installer and resolver, written in Rust. It's **10-100x faster than pip**!

### 📦 Installing UV

**Linux/macOS/WSL:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Windows (PowerShell):**
```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**Using pip:**
```bash
pip install uv
```

### 🚀 Setting Up the Environment

#### 1. Create Virtual Environment
```bash
# Create a new virtual environment
uv venv

# Activate the environment
# Linux/macOS/WSL:
source .venv/bin/activate

# Windows PowerShell:
.venv\Scripts\Activate.ps1

# Windows CMD:
.venv\Scripts\activate.bat
```

#### 2. Install Dependencies

**For Individual Projects:**
```bash
# Navigate to project
cd app1  # or any other app

# Install from requirements.txt (10-100x faster!)
uv pip install -r requirements.txt
```

**For All Projects (Root Level):**
```bash
# Sync dependencies from pyproject.toml
uv sync

# Or install from requirements.txt
uv pip install -r requirements.txt
```

#### 3. Add New Packages
```bash
# Add a package (updates pyproject.toml)
uv add <package-name>

# Example:
uv add flask-migrate

# Add a dev dependency
uv add --dev pytest
```

#### 4. Update Dependencies
```bash
# Update all packages
uv sync --upgrade

# Freeze current state to requirements.txt
uv pip freeze > requirements.txt
```

### 🎯 Why UV?

- ⚡ **10-100x faster** than pip
- 🦀 **Written in Rust** for maximum performance
- 🔒 **Deterministic** dependency resolution
- 📦 **Compatible** with pip and requirements.txt
- 🚀 **Modern** Python package management

---

## 🐳 Docker Deployment

All 6 projects include production-ready Docker configurations with multi-stage builds.

### Quick Docker Commands

```bash
# Navigate to any project
cd app1  # or app2, app3, app4, app5, app6

# Build the image
docker build -t flask-app1 .

# Run the container
docker run -d -p 5000:5000 --name flask-app1 flask-app1

# View logs
docker logs -f flask-app1

# Stop and remove
docker stop flask-app1 && docker rm flask-app1
```

### Using Docker Compose (Recommended)

```bash
# Navigate to any project
cd app1  # or app2, app3, app4, app5, app6

# Start services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Restart with rebuild
docker-compose down && docker-compose up -d --build
```

### Docker Features

**All Projects Include:**
- ✅ Multi-stage builds (smaller images ~50-80MB)
- ✅ Gunicorn WSGI server for production
- ✅ Environment variable support
- ✅ Health checks
- ✅ Optimized layer caching
- ✅ Security best practices

**Example Docker Compose:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
      - SECRET_KEY=your-secret-key
    restart: unless-stopped
```

---

## 🛠️ Development Workflow

### Creating a New Flask Application

```bash
# 1. Create project directory
mkdir myflaskapp
cd myflaskapp

# 2. Initialize with UV
uv init
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# 3. Add Flask dependency
uv add flask

# 4. Create a basic Flask app
cat > app.py << 'EOF'
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
EOF

# 5. Run the application
uv run python app.py
```

### Essential Flask Commands

```bash
# Run development server
uv run python app.py

# Run on specific host and port
uv run flask run --host=0.0.0.0 --port=8080

# Run with debug mode
uv run flask run --debug

# Access Flask shell
uv run flask shell

# Initialize database (if using Flask-SQLAlchemy)
uv run python
>>> from app import app, db
>>> with app.app_context():
...     db.create_all()
>>> exit()

# Run tests
uv run pytest
```

### Code Quality & Pre-commit Hooks

This repository uses pre-commit hooks for code quality:

```bash
# Install pre-commit hooks
pre-commit install

# Run on all files
pre-commit run --all-files

# Run specific hook
pre-commit run black --all-files
pre-commit run flake8 --all-files
pre-commit run ruff --all-files
```

**Configured Tools:**
- **Black** (25.9.0): Code formatting
- **Flake8**: Linting
- **Ruff** (0.14.3): Fast Python linter
- **isort**: Import sorting

---

## 📂 Repository Structure

```
Flask_projects/
├── .venv/                      # Virtual environment (created by uv)
├── app1/                       # Flask Store API
│   ├── app.py                 # Main Flask application
│   ├── index.html             # Interactive testing interface
│   ├── test_api.py            # API tests
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (15.2 KB)
├── app2/                       # StackOverflow Questions Viewer
│   ├── app.py                 # Main application
│   ├── templates/             # Jinja2 templates
│   │   └── index.html         # Beautiful gradient UI
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (17.5 KB)
├── app3/                       # Restaurant Menu API
│   ├── app.py                 # Main application
│   ├── restaurant_menu.csv    # Sample menu data
│   ├── templates/             # Jinja2 templates
│   ├── static/                # Static files
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (21 KB)
├── app4/                       # Flask with Swagger
│   ├── app.py                 # Main app with Swagger
│   ├── Swagger/               # Swagger UI files
│   │   ├── template/          # Swagger templates
│   │   └── static/            # Swagger static files
│   ├── templates/             # Flask templates
│   ├── static/                # Static files
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (25 KB)
├── app5/                       # Flask Blog Application
│   ├── flaskblog.py           # Main application
│   ├── models.py              # Database models
│   ├── forms.py               # WTForms definitions
│   ├── init_db.py             # Database initialization
│   ├── seed_db.py             # Database seeding
│   ├── templates/             # Jinja2 templates
│   │   ├── layout.html        # Base template
│   │   ├── home.html          # Home page
│   │   ├── register.html      # Registration form
│   │   ├── login.html         # Login form
│   │   └── account.html       # User account
│   ├── static/                # Static files (CSS)
│   │   └── main.css           # Minimalist dark theme
│   ├── instance/              # Instance folder (database)
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (28 KB)
├── app6/                       # Flask Task Manager
│   ├── app.py                 # Application setup (factory pattern)
│   ├── routes.py              # Route definitions
│   ├── models.py              # Database models
│   ├── forms.py               # WTForms definitions
│   ├── config.py              # Configuration
│   ├── extensions.py          # Flask extensions
│   ├── templates/             # Jinja2 templates
│   │   ├── base.html          # Base template
│   │   ├── index.html         # Task list
│   │   ├── add.html           # Add task
│   │   ├── edit.html          # Edit task
│   │   └── delete.html        # Delete confirmation
│   ├── static/                # Static files
│   ├── instance/              # Instance folder (database)
│   ├── requirements.txt       # Project dependencies
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── docker-compose.yml     # Docker Compose config
│   └── README.md              # Comprehensive documentation (30 KB)
├── .gitignore                 # Git ignore patterns
├── .pre-commit-config.yaml    # Pre-commit hooks config
├── .python-version            # Python version (3.12)
├── pyproject.toml             # UV project configuration
├── requirements.txt           # Root dependencies
├── uv.lock                    # UV lock file
├── flask_cheatsheet.pdf       # Flask reference guide
└── README.md                  # This file
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.12+ | Programming language |
| **Flask** | 3.1.2 | Web framework |
| **Flask-SQLAlchemy** | Latest | ORM for database |
| **Flask-WTF** | Latest | Form handling |
| **Flask-Login** | Latest | Session management |
| **Flask-Bcrypt** | Latest | Password hashing |
| **UV** | Latest | Package manager (10-100x faster) |
| **Docker** | Latest | Containerization |
| **Gunicorn** | 23.0.0 | WSGI HTTP Server |

### Key Dependencies

**Flask Extensions:**
- `flask` (3.1.2) - Core web framework
- `flask-sqlalchemy` - SQLAlchemy integration
- `flask-wtf` - WTForms integration
- `flask-login` - User session management
- `flask-bcrypt` - Password hashing
- `flask-cors` (5.0.0) - CORS support
- `jinja2` (3.1.6) - Template engine
- `werkzeug` (3.1.3) - WSGI utilities

**API & Documentation:**
- `apispec` - OpenAPI specification
- `marshmallow` - Schema validation
- `requests` (2.32.3) - HTTP library

**Development Tools:**
- `black` (25.9.0) - Code formatter
- `ruff` (0.14.3) - Fast Python linter
- `pre-commit` (4.3.0) - Git hooks
- `gunicorn` (23.0.0) - Production server

**Full dependency list:** See [`requirements.txt`](requirements.txt) or [`pyproject.toml`](pyproject.toml)

---

## 🧪 Testing

Each project includes comprehensive testing documentation:

### Manual Testing
- Step-by-step testing guides
- Browser-based testing
- API endpoint testing with curl

### Automated Testing
- Python test scripts included
- Example test suites
- Integration testing examples

### Testing Tools
```bash
# Run tests for a specific project
cd app1
uv run python test_api.py

# Or use pytest (if installed)
uv run pytest

# Test with coverage
uv run pytest --cov=app
```

---

## 🔧 Troubleshooting

### Common Issues

**UV Not Found:**
```bash
# Install UV
curl -LsSf https://astral.sh/uv/install.sh | sh

# Or use pip
pip install uv
```

**Port Already in Use:**
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process or use different port
```

**Docker Issues:**
```bash
# Remove all containers and rebuild
docker-compose down -v
docker-compose up -d --build

# Check logs
docker-compose logs -f
```

**Database Issues (App5, App6):**
```bash
# Reset database
rm instance/site.db  # or instance/data.db
python init_db.py  # or let app auto-create
```

### Getting Help

1. Check individual project README files
2. Review error messages in logs
3. Consult Flask documentation
4. Open an issue on GitHub

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Flask_projects.git
   cd Flask_projects
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Set up development environment**
   ```bash
   uv venv
   source .venv/bin/activate
   uv sync
   pre-commit install
   ```

5. **Make your changes**
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

6. **Run quality checks**
   ```bash
   pre-commit run --all-files
   uv run pytest  # if tests are available
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

8. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

9. **Open a Pull Request**

### Code Style Guidelines

- Follow PEP 8 standards
- Use Black for code formatting
- Run Flake8 and Ruff for linting
- Write meaningful commit messages
- Add docstrings to functions and classes
- Keep functions small and focused

### Reporting Issues

Found a bug or have a suggestion? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, Python version, etc.)

---

## 🎓 Learning Resources

### Flask Documentation
- [Official Flask Docs](https://flask.palletsprojects.com/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/)
- [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- [Flask Best Practices](https://flask.palletsprojects.com/en/latest/patterns/)

### UV Documentation
- [UV Official Docs](https://docs.astral.sh/uv/)
- [UV GitHub Repository](https://github.com/astral-sh/uv)
- [UV vs pip Comparison](https://astral.sh/blog/uv)

### Docker Documentation
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

### Project-Specific Learning
Each project demonstrates different Flask features:
- **App1**: RESTful APIs, CRUD operations
- **App2**: External API integration, modern UI
- **App3**: File processing, time-based logic
- **App4**: API documentation, Swagger/OpenAPI
- **App5**: Authentication, user management
- **App6**: Database ORM, thread-safe initialization

---

## 📊 Project Statistics

### Repository Overview
- **Total Projects:** 6 Flask applications
- **Total Documentation:** 137+ KB (4,500+ lines)
- **Total Code:** ~2,500 lines across all projects
- **Python Version:** 3.12+
- **Flask Version:** 3.1.2
- **Total Dependencies:** 20+
- **Docker Support:** All 6 projects
- **Code Quality Tools:** Black, Ruff, pre-commit
- **Package Manager:** UV (10-100x faster than pip)

### Individual Project Stats

| Project | LOC | Docs | Routes | Models | Complexity |
|---------|-----|------|--------|--------|------------|
| **App1** | ~200 | 15.2 KB | 6 | 0 | ⭐ |
| **App2** | ~150 | 17.5 KB | 3 | 0 | ⭐⭐ |
| **App3** | ~400 | 21 KB | 2 | 0 | ⭐⭐ |
| **App4** | ~200 | 25 KB | 3 | 1 | ⭐⭐⭐ |
| **App5** | ~500 | 28 KB | 6 | 2 | ⭐⭐⭐ |
| **App6** | ~500 | 30 KB | 5 | 1 | ⭐⭐⭐⭐ |

### Technology Coverage

- ✅ RESTful APIs (App1, App4)
- ✅ External API Integration (App2)
- ✅ File Processing (App3)
- ✅ API Documentation (App4)
- ✅ User Authentication (App5)
- ✅ Database ORM (App5, App6)
- ✅ Form Handling (App5, App6)
- ✅ Template Rendering (All apps)
- ✅ Docker Deployment (All apps)

---

## 🙏 Acknowledgments

- **Pallets Projects** for the amazing Flask framework
- **Astral** for creating UV - the blazing fast package manager
- **Docker** for containerization technology
- **All contributors** and the open-source community

---

## 📞 Support

For questions or support:
- 📖 Check individual project READMEs (app1-app6)
- 🐛 Open an issue on GitHub
- 📚 Review Flask documentation
- 💬 Join Flask community forums

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Flask, SQLAlchemy, and UV**

*Last Updated: November 27, 2024*

---

## 🚀 Next Steps

1. **Choose a project** based on what you want to learn
2. **Read the project's README** for detailed documentation
3. **Set up your environment** with UV or Docker
4. **Run the application** and explore the code
5. **Modify and experiment** to learn by doing
6. **Build your own** Flask application using these as templates

**Happy Coding! 🎉**
