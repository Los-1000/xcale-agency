# Xcale Agency — Sitio Web

Sitio estático de **Xcale Agency**: una super landing más 6 páginas de detalle de servicios, con estética *dark-tech*. Construido con [Tailwind CSS](https://tailwindcss.com) (vía CDN), tipografía **Inter** e iconos **Material Symbols**. No requiere build.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Super landing: hero, los 6 servicios, proceso, métricas y CTA |
| `desarrollo-software.html` | Desarrollo de Software a Medida |
| `chatbots.html` | ChatBots Inteligentes |
| `landing-pages.html` | Landing Pages & Web |
| `automatizacion.html` | Automatización & Diagnóstico de Procesos |
| `consultoria-ai.html` | IA & Consultoría |
| `data-analytics.html` | Data Analytics & Business Intelligence |

## Características

- **Navegación unificada** — menú desplegable "Servicios" en escritorio con acceso directo a las 6 sub-áreas desde cualquier página.
- **Menú móvil** — panel deslizable accesible (abrir/cerrar con backdrop) con animación de entrada.
- **Logo clicable** — el logotipo "Xcale" regresa al inicio.
- **Design system compartido** — mismos tokens de color Material, tipografía y componentes (glass panels, milled edges) en todas las páginas.

## Uso

Abre `index.html` en cualquier navegador moderno. Al ser HTML estático, también puede servirse con cualquier servidor estático o desplegarse en GitHub Pages, Netlify, Vercel, etc.

```bash
# Opcional: servidor local
python -m http.server 8000
# luego visita http://localhost:8000
```
