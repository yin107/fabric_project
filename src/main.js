import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import router from './router'
import VueClipboard from 'vue-clipboard2';
import axios from 'axios'
// import style
import 'view-design/dist/styles/iview.css';
import '@/assets/fonts/font.css';
Vue.use(ViewUI);
Vue.use(VueClipboard)
Vue.prototype.$http=axios

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
}).$mount('#app')