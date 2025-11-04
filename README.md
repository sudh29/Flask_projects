# Flask_projects


# 🐍 Flask Projects Repository

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red.svg)](https://www.sqlalchemy.org/)
[![UV](https://img.shields.io/badge/UV-Package%20Manager-blueviolet)](https://astral.sh/uv/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A comprehensive collection of Flask projects demonstrating various functionalities, from basic setup to advanced applications with Swagger documentation, authentication systems, and form handling. All projects use Python 3.12+ and modern development tools including [`uv`](https://astral.sh/uv/) for blazing-fast package management.

---

## 📑 Table of Contents

- [Projects Overview](#-projects-overview)
- [Quick Start](#-quick-start)
- [Environment Setup with UV](#️-environment-setup-with-uv)
- [Development Workflow](#️-development-workflow)
- [Repository Structure](#-repository-structure)
- [Tech Stack](#-tech-stack)
- [Docker Support](#-docker-support)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📁 Projects Overview

### 📌 [DemoApp: Basic Flask Application](demoapp/)

A basic Flask application demonstrating fundamental Flask concepts and routing.

**Key Features:**
- Basic Flask setup
- Route handling
- Template rendering
- Static files management

---

### 📌 [DemoApp2: Flask Application](demoapp2/)

Flask application with enhanced features and structure.

**Key Features:**
- Flask application structure
- Custom configurations
- Template integration

---

### 📌 [DemoApp3: Flask with Swagger Documentation](demoapp3/)

Flask application with comprehensive Swagger/OpenAPI documentation for API endpoints.

**Key Features:**
- Swagger UI integration
- API documentation
- RESTful endpoints
- Docker support

---

### 📌 [DemoApp4: Flask Application](demoapp4/)

Intermediate Flask application with additional functionality.

**Key Features:**
- Enhanced Flask features
- Application structure
- Docker deployment

---

### 📌 [DemoApp5: Flask with SQLAlchemy & Forms](demoapp5/)

Complete Flask application with database integration using SQLAlchemy and form handling.

**Key Features:**
- Flask-SQLAlchemy ORM
- WTForms integration
- CRUD operations
- Template rendering with Jinja2
- Docker support

---

### 📌 [DemoApp6: Flask Application](demoapp6/)

Advanced Flask application demonstrating best practices and patterns.

**Key Features:**
- Advanced Flask patterns
- Application architecture
- Docker deployment

---

## ⚡ Quick Start

Get started with any project in this repository in under 2 minutes:

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects

# Set up environment with UV
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install all dependencies
uv sync

# Navigate to any project
cd demoapp5  # or demoapp, demoapp2, etc.

# Run the Flask application
uv run python app.py
# Or for apps with different entry points:
uv run python myapp.py
```

Visit: **http://127.0.0.1:5000/**

---

## ⚙️ Environment Setup with UV

[`uv`](https://astral.sh/uv/) is an extremely fast Python package installer and resolver, written in Rust. It's 10-100x faster than pip!

### 📦 Installing UV

**Linux/macOS:**
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

**Option A: Using pyproject.toml (Recommended)**
```bash
# Sync dependencies from pyproject.toml
uv sync
```

**Option B: Using requirements.txt**
```bash
# Install from requirements.txt
uv pip install -r requirements.txt
```

#### 3. Add New Packages
```bash
# Add a package and update pyproject.toml
uv add <package-name>

# Example:
uv add django-debug-toolbar

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

---

## 🛠️ Development Workflow

### Creating a New Flask Application

```bash
# 1. Create project directory
mkdir myflaskapp
cd myflaskapp

# 2. Create a basic Flask app
cat > app.py << 'EOF'
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True)
EOF

# 3. Run the application
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
>>> from app import db
>>> db.create_all()
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
- **Black**: Code formatting
- **Flake8**: Linting
- **Ruff**: Fast Python linter
- **isort**: Import sorting

---

## 📂 Repository Structure

```
Flask_projects/
├── .venv/                      # Virtual environment (created by uv)
├── demoapp/                    # Basic Flask application
│   ├── app.py                  # Main application file
│   ├── templates/              # Jinja2 templates
│   └── static/                # Static files (CSS, JS, images)
├── demoapp2/                   # Flask application
│   └── myapp.py               # Application entry point
├── demoapp3/                   # Flask with Swagger
│   ├── myapp_swagger.py       # Main app with Swagger
│   ├── Swagger/               # Swagger documentation files
│   ├── Dockerfile             # Docker configuration
│   └── .dockerignore          # Docker ignore patterns
├── demoapp4/                   # Flask application
│   ├── app.py                 # Main application
│   └── Dockerfile             # Docker configuration
├── demoapp5/                   # Flask with SQLAlchemy & Forms
│   ├── app.py                 # Application setup
│   ├── routes.py              # Route definitions
│   ├── models.py              # Database models
│   ├── forms.py               # WTForms definitions
│   ├── templates/             # Jinja2 templates
│   ├── instance/              # Instance folder (database)
│   ├── Dockerfile             # Docker configuration
│   └── .dockerignore          # Docker ignore patterns
├── demoapp6/                   # Advanced Flask application
│   └── app.py                 # Main application
├── .gitignore                 # Git ignore patterns
├── .pre-commit-config.yaml    # Pre-commit hooks config
├── .python-version            # Python version (3.12)
├── pyproject.toml             # UV project configuration
├── requirements.txt           # All dependencies
├── uv.lock                    # UV lock file
└── README.md                  # This file
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------||
| **Python** | 3.12+ | Programming language |
| **Flask** | 3.1.2 | Web framework |
| **Flask-SQLAlchemy** | Latest | ORM for database |
| **UV** | Latest | Package manager |

### Key Dependencies

**Flask Extensions:**
- `flask` (3.1.2) - Core web framework
- `flask-sqlalchemy` - SQLAlchemy integration
- `flask-wtf` - WTForms integration
- `jinja2` (3.1.6) - Template engine
- `werkzeug` (3.1.3) - WSGI utilities

**Development Tools:**
- `black` (25.9.0) - Code formatter
- `ruff` (0.14.3) - Fast Python linter
- `pre-commit` (4.3.0) - Git hooks

**Utilities:**
- `blinker` (1.9.0) - Signal support
- `click` (8.3.0) - CLI creation
- `itsdangerous` (2.2.0) - Security helpers
- `markupsafe` (3.0.3) - String escaping

**Full dependency list:** See [`requirements.txt`](requirements.txt) or [`pyproject.toml`](pyproject.toml)

---

## 🐳 Docker Support

Most projects include Docker and Docker Compose configurations for easy deployment.

### Using Docker

```bash
# Navigate to a project
cd demoapp5

# Build the image
docker build -t flask-demoapp5 .

# Run the container
docker run -d -p 5000:5000 --name flask-demoapp5 flask-demoapp5

# View logs
docker logs -f flask-demoapp5

# Stop and remove
docker stop flask-demoapp5
docker rm flask-demoapp5
```

### Using Docker Compose

```bash
# Navigate to a project with docker-compose.yml
cd demoapp5

# Start services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Execute commands in container
docker-compose exec web python app.py

# Stop services
docker-compose down -v
```

**Projects with Docker Support:**
- ✅ DemoApp3 - Dockerfile
- ✅ DemoApp4 - Dockerfile
- ✅ DemoApp5 - Dockerfile

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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

### Tutorials & Guides
- Each project demonstrates different Flask features
- Check individual app files for implementation examples
- Pre-commit hooks ensure code quality automatically

---

## 📊 Project Statistics

- **Total Projects:** 6 demo applications
- **Python Version:** 3.12+
- **Flask Version:** 3.1.2
- **Total Dependencies:** 20+
- **Docker Support:** 3 projects (demoapp3, demoapp4, demoapp5)
- **Code Quality Tools:** Black, Ruff, pre-commit

---

## 🙏 Acknowledgments

- Pallets Projects for the amazing Flask framework
- Astral for creating UV - the blazing fast package manager
- All contributors and the open-source community

---

## 📞 Support

For questions or support:
- Open an issue on GitHub
- Check individual demo app files
- Review Flask documentation

---

**Built with ❤️ using Flask, SQLAlchemy, and UV**

*Last Updated: November 2024*
