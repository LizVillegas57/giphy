import { wrapFunctional } from './utils'

export { default as GridGifs } from '../../components/GridGifs.vue'
export { default as MainHeader } from '../../components/MainHeader.vue'
export { default as MainTitle } from '../../components/MainTitle.vue'
export { default as Search } from '../../components/Search.vue'

export const LazyGridGifs = import('../../components/GridGifs.vue' /* webpackChunkName: "components/grid-gifs" */).then(c => wrapFunctional(c.default || c))
export const LazyMainHeader = import('../../components/MainHeader.vue' /* webpackChunkName: "components/main-header" */).then(c => wrapFunctional(c.default || c))
export const LazyMainTitle = import('../../components/MainTitle.vue' /* webpackChunkName: "components/main-title" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
