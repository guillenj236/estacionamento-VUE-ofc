import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/marca/lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/marca/formulario',
    name: 'marca-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
    children: [
      {
        path: '/marca/formulario',
        name: 'marca-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      },
      {
        path: '/marca/formulario',
        name: 'marca-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      }
    ]
  },
  {
    path: '/condutor/lista',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/condutor/formulario',
    name: 'condutor-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue'),
    children: [
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorListaView.vue'),
      },
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue')
      }
    ]
  },
  {
    path: '/veiculo/lista',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/veiculo/formulario',
    name: 'veiculo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue'),
    children: [
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue'),
      },
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue')
      }
    ]
  },
  {
    path: '/modelo/lista',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/modelo/formulario',
    name: 'modelo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
    children: [
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
      },
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue')
      }
    ]
  },
  {
    path: '/movimentacao/lista',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/movimentacao/formulario',
    name: 'movimentacao-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue'),
    children: [
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue'),
      },
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue')
      }
    ]
  },
  {
    path: '/configuracao/lista',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoListaView.vue')
  },
  {
    path: '/configuracao/formulario',
    name: 'configuracao-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue'),
    children: [
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue'),
      },
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
