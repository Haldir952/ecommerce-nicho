// app-shell/src/App.tsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el microfrontend usando el nombre que definimos en los remotes
// @ts-expect-error This remote module is provided at runtime by Module Federation.
const ListaProductos = React.lazy(() => import('catalogo/ListaProductos.js'));


const App = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    <header style={{ backgroundColor: '#282c34', color: 'white', padding: '1rem', borderRadius: '8px' }}>
      <h1>App Shell - Mi E-Commerce</h1>
      <p>Este es el contenedor principal (Puerto 3003)</p>
    </header>

    <main style={{ marginTop: '20px' }}>
      {/* Suspense muestra un mensaje mientras se descarga el microfrontend por la red */}
      <Suspense fallback={<h3>Cargando el catálogo desde el puerto 3002...</h3>}>
        <ListaProductos />
      </Suspense>
    </main>
  </div>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);