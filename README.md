# JavaScript 2026 - Material de Clases

Repositorio con material educativo y ejercicios prácticos para el curso de Desarrollo Web con JavaScript.

## 📚 Descripción

Este repositorio contiene ejemplos prácticos, proyectos y ejercicios desarrollados durante el curso de JavaScript 2026. Cada carpeta representa una clase con sus respectivos recursos y código fuente.

## 🗂️ Estructura del Proyecto

```
JavaScript_2026_clases/
│
├── Clase 19_12/          # Fundamentos de HTML
├── Clase_06_01/          # JavaScript - Variables y Calculadora Básica
├── Clase_09_01/          # jQuery - Calculadora de Préstamos
└── Clase_13_01/          # jQuery - Sistema de Login
```

## 📖 Contenido por Clase

### Clase 19/12 - Fundamentos de HTML
**Temas:**
- Estructura básica de documentos HTML5
- Etiquetas semánticas (h1-h6, p, strong, em)
- Uso de listas ordenadas y no ordenadas
- Atributos de lenguaje y metadatos

**Archivos:**
- `index.html` - Página de ejemplo con elementos básicos de HTML

---

### Clase 06/01 - JavaScript Básico y Calculadora

#### Demo - Variables JS
**Temas:**
- Declaración y asignación de variables
- Tipos de datos en JavaScript
- Manipulación del DOM
- Eventos y formularios
- Condicionales (if-else)
- Template literals

**Archivos:**
- `demo/inicio.html` - Formulario de bienvenida
- `demo/js/script.js` - Lógica de variables y validaciones
- `demo/css/estilos.css` - Estilos personalizados

**Funcionalidades:**
- Captura de datos del usuario
- Validación de edad
- Mensajes dinámicos
- Logs en consola

#### Calculadora Básica
**Temas:**
- Operaciones matemáticas
- Manejo de eventos
- Validación de entrada
- Uso de eval() para cálculos
- Soporte para teclado

**Archivos:**
- `calculadora/index.html` - Interfaz de calculadora
- `calculadora/js/scripts.js` - Lógica de cálculo
- `calculadora/css/styles.css` - Estilos con Bootstrap

**Funcionalidades:**
- Operaciones básicas (+, -, ×, ÷)
- Números decimales
- Historial de operaciones
- Atajos de teclado
- Diseño responsivo

---

### Clase 09/01 - Calculadora de Préstamos (jQuery)

**Temas:**
- Introducción a jQuery
- Selectores y eventos
- Fórmulas financieras
- Validación de formularios
- Formateo de números

**Archivos:**
- `index.html` - Interfaz del formulario
- `js/script.js` - Lógica con jQuery
- `css/styles.css` - Estilos personalizados

**Funcionalidades:**
- Cálculo de cuota mensual (sistema francés)
- Cálculo de intereses totales
- Validación de campos
- Formato de moneda
- Animaciones con jQuery
- Tecla Enter para calcular

**Fórmula utilizada:**
```
Cuota Mensual = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]

Donde:
P = Monto del préstamo
r = Tasa de interés mensual (tasa anual / 12 / 100)
n = Número de meses
```

---

### Clase 13/01 - Sistema de Login (jQuery)

**Temas:**
- Formularios de autenticación
- Validación en tiempo real
- Toggle de visibilidad de contraseña
- Expresiones regulares
- UX/UI para formularios

**Archivos:**
- `inicio.html` - Formulario de login
- `js/script.js` - Validaciones con jQuery
- `css/estilos.css` - Diseño moderno y responsivo

**Funcionalidades:**
- Validación de email en tiempo real
- Toggle de visibilidad de contraseña
- Validación de longitud (8-12 caracteres)
- Mensajes de error dinámicos
- Opciones de login social (UI)
- Checkbox "Recordarme"
- Animaciones y efectos visuales

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos y diseño responsivo
- **JavaScript (ES6+)** - Lógica de programación
- **jQuery 3.7.1** - Manipulación del DOM simplificada
- **Bootstrap 5.3.0** - Framework CSS para diseño responsivo
- **Font Awesome 6.4.0** - Iconos

## 🚀 Cómo Usar este Repositorio

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code, Sublime Text, etc.)
- Conexión a internet (para CDNs de Bootstrap, jQuery y Font Awesome)

### Instalación
1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/JavaScript_2026_clases.git
```

2. Navega a la carpeta del proyecto:
```bash
cd JavaScript_2026_clases
```

3. Abre cualquier archivo `index.html` o `inicio.html` en tu navegador

### Estructura de Archivos
Cada proyecto sigue esta estructura:
```
Proyecto/
├── index.html (o inicio.html)    # Punto de entrada
├── css/
│   └── styles.css (o estilos.css) # Estilos personalizados
└── js/
    └── script.js (o scripts.js)   # Lógica JavaScript
```

## 📝 Notas para Estudiantes

### Buenas Prácticas Implementadas
- ✅ Código comentado y documentado
- ✅ Nombres de variables descriptivos
- ✅ Separación de responsabilidades (HTML, CSS, JS)
- ✅ Validación de entradas del usuario
- ✅ Manejo de errores
- ✅ Diseño responsivo
- ✅ Uso de console.log() para debugging

### Conceptos Clave por Aprender
1. **Manipulación del DOM**: getElementById, querySelector, addEventListener
2. **jQuery**: Selectores ($), eventos (.on()), efectos (.slideDown())
3. **Validación**: Expresiones regulares, validación en tiempo real
4. **Eventos**: submit, click, input, keypress
5. **Funciones**: Declaración, parámetros, return
6. **Condicionales**: if-else, operadores lógicos
7. **Operadores**: Aritméticos, comparación, lógicos

## 🎯 Objetivos de Aprendizaje

Al finalizar este material, los estudiantes podrán:
- ✔️ Crear estructuras HTML semánticas
- ✔️ Aplicar estilos CSS y frameworks como Bootstrap
- ✔️ Manipular el DOM con JavaScript vanilla y jQuery
- ✔️ Implementar validaciones de formularios
- ✔️ Manejar eventos del usuario
- ✔️ Realizar cálculos matemáticos y financieros
- ✔️ Crear interfaces interactivas y responsivas

## 🔧 Ejercicios Sugeridos

1. **Calculadora**: Agregar funciones científicas (√, x², %)
2. **Préstamos**: Crear tabla de amortización
3. **Login**: Implementar validación del lado del servidor
4. **General**: Agregar localStorage para persistencia de datos

## 📚 Recursos Adicionales

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [jQuery Documentation](https://api.jquery.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

## 👥 Contribuciones

Este es un repositorio educativo. Los estudiantes pueden:
- Reportar errores o bugs
- Sugerir mejoras
- Compartir soluciones alternativas

## 📧 Contacto

Para consultas sobre el material del curso, contactar al correo electronico sabina.clases25@gmail.com

---

**Año Académico:** 2026  
**Curso:** Desarrollo Web con JavaScript  
**Nivel:** Principiante - Intermedio

---

## 📄 Licencia

Material educativo de uso libre para fines académicos.

---

*Última actualización: Enero 2026*