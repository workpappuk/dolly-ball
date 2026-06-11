module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
};
