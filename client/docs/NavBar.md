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

## Renderizado del Componente

```typescript
return (
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

      {/* Sección User - Mobile */}
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
    </div>

    <Suspense fallback={<div>Cargando...</div>}>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        handleLogout={handleLogout}
      />
    </Suspense>
  </nav>
);
```

### Subcomponentes

#### NavLinkRouter

```typescript
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

Este subcomponente crea un enlace de navegación utilizando `react-router-dom`.

#### NavLinkScroll

```typescript
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

Este subcomponente crea un enlace de navegación que hace scroll suave a una sección específica de la página.

#### NavCartButton

```typescript
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
```

Este subcomponente muestra un botón de carrito de compras con un contador de ítems.

#### LanguageSelector

```typescript
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

Este subcomponente muestra un botón para cambiar el idioma de la aplicación.

## Exportación

```typescript
export default NavBar;
```

El componente `NavBar` se exporta como el valor por defecto del módulo.