import Vue from 'vue'
import App from './App.vue'
import VuePrism from 'vue-prism'
import VueSimpleMarkdown from 'vue-simple-markdown'

import 'prismjs/themes/prism-tomorrow.css'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VuePrism)
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#postmanify')
