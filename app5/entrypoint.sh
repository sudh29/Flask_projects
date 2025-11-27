#!/bin/sh
# Initialize the database
python init_db.py

# Execute the passed command (e.g., gunicorn)
exec "$@"
