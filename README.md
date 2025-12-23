**IN INGLESH:**

This project is a **Proof of Concept (PoC)** created on **December 23, 2025**. My goal was to investigate how an attacker sets up a web environment and a server to intercept credentials.

> [!WARNING]
> **LEGAL DISCLAIMER:** This code was created exclusively for learning and cybersecurity awareness purposes. It must not be used for any illicit activities.

## 👤 About the Project
I am **15 years old** and a self-taught technology enthusiast. Although I haven't fully mastered HTML, CSS, and JS yet, I built the main logic ("the skeleton") by researching functions on my own and using **Gemini (AI)** as a tutor to polish the code and fix connection errors.

## 🛠️ How it Works
The lab consists of a frontend that mimics a login page and a Node.js backend that acts as the data receiver.

1. **Frontend (`index.html` + `apariencia.css`):** A simple interface to capture username and password.
2. **Logic (`funcion.js`):** Uses the `fetch` API to silently send data to the server via the `POST` method.
3. **Server (`serve.js`):** A **Node.js** server using **Express** that receives the data and prints it to the system console.

## 🚀 How to Run It
1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Clone the repository or download the files.
3. In the project folder, run:
   ```bash
   npm install express
   node serve.js
Open in your browser: http://localhost:3000

What I Learned
Through this experiment, I learned about:

How the HTTP protocol and POST methods work.

How data can be sent from a form without refreshing the page.

The importance of being wary of websites that lack proper certificates or legitimate URLs.

**EN ESPAÑOL:**

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

