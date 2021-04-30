import { createApp, reactive } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Vuelidate from "vuelidate";
import "nprogress/nprogress.css";

// setting will be used to import components automatically without adding
// import statement at the top of the file
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js|ts)$/
)

const GStore = reactive({ flashMessage: "" })

const app = createApp(App).use(store).use(router).use(Vuelidate).provide("GStore", GStore);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.mount("#app");
