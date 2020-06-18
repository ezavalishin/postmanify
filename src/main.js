import Vue from 'vue'
import App from './App.vue'
import VuePrism from 'vue-prism'
import VueSimpleMarkdown from 'vue-simple-markdown'
import VueClipboard from 'vue-clipboard2'

import 'prismjs/themes/prism-tomorrow.css'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

import store from './store/index'

Vue.use(VuePrism)
Vue.use(VueSimpleMarkdown)
Vue.use(VueClipboard)

Vue.config.productionTip = false

window.onload = () => {
  new Vue({
    render: (h) => h(App),
    store,
  }).$mount('#postmanify')
}
