# Flask Blog Application

[![Python](https://img.shields.io/badge/Python-3.12%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red.svg)](https://www.sqlalchemy.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern Flask blog application featuring a **Minimalist Dark Theme**, secure user authentication, and database persistence. This project demonstrates a production-ready structure with `Flask-SQLAlchemy`, `Flask-Login`, and `Flask-Bcrypt`.

## 🌟 Highlights

- 🎨 **Minimalist Dark Theme** - Beautiful glassmorphism design with smooth animations
- 🔐 **Secure Authentication** - Password hashing with Bcrypt and session management
- 💾 **Database Persistence** - SQLite with SQLAlchemy ORM
- 📝 **Blog Posts** - Create, read, and manage blog content
- 👤 **User Accounts** - Registration, login, and profile management
- 📱 **Responsive Design** - Works perfectly on all devices

---

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Routes](#-routes)
- [Database Models](#-database-models)
- [Running Locally](#-running-locally)
- [Testing](#-testing)
- [Docker Deployment](#-docker-deployment)
- [Configuration](#️-configuration)
- [Key Concepts](#-key-concepts)
- [Troubleshooting](#-troubleshooting)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## ✨ Features

- **Modern UI** - "Minimalist Dark" theme with Glassmorphism and smooth animations
- **User Authentication** - Secure registration and login with password hashing (Bcrypt)
- **Database Integration** - SQLite database with SQLAlchemy ORM
- **Session Management** - User session handling via Flask-Login
- **Form Validation** - Robust validation using WTForms
- **CSRF Protection** - Built-in protection against CSRF attacks
- **Password Security** - Bcrypt hashing with salt
- **Responsive Design** - Fully responsive layout for all devices
- **Flash Messages** - User feedback for actions
- **Profile Pictures** - User avatar support
- **Docker Ready** - Multi-stage Docker build for production

---

## ⚡ Quick Start

Get the application running in minutes:

### Option 1: Using pip

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app5

# Install dependencies
pip install -r requirements.txt

# Initialize database
python init_db.py

# (Optional) Seed with sample data
python seed_db.py

# Run application
python flaskblog.py
```

### Option 2: Using Docker

```bash
# Clone the repository
git clone <repository-url>
cd Flask_projects/app5

# Build and run with Docker Compose
docker-compose up -d --build

# View logs
docker-compose logs -f
```

Visit: **http://127.0.0.1:5000/**

---

## 🔌 Routes

### **Public Routes**

#### Home Page
```http
GET /
```
Displays all blog posts with author information.

**Features:**
- List of all blog posts
- Post titles and content
- Author names
- Post dates

---

#### About Page
```http
GET /about
```
About page with mission statement and information.

**Features:**
- Mission statement
- Application description
- Contact information

---

#### User Registration
```http
GET /register
POST /register
```
User registration form.

**Form Fields:**
- Username (required, 2-20 characters, unique)
- Email (required, valid email, unique)
- Password (required, minimum 6 characters)
- Confirm Password (required, must match password)

**Success:**
- Flash message: "Your account has been created! You are now able to log in"
- Redirects to login page

**Validation Errors:**
- Username already exists
- Email already exists
- Password too short
- Passwords don't match

**Usage:**
```bash
curl -X POST http://localhost:5000/register \
  -F "username=john" \
  -F "email=john@example.com" \
  -F "password=secret123" \
  -F "confirm_password=secret123"
```

---

#### User Login
```http
GET /login
POST /login
```
User login form.

**Form Fields:**
- Email (required)
- Password (required)
- Remember Me (optional checkbox)

**Success:**
- Flash message: "Login successful!"
- Redirects to home page or requested page

**Error:**
- Flash message: "Login unsuccessful. Please check email and password"

**Usage:**
```bash
curl -X POST http://localhost:5000/login \
  -F "email=john@example.com" \
  -F "password=secret123"
```

---

### **Protected Routes** (Login Required)

#### User Account
```http
GET /account
```
User account details and settings.

**Features:**
- Display username and email
- Profile picture
- Account information
- Edit profile (future feature)

**Authorization:**
- Requires login
- Redirects to login page if not authenticated

---

#### Logout
```http
GET /logout
```
Logs out the current user.

**Success:**
- Flash message: "You have been logged out"
- Redirects to home page
- Session cleared

---

## 🗄️ Database Models

### User Model

```python
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
```

**Fields:**
- `id`: Primary key (auto-increment)
- `username`: Unique username (2-20 characters)
- `email`: Unique email address
- `image_file`: Profile picture filename
- `password`: Bcrypt hashed password
- `posts`: Relationship to Post model

---

### Post Model

```python
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
```

**Fields:**
- `id`: Primary key (auto-increment)
- `title`: Post title (max 100 characters)
- `date_posted`: Creation timestamp
- `content`: Post content (text)
- `user_id`: Foreign key to User

**Relationships:**
- `author`: Back-reference to User model

---

## 💻 Running Locally

### Prerequisites
- Python 3.12+
- pip

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd app5
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

   **Core dependencies:**
   ```bash
   pip install flask flask-sqlalchemy flask-bcrypt flask-login flask-wtf email-validator
   ```

3. **Initialize database:**
   Run the initialization script to create `site.db`:
   ```bash
   python init_db.py
   ```

   This creates the database with User and Post tables.

4. **(Optional) Seed database:**
   Add sample data for testing:
   ```bash
   python seed_db.py
   ```

   This creates:
   - Sample users
   - Sample blog posts

5. **Run the application:**
   ```bash
   python flaskblog.py
   ```

6. **Access the application:**
   Open your browser and visit: **http://localhost:5000/**

7. **Create an account:**
   - Go to `/register`
   - Fill in the registration form
   - Login with your credentials

---

## 🧪 Testing

### Manual Testing

**Test User Registration:**
1. Navigate to http://localhost:5000/register
2. Fill in the form:
   - Username: testuser
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
3. Click "Sign Up"
4. Verify success message
5. Check database: `sqlite3 instance/site.db "SELECT * FROM user;"`

**Test User Login:**
1. Navigate to http://localhost:5000/login
2. Enter credentials:
   - Email: test@example.com
   - Password: password123
3. Click "Login"
4. Verify redirect to home page
5. Check that username appears in navbar

**Test Protected Routes:**
1. Logout if logged in
2. Try to access http://localhost:5000/account
3. Verify redirect to login page
4. Login and access account page
5. Verify account information displays

### Automated Testing

Create a test script (`test_blog.py`):

```python
import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:5000"

def test_home_page():
    """Test home page is accessible"""
    response = requests.get(f"{BASE_URL}/")
    assert response.status_code == 200
    assert "Blog" in response.text
    print("✅ Home page works!")

def test_about_page():
    """Test about page"""
    response = requests.get(f"{BASE_URL}/about")
    assert response.status_code == 200
    print("✅ About page works!")

def test_register_page():
    """Test registration page loads"""
    response = requests.get(f"{BASE_URL}/register")
    assert response.status_code == 200
    assert "Sign Up" in response.text
    print("✅ Register page works!")

def test_login_page():
    """Test login page loads"""
    response = requests.get(f"{BASE_URL}/login")
    assert response.status_code == 200
    assert "Log In" in response.text
    print("✅ Login page works!")

def test_account_requires_login():
    """Test account page requires authentication"""
    response = requests.get(f"{BASE_URL}/account", allow_redirects=False)
    assert response.status_code == 302  # Redirect
    print("✅ Account protection works!")

if __name__ == "__main__":
    test_home_page()
    test_about_page()
    test_register_page()
    test_login_page()
    test_account_requires_login()
    print("\n🎉 All tests passed!")
```

Run tests:
```bash
python test_blog.py
```

### Database Testing

```bash
# Check database exists
ls -l instance/site.db

# View users
sqlite3 instance/site.db "SELECT id, username, email FROM user;"

# View posts
sqlite3 instance/site.db "SELECT id, title, user_id FROM post;"

# Count records
sqlite3 instance/site.db "SELECT COUNT(*) FROM user;"
```

### Password Hashing Test

```python
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

# Hash a password
password = "test123"
hashed = bcrypt.generate_password_hash(password).decode('utf-8')
print(f"Hashed: {hashed}")

# Verify password
is_valid = bcrypt.check_password_hash(hashed, password)
print(f"Valid: {is_valid}")  # Should be True
```

---

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the image
docker build -t flask-blog .

# Run the container
docker run -d -p 5000:5000 --name flask-blog flask-blog

# View logs
docker logs -f flask-blog

# Stop and remove
docker stop flask-blog
docker rm flask-blog

# Rebuild and restart
docker stop flask-blog && docker rm flask-blog
docker build -t flask-blog .
docker run -d -p 5000:5000 --name flask-blog flask-blog
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
- ✅ Smaller final image size (~80MB)
- ✅ Faster deployments
- ✅ Better security (no build tools in production)
- ✅ Optimized for production

**Environment Variables:**
```bash
# Run with custom port
docker run -d -p 8080:5000 -e PORT=5000 --name flask-blog flask-blog

# Run with custom secret key
docker run -d -p 5000:5000 -e SECRET_KEY=your-secret-key --name flask-blog flask-blog
```

**Persistent Database:**
```bash
# Mount volume for database persistence
docker run -d -p 5000:5000 \
  -v $(pwd)/instance:/app/instance \
  --name flask-blog flask-blog
```

The application will be available at **http://localhost:5000/**

---

## ⚙️ Configuration

### Application Settings

**Default Configuration:**
- **Host:** 0.0.0.0 (all interfaces)
- **Port:** 5000
- **Debug Mode:** Enabled in development, disabled in production
- **Secret Key:** Random key (change in production)
- **Database:** SQLite (`instance/site.db`)

### Security Configuration

**Secret Key:**
```python
# In flaskblog.py
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')
```

**For production:**
```bash
# Generate a secure secret key
python -c "import secrets; print(secrets.token_hex(16))"

# Set as environment variable
export SECRET_KEY='your-generated-key'
```

**Password Requirements:**
- Minimum 6 characters
- Hashed with Bcrypt
- Salt rounds: 12 (default)

### Database Configuration

**SQLite (Default):**
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
```

**PostgreSQL (Production):**
```python
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL',
    'postgresql://user:password@localhost/blogdb')
```

### Production Deployment

For production deployment with Gunicorn:

```bash
# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn --workers 4 --bind 0.0.0.0:5000 flaskblog:app

# Or with custom configuration
gunicorn --workers 4 \
         --bind 0.0.0.0:5000 \
         --access-logfile - \
         --error-logfile - \
         --timeout 30 \
         flaskblog:app
```

**Recommended Gunicorn Settings:**
- **Workers:** 2-4 × CPU cores
- **Worker Class:** sync (default)
- **Timeout:** 30 seconds
- **Keep-alive:** 2 seconds

---

## 🎯 Key Concepts

### Flask-Login

Flask-Login provides user session management:

**Key Features:**
- `@login_required` decorator for protected routes
- `current_user` proxy for accessing logged-in user
- `login_user()` to log in a user
- `logout_user()` to log out a user
- `UserMixin` for required methods

**Example:**
```python
from flask_login import login_required, current_user

@app.route('/account')
@login_required
def account():
    return render_template('account.html', user=current_user)
```

### Flask-Bcrypt

Bcrypt provides secure password hashing:

**Hashing:**
```python
hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
```

**Verification:**
```python
if bcrypt.check_password_hash(user.password, form.password.data):
    login_user(user)
```

**Security:**
- Salted hashes (unique for each password)
- Slow hashing (resistant to brute force)
- Adaptive (can increase rounds over time)

### Flask-WTF

WTForms provides form handling and validation:

**Form Definition:**
```python
class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')
```

**CSRF Protection:**
- Automatic CSRF token generation
- Token validation on form submission
- Protection against CSRF attacks

### SQLAlchemy ORM

Object-Relational Mapping for database operations:

**CRUD Operations:**
```python
# Create
user = User(username='john', email='john@example.com', password=hashed_pw)
db.session.add(user)
db.session.commit()

# Read
user = User.query.filter_by(email='john@example.com').first()
all_users = User.query.all()

# Update
user.username = 'john_doe'
db.session.commit()

# Delete
db.session.delete(user)
db.session.commit()
```

### Relationships

**One-to-Many:**
```python
# User has many Posts
posts = db.relationship('Post', backref='author', lazy=True)

# Access posts for a user
user.posts  # Returns list of posts

# Access author for a post
post.author  # Returns User object
```

---

## 🔧 Troubleshooting

### Common Issues

**Database Not Found:**
```
Solution: Run init_db.py to create the database
```

**Example:**
```bash
python init_db.py
```

**"User already exists" Error:**
```
Solution: Username or email is already registered
- Try a different username
- Try a different email
- Check database: sqlite3 instance/site.db "SELECT * FROM user;"
```

**Login Fails with Correct Password:**
```
Solution: Check password hashing
- Ensure Bcrypt is installed
- Verify password was hashed during registration
- Check database password field length (should be 60 characters)
```

**CSRF Token Missing:**
```
Solution: Ensure form has {{ form.hidden_tag() }}
```

**Example:**
```html
<form method="POST">
    {{ form.hidden_tag() }}
    <!-- form fields -->
</form>
```

**Port Already in Use:**
```bash
# Find process using port 5000
lsof -i :5000  # On macOS/Linux
netstat -ano | findstr :5000  # On Windows

# Kill the process or use a different port
python flaskblog.py  # Modify port in flaskblog.py
```

**Docker Container Won't Start:**
```bash
# Check container logs
docker logs flask-blog

# Check if port is available
docker ps -a

# Remove old containers
docker rm -f flask-blog
```

**Static Files Not Loading:**
```
Solution: Check static folder structure
- Ensure static/main.css exists
- Clear browser cache
- Check Flask static_folder configuration
```

**Templates Not Found:**
```
Solution: Check templates folder structure
- Ensure templates/ directory exists
- Verify template names match route render_template() calls
```

### Debug Mode

To enable detailed error messages:

```python
# In flaskblog.py
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

**Note:** Never use debug mode in production!

### Database Issues

**Reset Database:**
```bash
# Delete database
rm instance/site.db

# Recreate
python init_db.py

# Reseed (optional)
python seed_db.py
```

**View Database:**
```bash
# Open SQLite shell
sqlite3 instance/site.db

# List tables
.tables

# View schema
.schema user
.schema post

# Query data
SELECT * FROM user;
SELECT * FROM post;

# Exit
.quit
```

---

## 📂 Project Structure

```
app5/
├── flaskblog.py            # Main application logic and routes
├── models.py               # Database models (User, Post)
├── forms.py                # WTForms definitions
├── init_db.py             # Database initialization script
├── seed_db.py             # Database seeding script
├── entrypoint.sh          # Docker entrypoint script
├── instance/               # Instance folder
│   └── site.db            # SQLite Database (created after init)
├── templates/              # Jinja2 templates
│   ├── layout.html         # Base template with Navbar/Footer
│   ├── home.html           # Home page with blog posts
│   ├── about.html          # About page
│   ├── register.html       # Registration form
│   ├── login.html          # Login form
│   └── account.html        # User account page
├── static/                 # Static assets
│   ├── main.css            # Minimalist Dark Theme CSS
│   └── profile_pics/       # User profile images
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
| **SQLAlchemy** | Latest | ORM for database |
| **SQLite** | Built-in | Database engine |
| **Gunicorn** | 23.0.0 | WSGI HTTP Server |

### Security & Authentication

| Technology | Purpose |
|------------|---------|
| **Flask-Bcrypt** | Password hashing |
| **Flask-Login** | Session management |
| **Flask-WTF** | CSRF protection & forms |
| **Email-Validator** | Email validation |

### Frontend

| Technology | Purpose |
|------------|---------|
| **Bootstrap 4** | Grid system & components |
| **Custom CSS** | Minimalist Dark Theme |
| **Inter Font** | Modern typography |
| **Glassmorphism** | Modern UI effects |

### Dependencies

- **Flask** (3.1.2) - Lightweight WSGI web application framework
- **Flask-SQLAlchemy** - SQLAlchemy integration for Flask
- **Flask-Bcrypt** - Bcrypt hashing utilities
- **Flask-Login** - User session management
- **Flask-WTF** - WTForms integration
- **Email-Validator** - Email validation
- **Gunicorn** (23.0.0) - Production-grade WSGI server

---

## 🚀 Future Enhancements

Potential improvements for this project:

### Blog Features
- [ ] Create new blog posts (CRUD operations)
- [ ] Edit and delete posts
- [ ] Post categories and tags
- [ ] Search functionality
- [ ] Post pagination
- [ ] Comments system
- [ ] Like/favorite posts
- [ ] Draft posts

### User Features
- [ ] Edit profile information
- [ ] Upload profile pictures
- [ ] User bio and description
- [ ] Follow/unfollow users
- [ ] User dashboard
- [ ] Email verification
- [ ] Password reset via email
- [ ] Two-factor authentication

### UI/UX Improvements
- [ ] Rich text editor for posts (Markdown, WYSIWYG)
- [ ] Image uploads for posts
- [ ] Syntax highlighting for code blocks
- [ ] Dark/light theme toggle
- [ ] Improved mobile navigation
- [ ] Loading animations
- [ ] Toast notifications

### Database & Performance
- [ ] Migrate to PostgreSQL for production
- [ ] Database migrations with Alembic
- [ ] Caching with Redis
- [ ] Full-text search
- [ ] Database indexing
- [ ] Query optimization

### Security Enhancements
- [ ] Rate limiting
- [ ] Account lockout after failed logins
- [ ] Password strength requirements
- [ ] Session timeout
- [ ] IP-based restrictions
- [ ] Security headers

### API & Integration
- [ ] RESTful API for blog operations
- [ ] API authentication (JWT)
- [ ] Social media login (OAuth)
- [ ] Share posts on social media
- [ ] RSS feed
- [ ] Webhooks

### Analytics & Monitoring
- [ ] View counts for posts
- [ ] User analytics dashboard
- [ ] Popular posts tracking
- [ ] Application monitoring
- [ ] Error tracking (Sentry)
- [ ] Performance metrics

---

## 📝 License

This project is licensed under the MIT License.

---

## 🎓 Learning Resources

### Flask Documentation
- [Official Flask Docs](https://flask.palletsprojects.com/)
- [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- [Flask Best Practices](https://flask.palletsprojects.com/en/latest/patterns/)

### Flask Extensions
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/)
- [Flask-Login](https://flask-login.readthedocs.io/)
- [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/)
- [Flask-WTF](https://flask-wtf.readthedocs.io/)

### SQLAlchemy
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [SQLAlchemy ORM Tutorial](https://docs.sqlalchemy.org/en/20/orm/tutorial.html)

### Security
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Password Hashing](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [CSRF Protection](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### Docker Documentation
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Built with ❤️ using Flask and SQLAlchemy**

*Last Updated: November 27, 2024*

---

## 📊 Quick Stats

- **Lines of Code:** ~500
- **Routes:** 6 (Home, About, Register, Login, Account, Logout)
- **Database Models:** 2 (User, Post)
- **Forms:** 2 (Registration, Login)
- **Templates:** 6 (Layout, Home, About, Register, Login, Account)
- **Docker Image Size:** ~80MB (multi-stage build)
- **Response Time:** <50ms
- **Supported Python:** 3.12+
- **Authentication:** Bcrypt + Flask-Login
