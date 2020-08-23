-----------------------------------------
Autor: Andres Fabián Laguna
Apirest: NodeJs Framework Loopback 3
Base de datos: MySql
Frontend: Angular
------------------------------------------

*****Este manual va enfocado para la solución de los puntos 3 y 4.****
 
------------------------------------------
Recomendaciones
------------------------------------------

La máquina debe tener instalado las siguientes herramientas:
nodejs
npm install -g loopback-cli
AngularCli

-------------------------------------------
Información General
-------------------------------------------
El ApiRest que se realizo fue en NodeJS utilizando un framework llamado loopback 3, 
la siguiente información es para la correcta ejecución del desarrollo.

--------------------------------------------
Instrucciones de configuracion de BD
--------------------------------------------
1) En el proyecto descargado se encuentra la BD lo que hacemos es montarla
   comun y corriente en un servidor.
2) Para que no se necesite modificar nada en el ApiRest, se recomienda dejar los siguientes datos:

hostname: 127.0.0.1
puerto:3306
--------------------------------------------
Instrucciones de configuracion de APIREST
--------------------------------------------
1) Se debe buscar en el proyecto descargado la carpera llamada API_REST_PERSONA
2) Se busca la ruta donde se descargo el proyecto, se abre la consola
   cmd con el fin de colocar esa ruta.
3) Se coloca el comando npm install y esperamos.
4) Se debe tener en cuenta que en el archivo datasource.json ya que se ubica la persistencia 
   si se cambiaron la informacion de base de datos se debe modificar ese archivo
   con los nuevos datos ESPECIFICANDO hostname y puerto.
5) Para finalizar en la consola colocamos el comando node . y se deberia cargar
   el apiRest.
otros comandos para iniciar por si no funciona el primero.
1) node
2) node .
3) nodemon .
   
--------------------------------------------
Instrucciones de configuracion de Angular
--------------------------------------------

1) Se debe buscar en el proyecto descargado la carpera llamada ANGULAR
2) Se busca la ruta donde se descargo el proyecto y se abre la consola
   cmd con el fin de colocar esa ruta.
3) Se coloca el comando npm install y esperamos.
4) Ubicarse en consola con la carpeta llamada Angular y ejecutar comando ng serve
5) Abrimos el navegador y en la URL colocamos la direccion http://localhost:4200/
6) Se observara el crud de persona.
