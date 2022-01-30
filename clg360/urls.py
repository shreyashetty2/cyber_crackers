from django.contrib import admin
from django.urls import path, include
from home import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.home, name='home'),
    path('btech/', views.btech, name='btech'),
    path('login/', views.user_login, name='login'),
    path('signup/', views.user_signup, name='signup'),
    path('logout/', views.user_logout, name='logout'),
    path('ranking/', views.ranking, name='ranking'),
    path('college_info/', views.college_info, name='college_information'),
    # path('chatbot/', include('chatbot.urls')),
    path('searchbar/', views.searchbar_view, name = "searchbar"),
]

urlpatterns += staticfiles_urlpatterns()