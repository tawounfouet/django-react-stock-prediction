from django.db import models

class Approvals(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    MARRIED_CHOICES = (
        ('Yes', 'Yes'),
        ('No', 'No'),
    )
    GRADUATED_CHOICES = (
        ('Graduate', 'Graduate'),
        ('Not_Graduate', 'Not Graduate'),
    )
    SELF_EMPLOYED_CHOICES = (
        ('Yes', 'Yes'),
        ('No', 'No'),
    )
    PROPERTY_CHOICES = (
        ('Rural', 'Rural'),
        ('Semiurban', 'Semiurban'),
        ('Urban', 'Urban'),
    )

    firstname = models.CharField(max_length=50, verbose_name="First Name")
    lastname = models.CharField(max_length=50, verbose_name="Last Name")
    dependants = models.PositiveIntegerField(default=0, verbose_name="Dependents")
    applicant_income = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, verbose_name="Applicant Income")
    coapplicant_income = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, verbose_name="Co-Applicant Income")
    loan_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, verbose_name="Loan Amount")
    loan_term = models.PositiveIntegerField(default=0, verbose_name="Loan Term (months)")
    credit_history = models.PositiveSmallIntegerField(default=0, verbose_name="Credit History")
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, verbose_name="Gender")
    married = models.CharField(max_length=3, choices=MARRIED_CHOICES, verbose_name="Married")
    graduated_education = models.CharField(max_length=12, choices=GRADUATED_CHOICES, verbose_name="Education Level")
    self_employed = models.CharField(max_length=3, choices=SELF_EMPLOYED_CHOICES, verbose_name="Self Employed")
    area = models.CharField(max_length=9, choices=PROPERTY_CHOICES, verbose_name="Property Area")

    class Meta:
        verbose_name = "Loan Approval"
        verbose_name_plural = "Loan Approvals"

    def __str__(self):
        return f"{self.lastname}, {self.firstname}"
