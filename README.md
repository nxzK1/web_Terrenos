# Web venta de terrenos

Landing page profesional para la venta de terrenos en la playa, 5ta Región de Chile.

---

## Vista general

Sitio web de una sola página (SPA-like) construido con HTML semántico, Tailwind CSS compilado y JavaScript vanilla. Diseño "Coastal Premium" con animaciones GSAP, micro-interacciones y arquitectura orientada a conversión vía WhatsApp.

**URL de producción:** [vercel.app](https://web-terrenos.vercel.app) _(actualizar con la URL real)_

---

## Stack tecnológico

| Tecnología             | Versión    | Uso                                    |
| ---------------------- | ---------- | -------------------------------------- |
| HTML5                  | —          | Estructura semántica                   |
| Tailwind CSS           | 3.4.x      | Estilos utilitarios                    |
| PostCSS + Autoprefixer | 8.x / 10.x | Pipeline de CSS                        |
| GSAP                   | 3.12.5     | Animaciones y ScrollTrigger            |
| Font Awesome           | 6.5.1      | Iconografía                            |
| Google Fonts           | —          | Plus Jakarta Sans + Cormorant Garamond |

---

## Estructura del proyecto

```
web_Terrenos/
├── src/
│   └── input.css          # Fuente Tailwind — editar aquí los estilos
├── dist/
│   └── styles.css         # CSS compilado y minificado (auto-generado)
├── img/
│   ├── Playa-pichicuy.jpg # Imagen hero
│   ├── card-maitenes.jpg  # Card proyecto Los Maitenes
│   ├── card-quillayes.jpeg# Card proyecto Los Quillayes
│   ├── card-mahuida.jpg   # Card proyecto Mahuida
│   └── user.jpg           # Foto Vendedor
├── index.html             # HTML principal
├── script.js              # JavaScript — animaciones y micro-UIs
├── tailwind.config.js     # Configuración Tailwind + paleta de colores
├── postcss.config.js      # PostCSS con autoprefixer
├── package.json           # Dependencias y scripts npm
├── vercel.json            # Configuración de deploy + headers de seguridad
└── README.md              # Este archivo
```

---

## Setup local

### Requisitos

- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/nxzK1/web_Terrenos.git
cd web_Terrenos

# 2. Instalar dependencias
npm install

# 3. Compilar CSS
npm run build

# 4. Abrir index.html en el navegador
# (Usar Live Server en VS Code o similar)
```

### Scripts disponibles

```bash
npm run dev      # Compila y observa cambios en tiempo real
npm run build    # Compila y minifica para producción
npm run clean    # Elimina la carpeta dist/
```

---

## Flujo de trabajo

```bash
# Durante el desarrollo
npm run dev

# Al terminar — subir cambios
git add .
git commit -m "descripción del cambio"
git push         # Vercel despliega automáticamente
```

---

## Secciones del sitio

| Sección   | ID          | Descripción                                              |
| --------- | ----------- | -------------------------------------------------------- |
| Hero      | `#inicio`   | Imagen de playa, headline cinematográfico, CTAs WhatsApp |
| Stats     | —           | Contadores animados: familias, años, proyectos           |
| Proyectos | `#terrenos` | Cards interactivas de los 3 proyectos disponibles        |
| Filosofía | —           | Manifiesto con parallax y contraste tipográfico          |
| Nosotros  | `#nosotros` | Perfil del Vendedor + pilares de confianza               |
| Ubicación | —           | Mapa embebido de Google Maps                             |
| Footer    | `#contacto` | Links, redes sociales, CTA final                         |

### Micro-interacciones por card

- **Los Maitenes** — Feature Shuffler: chips de características rotan con animación spring-bounce cada 2.6s
- **Los Quillayes** — Typewriter Feed: texto en tiempo real simulando estado del proyecto
- **Mahuida** — Process Steps: animador secuencial del proceso de compra (4 pasos)

---

## Paleta de colores

| Nombre     | Hex       | Variable CSS   | Uso principal               |
| ---------- | --------- | -------------- | --------------------------- |
| Verde      | `#10B981` | `--verde`      | Primario, CTAs, badges      |
| Verde Dark | `#059669` | `--verde-dark` | Hover de verde              |
| Arena      | `#F59E0B` | `--arena`      | Acento, énfasis tipográfico |
| Arena Dark | `#D97706` | `--arena-dark` | Hover de arena              |
| Cielo      | `#0EA5E9` | `--cielo`      | Secundario, información     |
| Oscuro     | `#1E293B` | `--oscuro`     | Texto, fondos oscuros       |
| Cream      | `#F8F6F1` | `--cream`      | Fondo principal             |

---

## Tipografía

| Familia            | Peso                    | Uso                                  |
| ------------------ | ----------------------- | ------------------------------------ |
| Plus Jakarta Sans  | 300, 400, 500, 700, 800 | Cuerpo, títulos, UI general          |
| Cormorant Garamond | 400, 600, italic        | Énfasis dramático, taglines, nombres |

---

## Seguridad (vercel.json)

Headers de seguridad configurados para producción:

- `Strict-Transport-Security` — Fuerza HTTPS por 2 años
- `Content-Security-Policy` — Restringe orígenes de scripts, estilos e imágenes
- `X-Frame-Options` — Previene clickjacking
- `X-Content-Type-Options` — Previene MIME sniffing
- `Referrer-Policy` — Controla información enviada en cabeceras Referer
- `Permissions-Policy` — Deshabilita cámara, micrófono, geolocalización y pagos

Cache configurado por tipo de recurso:

- Imágenes (`/img/*`) → 1 año, inmutable
- CSS compilado (`/dist/styles.css`) → 1 día, revalidación obligatoria
- JavaScript (`/script.js`) → 1 día, revalidación obligatoria

---

## Deploy en Vercel

El proyecto se despliega automáticamente en cada `git push` a `main`.

### Configuración del proyecto en Vercel

| Campo            | Valor           |
| ---------------- | --------------- |
| Framework Preset | `Other`         |
| Build Command    | `npm run build` |
| Output Directory | `.` (raíz)      |
| Install Command  | `npm install`   |

### Deploy manual

```bash
npm install -g vercel   # Solo la primera vez
npm run build
vercel --prod
```

---

## Proyectos disponibles

### Fundo Los Maitenes

- Precio desde **$4.500.000 CLP**
- Sitios desde 500 m²
- Factibilidad eléctrica y Fibra Óptica
- Escritura individual (SPA)
- Portón automatizado y cámaras de seguridad

### Fundo Los Quillayes

- Precio desde **$3.900.000 CLP**
- Sitios desde 500 m²
- Factibilidad eléctrica y Fibra Óptica
- Escritura individual (SPA)
- Caminos estabilizados, terrenos planos y semi-planos

### Proyecto Mahuida

- Precio desde **$4.500.000 CLP**
- Sitios desde 500 m²
- Factibilidad eléctrica y Fibra Óptica
- Escritura individual (SPA)
- Ruta 5 Norte, Km 170

---

## Contacto

**Sebastián Valdés**
WhatsApp: +56 9 1234 5678
Instagram: [@tuusuario](https://instagram.com/tuusuario)
Facebook: [tuusuario](https://facebook.com/tuusuario)

---

_© 2026 Terrenos Sebastián Valdés. Todos los derechos reservados._
