from django import forms
from .models import Todo

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ['title', 'description', 'due_date', 'resolved']
        widgets = {
            'due_date': forms.DateInput(attrs={'type': 'date'}),
        }
        labels = {
            'title': 'Todo Title',
            'description': 'Description',
            'due_date': 'Due Date',
            'resolved': 'Mark as Resolved',
        }