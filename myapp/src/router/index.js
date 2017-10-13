import Vue from "vue"
import Router from "vue-router"
import Idea from "@/components/Idea/Idea.vue"

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/",
      redirect:"/idea"
    },
    {
      path:"/idea",
      name: 'Idea',
      component: Idea
    }
  ]
})
