import Vue from 'vue'
import Router from 'vue-router'
// import AuthGuard from './auth-guard'
import RoomInvite from '../components/Invite.vue'
// import Room from '../components/Room.vue'
import Home from '../components/Home.vue'
import RoomCreate from '../components/RoomName.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
          name: 'Home',
          component: Home,
      },
      // {
      //   path: '/room/:id',
      //   name: 'Room',
      //   component: Room,
      //   props: true,
      //   //beforeEnter: AuthGuard
  
      //   // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
      //   children: [
      //     { path: 'invite',  component: RoomInvite }
      //   ]
      // },
      {
        path: '/room-create',
        name: 'room-create',
        component: RoomCreate
      },
      {
        path: '/room/:id/invite',
        name: 'RoomInvite',
        component: RoomInvite,
        props: true,
      },
    ]
})