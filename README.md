

```sh
python3 -m venv _venv

source _venv/bin/activate

pip install django
pip install djangorestframework
pip install python-decouple
pip install django-cors-headers
pip install djangorestframework-simplejwt

pip install finance

pip install matplotlib scikit-learn keras tensorflow

pip freeze > requirements.txt

pip install -r requirements.txt

python manage.py runserver

python manage.py makemigrations
python manage.py migrate

python manage.py createsuperuser
#Username (leave blank to use 'codespace'): Email address: admin@example.com
#Password: admin
#Password (again): admin

#Username: awf
#Email address: awf@example.com
#Password: awf
#Password (again):awf