# Sistema de Consulta de Noticias

Un sistema dinámico de consulta de noticias construido con LangChain y Groq que procesa noticias en tiempo real de múltiples fuentes y proporciona respuestas inteligentes a las consultas de los usuarios.


## 🎯 Características Implementadas

### Integración de Fuentes de Noticias
- Integración exitosa con CNN Español (https://cnnespanol.cnn.com/lite/)
- Integración exitosa con CBC News (https://www.cbc.ca/lite/news?sort=latest)
- Utiliza RecursiveUrlLoader para web scraping eficiente

### Sistema de Respuesta Dinámica
- Clasificación inteligente de preguntas (Noticias vs General)
- Procesamiento y respuestas de noticias en tiempo real
- Capacidades de conocimiento general
- Retroalimentación visual de la categorización de preguntas

### Implementación Técnica
- Arquitectura modular para mantenibilidad
- Procesamiento y división eficiente de texto
- Interfaz de consola interactiva
- Configuración de variables de entorno



## 🚀 Comenzando

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Configurar variables de entorno en .env:


```
GROQ_API_KEY=your-groq-api-key
MODEL=mixtral-8x7b-32768
TEMPERATURE=0.7
```

4. Ejecutar la aplicación:

```
node main.js
```

## 📁 Estructura del Proyecto


```
src/
├── chains/
│   ├── classificationChain.js
│   ├── generalChain.js
│   └── newsChain.js
├── config/
│   └── modelConfig.js
├── loaders/
│   └── newsLoaders.js
├── utils/
│   └── interface.js
└── main.js

```
## 💡 Ejemplos de Uso

🔍 Sistema de Consulta de Noticias v1.0
=======================================
Ingrese su pregunta: ¿Qué está pasando en Ucrania?
📋 Categoría de Pregunta: NOTICIAS
🤖 Respuesta: [Últimas noticias sobre Ucrania...]

Ingrese su pregunta: ¿Qué es la computación cuántica?
📋 Categoría de Pregunta: GENERAL
🤖 Respuesta: [Explicación sobre computación cuántica...]

## 🛠 Tecnologías Utilizadas
- LangChain
- Groq AI
- Node.js
- RecursiveUrlLoader
- HTML-to-Text


Este README destaca los requisitos clave cumplidos de la tarea original, incluyendo:
- Integración de noticias de múltiples fuentes
- Clasificación dinámica de respuestas
- Procesamiento en tiempo real
- Interfaz de usuario interactiva
- Implementación modular



