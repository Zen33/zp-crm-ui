<template>
  <div class="quickstart">
    <h2>快速上手</h2>
    <p>该组件的意义在于补充现有UI组件业务，欢迎加入一并完善该UI库。mail: zhen.tang@zhaopin.com.cn</p>
    <p>*当前适配Vue 2.x，该组件库持续迭代中。</p>
    <h3>.babelrc</h3>
    <div class="figure">
      <pre v-highlight><code class="other">{
  "presets": ["es2015", "stage-2"],
  "plugins": ["transform-runtime"],
  "comments": false
}</code></pre>
    </div>
    <h3>package.json</h3>
    <div class="figure">
      <pre v-highlight><code class="json">{
  "name": "zp-ui-doc",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot --port 1024",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "dependencies": {
    "vue": "^2.2.1",
    "zp-crm-ui": "^0.1.51",
    "vue-sparklines": "^0.1.4"
  },
  "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-loader": "^6.4.0",
    "babel-runtime": "^6.26.0",
    "babel-plugin-component": "^0.10.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-polyfill": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-stage-2": "^6.24.1",
    "cross-env": "^3.2.3",
    "css-loader": "^0.26.2",
    "style-loader": "^0.13.2",
    "url-loader": "^0.5.8",
    "vue-loader": "^11.1.4",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.1",
    "uglify-js-es6": "^2.8.9",
    "uglifyes-webpack-plugin": "^0.4.3",
  }
}</code></pre>
    </div>
    <h3>webpack.config.js</h3>
    <div class="figure">
      <pre v-highlight><code class="javascript">var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyes-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader?limit=8192',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
</code></pre>
    </div>
    <h3>字体建议</h3>
    <div class="figure">
      <pre v-highlight><code class="css">font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;</code></pre>
    </div>
    <h3>引入组件库</h3>
    <p>该组件库可以完整引入，也可以按需引入。在main.js中样例如下：</p>
    <div class="figure">
      <pre v-highlight><code class="javascript"> // 完整引入
import Vue from 'vue'
import ZpUI from 'zp-crm-ui'
import Sparkline from 'vue-sparklines'
import App from './App.vue'

Vue.use(ZpUI)
Vue.use(Sparkline)

new Vue({
  el: '#app',
  render: h => h(App)
})

// 部分引入
import Vue from 'vue'
import { Collapse, Dropdownlist} from 'zp-crm-ui'
import Sparkline from 'vue-sparklines'
import App from './App.vue'

Vue.use(Collapse)
Vue.use(Dropdownlist)
Vue.use(Sparkline)

new Vue({
  el: '#app',
  render: h => h(App)
})
</code></pre>
    </div>
    <h3>开始使用</h3>
    <div class="figure">
      <pre v-highlight><code class="other"># 执行如下命令后访问 localhost:1024
npm run dev</code></pre>
    </div>
    <br />
  </div>
</template>

<style>
  .quickstart .figure {
    margin: 0 10px;
  }
  br {
    margin: 20px;
  }
  /* .spinner {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    -webkit-animation: spinner 1s linear infinite alternate;
    -moz-animation: spinner 1s linear infinite alternate;
    animation: spinner 1s linear infinite alternate;
    margin: 46px auto;
    position: relative; 
    left: -12px;
  }
  @-moz-keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  }
  @-webkit-keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  }
  @keyframes spinner {
    0% {
        background-color: rgba(77, 161, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    25% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 1), 24px 0px 0px 0px rgba(77, 161, 255,0.2);
    }
    75% {
        background-color: rgba(77, 161, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(77, 161, 255,0.2), 24px 0px 0px 0px rgba(77, 161, 255,1);
    }
  } */
</style>