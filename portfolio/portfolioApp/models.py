from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='skill_icons/', blank=True, null=True)

    def __str__(self):
        return self.name


class SkillDetail(models.Model):
    skill = models.ForeignKey(Skill, related_name='details', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    why = models.TextField(blank=True, null=True)
    where = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    skill_detail = models.ForeignKey(SkillDetail, related_name='projects', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    github_url = models.URLField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)

    def __str__(self):
        return self.title
