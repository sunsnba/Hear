const path = require('path');
const CopyPlugin = require("copy-webpack-plugin"); 
module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 "module": {
  "rules": [
    {
      "test": /\.css$/,
      "use": [
        "style-loader",
        "css-loader"
      ]
    },
    {
      "test": /\.js$/,
      "exclude": /node_modules/,
      "use": {
        "loader": "babel-loader",
        "options": {
          "presets": [
            "@babel/preset-env",
          ]
        }
      }
    },
    {
      test: /\.(png|svg|jpe?g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      ],
    },
  ]
},
plugins: [
  new CopyPlugin({
    patterns: [
      { from: "src/images", to: "images" },
      { from: "src/index.html", to: "" },
    ],
  }),
]

};