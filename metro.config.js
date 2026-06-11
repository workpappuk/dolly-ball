const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();
  config.resolver.sourceExts.push('web.ts', 'web.tsx', 'web.js');
  return config;
})();
