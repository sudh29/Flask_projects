"""WTForms form definitions."""

from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length


class TaskForm(FlaskForm):
    """Form for adding or editing a task."""

    title = StringField(
        "Task Title",
        validators=[
            DataRequired(message="Title is required"),
            Length(
                min=1, max=100, message="Title must be between 1 and 100 characters"
            ),
        ],
        render_kw={"placeholder": "Enter task title..."},
    )
    submit = SubmitField("Save Task")


class DeleteTaskForm(FlaskForm):
    """Form for confirming task deletion."""

    submit = SubmitField("Delete Task")
