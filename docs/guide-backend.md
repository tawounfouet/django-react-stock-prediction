
##  Backend 
```sh
python3.10 -m venv _venv

source _venv/bin/activate

pip install -r requirements_without_ml.txt
pip install -r requirements.txt

mkdir backend
django-admin startproject project .



```


### Installation of authentication & api APPS


```sh
python manage.py startapp authentication
python manage.py startapp api

# settings.py
# Point to Custom User Model
AUTH_USER_MODEL= "authentication.User"

python manage.py makemigrations
python manage.py migrate 

python manage.py createsuperuser

python manage.py runserver

```


### DRF Simple-JWF

```sh
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#installation

pip install djangorestframework-simplejwt
pip install djangorestframework-simplejwt[crypto]