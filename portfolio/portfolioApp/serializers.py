from rest_framework import serializers
from .models import Skill, SkillDetail, Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'description', 'github_url', 'image']


class SkillDetailSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = SkillDetail
        fields = ['id', 'name', 'why', 'where', 'projects']


class SkillSerializer(serializers.ModelSerializer):
    details = SkillDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Skill
        fields = ['id', 'name', 'icon', 'details']
