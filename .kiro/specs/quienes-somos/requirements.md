# Documento de Requisitos

## Introducción

La página "Quiénes Somos" de **Fronthers** es una sección corporativa clave que comunica la identidad, valores, equipo y propuesta de valor de la agencia de desarrollo de software. Actualmente la página existe pero está casi vacía. El objetivo es desarrollarla de forma profesional, estructurada y visualmente coherente con el resto del sitio, usando React 19, Bootstrap 5 y el sistema de componentes ya existente (Navbar, Footer).

---

## Glosario

- **Página_Somos**: El componente React ubicado en `src/pages/Somos.jsx` que representa la sección "Quiénes Somos" del sitio Fronthers.
- **Hero_Section**: Sección de cabecera visual con imagen de fondo, título principal y subtítulo de la página.
- **Mision_Vision**: Bloque que presenta la misión y visión de la empresa en tarjetas o columnas diferenciadas.
- **Valores**: Bloque que lista los valores corporativos de Fronthers con íconos representativos.
- **Equipo**: Sección que presenta a los miembros del equipo con foto, nombre y rol.
- **CTA**: Llamada a la acción (Call To Action) que invita al usuario a contactar a Fronthers.
- **Navbar**: Componente de navegación superior compartido, ya existente en `src/components/navbar.jsx`.
- **Footer**: Componente de pie de página compartido, ya existente en `src/components/footer.jsx`.
- **Tarjeta_Miembro**: Subcomponente visual que representa a un integrante del equipo.
- **Tarjeta_Valor**: Subcomponente visual que representa un valor corporativo con ícono y descripción.

---

## Requisitos

### Requisito 1: Hero Section

**User Story:** Como visitante del sitio, quiero ver una sección de cabecera impactante al entrar a "Quiénes Somos", para entender de inmediato de qué trata la empresa y sentirme atraído a seguir leyendo.

#### Criterios de Aceptación

1. THE Página_Somos SHALL renderizar una Hero_Section como primer bloque visible debajo del Navbar.
2. WHEN el usuario accede a la ruta `/somos`, THE Hero_Section SHALL mostrar un título principal con el texto "¿Quiénes Somos?" y un subtítulo descriptivo de la empresa.
3. THE Hero_Section SHALL ocupar al menos el 60% del alto de la ventana del navegador (min-height: 60vh).
4. THE Hero_Section SHALL aplicar una imagen de fondo o degradado oscuro con texto en color claro para garantizar contraste legible.
5. WHEN la pantalla tiene un ancho menor a 768px, THE Hero_Section SHALL adaptar el tamaño del texto y el layout usando las clases responsivas de Bootstrap 5.

---

### Requisito 2: Misión y Visión

**User Story:** Como visitante, quiero conocer la misión y visión de Fronthers, para evaluar si sus objetivos se alinean con mis necesidades como cliente.

#### Criterios de Aceptación

1. THE Página_Somos SHALL renderizar un bloque Mision_Vision con dos columnas o tarjetas diferenciadas: una para Misión y otra para Visión.
2. THE Mision_Vision SHALL mostrar un ícono o elemento visual distintivo para cada columna.
3. THE Mision_Vision SHALL mostrar un título ("Misión" / "Visión") y un párrafo descriptivo en cada columna.
4. WHEN la pantalla tiene un ancho menor a 768px, THE Mision_Vision SHALL apilar las columnas verticalmente usando el sistema de grilla de Bootstrap 5.

---

### Requisito 3: Valores Corporativos

**User Story:** Como visitante, quiero conocer los valores de Fronthers, para entender la cultura y principios que guían su trabajo.

#### Criterios de Aceptación

1. THE Página_Somos SHALL renderizar un bloque Valores con un mínimo de 4 Tarjeta_Valor.
2. THE Tarjeta_Valor SHALL mostrar un ícono de Bootstrap Icons, un título del valor y una descripción breve de máximo 2 líneas.
3. THE Valores SHALL distribuir las tarjetas en una grilla responsiva: 4 columnas en escritorio, 2 en tablet y 1 en móvil.
4. WHEN el usuario visualiza el bloque Valores, THE Página_Somos SHALL mostrar un título de sección visible antes de las tarjetas.

---

### Requisito 4: Presentación del Equipo

**User Story:** Como visitante, quiero conocer a las personas detrás de Fronthers, para generar confianza y saber con quién estaría trabajando.

#### Criterios de Aceptación

1. THE Página_Somos SHALL renderizar un bloque Equipo con un mínimo de 3 Tarjeta_Miembro.
2. THE Tarjeta_Miembro SHALL mostrar una imagen de perfil, el nombre completo del miembro y su rol dentro de la empresa.
3. THE Tarjeta_Miembro SHALL mostrar la imagen con formato circular o con bordes redondeados.
4. THE Equipo SHALL distribuir las tarjetas en una grilla responsiva: 3 columnas en escritorio, 2 en tablet y 1 en móvil.
5. WHEN la imagen de un miembro no está disponible, THE Tarjeta_Miembro SHALL mostrar un avatar genérico como imagen de reemplazo.

---

### Requisito 5: Llamada a la Acción (CTA)

**User Story:** Como visitante que terminó de leer la página, quiero tener una forma directa de contactar a Fronthers, para iniciar una conversación sobre un proyecto.

#### Criterios de Aceptación

1. THE Página_Somos SHALL renderizar un bloque CTA al final del contenido, antes del Footer.
2. THE CTA SHALL mostrar un título motivador y un botón que redirija a la ruta `/contactos` usando React Router DOM.
3. THE CTA SHALL aplicar un fondo visualmente diferenciado (color sólido o degradado) para destacarlo del resto del contenido.
4. WHEN el usuario hace clic en el botón del CTA, THE Página_Somos SHALL navegar a la ruta `/contactos` sin recargar la página.

---

### Requisito 6: Consistencia Visual y Responsividad

**User Story:** Como visitante, quiero que la página "Quiénes Somos" sea visualmente coherente con el resto del sitio y funcione correctamente en cualquier dispositivo, para tener una experiencia de usuario fluida.

#### Criterios de Aceptación

1. THE Página_Somos SHALL utilizar el Navbar y el Footer existentes sin modificarlos.
2. THE Página_Somos SHALL aplicar estilos en `Somos.css` sin afectar estilos globales de otras páginas.
3. THE Página_Somos SHALL ser completamente funcional en resoluciones de 320px, 768px y 1280px de ancho.
4. WHEN el Navbar está en posición `fixed-top`, THE Página_Somos SHALL aplicar un padding-top suficiente al primer bloque de contenido para que no quede oculto detrás del Navbar.
5. THE Página_Somos SHALL usar exclusivamente clases de Bootstrap 5 para el layout y estilos base, complementando con clases personalizadas en `Somos.css` solo cuando Bootstrap no sea suficiente.
