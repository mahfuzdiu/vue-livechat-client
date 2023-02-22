import LayoutComponent from '@/components/layouts/main-layout'
import HomePage from '@/pages/home-page'

const dashboardRoutes = [
  {
    path: '/',
    component: LayoutComponent,
    children: [
      {path: '/', component: HomePage}
    ]
  }
]

export default dashboardRoutes