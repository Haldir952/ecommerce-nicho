import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Nos conectamos a Nest.js
    axios.get('http://localhost:3000/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error("Error conectando a la API", err));
  }, []);

  return (
    <div style={{ border: '2px dashed blue', padding: '1rem', margin: '1rem' }}>
      <h2>Catálogo de Productos (Microfrontend Independiente)</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {productos.map((p: any) => (
          <div key={p._id} style={{ border: '1px solid gray', padding: '1rem' }}>
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <strong>${p.precio}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}