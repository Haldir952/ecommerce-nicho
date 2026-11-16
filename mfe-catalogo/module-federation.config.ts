const { dependencies } = require('./package.json');

module.exports = {
  name: 'mfe_catalogo',
  filename: 'remoteEntry.js',
  exposes: {
    // Aquí exponemos el componente que creaste
    './ListaProductos': './src/components/ListaProductos.tsx',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};