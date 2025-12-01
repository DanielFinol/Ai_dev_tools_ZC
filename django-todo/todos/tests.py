from django.test import TestCase
from .models import Todo

class TodoModelTest(TestCase):

    def setUp(self):
        self.todo = Todo.objects.create(
            title="Test Todo",
            description="This is a test todo item.",
            due_date="2023-12-31",
            resolved=False
        )

    def test_todo_creation(self):
        self.assertEqual(self.todo.title, "Test Todo")
        self.assertEqual(self.todo.description, "This is a test todo item.")
        self.assertEqual(str(self.todo.due_date), "2023-12-31")
        self.assertFalse(self.todo.resolved)

    def test_todo_str(self):
        self.assertEqual(str(self.todo), "Test Todo")

    def test_todo_resolved(self):
        self.todo.resolved = True
        self.todo.save()
        self.assertTrue(self.todo.resolved)

    def test_todo_due_date(self):
        self.todo.due_date = "2024-01-01"
        self.todo.save()
        self.assertEqual(str(self.todo.due_date), "2024-01-01")