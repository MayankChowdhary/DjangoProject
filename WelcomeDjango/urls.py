# myapp/urls.py
from django.urls import path
from .views import welcome_django
from .views import tictactoe

urlpatterns = [
    path('', welcome_django, name='WelcomeDjango'),
    path('tictactoe', tictactoe, name='TicTacToe')
]
