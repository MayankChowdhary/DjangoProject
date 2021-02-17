from django.shortcuts import render

# Create your views here.
# myapp/views.py
from django.http import HttpResponse


def welcome_django(request):
    return render(request, "WelcomeDjango/welcomeHome.html", {})


def tictactoe(request):
    return render(request, "TicTacToe/TicTacToe.html", {})
