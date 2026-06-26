# Visual Concept Designer

Visual Concept Designer es una habilidad para agentes de IA (Agent Skill) que convierte notas, artículos, marcos de trabajo, flujos de trabajo e ideas de negocio en ilustraciones claras estilo sketchnote, cuadrículas Bento (Bento grids) y portadas minimalistas de artículos, ya sea como imágenes generadas, vectores SVG o prompts listos para copiar.

Está diseñado para:

- Resúmenes visuales de contenido largo (blogs, diapositivas, publicaciones en redes sociales)
- Portadas minimalistas de artículos: título + subtítulo + motivos abstractos
- Gráficos para talleres y presentaciones
- Marcos de trabajo empresarial y mapas estratégicos
- Salidas en vietnamita e inglés (con manejo estricto de diacríticos)

## Cómo funciona

Solo pega tu contenido y pídelo. La habilidad hará lo siguiente:

1. **Destilar (Distill)**: Reduce contenido largo a un mensaje central y etiquetas exactas que se ajusten al estilo (sin inventar datos).
2. **Elegir un estilo**: Elige entre los 8 estilos siguientes (o usa el que nombres).
3. **Generar**: Crea la imagen a partir de la especificación legible por máquina del estilo (paleta exacta, diseño, lista de elementos negativos).
4. **Verificar**: Verifica el texto renderizado —incluyendo acentos vietnamitas— y vuelve a generar con correcciones si es incorrecto.

También puedes solicitar solo el prompt y pegarlo tú mismo en cualquier herramienta de generación de imágenes.

## ¿Qué estilo necesito?

- **¿Portada de blog/artículo (solo título + subtítulo)?** → `WEC`
- **¿Antes/después, gancho manual vs. IA?** → `ACD`
- **¿Una cita o una sola idea clave?** → `SBS`
- **¿Lista de lecciones o consejos?** → `SB`
- **¿Flujo de trabajo paso a paso / SOP?** → `FBW`
- **¿Hoja de trucos educativa / tarjetas de conceptos?** → `EIS`
- **¿Marco de trabajo empresarial / mapa del sistema?** → `BLD`
- **¿Mapa de conocimiento profundo?** → `VTK`

| Código | Estilo | Ideal para |
| --- | --- | --- |
| ACD | AI Contrast Drama | Ganchos, portadas, antes/después, manual vs. IA |
| WEC | Watercolor Editorial Cover | Portadas tranquilas, resúmenes de eventos, banners premium |
| SBS | Sketchnote Blue Story | Una idea clave, cita, lección reflexiva |
| SB | Sketchnote Blue | Varias lecciones, resúmenes, lista de ideas |
| FBW | FlowBot Watercolor | Flujos de trabajo, SOPs, flujos de automatización |
| EIS | Educational Infographic Sketchnote | Hojas de trucos, explicadores de conceptos, posters educativos |
| BLD | Business Line Diagram | Marcos de trabajo, sistemas, mapas de arquitectura |
| VTK | Visual Thinking Knowledge | Análisis profundo y mapas de conocimiento |

No tienes que elegir: la habilidad selecciona la mejor opción automáticamente.

## Instalación

La habilidad instalable se encuentra en `skill/visual-concept-designer` y sigue el formato estándar de habilidades de agentes (`SKILL.md` con frontmatter YAML), por lo que funciona en cualquier entorno compatible.

**Codex** (Windows PowerShell):

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.agents\skills\visual-concept-designer
```

**Claude Code:**

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.claude\skills\visual-concept-designer
```

**Otros agentes (Gemini CLI, etc.):** copia `skill/visual-concept-designer` en el directorio de habilidades de tu agente.

Reinicia tu agente después de instalar. Para verificarlo, pregúntale: `Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."`

Motores de imagen: GPT Image 2 primero, Gemini Nano Banana 2 como respaldo; si tu agente no puede generar imágenes, la habilidad devolverá un prompt listo para copiar o código SVG directo. Consulta `docs/installation.md` para más detalles.

## Uso rápido

Generar una imagen:

```text
Use visual-concept-designer to create an illustration for this business framework: ...
```

Portada de blog en vietnamita (copia y reemplaza título/subtítulo):

```text
Use visual-concept-designer to create a minimal cover for my blog post.
Title: 7 điểm chính từ buổi Cafe Talk Online
Subtitle: Ngày 28/05/2026
```

Solo prompt (pégalo en ChatGPT o en cualquier herramienta de imagen por ti mismo):

```text
Use visual-concept-designer and return only the image prompt for this article: ...
```

Un conjunto completo para un artículo (portada + una ilustración por sección):

```text
Use visual-concept-designer to create a cover plus one illustration per section for this article: ...
```

Más patrones: `docs/usage.md`. Entradas de ejemplo: `examples/input/`. Prompts de ejemplo: `examples/prompts/`.

## Soporte

- ¿Algo se ve mal (acentos vietnamitas, diseño, estilo)? → `docs/troubleshooting.md`
- Preguntas o errores → abre un issue en GitHub
- ¿Quieres añadir un estilo? → `docs/authoring-new-styles.md` y `CONTRIBUTING.md`

## Estado del repositorio

Desarrollo activo. Cada lanzamiento está validado por pruebas estructurales y una rúbrica de evaluación — consulta `docs/release-process.md` y `CHANGELOG.md`.

## Licencia

El código y la documentación tienen licencia MIT. Los recursos de plantilla son generados por IA y están cubiertos por `ASSET_LICENSE.md`.
