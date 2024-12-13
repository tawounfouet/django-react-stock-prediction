from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    #password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    #password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    password1 = serializers.CharField(write_only=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User
        #fields = ['username', 'email', 'password']
        # fields = ['email', 'password']
        fields = ['email', 'password1', 'password2']

    def validate(self, attrs):
        """
        Validate that password1 and password2 match.
        """
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password2": "Passwords do not match."})
        return attrs

    # def create(self, validated_data):
    #     # User.objects.create = save the password in a plain text
    #     # User.objects.create_user = automatically hash the password
    #     user = User.objects.create_user(
    #         #validated_data['username'],
    #         validated_data['email'],
    #         validated_data['password'],
    #         validated_data['password']
    #     )
    #     # user = User.objects.create_user(**validated_data)
    #     return user
    
    def create(self, validated_data):
        """
        Create a new user with a hashed password using the custom user manager.
        """
        email = validated_data['email']
        password = validated_data['password1']  # Use the validated password1 field
        
        user = User.objects.create_user(email=email, password=password)
        return user