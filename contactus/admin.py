from django.contrib import admin

from django.contrib.admin.sites import site
from contactus.models import Contactus

class ContactAdmin(admin.ModelAdmin):
    list_display=('name','email','massage')

admin.site.register(Contactus,ContactAdmin)
# Register your models here.
