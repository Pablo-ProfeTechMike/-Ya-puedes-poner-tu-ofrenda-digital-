# 🕯️ Altar de Día de Muertos Interactivo

Una ofrenda digital inspirada en la tradición mexicana del Día de Muertos, hecha con **HTML5, CSS3 y JavaScript puro**, sin librerías ni frameworks.

![Vista previa del altar](preview.png)

> *"Nadie muere mientras se le recuerda."*

🔗 **Ofrenda:** [https://github.com/Pablo-ProfeTechMike/-Ya-puedes-poner-tu-ofrenda-digital-](https://pablo-profetechmike.github.io/-Ya-puedes-poner-tu-ofrenda-digital-/)

---

## ✨ Características

- 🏛️ **Altar de 3 niveles**: fotografías (superior), ofrendas (medio) y velas con cruz de sal (inferior).
- 🎏 **Papel picado animado** con balanceo sutil en CSS.
- 🕯️ **Velas que se encienden** con efecto de parpadeo (`@keyframes`) y resplandor cálido.
- 🌼 **Lluvia de pétalos de cempasúchil** al encender la ofrenda.
- 📸 **Fotografías propias**: sube una o varias imágenes, edita el nombre debajo de cada una y quítalas con un clic.
- 🍞 **Ofrendas con imagen** (pan de muerto, calaveritas, agua y platillo), reemplazables por tus propias fotos.
- ➕ **Añade ofrendas nuevas** con nombre, imagen y significado personalizado.
- 💬 **Tooltips informativos** que explican el significado tradicional de cada elemento.
- 🎶 **Sonido ambiental generado con la Web Audio API** (dron suave, notas tipo caja de música con eco y chasquidos de vela), sin archivos de audio.
- 🎵 **Música propia**: carga tu archivo de audio para reemplazar el ambiente generado.
- 📱 **Responsivo y accesible**: funciona en móvil y escritorio, con navegación por teclado y respeto a `prefers-reduced-motion`.

---

## 🗂️ Estructura del proyecto

```
altar-dia-de-muertos/
├── index.html    # Estructura semántica del altar
├── styles.css    # Estilos, paleta y animaciones
├── script.js     # Interactividad, partículas, tooltips y sonido
├── preview.png   # Captura para el README (opcional)
└── README.md
```

---

## 🚀 Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone  https://github.com/Pablo-ProfeTechMike/-Ya-puedes-poner-tu-ofrenda-digital-.git
   ```
2. Entra a la carpeta:
   ```bash
   cd altar-dia-de-muertos
   ```
3. Abre `index.html` en tu navegador. No necesitas instalar nada.

> 💡 Solo necesitas internet para cargar las fuentes de Google Fonts. Sin conexión se usa una tipografía serif de respaldo.

---

## 🎮 Cómo usarlo

| Acción | Cómo hacerlo |
|---|---|
| Encender las velas y el sonido | Botón **🕯️ Encender Ofrenda** |
| Añadir fotos de tus seres queridos | Botón **📷 Añadir fotografías** |
| Cambiar el nombre de una foto | Haz clic sobre el texto bajo la foto |
| Cambiar la imagen de una ofrenda | Botón **📷** en la esquina de la ofrenda |
| Añadir una ofrenda nueva | Botón **➕ Añadir ofrenda** |
| Ver el significado de un elemento | Pasa el cursor, enfócalo con teclado o tócalo |
| Silenciar o ajustar volumen | Panel de sonido (esquina inferior derecha) |
| Usar tu propia música | Botón **🎵** del panel de sonido |

---

## 🎨 Personalización

**Paleta de colores** (en `styles.css`):

```css
:root {
  --naranja: #FF6F00;   /* Cempasúchil */
  --morado:  #4A148C;   /* Papel picado */
  --oro:     #FFD54F;   /* Luz de las velas */
  --negro:   #0d0614;   /* Noche */
}
```

**Imágenes fijas para las ofrendas** (en `script.js`, dentro de `OFRENDAS_BASE`):

```js
{ nombre: 'Pan de muerto', img: 'img/pan.png', tip: '...' }
```

---

## 🧰 Tecnologías

- **HTML5** semántico
- **CSS3**: Flexbox, variables CSS, `clip-path`, `@keyframes`
- **JavaScript (Vanilla)**: DOM, delegación de eventos, `URL.createObjectURL`
- **Web Audio API** para el sonido generativo

---

## ⚠️ Notas

- Las fotos y ofrendas añadidas **no se guardan** al recargar la página; viven solo en la sesión actual.
- Los navegadores bloquean el audio hasta que hay una interacción del usuario, por eso el sonido empieza al pulsar **Encender Ofrenda**.

---

## 🗺️ Ideas a futuro

- [ ] Guardar fotos y ofrendas con `localStorage` o IndexedDB
- [ ] Descargar el altar como imagen
- [ ] Modo de cuatro elementos (agua, fuego, tierra y viento)
- [ ] Más temas de papel picado y flores
- [ ] Versión en inglés

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Abre un *issue* para sugerir mejoras o envía un *pull request*.

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b mejora/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m "Añade nueva función"`)
4. Haz push (`git push origin mejora/nueva-funcion`)
5. Abre un Pull Request

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

## 👤 Autor

**[Pablo Adrián Herrera Amieva]**
- GitHub: [Pablo-ProfeTechMike](https://github.com/Pablo-ProfeTechMike/-Ya-puedes-poner-tu-ofrenda-digital-)
- LinkedIn: [Pablo Adrián Herrera Amieva](www.linkedin.com/in/pablo-adrián-herrera-amieva-a86117184)

---

<p align="center">Hecho con 🧡 y 💜 para honrar la memoria de quienes ya partieron.</p>
