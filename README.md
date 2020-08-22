# Cenco Shopping

Esto proyecto es el backend de un ecommerce de ejemplo. La idea es que un candidato pueda terminar o avanzar la implementación de este proyecto.

## Instalación

Usa el manejador de paquetes de nodejs [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalar las dependencias

```bash
npm install
```

## Correr el servicio

```bash
npm run start
```

## Ejecutar las pruebas

```bash
npm run test
```

## Ejecutar las pruebas con descripción

```bash
npm run test-verbose
```
## Testiar servicios en ambiente local
## /checkout
```bash
    Url = http://localhost:3000/product/checkout
    Metodo = POST
    body = {"products": ["PT","RT","BJX"]}
```
## Todos los productos
```bash
    Url = http://localhost:3000/product/
    Metodo = GET
```
## Producto por código
```bash
    Url = http://localhost:3000/product/BT
    Metodo = GET
```
## Que debes hacer

Para poder conseguir el objetivo debes terminar de implementar el **checkout**. Puedes cambiar todo el código sin problemas. Se evaluarán aspectos como código limpio, pruebas, patrones y arquitectura.

El checkout deberia retornar el total de los productos, el total a pagar, el total de los descuentos y una lista con los los códigos de los productos que se estan procesando. Esta implementación esta bien o faltará algo?

Si, faltaria la cantidas de productos procesados.
