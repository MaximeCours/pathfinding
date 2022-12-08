import Vue from 'vue'
import Router from 'vue-router'
import Dijkstra from '@/components/Dijkstra'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Dijkstra',
        component: Dijkstra
    }]
})