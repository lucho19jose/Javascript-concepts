## NPM

npm install nomment 
npm install eslint --save-dev or -D ->only for dev dependencies

npm install react --save ->for production

npm list ->list dependencias in terminal

you can install package in global mode -> npm install -g cowsay -> can be used in the terminal

also we can use flag optional like this -> npm install eslint -o 

npm install json-server@0.15.0->specific version 

npm install package-name -o → Instalar una dependencia opcional
Se pueden generar conflictos cuando se tienen paquetes que usan la misma dependencia pero en versiones diferentes. Para evitar esto se puede simular una instalación con npm install package-name —dry-run. Con esto se simula la instalación pero sin agregar ningún paquete, si no hay ningún conflicto se procede a instalar de la manera convencional.

npm install package-name@0.15.0 → Instalar la versión especifica de un paquete. Si luego se quiere instalar la versión más reciente se usa npm install package-name@latest.

npm install → Instala las dependencias que estén dentro de un package.json.


npm->node package manager
npx->node package execute

npm audit --> Audita las dependencias que tenemos instaladas en busca de vulnerabilidades.
npm audit fix --> Audita e intenta arreglar las vulnerabilidades de nuestras dependencias.
npm audit --json --> Muestra los resultados de la auditoría a manera más profunda en formato json.
npm audit fix --force --> Corrige los problemas encontrados en las librerías instalando otras dependencias por debajo si es necesario.


Para eliminar una dependencia Ejemplo:
npm unistall webpack-dev-server

Otra forma es ir al archivo package.json y eliminar del listado de dependencia, dependencias de desarrollo o dependencias opcionales; una vez eliminado de la lista ejecutamos
rm -rf node_modules/
npm install

Para compilar el proyecto usamos
npm run build

Para compilar el proyecto y obtener mas informacion usamos
npm run build --dd

Para ver librerias deprecadas
npm ci


