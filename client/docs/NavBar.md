<!-- Tabla de Contenido -->
## Tabla de Contenido destacado
1. [Importaciones](#importaciones)
2. [Iconos](#iconos)
3. [Estado y Hooks](#estado-y-hooks)
4. [Explicación Detallada del Hook useEffect](#explicación-detallada-del-hook-useeffect)
5. [Función de Logout](#función-de-logout)
6. [Retorno del Componente](#retorno-del-componente)
7. [Sección User Desktop](#sección-user-desktop)
8. [NavCartButton y LanguageSelector](#navcartbutton-y-languageselector)
9. [Interfaces en TypeScript](#interfaces-en-typescript)
10. [Aria-label](#aria-label)

El componente `NavBar` es un componente de navegación que se encuentra en la parte superior de la aplicación. Proporciona enlaces de navegación tanto para la versión de escritorio como para la versión móvil, y maneja el estado de autenticación del usuario.

### Importaciones

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

### Estado y Hooks

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const { user, role, setUser, setToken, setRole } = useStore();
const navigate = useNavigate();
```

- `isMenuOpen`: Estado para controlar si el menú móvil está abierto o cerrado.
- `user`, `role`, `setUser`, `setToken`, `setRole`: Estado global del usuario y funciones para actualizarlo.
- `navigate`: Función para navegar programáticamente.

## Explicación Detallada del Hook `useEffect`

### ¿Qué es un Hook en React?
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

## Explicación Técnica y Pedagógica del Manejador de Eventos ESC

### 🕹️ ¿Qué es `keydown`?
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

### Contenedores principales

```typescript
return (
  <nav className="fixed w-full h-[var(--nav-height)] z-50 top-0 bg-[var(--dark-green)] border-b border-[var(--medium-green)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
     ...
```

#### Etiquetas HTML

Son "bloques" que definen partes de una página web, como cajas que contienen cosas:

- `<nav>`: Es una caja especial para menús de navegación (enlaces, logos, botones).

  Ejemplo visual: La barra superior de Netflix con el logo y "Inicio", "Series", "Películas".

- `<div>`: Es una caja genérica para agrupar elementos.

  Ejemplo: Como un recipiente vacío donde pones otros elementos (texto, imágenes).

#### Atributo `className`

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


#### Etiqueta `<div>` Interna

```html
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
```

##### Clases de Tailwind para el Ancho y el Alto

###### Ancho (Width)
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

###### Alto (Height)
- `Lo mismo pero con h`.

##### Ancho Máximo (Max Width)
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

##### Alto Máximo (Max Height)
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

##### Ancho Mínimo (Min Width)
- `min-w-0`: Ancho mínimo de 0.
- `min-w-full`: Ancho mínimo del 100% del contenedor.
- `min-w-min`: Ancho mínimo del contenido.
- `min-w-max`: Ancho mínimo del contenido máximo.

##### Alto Mínimo (Min Height)
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

## Interfaces en TypeScript

### ¿Para qué sirve?
1. Definir Contratos : Establece reglas claras sobre la estructura que deben seguir los objetos
2. Validación de Tipos : Ayuda a detectar errores en tiempo de desarrollo
3. Documentación : Sirve como documentación clara del código
4. Reutilización : Permite reutilizar definiciones de tipos en diferentes partes del código

### ¿Cómo se utiliza?

1. Definición Básica

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  correo?: string; // La ? indica que es opcional
}
```	

2. Implementación

```typescript

// Uso en un objeto
const usuario: Usuario = {  nombre: "Juan",  edad: 25};
```
```typescript
// Uso en una función
function saludarUsuario(usuario: Usuario) {  console.log(`Hola ${usuario.nombre}`);
}
```
3. Interfaces con Métodos

  Métodos Básicos
```typescript
interface Calculadora {
  // Método sin argumentos que retorna un número
  obtenerUltimoResultado(): number;

  // Método con argumentos requeridos
  sumar(a: number, b: number): number;

  // Método que no retorna nada (void)
  limpiarHistorial(): void;

  // Método con argumento opcional
  multiplicar(a: number, b?: number): number;

  // Método con valor por defecto (en la implementación)
  dividir(a: number, b: number): number | string;
}

// Implementación
const calculadora: Calculadora = {
  obtenerUltimoResultado() {
    return 0;
  },
  sumar(a, b) {
    return a + b;
  },
  limpiarHistorial() {
    console.log("Historial limpiado");
  },
  multiplicar(a, b = 1) {
    return a * b;
  },
  dividir(a, b) {
    return b === 0 ? "Error: División por cero" : a / b;
  }
};
```

4. Sintaxis similares: Sintaxis de Métodos y Sintaxis de Propiedades

### Sintaxis de Método (Method Shorthand)

```typescript
interface Ejemplo {
  limpiarMemoria(): void;
  limpiarMemoria2(a: string, b: string): void;
}
```

Comúnmente usada cuando defines métodos en interfaces que serán implementadas por clases.

### Sintaxis de Propiedad de Función (Function Property)

```typescript
interface Ejemplo {
  limpiarHistorial: () => void;
  limpiarHistorial2: (a: string, b: string) => void;
}
```

Comúnmente usada en interfaces para objetos literales y componentes de React.

### Ejemplos Prácticos:
```typescript
// Usando sintaxis de método
interface LimpiezaClase {
  limpiarMemoria(a: string, b: string): void;
}

// Implementación en una clase
class Limpiador implements LimpiezaClase {
  limpiarMemoria(a: string, b: string) {
    console.log(a, b);
  }
}

// Usando sintaxis de propiedad de función
interface LimpiezaFuncional {
  limpiarHistorial: (a: string, b: string) => void;
}

// Implementación en un objeto literal
const limpiador: LimpiezaFuncional = {
  limpiarHistorial: (a, b) => {
    console.log(a, b);
  }
};
```

- En la práctica:

- Para componentes React y objetos literales → Usa la sintaxis de propiedad de función
- Para clases y objetos orientados a objetos → Usa la sintaxis de método
La funcionalidad es la misma, la diferencia es principalmente estilística y de contexto de uso.


5. Ahora se pueden entender los componentes reutilizables de la barra de navegación.

#### Primero es importante entender el tipo  React.ReactNode

React.ReactNode es un tipo en TypeScript que representa cualquier cosa que pueda ser renderizada en React. Es uno de los tipos más inclusivos en React y puede incluir:

1. Elementos React ( <div> , <span> , componentes personalizados)
2. Arrays de elementos React
3. Cadenas de texto (strings)
4. Números
5. null
6. undefined
7. Booleanos
8. Fragmentos
9. Portales

Por otra parte tenemos en React, `children`. `children` tiene un efecto especial:
es una **prop** especialmente reservada por React que automáticamente captura todo lo que se coloca entre las etiquetas de apertura y cierre de un componente.

```html
const Button = ({ children }) => (
  <button>
    {children}
  </button>
);
-->
<Button>
  Hola Mundo  {/* Esto automáticamente se convierte en la prop children */}
</Button>
```

- La combinación en la interface `children: React.ReactNode` proporciona seguridad de tipos mientras mantiene la flexibilidad. TypeScript mostrará un error si intentas pasar algo que React no puede renderizar:

```typescript
// ❌ Esto causará un error de TypeScript
<NavLinkRouter to="/home">
  {new Date()}  // El objeto Date no se puede renderizar directamente
</NavLinkRouter>

// ✅ Esto está bien
<NavLinkRouter to="/home">
  {new Date().toLocaleDateString()}  // String sí se puede renderizar
</NavLinkRouter>
```
### Ahora el código de los componentes reutilizables

```typescript
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClose?: () => void;
  className?: string;
}

export const NavLinkRouter = ({ 
  to, 
  children, 
  mobile = false, 
  onClose, 
  className = '' 
}: NavLinkProps) => (
  <LinkRouter
    to={to}
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''} ${className}`}
    onClick={onClose}
  >
    {children}
  </LinkRouter>
);

export const NavLinkScroll = ({ 
  to, 
  children, 
  mobile = false, 
  onClose, 
  className = '' 
}: NavLinkProps) => (
  <LinkScroll
    to={to}
    smooth
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''} ${className}`}
    onClick={onClose}
  >
    {children}
  </LinkScroll>
);
```

### Los dos tipos de Link

```typescript
import { Link as LinkRouter } from 'react-router-dom';    // Para navegación entre páginas
import { Link as LinkScroll } from 'react-scroll';        // Para navegación dentro de la misma página
```

> LinkRouter (react-router-dom)

- Propósito : Navegación entre diferentes rutas/páginas de tu aplicación
- Uso típico : Menús principales, navegación entre secciones diferentes
- Comportamiento : Cambia la URL y renderiza un componente diferente
- Se transforma en : <a href="/ruta">...</a>
Ejemplo:

```typescript
<LinkRouter to="/productos">
  Productos
</LinkRouter>
// Se convierte en:
<a href="/productos">Productos</a>

```

> LinkScroll (react-scroll)

- Propósito : Desplazamiento suave dentro de la misma página
- Uso típico : Menús de una sola página, navegación a secciones
- Comportamiento : Desplaza suavemente a un elemento con un ID específico
- Se transforma en : <a href="#seccion">...</a>

Ejemplo:

```typescript
<LinkScroll to="contacto">
  Contacto
</LinkScroll>
// Se convierte en:
<a href="#contacto">Contacto</a>
 ```

2. El uso de **as**

> La palabra clave **as** en estos imports es un alias que se usa para:

- Evitar conflictos de nombres (ambos se llaman Link )
- Hacer el código más claro y específico.
- Diferenciar entre los dos tipos de navegación

> Sin as :

```typescript
// ❌ Error: Nombre duplicado 'Link'
import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
```

> Con as :

```typescript
// ✅ Correcto: Cada uno tiene un nombre único
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
```

3. Transformación al compilar

> Ambos componentes se transforman en etiquetas `<a>` , pero con diferentes comportamientos:

```typescript
// Tu código
<LinkRouter to="/productos">Productos</LinkRouter>
<LinkScroll to="contacto">Contacto</LinkScroll>

// Se transforma aproximadamente en:
<a href="/productos" onClick={/* Lógica de enrutamiento */}>Productos</a>
<a href="#contacto" onClick={/* Lógica de desplazamiento suave */}>Contacto</a>
```

#### La diferencia principal está en el comportamiento del onClick :

- LinkRouter : Previene el comportamiento predeterminado y usa el enrutador
- LinkScroll : Previene el comportamiento predeterminado y realiza un desplazamiento suave

> Es importante saber que se compilan a etiquetas `<a>` ya a la hora de gestionar los estilos. Hay algunas técnicas que se pueden ocupar. en este caso se opto por una solución muy simple:
los estilos se manejaran directamente con css puro en el archivo index.css. El proyecto en general actúa con una solución híbrida entre CSS puro y Tailwind dejando el CSS puro muy reducido.

```typescript
<nav className="fixed w-full h-[var(--nav-height)] z-50 top-0 bg-[var(--dark-green)] border-b border-[var(--medium-green)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">

    {/* Logo */}
    <NavLinkRouter to="/products">E-Commerce</NavLinkRouter>

    {/* Menú Desktop */}
    <div className="hidden md:flex items-center gap-6">
      <NavLinkRouter to="/products">Productos</NavLinkRouter>
      <div className="h-6 w-px bg-[var(--medium-green)]" />
      <NavLinkScroll to="contact">Contacto</NavLinkScroll>
    </div>
```

### Continuemos con el retorno del componente NavBar

> respecto al logo:

Acá tenemos un componente NavLinkRouter

```typescript
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClose?: () => void;
  className?: string;
}

export const NavLinkRouter = ({ 
  to, 
  children, 
  mobile = false, 
  onClose, 
  className = '' 
}: NavLinkProps) => (
  <LinkRouter
    to={to}
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''} ${className}`}
    onClick={onClose}
  >
    {children}
  </LinkRouter>
);
```

> Acá se ocupa:

- to
- children
- y nada más. Los demás parámetros son opcionales.

primero analizaremos lo más simple:

```typescript
<div className="h-6 w-px bg-[var(--medium-green)]" />
```

Este es un div auto-cerrado (también conocido como elemento vacío en JSX/React). Se está utilizando como un separador/divisor vertical entre elementos de navegación:

1. h-6 : Altura de 6 unidades (1.5rem o 24px en Tailwind)
2. w-px : Ancho de 1 píxel
3. bg-[var(--medium-green)] : Color de fondo usando una variable CSS
Visualmente, se renderiza como una línea vertical así:

```plaintext
Productos | Contacto
```

### Comentario final para menú Desktop

Hasta este punto <NavLinkRouter> de E-Commerce y el de Productos son muy similares, por otra parte <NavLinkScroll> aunque es un poco diferente ya es posible entenderlo fácilmente. Finalmente es importante mencionar que el menú **desktop** por defecto no es vicible gracias a la clase tailwind **hidden** pero md:flex lo hace visible a partir de pantallas de 768px.

## Sección User Desktop

```typescript
// Lógica de logout
  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    setIsMenuOpen(false);
    navigate('/products');
  };

{/* Sección User - Desktop */}
<div className="hidden md:flex items-center gap-6">
  {user ? (
    <div className="flex items-center gap-4">
      <span className="text-[var(--white)]">Hola, {user}</span>
      {role === 'admin' && <NavLinkRouter to="/admin">Admin</NavLinkRouter>}
      <button
        onClick={handleLogout}
        className="text-[var(--white)] hover:text-[var(--dark-blue)] transition-colors"
      >
        Cerrar Sesión
      </button>
    </div>
  ) : (
    <NavLinkRouter to="/login">Iniciar Sesión</NavLinkRouter>
  )}
  <NavCartButton count={3} />
  <LanguageSelector />
</div>
```
La variable `user` se obtiene de `useStore()` (ver [integración-zustand.md](./integracion-zustand.md) para más detalles). 

De igual forma, `role` se obtiene de `useStore()` y cuando su valor es 'admin', se renderiza un enlace adicional `<NavLinkRouter to="/admin">Admin</NavLinkRouter>` que permite acceder al panel de administración.

### Botón en la sección User Desktop
El botón de cerrar sesión en la sección User Desktop tiene los siguientes efectos al ser presionado:

1. Ejecuta la función `handleLogout()` que:
  - Limpia los datos del usuario (`setUser(null)`)  
  - Elimina el token de autenticación (`setToken(null)`)
  - Elimina el rol del usuario (`setRole(null)`)
  - Ver [integración-zustand.md](./integracion-zustand.md) para más detalles.
  - Cierra el menú móvil si está abierto (`setIsMenuOpen(false)`)
  - Navega a la página de productos (`navigate('/products')`)

2. Los estilos del botón incluyen:
  - Color de texto blanco (`text-[var(--white)]`)
  - Al pasar el mouse cambia a azul oscuro (`hover:text-[var(--dark-blue)]`)
  - La transición del color es suave (`transition-colors`)

Por lo tanto, cuando el usuario hace clic en "Cerrar Sesión", se elimina toda la información de su sesión y es redirigido a la página principal de productos, con una animación suave en el botón al interactuar con él.

3. Por otra parte, si el usuario no está autenticado solo se renderizará el componente `<NavLinkRouter to="/login">Iniciar Sesión</NavLinkRouter>`

4. Independiente de lo anterior siempre se renderizará `<NavCartButton count={3} /> y <LanguageSelector />` en pantallas `md` o superiores.

### Componente NavCartButton y LanguageSelector

```typescript
import { FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


interface CartButtonProps {
  count: number;
  mobile?: boolean;
}

export const NavCartButton = ({ count, mobile = false }: CartButtonProps) => (
  <LinkRouter
    to="/cart"
    className={`relative text-[var(--white)] ${mobile ? 'p-3 flex items-center gap-2' : 'p-2'} hover:text-[var(--beige)] transition-colors`}
    aria-label={`Carrito (${count} items)`}
  >
    <FaShoppingCart className={mobile ? 'w-6 h-6' : 'w-5 h-5'} />
    <AnimatePresence>
      {count > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`absolute ${
            mobile 
              ? 'static bg-transparent text-[var(--beige)] text-base'
              : '-top-1 -right-1 bg-[var(--light-brown)] text-[var(--dark-green)] text-xs'
          } w-5 h-5 rounded-full flex items-center justify-center font-bold`}
        >
          {mobile ? `(${count})` : count}
        </motion.span>
      )}
    </AnimatePresence>
    {mobile && <span className="text-[var(--beige)]">Carrito</span>}
  </LinkRouter>
);

export const LanguageSelector = ({ mobile }: { mobile?: boolean }) => (
  <button 
    className={`${
      mobile 
        ? 'flex items-center gap-2 p-3 text-[var(--beige)] rounded-full w-full'
        : 'px-2 py-1 text-[var(--beige)]  rounded-full'
    } transition-colors`}
    aria-label="Cambiar idioma"
  >
    <FaGlobe className={mobile ? 'w-6 h-6 text-[var(--white)] hover:text-[var(--beige)] transition-colors' : 'w-5 h-5 text-[var(--white)] hover:text-[var(--beige)] transition-colors'} />
    {mobile && <span className="text-[var(--beige)]">Idioma (EN/ES)</span>}
  </button>
);
```

#### Importaciones 

Los componentes utilizan las siguientes importaciones:

- `FaShoppingCart, FaGlobe`: Iconos de carrito de compras y globo terráqueo de la biblioteca react-icons/fa, que proporciona iconos de Font Awesome para React.

- `motion, AnimatePresence`: Componentes de la biblioteca framer-motion, utilizados para crear animaciones fluidas:
  - `motion`: Permite añadir animaciones a elementos
  - `AnimatePresence`: Maneja la animación de elementos cuando se montan o desmontan del DOM
  - `Posteriormente se explicara de forma más detallada`

#### interfaces de los componentes

Para esto puede consultar la sección: [Interfaces en TypeScript](#interfaces-en-typescript)

#### Estilos Condicionales en los Componentes NavCartButton y LanguageSelector


##### NavCartButton

La lógica condicional se basa en la prop `mobile`:

1. **Contenedor Principal**:

```typescript
${mobile ? 'p-3 flex items-center gap-2' : 'p-2'}
```

- Si `mobile`: Más padding y layout flex con espaciado
- Si no: Solo padding simple


```typescript
className={mobile ? 'w-6 h-6' : 'w-5 h-5'}
```

- Si `mobile`: Icono más grande (24px)
- Si no: Icono más pequeño (20px)

3. **Contador**:

```typescript
${mobile ? 'static bg-transparent text-[var(--beige)] text-base' : '-top-1 -right-1 bg-[var(--light-brown)] text-[var(--dark-green)] text-xs'}
```

- Si `mobile`: Posicionamiento normal, sin fondo, texto beige grande
- Si no: Posicionamiento absoluto, fondo marrón, texto verde oscuro pequeño

###### aria-label y FaShoppingCart + AnimatePresence

## aria-label

Este es un atributo **HTML** que se merece una sección especial. El atributo `aria-label` es parte de ARIA (Accessible Rich Internet Applications), que es un conjunto de atributos HTML diseñados para mejorar la accesibilidad web.

### Propósito de aria-label

El `aria-label` se utiliza para:
- Proporcionar una etiqueta accesible para elementos que no tienen texto visible
- Dar contexto adicional a lectores de pantalla
- Mejorar la experiencia de usuarios que utilizan tecnologías asistivas

### Cuándo usar aria-label

Se utiliza principalmente en:
1. Elementos sin texto visible
2. Elementos donde el texto visible no es suficientemente descriptivo
3. Iconos o elementos visuales sin texto

### Ejemplo de uso correcto vs incorrecto

```typescript
// ❌ Incorrecto: Sin aria-label, un lector de pantalla solo lee "botón"
<button>
  <FaShoppingCart />
</button>

// ✅ Correcto: Con aria-label, proporciona contexto
<button aria-label="Carrito de compras (3 items)">
  <FaShoppingCart />
</button>
```

### Consideraciones importantes

1. No usar `aria-label` cuando ya existe texto visible descriptivo
2. Mantener las etiquetas concisas pero informativas
3. Actualizar dinámicamente cuando cambia el estado (como en el ejemplo con `count`)
4. Usar en conjunto con otros atributos ARIA cuando sea necesario

### Explicación Detallada de FaShoppingCart y Framer Motion en NavCartButton

#### Importaciones de Framer Motion

```typescript
import { motion, AnimatePresence } from 'framer-motion'
````

`motion`: Es un objeto que contiene componentes HTML/SVG modificados para animaciones.

`Usamos motion.[elementoHTML]` para crear elementos animables

`Ejemplos`: motion.div, motion.span, motion.button

`¿Por qué motion.span?`
Es un span normal pero con superpoderes de animación

`AnimatePresence`: Componente especial que maneja la vida útil de las animaciones

Permite animaciones cuando elementos:

- 🎉 Entran al DOM (montaje)

- 🚪 Salen del DOM (desmontaje)

- Requiere trabajar con condicionales ({count > 0 && ...})

#### FaShoppingCart (Icono del Carrito)

```typescript
<FaShoppingCart className={mobile ? 'w-6 h-6' : 'w-5 h-5'} />
```

- `Qué es?`: Componente de icono de Font Awesome (paquete react-icons/fa)

#### AnimatePresence y motion.span (Contador Animado)

```typescript
<AnimatePresence>
  {count > 0 && (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      // ... resto de props
    >
      {mobile ? `(${count})` : count}
    </motion.span>
  )}
</AnimatePresence>
```

##### Flujo de Animación:

- Cuando count > 0:

  - `initial`: Primer fotograma (escala 0 = invisible)

  - `animate`: Animación automática a escala 1 (tamaño normal)

🔄 Transición automática suave (duración por defecto: 0.3s)

- Cuando count llega a 0:

  - `exit`: Animación de salida (escala 0)

🕑 AnimatePresence espera que termine la animación antes de remover el elemento del DOM

##### Anatomía del motion.span:

Propiedades de animación:

```typescript
initial={{ scale: 0 }}   // Estado inicial
animate={{ scale: 1 }}   // Estado cuando está presente
exit={{ scale: 0 }}      // Estado al desaparecer
scale: Transformación CSS (0 = 0% tamaño, 1 = 100% tamaño)
```

- Se podrían agregar más propiedades (opacity, rotate, etc.)

##### ¿Por qué funciona así?

- `AnimatePresence` debe envolver elementos condicionales

- `motion.span` hereda todas las propiedades de un span normal + añade props de animación

- Las animaciones usan el sistema de `Spring de Framer Motion` (físicas realistas)

- No necesita `useState` para animaciones básicas - la biblioteca maneja los estados automáticamente

#### comentario sobré 2 bloques interesantes

1. número de elementos

```typescript
{mobile ? `(${count})` : count}
```

##### Contexto visual:

- En modo móvil, el texto "Carrito" aparece junto al icono, por lo que el número de items se muestra entre paréntesis para que sea más claro y legible: Carrito (3).

- En modo escritorio, solo se muestra el número de items (sin paréntesis) porque el texto "Carrito" no está visible.


### LanguageSelector

1. **Contenedor**:

```typescript
${mobile ? 'flex items-center gap-2 p-3 text-[var(--beige)] w-full' : 'px-2 py-1 text-[var(--beige)]'}
```

- Si `mobile`: Layout flex con espaciado, más padding y ancho completo
- Si no: Solo padding horizontal y vertical reducido

2. **Icono**:

```typescript
mobile ? 'w-6 h-6' : 'w-5 h-5'
```

- Si `mobile`: Icono más grande (24px)
- Si no: Icono más pequeño (20px)

#### Resumen de NavCartButton y LanguageSelector

Estos 2 componentes están desarrollados estéticamente pero aun no son funcionales por los cual se simula con cont={3} que hay 3 productos en el carro de compras `<NavCartButton count={3} />` y por otra parte el componente `<LanguageSelector />` aun no tiene con controlador que afecte el estado global del lenguaje de usuario.

### Sección User Mobile

```typescript
// Sección User - Mobile
<div className="flex items-center gap-4 md:hidden">
  <NavCartButton count={3} mobile />
  {user ? (
    <button
      onClick={() => navigate('/profile')}
      className="p-2 text-[var(--beige)] hover:text-[var(--light-brown)]"
      aria-label="Perfil de usuario"
    >
      <FaUser size={20} />
    </button>
  ) : (
    <NavLinkRouter
      to="/login"
      className="p-2 text-[var(--beige)] hover:text-[var(--light-brown)]"
      aria-label="Iniciar sesión"
    >
      <FaSignInAlt size={20} />
    </NavLinkRouter>
  )}
  <button
    className="p-2 text-[var(--beige)] hover:text-[var(--light-brown)]"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
  >
    {isMenuOpen ? <FaTimes size={20} /> : <CiMenuFries size={24} />}
  </button>
</div>
```

### Atributo size

El atributo `size` en los componentes de la biblioteca react-icons define el tamaño del ícono. Generalmente se interpreta en píxeles, por lo que si asignas `size={20}` el ícono se renderiza con un tamaño de 20 píxeles. Es similar a establecer la propiedad CSS `font-size` y te permite ajustar rápidamente el tamaño del ícono sin necesidad de aplicar estilos adicionales.

## MobileMenu

Es un menú móvil que se abre/cierra con animación, similar a los menús deslizantes que ves en apps móviles. Aparece desde arriba y bloquea el contenido de fondo.

### Funcionalidad principal:

- Se abre/cierra suavemente con animaciones

- Muestra diferentes opciones según si el usuario está logueado o no

- Incluye navegación, selector de idioma y carrito de compras

- Bloquea el scroll de la página cuando está abierto

```typescript
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/store';
import { NavLinkRouter, NavLinkScroll, NavCartButton, LanguageSelector } from './NavComponents';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const MobileMenu: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}> = ({ isOpen, onClose, handleLogout }) => {
    const { user, role } = useStore();

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative inset-0 z-40 bg-[var(--dark-green)] pt-[var(--nav-height)]"
                >
                    <div className="p-4 space-y-4">
                        {/* Menú principal */}
                        <NavLinkRouter to="/products" mobile onClose={onClose}>
                            Productos
                        </NavLinkRouter>
                        <NavLinkScroll to="contact" mobile onClose={onClose}>
                            Contacto
                        </NavLinkScroll>

                        {/* Sección de usuario */}
                        <div className="border-t border-[var(--medium-green)] pt-4">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3 p-4 bg-[var(--medium-green)] rounded-lg">
                                        <FaUser className="text-[var(--beige)] text-xl" />
                                        <div>
                                            <p className="text-[var(--beige)] font-medium">{user}</p>
                                            <p className="text-[var(--light-brown)] text-sm">{role}</p>
                                        </div>
                                    </div>
                                    {role === 'admin' && (
                                        <NavLinkRouter 
                                            to="/admin" 
                                            mobile 
                                            onClose={onClose}
                                            className="flex items-center gap-2"
                                        >
                                            <FaCog className="text-[var(--beige)]" />
                                            Panel Admin
                                        </NavLinkRouter>
                                    )}
                                    <button 
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 w-full p-4 text-[var(--light-brown)] hover:bg-[var(--medium-green)]"
                                    >
                                        <FaSignOutAlt className="text-[var(--beige)]" />
                                        Cerrar Sesión
                                    </button>
                                </>
                            ) : (
                                <NavLinkRouter 
                                    to="/login" 
                                    mobile 
                                    onClose={onClose}
                                    className="bg-[var(--light-brown)] hover:bg-[var(--dark-blue)] text-[var(--dark-green)] p-4 rounded-lg text-center font-medium block"
                                >
                                    Iniciar Sesión
                                </NavLinkRouter>
                            )}
                            
                            {/* Accesos directos */}
                            <div className="flex gap-4 p-4 border-t border-[var(--medium-green)]">
                                <NavCartButton count={3} mobile />
                                <LanguageSelector mobile />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
```
### Definición de tipos
 Hay varias cuestiones que ya se han analizado anteriormente, por lo cual solo se analizaran algunas cuestiones importantes.

```typescript
 const MobileMenu: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}> = ({ isOpen, onClose, handleLogout })
```

La parte que se muestra es la definición de los tipos de las propiedades (props) del componente, utilizando el tipo genérico de React "React.FC". Es decir, se están definiendo en línea las propiedades que el componente espera recibir.

Esta se puede reemplazar por una interface.

```typescript
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, handleLogout }) => { ... }
```

#### Diferencias principales:

- `Extensibilidad y Reusabilidad:`
  Con una interface puedes extenderla en otros componentes o a partir de otras interfaces, lo que facilita la reutilización, mientras que el objeto literal es una definición única y no extensible.

- `Declaración Incremental (Declaration Merging):`
  Las interfaces permiten la fusión de declaraciones en distintos lugares, mientras que los tipos (en este caso, el objeto literal) son estáticos y no se pueden redeclarar.

- `Legibilidad:`
  Al definir una interface con nombre, el código puede resultar más legible y semántico en comparación con una definición en línea.

Ambas aproximaciones definen de manera similar qué propiedades se esperan, pero el uso de interfaces es más adecuado en proyectos grandes o cuando se requiere reutilización/extensibilidad de tipos.


### Animación con Framer Motion (motion.div):

```typescript
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
```

- `Qué hace?`: Crea animaciones de entrada/salida para el menú móvil.

- `Desglose`:

  - `initial`: Estado inicial antes de aparecer (opacidad 0 y posición 20px arriba)

  - `animate`: Estado durante la presencia (opacidad completa y posición normal)

  - `exit`: Estado al desaparecer (vuelve a opacidad 0 y sube 20px)


> `AnimatePresence` envuelve el componente para manejar animaciones de salida


### Clase relative inset-0:

```typescript
className="relative inset-0..."
```

`Contexto: El menú está dentro de un <nav> con position: fixed`

- `Explicación`:

- `relative`: Posicionamiento relativo al contenedor padre nav

- `inset-0`: Equivale a top: 0; right: 0; bottom: 0; left: 0 → Ocupa todo el espacio disponible del padre

- `Efecto visual`: El menú móvil cubre toda el área debajo de la barra de navegación


### Contenedor con espaciado:

```typescript
<div className="p-4 space-y-4">
```

- `space-y-4`: Espaciado vertical (margin-top) de 1rem entre elementos hijos


### Estilo del botón de Login:

```typescript
className="bg-[var(--light-brown)] hover:bg-[var(--dark-blue)]... block"
```

- `block`: Elemento de bloque que ocupa todo el ancho disponible

- `Propósito de estilo`: Destacar visualmente el botón de login y hacerlo fácil de interactuar en móviles

## useEffect + overflow:

```typescript
useEffect(() => {
  if (isOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
}, [isOpen]);
```

### Hook useEffect:

Ejecuta efectos secundarios en componentes funcionales

- `En este caso`: modificar el overflow del body

- `Dependencia [isOpen]`:

El efecto se ejecuta cada vez que isOpen cambia

#### ¿Qué es la lista de dependencias en useEffect?

El segundo parámetro de useEffect es un array (lista) que le indica a React:

- `Componente de perfil de usuario`:

```typescript
const UserProfile = () => {
  useEffect(() => {
    // Bueno para fetching inicial de datos
    fetchUserData();
  }, []); // ← Solo al montar
  
  return <div>Perfil de usuario</div>;
}
```
- `Con dependencia [isOpen]`

```typescript
useEffect(() => {
  // Este código se ejecuta:
  // - Al montar (si isOpen es true inicialmente)
  // - Cada vez que isOpen cambie
}, [isOpen]); // ← Dependencia específica
```

- `Comportamiento`:

  - Se ejecuta al montar (si la dependencia tiene valor inicial)

  - Se vuelve a ejecutar cada vez que isOpen cambia

  - El cleanup se ejecuta antes de cada re-ejecución y al desmontar

#### Lógica del Cuerpo:

- `document.body.style.overflow = 'hidden'`: Bloquea el scroll de la página
- `document.body.style.overflow = 'auto'`: Restaura el scroll normal

#### Comportamiento en Detalle:

- `Al abrir el menú`: bloquea el scroll del body para que el usuario no pueda hacer scroll de la página principal y el enfoque permanezca en el menú móvil (evita desplazamientos accidentales)

- `Al cerrar el menú`: vuelve al comportamiento normal de scroll

> La dependencia asegura sincronización entre estado visual y comportamiento del scroll

##### Consideraciones de Rendimiento:

Modificar el DOM directamente (document.body) es necesario aquí porque:

El scroll afecta a toda la página (fuera del alcance de React)

Alternativas como wrappers de contenido serían menos eficientes

El efecto es ligero y se ejecuta solo cuando cambia isOpen


- `Cleanup Implícito`: al desmontar el componente:

React ejecuta automáticamente la última versión del efecto

Si isOpen fuera true al desmontar, dejaría el overflow como 'hidden'

Por eso es crucial el else que restaura el estado

Diagrama de Flujo:

[Usuario hace clic en menú]
  → isOpen cambia a true
  → useEffect detecta cambio
  → Bloquea scroll (overflow: hidden)

[Usuario cierra menú]
  → isOpen cambia a false
  → useEffect detecta cambio
  → Restaura scroll (overflow: auto)
