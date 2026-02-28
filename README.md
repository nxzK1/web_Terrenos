# Web venta de terrenos.

Landing page profesional para la venta de terrenos en la playa, 5ta Región de Chile. Diseño "Coastal Premium" con animaciones GSAP, micro-interacciones en las cards y pipeline de build con Tailwind CSS CLI.

**Producción:** [webventaterrenos.vercel.app](https://webventaterrenos.vercel.app)
**Repositorio:** [github.com/nxzK1/web_Terrenos](https://github.com/nxzK1/web_Terrenos)

---

## Stack

| Tecnología             | Versión      | Rol                                    |
| ---------------------- | ------------ | -------------------------------------- |
| HTML5                  | —            | Estructura semántica                   |
| Tailwind CSS CLI       | ^3.4.4       | Estilos utilitarios compilados         |
| PostCSS + Autoprefixer | ^8.4 / ^10.4 | Pipeline de transformación CSS         |
| GSAP + ScrollTrigger   | 3.12.5       | Animaciones y efectos de scroll        |
| Font Awesome           | 6.5.1        | Iconografía                            |
| Google Fonts           | —            | Plus Jakarta Sans + Cormorant Garamond |
| Vercel                 | —            | Hosting + CI/CD automático             |

---

## Estructura del proyecto

```
web_Terrenos/
├── src/
│   └── input.css            # Fuente Tailwind — editar estilos aquí
├── dist/
│   └── styles.css           # CSS compilado y minificado (auto-generado)
├── img/
│   ├── Playa-pichicuy.jpg   # Imagen hero
│   ├── card-maitenes.jpg    # Card Fundo Los Maitenes
│   ├── card-quillayes.jpeg  # Card Fundo Los Quillayes
│   ├── card-mahuida.jpg     # Card Proyecto Mahuida
│   └── user.jpg             # Foto Vendedor
├── index.html               # HTML principal — una sola página
├── script.js                # JavaScript — animaciones y micro-UIs
├── tailwind.config.js       # Config Tailwind: paleta, safelist, content paths
├── postcss.config.js        # PostCSS con autoprefixer
├── package.json             # Dependencias y scripts npm
├── vercel.json              # Deploy config + headers de seguridad HTTP
├── .gitignore               # Excluye node_modules y archivos temporales
└── README.md                # Este archivo
```

---

## Setup local

**Requisitos:** Node.js 18+ y npm 9+

```bash
# 1. Clonar el repositorio
git clone https://github.com/nxzK1/web_Terrenos.git
cd web_Terrenos

# 2. Instalar dependencias
npm install

# 3. Compilar el CSS
npm run build

# 4. Levantar servidor local
npx serve .
# Abrir http://localhost:3000
```

> No abrir index.html con doble click — usar siempre un servidor HTTP para
> que las rutas relativas, fuentes e imágenes carguen correctamente.

### Scripts disponibles

```bash
npm run dev      # Compila y observa cambios en tiempo real
npm run build    # Compila y minifica para producción (~40-60 KB)
npm run clean    # Elimina y recrea la carpeta dist/
```

---

## Flujo de trabajo diario

```bash
# Trabajar
npm run dev

# Verificar build antes de subir
npm run build
ls -lh dist/styles.css   # Debe pesar entre 40KB y 60KB

# Subir — Vercel despliega automáticamente
git add .
git commit -m "descripción del cambio"
git push
```

---

## Secciones del sitio

| Sección   | Anchor      | Descripción                                                                      |
| --------- | ----------- | -------------------------------------------------------------------------------- |
| Hero      | `#inicio`   | Imagen de playa, headline con tipografía contrastante, animación GSAP de entrada |
| Stats     | —           | Contadores animados: familias, años de experiencia, proyectos activos            |
| Proyectos | `#terrenos` | 3 cards con micro-UIs interactivas y CTA a WhatsApp                              |
| Filosofía | —           | Manifiesto con parallax de fondo y contraste tipográfico                         |
| Nosotros  | `#nosotros` | Perfil del vendedor + pilares de confianza animados                              |
| Ubicación | —           | Mapa embebido de Google Maps — Sector Huaquén, Ruta 5 Norte Km 170               |
| Footer    | `#contacto` | Links, redes sociales, CTA final de conversión                                   |

### Micro-UIs en las cards de proyectos

Cada card tiene una animación funcional distinta que simula software real:

**Fundo Los Maitenes** — Feature Shuffler: lista de características que rota verticalmente con efecto spring-bounce cada 2.6 segundos.

**Fundo Los Quillayes** — Typewriter Feed: texto que se escribe y borra en tiempo real simulando el estado actualizado del proyecto, con cursor parpadeante e indicador de estado activo.

**Proyecto Mahuida** — Process Steps: animador secuencial de los 4 pasos del proceso de compra (Contacto → Visita → Firma → Entrega), con transición visual paso a paso.

---

## Sistema de diseño

### Paleta de colores

Los colores están definidos en formato `rgb(R G B / <alpha-value>)` en `tailwind.config.js`. Este formato es **obligatorio** para que funcionen los modificadores de opacidad de Tailwind (`bg-verde/10`, `text-arena/70`, etc.).

| Nombre       | Hex       | Uso                                        |
| ------------ | --------- | ------------------------------------------ |
| `verde`      | `#10B981` | Primario — CTAs, badges, acentos positivos |
| `verde-dark` | `#059669` | Hover sobre verde                          |
| `arena`      | `#F59E0B` | Acento — énfasis tipográfico, precios      |
| `arena-dark` | `#D97706` | Hover sobre arena                          |
| `cielo`      | `#0EA5E9` | Secundario — información, highlights       |
| `oscuro`     | `#1E293B` | Texto principal, fondos oscuros            |
| `cream`      | `#F8F6F1` | Fondo base de la página                    |

### Tipografía

| Familia            | Pesos                   | Uso                                           |
| ------------------ | ----------------------- | --------------------------------------------- |
| Plus Jakarta Sans  | 300, 400, 500, 700, 800 | UI general, cuerpo, títulos                   |
| Cormorant Garamond | 400, 600, italic        | Énfasis dramático — taglines, nombres propios |

### Componentes animados

- **Navbar flotante:** transparente sobre el hero, transiciona a glassmorphism (blur + fondo cream al 92%) al hacer scroll
- **Animaciones de entrada (GSAP):** cada sección se revela con fade-up y stagger al entrar en el viewport vía ScrollTrigger
- **Parallax:** la imagen de fondo de la sección Filosofía tiene efecto parallax scrub con GSAP
- **Contadores:** los números de la barra de stats se animan con easing cúbico al entrar en pantalla
- **Magnetic buttons:** todos los CTAs tienen micro-interacción de scale en hover y active

---

## Decisiones técnicas relevantes

**Tailwind CLI en vez de CDN:** el CDN carga ~3.8MB de CSS. La versión compilada genera entre 40-60KB incluyendo solo las clases efectivamente usadas — una reducción de más del 98% en peso de CSS.

**Safelist en tailwind.config.js:** las clases con modificadores de opacidad (`bg-verde/10`, `text-white/65`) y las clases de componentes custom están protegidas con patrones regex en el `safelist` para evitar que el purge de Tailwind las elimine al no detectarlas en el escaneo estático del HTML.

**Progressive enhancement en JS:** GSAP es opcional. Si el script falla por cualquier razón, el sitio es 100% visible y funcional. GSAP enriquece la experiencia pero nunca la bloquea.

**Compatibilidad móvil en script.js:** el archivo usa sintaxis ES5 compatible con todos los WebViews móviles (Safari iOS, Chrome Android) para evitar errores de parsing. No usa `'use strict'` ni caracteres especiales en strings.

**offsetTop en navegación móvil:** el smooth scroll usa `offsetTop` en vez de `getBoundingClientRect()` para evitar el bug de posicionamiento incorrecto causado por el reflow del DOM al cerrar el menú antes de calcular el destino del scroll.

---

## Seguridad

Headers HTTP configurados en `vercel.json`, aplicados en producción:

| Header                      | Protección                                                      |
| --------------------------- | --------------------------------------------------------------- |
| `Strict-Transport-Security` | Fuerza HTTPS por 2 años en todos los subdominios                |
| `Content-Security-Policy`   | Restringe orígenes permitidos de scripts, estilos e imágenes    |
| `X-Frame-Options`           | Previene clickjacking — solo permite embeds del mismo origen    |
| `X-Content-Type-Options`    | Previene MIME sniffing en navegadores                           |
| `Referrer-Policy`           | Controla la información enviada en cabeceras Referer            |
| `Permissions-Policy`        | Deshabilita acceso a cámara, micrófono, geolocalización y pagos |

Cache por tipo de recurso:

| Recurso            | Estrategia             |
| ------------------ | ---------------------- |
| `/img/*`           | 1 año, inmutable       |
| `/dist/styles.css` | 1 día, must-revalidate |
| `/script.js`       | 1 día, must-revalidate |

---

## Deploy en Vercel

El proyecto se conecta directamente al repositorio de GitHub. Cada `git push` a `main` genera un deploy automático.

**Configuración del proyecto en Vercel Dashboard:**

| Campo            | Valor                   |
| ---------------- | ----------------------- |
| Framework Preset | `Other`                 |
| Install Command  | `npm install`           |
| Build Command    | `npm run build`         |
| Output Directory | `.` (raíz del proyecto) |

---

## Proyectos en venta

### Fundo Los Maitenes

Desde **$4.500.000** · A 8 minutos de la playa · Sitios desde 500 m² · Factibilidad eléctrica y Fibra Óptica · Escritura individual (SPA) · Portón automatizado · Cámaras de seguridad · Caminos estabilizados

### Fundo Los Quillayes

Desde **$2.000.000** · A 12 minutos de la playa · Sitios desde 500 m² · Factibilidad eléctrica y Fibra Óptica · Escritura individual (SPA) · Portón automatizado · Caminos estabilizados

### Proyecto Mahuida

Desde **$4.500.000** · A 12 minutos de la playa · Sitios desde 500 m² · Factibilidad eléctrica y Fibra Óptica · Escritura individual (SPA) · Portón automatizado · Caminos estabilizados

**Ubicación:** Sector Huaquén · Ruta 5 Norte, Km 170 · V Región, Chile

---

_© 2026 Terrenos Sebastián Valdés. Todos los derechos reservados._
