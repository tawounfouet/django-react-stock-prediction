from django.contrib import admin
from .models import Approvals

@admin.register(Approvals)
class ApprovalsAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'gender', 'married', 'area', 'loan_amount', 'credit_history')
    search_fields = ('firstname', 'lastname', 'area')
    list_filter = ('gender', 'married', 'graduated_education', 'self_employed', 'area')
    fieldsets = (
        ("Personal Information", {
            'fields': ('firstname', 'lastname', 'gender', 'married', 'dependants'),
        }),
        ("Financial Details", {
            'fields': ('applicant_income', 'coapplicant_income', 'loan_amount', 'loan_term', 'credit_history'),
        }),
        ("Additional Information", {
            'fields': ('graduated_education', 'self_employed', 'area'),
        }),
    )
