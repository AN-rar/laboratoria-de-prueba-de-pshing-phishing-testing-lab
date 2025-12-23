Este proyecto es una **Prueba de Concepto (PoC)** realizada el **23 de diciembre de 2025**. Mi objetivo fue investigar cómo un atacante configura un entorno web y un servidor para interceptar credenciales.

> [!WARNING]
> **AVISO LEGAL:** Este código fue creado exclusivamente con fines de aprendizaje y concienciación en ciberseguridad. No debe ser utilizado para actividades ilícitas.

## 👤 Sobre el Proyecto
Tengo **15 años** y soy apasionado de la tecnología de forma **autodidacta**. Aunque no domino completamente HTML, CSS y JS, realicé la lógica principal ("el esqueleto") investigando funciones por mi cuenta y utilizando **Gemini (IA)** como tutor para pulir el código y corregir errores de conexión.

## 🛠️ ¿Cómo funciona?
El laboratorio consta de un frontend que imita un login y un backend en Node.js que actúa como receptor de los datos.

1. **Frontend (`index.html` + `apariencia.css`):** Interfaz simple para capturar usuario y contraseña.
2. **Lógica (`funcion.js`):** Usa la API `fetch` para enviar los datos por el método `POST` de manera silenciosa al servidor.
3. **Servidor (`serve.js`):** Un servidor en **Node.js** con **Express** que recibe los datos y los imprime en la consola del sistema.

## 🚀 Cómo ejecutarlo
1. Tener instalado [Node.js](https://nodejs.org/).
2. Clonar el repositorio o descargar los archivos.
3. En la carpeta del proyecto, ejecutar:
   ```bash
   npm install express
   node serve.js

Abrir en el navegador: http://localhost:3000

🧠 Aprendizaje
Con este experimento aprendí:

El funcionamiento del protocolo HTTP y los métodos POST.

Cómo se pueden enviar datos desde un formulario sin que la página se refresque.

La importancia de desconfiar de sitios web que no tienen certificados o URLs legítimas.
