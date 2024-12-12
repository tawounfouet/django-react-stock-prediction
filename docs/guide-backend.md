
##  Backend 
```sh
mkdir backend
django-admin startproject project .



```


### Auth app


```sh
python manage.py startapp authentication


# settings.py
# Point to Custom User Model
AUTH_USER_MODEL= "authentication.User"

python manage.py makemigrations
python manage.py migrate 

python manage.py createsuperuser

python manage.py runserver