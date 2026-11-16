import React from 'react';
import ReactDOM from 'react-dom/client';
import ListaProductos from './components/ListaProductos';

const App = () => (
  <div>
    <h1>Equipo de Catálogo</h1>
    <ListaProductos />
  </div>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);