# Plan de Implementación: Quiénes Somos

## Visión General

Transformar el componente `Somos.jsx` (actualmente casi vacío) en una página corporativa completa con Hero, Misión/Visión, Valores, Equipo y CTA, usando React 19, Bootstrap 5 y el sistema de componentes existente.

## Tareas

- [x] 1. Configurar entorno de testing
  - Instalar dependencias de desarrollo: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom` y `fast-check`
  - Configurar `vite.config.js` para incluir el entorno de test con jsdom
  - Crear el archivo `src/pages/__tests__/` con los archivos de test vacíos: `Somos.example.test.jsx` y `Somos.property.test.jsx`
  - _Requisitos: 3.1, 3.2, 4.1, 4.2, 4.5_

- [x] 2. Implementar datos estáticos y estructura base de Somos.jsx
  - Definir las constantes `VALORES` (4 ítems) y `EQUIPO` (3 ítems) en la parte superior de `Somos.jsx` según los modelos del diseño
  - Definir la constante `AVATAR_FALLBACK` con una URL de placeholder SVG
  - Reemplazar el contenido actual del componente `Somos` con la estructura de secciones en orden: `<Navbar />`, Hero, Misión/Visión, Valores, Equipo, CTA, `<Footer />`
  - _Requisitos: 1.1, 6.1_

- [x] 3. Implementar la Hero Section
  - Añadir el bloque JSX de la Hero Section con clase `hero-somos`, título "¿Quiénes Somos?" y subtítulo descriptivo
  - Añadir en `Somos.css` la clase `.hero-somos` con `min-height: 60vh`, imagen de fondo o degradado oscuro, texto centrado en color blanco y `padding-top` para compensar el Navbar `fixed-top`
  - _Requisitos: 1.1, 1.2, 1.3, 1.4, 1.5, 6.4_

- [x] 4. Implementar la sección Misión y Visión
  - Añadir el bloque JSX con dos columnas Bootstrap (`col-12 col-md-6`) dentro de un `row`
  - Cada columna debe incluir un ícono Bootstrap Icons, un título (`h3`) y un párrafo descriptivo
  - _Requisitos: 2.1, 2.2, 2.3, 2.4_

- [x] 5. Implementar la sección Valores con TarjetaValor
  - Añadir el bloque JSX de la sección Valores con un título de sección visible
  - Renderizar el array `VALORES` mapeando cada ítem a una tarjeta inline con ícono `<i>`, título y descripción
  - Aplicar grid responsivo: `col-12 col-sm-6 col-lg-3` a cada tarjeta
  - Añadir atributo `data-testid="tarjeta-valor"` a cada tarjeta para facilitar los tests
  - _Requisitos: 3.1, 3.2, 3.3, 3.4_

  - [ ]* 5.1 Escribir test de propiedad: Renderizado completo de tarjetas de valores
    - **Propiedad 1: Para cualquier array de N valores (N ≥ 1), se renderizan exactamente N tarjetas**
    - Usar `fc.array` con `minLength: 1` y verificar `getAllByTestId('tarjeta-valor').length === N`
    - **Valida: Requisito 3.1**

  - [ ]* 5.2 Escribir test de propiedad: Estructura completa de TarjetaValor
    - **Propiedad 2: Para cualquier objeto con `icon`, `titulo` y `descripcion`, la tarjeta muestra los tres elementos**
    - Verificar presencia de `<i>`, texto del título y texto de la descripción en el DOM
    - **Valida: Requisito 3.2**

- [x] 6. Implementar la sección Equipo con TarjetaMiembro
  - Añadir el bloque JSX de la sección Equipo con un título de sección visible
  - Renderizar el array `EQUIPO` mapeando cada ítem a una tarjeta inline con imagen (o avatar fallback), nombre y rol
  - Aplicar grid responsivo: `col-12 col-sm-6 col-md-4` a cada tarjeta
  - Implementar el handler `onError` en `<img>` para reemplazar con `AVATAR_FALLBACK` cuando la imagen falla
  - Aplicar clase `rounded-circle` a la imagen de perfil
  - Añadir atributo `data-testid="tarjeta-miembro"` a cada tarjeta para facilitar los tests
  - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 6.1 Escribir test de propiedad: Renderizado completo de tarjetas de equipo
    - **Propiedad 3: Para cualquier array de N miembros (N ≥ 1), se renderizan exactamente N tarjetas**
    - Usar `fc.array` con `minLength: 1` y verificar `getAllByTestId('tarjeta-miembro').length === N`
    - **Valida: Requisito 4.1**

  - [ ]* 6.2 Escribir test de propiedad: Estructura completa de TarjetaMiembro con datos válidos
    - **Propiedad 4: Para cualquier miembro con `nombre`, `rol` y `foto` no nulos, la tarjeta muestra nombre, rol e imagen con la URL proporcionada**
    - Verificar presencia del nombre, rol e `img[src]` con la URL de foto en el DOM
    - **Valida: Requisito 4.2**

  - [ ]* 6.3 Escribir test de propiedad: Fallback de avatar para foto ausente
    - **Propiedad 5: Para cualquier miembro con `foto` null, undefined o cadena vacía, se muestra el avatar genérico**
    - Usar `fc.oneof(fc.constant(null), fc.constant(undefined), fc.constant(''))` para el campo `foto`
    - Verificar que `img.src` contiene la URL del avatar fallback
    - **Valida: Requisito 4.5**

- [x] 7. Checkpoint — Verificar que todos los tests pasan
  - Asegurarse de que todos los tests pasan, consultar al usuario si surgen dudas.

- [x] 8. Implementar la sección CTA
  - Añadir el bloque JSX de la sección CTA con fondo de color diferenciado, título motivador y botón Bootstrap
  - Usar `<Link to="/contactos">` de React Router DOM dentro del botón para navegación sin recarga
  - _Requisitos: 5.1, 5.2, 5.3, 5.4_

- [x] 9. Completar estilos en Somos.css y verificar responsividad
  - Revisar y completar `Somos.css` con los estilos personalizados necesarios que Bootstrap no cubre (colores de marca, espaciados específicos, fondo del CTA)
  - Verificar que los estilos no afectan otras páginas (usar clases con prefijo o scope específico de la página)
  - Verificar el layout en los breakpoints 320px, 768px y 1280px
  - _Requisitos: 6.2, 6.3, 6.5_

- [x] 10. Escribir tests de ejemplo (Somos.example.test.jsx)
  - Verificar que `<Navbar>` y `<Footer>` están presentes en el DOM
  - Verificar que el Hero renderiza el título "¿Quiénes Somos?" y un subtítulo
  - Verificar que la sección Hero tiene la clase `hero-somos`
  - Verificar que la sección Misión/Visión tiene dos columnas con íconos, títulos y párrafos
  - Verificar que la sección Valores tiene un título de sección visible
  - Verificar que el CTA contiene un `<Link to="/contactos">`
  - Verificar que la imagen del miembro tiene clase `rounded-circle`
  - _Requisitos: 1.1, 1.2, 2.1, 2.2, 3.4, 4.3, 5.2, 6.1_

- [x] 11. Checkpoint final — Asegurarse de que todos los tests pasan
  - Asegurarse de que todos los tests pasan, consultar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia los requisitos específicos para trazabilidad
- Los tests de propiedades usan `fast-check` con Vitest como runner (100 iteraciones mínimo)
- Los tests de ejemplo usan Vitest + React Testing Library
- Los `data-testid` en las tarjetas son necesarios para que los tests de propiedades funcionen correctamente
