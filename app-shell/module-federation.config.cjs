const { dependencies } = require('./package.json');

module.exports = {
  name: 'app_shell',
  remotes: {
    catalogo: 'mfe_catalogo@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: { singleton: true, requiredVersion: dependencies.react },
    'react-dom': { singleton: true, requiredVersion: dependencies['react-dom'] },
  },
};