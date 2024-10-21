from rest_framework import viewsets
from .models import Skill, SkillDetail, Project
from .serializers import SkillSerializer, SkillDetailSerializer, ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class SkillDetailViewSet(viewsets.ModelViewSet):
    queryset = SkillDetail.objects.all()
    serializer_class = SkillDetailSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
