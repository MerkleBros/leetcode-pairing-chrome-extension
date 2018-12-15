const path = require('path');
module.exports = {
  entry: {
  	'lobby': './src/lobby/*.js', // TODO: UPDATE CONFIG WITH RULES FOR HTML / CSS / ETC
  	'room': './src/room/*.js', // TODO: UPDATE CONFIG WITH RULES FOR HTML / CSS / ETC
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};