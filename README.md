# Portafolio — Gabriela Montenegro

Portafolio personal de **Gabriela Montenegro Ambito**, Ingeniera de Software Full-Stack.
Construido con **Vite + React**.

## Requisitos

- Node.js 18 o superior

## Desarrollo

```bash
npm install
npm run dev
```

Luego abre `http://localhost:5173`.

## Build de producción

```bash
npm run build      # genera la carpeta /dist
npm run preview    # previsualiza el build localmente
```

## Estructura del proyecto

```
src/
├── components/     Secciones (Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer)
├── data/           TODO el contenido del portafolio → edita aquí para actualizar
├── context/        ThemeContext (modo claro/oscuro con persistencia)
├── hooks/          useScrollReveal (animación al hacer scroll)
├── utils/          Helpers (texto en negrita)
└── styles/         global.css (sistema de diseño: colores, tipografía, componentes)
```

## Cómo personalizar

Casi todo se cambia desde la carpeta `src/data/` sin tocar el diseño:

- **Datos personales y contacto** → `src/data/profile.js`
  ⚠️ Recuerda reemplazar el correo `tu-correo@ejemplo.com` por el real.
- **Proyectos** → `src/data/projects.js` (usa `**texto**` para negritas)
- **Habilidades** → `src/data/skills.js`
- **Experiencia** → `src/data/experience.js`
- **Educación y premios** → `src/data/education.js`
- **Estadísticas del hero** → `src/data/stats.js`
- **Colores y tema** → variables CSS al inicio de `src/styles/global.css`

## Desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub e importa el repo.
3. Vercel detecta Vite automáticamente y lo despliega. Obtienes una URL pública gratis.
4. Cada `git push` vuelve a desplegar automáticamente.

> También funciona en **Netlify** o **Cloudflare Pages** con el mismo build (`npm run build`, carpeta de salida `dist`).
