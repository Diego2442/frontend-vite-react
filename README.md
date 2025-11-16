# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Tecnologías utilizadas

- **Vite**: Un *build tool* de nueva generación para aplicaciones frontend. Utiliza una arquitectura de desarrollo optimizada y es ideal para proyectos modernos de JavaScript.
- **React.js**: Librería de JavaScript para construir interfaces de usuario. Utilizamos React en este proyecto para crear componentes interactivos.
- **Docker**: Usamos Docker para crear un contenedor que encapsula nuestra aplicación frontend, lo que facilita su ejecución en diferentes entornos.
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones multi-contenedor. Usamos Docker Compose para orquestar el frontend y otros servicios relacionados.
- **GitHub Actions**: Para automatizar el proceso de construcción, análisis y despliegue de la aplicación a un servidor EC2 en AWS.

## Instalación local

Para ejecutar este frontend localmente utilizando Docker y Docker Compose, sigue los pasos a continuación.

### Requisitos previos

- Tener **Docker** y **Docker Compose** instalados en tu máquina local. Si no lo tienes, puedes instalarlo desde aquí:
  - [Instalar Docker](https://docs.docker.com/get-docker/)
  - [Instalar Docker Compose](https://docs.docker.com/compose/install/)

### Pasos para ejecutar el frontend localmente

1. **Clonar el repositorio**:

   Clona el repositorio de tu proyecto en tu máquina local.

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

# Variables de Entorno para el Backend

Para ejecutar el backend de manera local, asegúrate de tener un archivo `.env` en la raíz de tu proyecto con las siguientes variables de entorno:

```env
VITE_API_URL=http://localhost:4000
```

# Ejecutar docker-compose
    

    docker-compose build
    docker-compose up
    

# Workflow de GitHub Actions: Construcción y Despliegue con SonarQube y Docker

Este flujo de trabajo de **GitHub Actions** automatiza la construcción, análisis de código y despliegue de una aplicación frontend construida con **React** y **Vite** a **AWS S3**.

## Pasos del Flujo de Trabajo

1. **Checkout del código**: Se clona el código desde el repositorio para que esté disponible para los siguientes pasos.
2. **Configuración de variables de entorno**: Se establecen las variables necesarias para la construcción de la aplicación (como la URL de la API).
3. **Análisis con SonarQube**: Se ejecuta un análisis de calidad del código utilizando SonarQube.
4. **Esperar Quality Gate**: Se espera el resultado del Quality Gate de SonarQube. Si no pasa, el flujo se detiene.
5. **Instalación de dependencias**: Se instalan las dependencias necesarias para construir la aplicación.
6. **Construcción de la aplicación**: Se construye la aplicación con **Vite**, generando los archivos estáticos para producción.
7. **Configuración del AWS CLI**: Se configuran las credenciales de AWS para interactuar con S3.
8. **Despliegue a S3**: Se sincroniza la carpeta `dist/` (con los archivos construidos) con el bucket de **S3**, subiendo la aplicación para su despliegue.

## Secretos y Variables de Entorno

- **`SONAR_TOKEN`**: Token para autenticar la conexión con SonarQube.
- **`SONAR_HOST_URL`**: URL del servidor SonarQube.
- **`VITE_API_URL`**: URL de la API que utilizará el frontend.
- **`AWS_ACCESS_KEY_ID`** y **`AWS_SECRET_ACCESS_KEY`**: Credenciales de AWS para acceder a S3.
- **`AWS_REGION`**: La región de AWS donde está alojado el bucket de S3.
- **`S3_BUCKET_NAME`**: Nombre del bucket de S3 donde se desplegará la aplicación.

## Conclusión

Este flujo de trabajo automatiza el proceso de **integración continua (CI)** y **despliegue continuo (CD)** para una aplicación frontend utilizando **SonarQube** para el análisis de código y **AWS S3** para el despliegue, asegurando una alta calidad en el código y simplificando el proceso de despliegue a producción.