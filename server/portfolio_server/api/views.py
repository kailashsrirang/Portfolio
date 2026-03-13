from django.http import JsonResponse, HttpResponse
from .models import Project
from .forms import ContactMessageForm
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json


def project_list(request):
    projects = Project.objects.all().order_by('order', 'id')

    data = [
        {
            "id": project.id,
            "title": project.title,
            "subtitle": project.subtitle,
            "description": project.description,
            "tech_stack": project.tech_stack,
            "github_url": project.github_url,
            "live_url": project.live_url,
            "image_url": project.image_url,
            "featured": project.featured,
            "order": project.order,
        }
        for project in projects
    ]

    return JsonResponse(data, safe=False)
    # return HttpResponse("all good")


@csrf_exempt
def contact_submit(request):
    if request.method != 'POST':
        return JsonResponse({"error": "Only POST allowed"}, status=405)

    body = json.loads(request.body)
    form = ContactMessageForm(body)
    print(body)
    if form.is_valid():
        form.save()
        return JsonResponse({"message": "Saved successfully"}, status=201)

    return JsonResponse({"errors": form.errors}, status=400)


def index(request):
    return render(request, "api/api.html")
