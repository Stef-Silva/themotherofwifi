import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Films from './views/Films.vue'
import Team from './views/Team.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
    
  ]
})
