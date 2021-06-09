import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  GridGifs: () => import('../../components/GridGifs.vue' /* webpackChunkName: "components/grid-gifs" */).then(c => wrapFunctional(c.default || c)),
  MainHeader: () => import('../../components/MainHeader.vue' /* webpackChunkName: "components/main-header" */).then(c => wrapFunctional(c.default || c)),
  MainTitle: () => import('../../components/MainTitle.vue' /* webpackChunkName: "components/main-title" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
