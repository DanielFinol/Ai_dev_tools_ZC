# Django TODO Application

This README provides instructions for setting up a Django TODO application that allows users to create, edit, delete TODOs, assign due dates, and mark TODOs as resolved.

## Project Structure

The project is structured as follows:

```
django-todo
├── manage.py
├── todo_project
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── todos
│   ├── migrations
│   │   └── __init__.py
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── forms.py
│   ├── views.py
│   ├── urls.py
│   ├── tests.py
│   ├── templates
│   │   └── todos
│   │       ├── todo_list.html
│   │       ├── todo_form.html
│   │       └── todo_confirm_delete.html
│   └── static
│       └── todos
│           └── styles.css
├── requirements.txt
├── .env.example
└── README.md
```

## Instructions to Create the Django TODO Application

1. **Set Up the Django Project**:
   - Install Django if you haven't already:
     ```
     pip install django
     ```
   - Create a new Django project:
     ```
     django-admin startproject todo_project
     ```
   - Navigate into the project directory:
     ```
     cd todo_project
     ```

2. **Create the TODO App**:
   - Create a new app within the project:
     ```
     python manage.py startapp todos
     ```

3. **Define Models**:
   - In `todos/models.py`, define the TODO model with fields for title, description, due date, and resolved status.

4. **Create Forms**:
   - In `todos/forms.py`, create forms for creating and editing TODO items.

5. **Define Views**:
   - In `todos/views.py`, implement views for listing, creating, editing, and deleting TODOs.

6. **Set Up URLs**:
   - In `todos/urls.py`, define URL patterns for the TODO app.
   - Include the todos app URLs in the main `todo_project/urls.py`:
     ```python
     from django.urls import path, include

     urlpatterns = [
         path('todos/', include('todos.urls')),
     ]
     ```

7. **Register Models in Admin**:
   - In `todos/admin.py`, register the TODO model to make it accessible in the Django admin interface.

8. **Create Templates**:
   - Create the necessary HTML templates in `todos/templates/todos/`.

9. **Static Files**:
   - Add any CSS styles in `todos/static/todos/styles.css`.

10. **Run Migrations**:
    - Create and apply migrations:
      ```
      python manage.py makemigrations
      python manage.py migrate
      ```

11. **Run the Development Server**:
    - Start the server:
      ```
      python manage.py runserver
      ```

12. **Access the Application**:
    - Open your browser and go to `http://127.0.0.1:8000/todos/` to access the TODO application.

## Including the App in the Project

- In `todo_project/settings.py`, add `'todos'` to the `INSTALLED_APPS` list:
  ```python
  INSTALLED_APPS = [
      ...
      'todos',
  ]
  ```