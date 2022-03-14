# Reto-Carvajal


# Backend

Esta desarrollado en Python, utilizando Django Rest Framework, esta API permite tener productos, usuarios y wish list al almacenados en postgresql (Nube Heroku).


Después de clonar el repositorio, abrir una terminal y ubicarse en la carpeta Backend.
Activar el entono virtual con la instrucción:
```
$ venv\Scripts\activate.bat
```
Como la base de datos esta alojada en un servidor remoto, solo debe lanzar el servidor con: 
```
$ python manage.py runserver
```
Verificar que la API este funcionando en http://127.0.0.1:8000/

Para ver el panel de administración ingresar a http://127.0.0.1:8000/admin con las credenciales: 
```
Usuario: admin@bambuco.com Password:12345678
```

# Frontend 

El frontend está desarrollado en Angular.

En una nueva terminal ubicarse dentro de la carpeta Frontend y ejecutar los siguientes comandos 
```
npm install
ng server -o 
```
Si todo corrio bien se abrirá en le navegador la dirección http://localhost:4200/
