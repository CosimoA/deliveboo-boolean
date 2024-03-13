import AppHeader from './components/AppHeader.vue'
import App from './components/AppHeader.vue'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Restaurants from './components/Restaurants.vue'
import Details from './components/Details.vue'
import Carousel from './components/Carousel.vue'


export default [
    { path: '/', component: Carousel, name: 'Carousel' },
    { path: '/restaurants', component: Restaurants, name: 'Restaurants' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/details', component: Details, name: 'Details' },
]