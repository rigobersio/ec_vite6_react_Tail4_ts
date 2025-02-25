# Componente NavBar

El componente `NavBar` es un componente de navegación que se encuentra en la parte superior de la aplicación. Proporciona enlaces de navegación tanto para la versión de escritorio como para la versión móvil, y maneja el estado de autenticación del usuario.

## Importaciones

```typescript
import React, { useState, useEffect, Suspense } from 'react';
import { FaTimes, FaUser, FaSignInAlt } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useStore } from '../../store/store';
import { NavLinkRouter, NavLinkScroll, NavCartButton, LanguageSelector } from './NavComponents';
import { useNavigate } from 'react-router-dom';
```

- `React`, `useState`, `useEffect`, `Suspense`: Importaciones de React para manejar el estado, efectos secundarios y carga diferida.
- `FaTimes`, `FaUser`, `FaSignInAlt`, `CiMenuFries`: Iconos de la librería `react-icons`.
- `useStore`: Hook personalizado para acceder al estado global de la aplicación.
- `NavLinkRouter`, `NavLinkScroll`, `NavCartButton`, `LanguageSelector`: Subcomponentes personalizados para la navegación.
- `useNavigate`: Hook de `react-router-dom` para la navegación programática.

### Iconos

- `FaTimes`: Icono de una "X" utilizado para cerrar el menú móvil.
- `FaUser`: Icono de un usuario utilizado para acceder al perfil del usuario.
- `FaSignInAlt`: Icono de una flecha que apunta hacia adentro, utilizado para el enlace de inicio de sesión.
- `CiMenuFries`: Icono de un menú de hamburguesa utilizado para abrir el menú móvil.

## Estado y Hooks

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const { user, role, setUser, setToken, setRole } = useStore();
const navigate = useNavigate();
```

- `isMenuOpen`: Estado para controlar si el menú móvil está abierto o cerrado.
- `user`, `role`, `setUser`, `setToken`, `setRole`: Estado global del usuario y funciones para actualizarlo.
- `navigate`: Función para navegar programáticamente.

# Explicación Detallada del Hook `useEffect` para el Menú Móvil

## 🛠️ ¿Qué es un Hook en React?
Imagina que los **hooks** son como herramientas especiales que nos permiten "enganchar" funcionalidades adicionales a nuestros componentes. `useEffect` es una de estas herramientas, y su propósito principal es manejar **acciones secundarias** en nuestro componente.

### Analogía Cotidiana:
Piensa en `useEffect` como un **asistente personal** que:
1. Prepara todo lo necesario cuando el componente aparece (montaje)
2. Limpia todo cuando el componente desaparece (desmontaje)
3. Se mantiene alerta a cambios específicos para actualizar lo necesario

## 🔍 Análisis del Código del `useEffect`
```typescript
useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
  document.addEventListener('keydown', handleEsc);
  return () => document.removeEventListener('keydown', handleEsc);
}, []);
```

### Paso 1: Entendiendo las Partes Clave
```typescript
() => { ... }  // La función principal del efecto
[]             // Array de dependencias vacío
```

### Paso 2: Desglose Línea por Línea

#### 2.1 Creación del Manejador de Eventos
```typescript
const handleEsc = (e: KeyboardEvent) => 
  e.key === 'Escape' && setIsMenuOpen(false);
```

- `KeyboardEvent`: Tipo de evento cuando se presiona una tecla (TypeScript)
- `e.key`: La tecla específica que se presionó
- `Escape`: Tecla específica que nos interesa detectar
- `setIsMenuOpen(false)`: Función para cerrar el menú móvil

Analogía:
Es como programar un vigilante electrónico que solo reacciona cuando alguien toca la tecla ESC en un teclado virtual.

#### 2.2 Registro del Evento
```typescript
document.addEventListener('keydown', handleEsc);
```

- `document`: Todo el documento/página web
- `addEventListener`: Método para "escuchar" eventos
- `keydown`: Tipo de evento (tecla presionada)
- `handleEsc`: Función a ejecutar cuando ocurre el evento

Ejemplo Visual:
```plaintext
[Tecla ESC presionada] --> [handleEsc se activa] --> [Menú se cierra]
```

#### 2.3 Función de Limpieza
```typescript
return () => document.removeEventListener('keydown', handleEsc);
```

- Importancia: Previene fugas de memoria y comportamientos inesperados
- Ejecución: Cuando el componente se desmonta o antes de re-ejecutar el efecto

Analogía:
Es como quitar la batería de un detector de humo cuando te mudas de casa para que no siga sonando innecesariamente.

#### 2.4 Array de Dependencias Vacío
```typescript
, []); // <-- Este es el array vacío
```

- Significado: El efecto solo se ejecuta una vez (al montar el componente)
- ¿Por qué vacío? No necesita re-ejecutarse porque no depende de valores variables

Comparación:
```plaintext
Con []	Sin []
Ejecución única	Ejecución en cada render
Ideal para configuraciones iniciales	Útil para valores dinámicos
```

### Paso 3: Flujo Completo del Efecto

#### Montaje del Componente:
- Se crea el manejador `handleEsc`
- Se registra el listener para teclas
- El menú está listo para responder a ESC

#### Durante la Vida del Componente:
- Si el usuario presiona ESC → Cierra el menú
- Otros eventos de teclado son ignorados

#### Desmontaje del Componente:
- Se ejecuta la función de limpieza
- Se remueve el listener para teclas
- Se previenen fugas de memoria

Diagrama de Flujo:
```plaintext
graph TD
  A[Componente se Monta] --> B[Registrar Evento ESC]
  B --> C[Usuario Presiona ESC]
  C --> D[Cerrar Menú Móvil]
  A --> E[Componente se Desmonta]
  E --> F[Remover Evento ESC]
```

💡 ¿Por Qué es Importante Este Efecto?
- Accesibilidad: Permite cerrar el menú con teclado
- Experiencia de Usuario: Comportamiento intuitivo (ESC para cerrar)
- Buenas Prácticas: Limpieza adecuada de recursos
- Performance: Evita listeners fantasmas que consumen memoria

🚨 Errores Comunes a Evitar
- Olvidar la limpieza:
  ❌ `removeEventListener` faltante → Múltiples listeners activos
  ✅ Siempre retornar función de limpieza

- Mal manejo de dependencias:
  ❌ `[isMenuOpen]` en dependencias → Re-registro innecesario
  ✅ Array vacío para registro único

- Mala práctica de TypeScript:
  ❌ Usar `any` como tipo de evento
  ✅ Usar tipos específicos como `KeyboardEvent`

🔄 Versión Alternativa con Dependencias
```typescript
// Ejemplo para cuando necesitas reaccionar a cambios
useEffect(() => {
  // Lógica del efecto
}, [dependencia1, dependencia2]); // <-- Dependencias aquí
```

Casos de Uso Típicos:
- Actualizar datos cuando cambia un ID
- Re-calcular dimensiones al cambiar tamaño de pantalla
- Re-conectar a una API cuando cambian credenciales

Información adicional

# Explicación Técnica y Pedagógica del Manejador de Eventos ESC

## 🕹️ ¿Qué es `keydown`?
Es un **tipo de evento** que se dispara cuando una tecla del teclado es presionada. Es parte del sistema de eventos del navegador y funciona así:

| Evento      | Momento de Activación                |
|-------------|--------------------------------------|
| `keydown`   | Cuando la tecla se presiona          |
| `keyup`     | Cuando la tecla se suelta            |
| `keypress`  | Cuando una tecla con carácter se mantiene presionada |

**Ejemplo Práctico:**
```javascript
// Cuando presionas la tecla 'A':
// 1. keydown -> 'A' está siendo presionada
// 2. keypress -> 'A' se mantiene presionada
// 3. keyup -> 'A' fue liberada
```

🎯 `e.key === 'Escape'`: La Magia Detrás
- ¿Por qué 'Escape' en inglés?
  - Estándar Web: Los nombres de teclas están definidos en inglés en las especificaciones de DOM
  - Independencia de Idioma: Funciona igual en teclados españoles, alemanes, etc.

Lista de Nombres Comunes:
| Tecla Física | Valor de `e.key` |
|--------------|------------------|
| ESC          | 'Escape'         |
| ENTER        | 'Enter'          |
| ESPACIO      | ' ' (espacio)    |
| FLECHAS      | 'ArrowUp', etc.  |

### El Operador `===`
Es el operador de igualdad estricta en JavaScript:
```javascript
5 === 5    // true
'5' === 5  // false (diferente tipo)
null === undefined // false
```

### El Operador Lógico `&&`
Conocido como AND lógico, funciona así:
```javascript
condición && acción();
```

- Si condición es verdadera → Ejecuta acción()
- Si es falsa → No hace nada

Equivalente a:
```javascript
if (condición) {
  acción();
}
```

Ejemplo concreto:
```javascript
e.key === 'Escape' && setIsMenuOpen(false);
// Paso a paso:
// 1. Verifica si e.key es 'Escape'
// 2. Si es verdadero → Ejecuta setIsMenuOpen(false)
// 3. Si es falso → Ignora el resto
```

### Ciclo de Vida del Event Listener

#### 1. Registro del Evento (`addEventListener`)
```javascript
document.addEventListener('keydown', handleEsc);
```

- Objetivo: Documento HTML completo
- Evento a Escuchar: `keydown` (tecla presionada)
- Manejador: Función `handleEsc`
- Momento de Activación: Cuando el componente se monta (aparece en pantalla)

#### 2. Eliminación del Evento (`removeEventListener`)
```javascript
return () => document.removeEventListener('keydown', handleEsc);
```

- Momento de Ejecución:
  - Al desmontar el componente (desaparece de pantalla)
  - Antes de una nueva ejecución del efecto (si las dependencias cambian)
- Importancia: Evita que múltiples listeners estén activos simultáneamente

Diagrama de Tiempo:
```plaintext
sequenceDiagram
  participant Componente
  participant Navegador

  Componente->>Navegador: Montaje: addEventListener
  Navegador->>Componente: ESC presionado → handleEsc
  Componente->>Navegador: Desmontaje: removeEventListener
  Navegador-->>Componente: Listener removido
```

🧪 Casos de Prueba

#### Escenario 1: Usuario presiona ESC
- Tecla Presionada: ESC
- Proceso:
  1. Navegador detecta `keydown`
  2. Dispara evento con `e.key = 'Escape'`
  3. `handleEsc` verifica igualdad → true
  4. `setIsMenuOpen(false)` ejecuta
- Resultado: Menú se cierra

#### Escenario 2: Usuario presiona Enter
- Tecla Presionada: ENTER
- Proceso:
  1. Navegador detecta `keydown`
  2. Dispara evento con `e.key = 'Enter'`
  3. `handleEsc` verifica igualdad → false
  4. `&&` no ejecuta nada
- Resultado: Menú permanece igual

## Función de Logout

```typescript
const handleLogout = () => {
  setUser(null);
  setToken(null);
  setRole(null);
  setIsMenuOpen(false);
  navigate('/products');
};
```

La función `handleLogout` cierra la sesión del usuario, resetea el estado global y navega a la página de productos.

## Retorno del Componente

## Contenedores principales

```typescript
return (
  <nav className="fixed w-full h-[var(--nav-height)] z-50 top-0 bg-[var(--dark-green)] border-b border-[var(--medium-green)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
     ...
```

### Etiquetas HTML

Son "bloques" que definen partes de una página web, como cajas que contienen cosas:

- `<nav>`: Es una caja especial para menús de navegación (enlaces, logos, botones).

  Ejemplo visual: La barra superior de Netflix con el logo y "Inicio", "Series", "Películas".

- `<div>`: Es una caja genérica para agrupar elementos.

  Ejemplo: Como un recipiente vacío donde pones otros elementos (texto, imágenes).

### Atributo `className`

Es la forma de asignar clases CSS a una etiqueta en React (en HTML normal se usa `class`, pero React usa `className` por razones técnicas). Estas clases definen el estilo visual.

Ejemplo simplificado:

```html
<div className="fondo-rojo texto-blanco">Hola</div>
```

Traducción: "Haz que este `div` tenga fondo rojo y texto blanco".

### Análisis más detallado del código (como si fuera una receta)

#### Etiqueta `<nav>` (nuestra "barra pegajosa")

Vamos a desglosar y analizar algunos elementos del código proporcionado, clasificando algunas de las clases de Tailwind CSS y explicando alternativas. Separaremos el análisis en dos partes:

```html
<nav className="fixed w-full h-[var(--nav-height)] z-50 top-0 bg-[var(--dark-green)] border-b border-[var(--medium-green)]">
```

- **Clase `top`**: La clase `top` se utiliza para controlar la propiedad CSS `top` de un elemento posicionado. Las posiciones de un elemento pueden ser: `relative`, `absolute`, `fixed` y `sticky`. En CSS (y por extensión, en Tailwind CSS) definen cómo se posicionan los elementos en relación con otros elementos y con la ventana del navegador.

    - `relative`: Se usa para ajustes menores dentro del flujo normal del documento. La clase `relative` posiciona un elemento en relación a su posición normal en el flujo del documento. Cuando aplicas `relative` a un elemento, puedes usar propiedades como `top`, `right`, `bottom`, y `left` para desplazarlo desde su posición original sin afectar el flujo de los elementos circundantes.
    - `absolute`: Se usa para posicionar elementos de manera precisa dentro de un contenedor. Se posiciona en relación con su ancestro posicionado más cercano (es decir, el ancestro más cercano que no sea `static`). Si no hay ancestros posicionados, se posiciona en relación con el contenedor inicial (la ventana del navegador). Cuando aplicas `absolute` a un elemento, lo sacas del flujo normal del documento.
    - `fixed`: Se posiciona en relación con la ventana del navegador y no se ve afectado por el desplazamiento de la página.
    - `sticky`: Se comporta como `relative` hasta que cruza un umbral específico (definido por `top`, `right`, `bottom` o `left`), momento en el cual se comporta como `fixed`.

  Para pantallas no tan anchas, considera ajustar el ancho máximo del contenedor utilizando clases de Tailwind CSS como `max-w-screen-md` o `max-w-screen-sm` para limitar el ancho del contenido y mejorar la legibilidad en dispositivos más pequeños.

  Los valores de `top` van desde `0` hasta `64` y van agregando `4px` por lo cual un `top-64` son `64 * 4px` de `top`.

- **Clase `z`**: Se utiliza para controlar la propiedad `z-index` de un elemento, que determina el orden de apilamiento de los elementos en el eje Z.

  - `z-0`: `z-index: 0;`
  - `z-10`: `z-index: 10;`
  - `z-20`: `z-index: 20;`
  - `z-30`: `z-index: 30;`
  - `z-40`: `z-index: 40;`
  - `z-50`: `z-index: 50;`
  - `z-auto`: `z-index: auto;`


- **Bordes**:
  - `border`: Añade un borde a un elemento.
  - `border-t`: Añade un borde superior.
  - `border-r`: Añade un borde derecho.
  - `border-b`: Añade un borde inferior.
  - `border-l`: Añade un borde izquierdo.

- **Eliminar Bordes**:
  - `border-none`: Elimina todos los bordes.
  - `border-t-0`: Elimina el borde superior.
  - `border-r-0`: Elimina el borde derecho.
  - `border-b-0`: Elimina el borde inferior.
  - `border-l-0`: Elimina el borde izquierdo.

- **Grosor del Borde**:
  - `border-2`: Establece el grosor del borde a 2px.
  - `border-4`: Establece el grosor del borde a 4px.
  - `border-8`: Establece el grosor del borde a 8px.

- **Color del Borde**:
  - `border-gray-500`: Establece el color del borde a gris oscuro.
  - `border-red-500`: Establece el color del borde a rojo.
  - `border-blue-500`: Establece el color del borde a azul.

- **Estilo del Borde**:
  - `border-solid`: Establece el estilo del borde a sólido.
  - `border-dashed`: Establece el estilo del borde a discontinuo.
  - `border-dotted`: Establece el estilo del borde a punteado.
  - `border-double`: Establece el estilo del borde a doble.

- **Radio del Borde (Borde Redondeado)**:
  - `rounded`: Añade un radio de borde pequeño.
  - `rounded-lg`: Añade un radio de borde grande.
  - `rounded-full`: Añade un radio de borde completo (círculo).
  - `rounded-t`: Añade un radio de borde solo en la parte superior.
  - `rounded-r`: Añade un radio de borde solo en la parte derecha.
  - `rounded-b`: Añade un radio de borde solo en la parte inferior.
  - `rounded-l`: Añade un radio de borde solo en la parte izquierda.


## Etiqueta `<div>` Interna

```html
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
```

### Clases de Tailwind para el Ancho y el Alto

#### Ancho (Width)
- `w-auto`: Ancho automático.
- `w-1`: Ancho de 0.25rem.
- `w-2`: Ancho de 0.5rem.
- `w-4`: Ancho de 1rem.
- `w-8`: Ancho de 2rem.
- `w-16`: Ancho de 4rem.
- `w-32`: Ancho de 8rem.
- `w-64`: Ancho de 16rem.
- `w-1/2`: Ancho del 50% del contenedor.
- `w-1/3`: Ancho del 33.333% del contenedor.
- `w-2/3`: Ancho del 66.666% del contenedor.
- `w-1/4`: Ancho del 25% del contenedor.
- `w-3/4`: Ancho del 75% del contenedor.
- `w-full`: Ancho del 100% del contenedor.
- `w-screen`: Ancho del 100% del viewport.

#### Alto (Height)
- `Lo mismo pero con h`.

### Ancho Máximo (Max Width)
- `max-w-none`: Sin ancho máximo.
- `max-w-xs`: Ancho máximo de 20rem.
- `max-w-sm`: Ancho máximo de 24rem.
- `max-w-md`: Ancho máximo de 28rem.
- `max-w-lg`: Ancho máximo de 32rem.
- `max-w-xl`: Ancho máximo de 36rem.
- `max-w-2xl`: Ancho máximo de 42rem.
- `max-w-3xl`: Ancho máximo de 48rem.
- `max-w-4xl`: Ancho máximo de 56rem.
- `max-w-5xl`: Ancho máximo de 64rem.
- `max-w-6xl`: Ancho máximo de 72rem.
- `max-w-7xl`: Ancho máximo de 80rem.
- `max-w-full`: Ancho máximo del 100% del contenedor.
- `max-w-screen-sm`: Ancho máximo de 640px.
- `max-w-screen-md`: Ancho máximo de 768px.
- `max-w-screen-lg`: Ancho máximo de 1024px.
- `max-w-screen-xl`: Ancho máximo de 1280px.
- `max-w-screen-2xl`: Ancho máximo de 1536px.

### Alto Máximo (Max Height)
- `max-h-none`: Sin alto máximo.
- `max-h-xs`: Alto máximo de 20rem.
- `max-h-sm`: Alto máximo de 24rem.
- `max-h-md`: Alto máximo de 28rem.
- `max-h-lg`: Alto máximo de 32rem.
- `max-h-xl`: Alto máximo de 36rem.
- `max-h-2xl`: Alto máximo de 42rem.
- `max-h-3xl`: Alto máximo de 48rem.
- `max-h-4xl`: Alto máximo de 56rem.
- `max-h-5xl`: Alto máximo de 64rem.
- `max-h-6xl`: Alto máximo de 72rem.
- `max-h-7xl`: Alto máximo de 80rem.
- `max-h-full`: Alto máximo del 100% del contenedor.
- `max-h-screen`: Alto máximo del 100% del viewport.

### Ancho Mínimo (Min Width)
- `min-w-0`: Ancho mínimo de 0.
- `min-w-full`: Ancho mínimo del 100% del contenedor.
- `min-w-min`: Ancho mínimo del contenido.
- `min-w-max`: Ancho mínimo del contenido máximo.

### Alto Mínimo (Min Height)
- `min-h-0`: Alto mínimo de 0.
- `min-h-full`: Alto mínimo del 100% del contenedor.
- `min-h-screen`: Alto mínimo del 100% del viewport.

Tailwind CSS proporciona una serie de clases utilitarias para trabajar con el modelo de caja flexible (flexbox). Aquí te explico las clases relacionadas con `display`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items` y `align-content`:

### Display

- `flex`: Establece el contenedor como un contenedor flexible (flex container). Esto permite que los elementos hijos se comporten como elementos flexibles (flex items).
- `inline-flex`: Establece el contenedor como un contenedor flexible en línea (inline flex container). Esto permite que los elementos hijos se comporten como elementos flexibles (flex items) dentro de un contenedor que se comporta como un elemento en línea.

### Flex Direction

- `flex-row`: Establece la dirección de los elementos flexibles en fila (de izquierda a derecha).
- `flex-row-reverse`: Establece la dirección de los elementos flexibles en fila inversa (de derecha a izquierda).
- `flex-col`: Establece la dirección de los elementos flexibles en columna (de arriba a abajo).
- `flex-col-reverse`: Establece la dirección de los elementos flexibles en columna inversa (de abajo a arriba).

### Flex Wrap

- `flex-wrap`: Permite que los elementos flexibles se envuelvan en múltiples líneas.
- `flex-wrap-reverse`: Permite que los elementos flexibles se envuelvan en múltiples líneas en orden inverso.
- `flex-nowrap`: Evita que los elementos flexibles se envuelvan y se mantengan en una sola línea.

### Justify Content

- `justify-start`: Alinea los elementos flexibles al inicio del contenedor.
- `justify-end`: Alinea los elementos flexibles al final del contenedor.
- `justify-center`: Centra los elementos flexibles en el contenedor.
- `justify-between`: Distribuye los elementos flexibles con espacio entre ellos.
- `justify-around`: Distribuye los elementos flexibles con espacio alrededor de ellos.
- `justify-evenly`: Distribuye los elementos flexibles con espacio igual entre ellos y en los extremos.

### Align Items

- `items-start`: Alinea los elementos flexibles al inicio del contenedor en el eje transversal.
- `items-end`: Alinea los elementos flexibles al final del contenedor en el eje transversal.
- `items-center`: Centra los elementos flexibles en el contenedor en el eje transversal.
- `items-baseline`: Alinea los elementos flexibles según su línea base.
- `items-stretch`: Estira los elementos flexibles para que ocupen todo el contenedor en el eje transversal.

### Align Content

- `content-start`: Alinea las líneas de elementos flexibles al inicio del contenedor.
- `content-end`: Alinea las líneas de elementos flexibles al final del contenedor.
- `content-center`: Centra las líneas de elementos flexibles en el contenedor.
- `content-between`: Distribuye las líneas de elementos flexibles con espacio entre ellas.
- `content-around`: Distribuye las líneas de elementos flexibles con espacio alrededor de ellas.
- `content-evenly`: Distribuye las líneas de elementos flexibles con espacio igual entre ellas y en los extremos.

### Breakpoints en Tailwind CSS

Tailwind CSS utiliza breakpoints para crear diseños responsivos, permitiendo aplicar estilos específicos según el tamaño de la pantalla. Los breakpoints predeterminados son:

- `sm`: 640px y superiores.
- `md`: 768px y superiores.
- `lg`: 1024px y superiores.
- `xl`: 1280px y superiores.

Cada breakpoint incluye los tamaños de pantalla más grandes. Por ejemplo, `sm` se aplica a pantallas de 640px en adelante, incluyendo `md`, `lg`, y `xl`. Puedes ajustar estos valores en la configuración de Tailwind CSS para adaptarlos a las necesidades específicas de tu proyecto.
