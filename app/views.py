from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return HttpResponse(render(request, 'home.html'))

def episodes(request):
    return HttpResponse(render(request, 'episodes.html'))

def playlist(request):
    return HttpResponse(render(request, 'playlist.html'))