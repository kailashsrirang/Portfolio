from django.urls import path, include
from . import views

urlpatterns = [
    path('project_list/', views.project_list, name="project_list"),
    path('contact/', views.contact_submit, name='contact_submit'),

]
