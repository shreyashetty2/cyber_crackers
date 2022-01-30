from django.urls import path
from . import consumers


websocket_urlpatterns = [
    path('chatbot/', consumers.ChatConsumer.as_asgi()),
]