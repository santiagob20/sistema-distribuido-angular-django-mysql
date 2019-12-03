# sistema-distribuido-angular-django-mysql
Proyecto que permite implementar sistemas distribuidos en distintos servidores y permitir su correcta comunicación.

## Herramientas usadas
Django 2.4.0 Angular CLI 8.3 MySQL 8.0, JSON-server

## Pasos para el despliegue
1. Desplegar la base de datos db.json con el json-server --watch db.json
2. instalar las dependencias de angular con npm install dento del directorio raiz
3. Desplegar el proyecto de Django con python ./manage.py runserver