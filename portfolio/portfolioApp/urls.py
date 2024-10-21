from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, SkillDetailViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'skill-details', SkillDetailViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]