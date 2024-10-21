from django.contrib import admin

from django.contrib import admin
from .models import Skill, Project, SkillDetail

admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(SkillDetail)
