import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Mission from '@/components/Mission'
import Option from '@/components/Option'
import PageProfil from '@/components/PageProfil'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Mission',
      component: Mission
    },

    {
      path: '/HelloWorld',
      component: HelloWorld
    }, {
      path: '/Option',
      component: Option
    },
    {
      path: '/PageProfil',
      component: PageProfil
    }
  ]
})
