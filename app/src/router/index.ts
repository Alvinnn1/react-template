import loadable from '@loadable/component'

export const appRouter = {
  home: {
    path: '/',
    component: loadable(() => import('@/page/Home')),
  },
}
export const mainRouter = [appRouter.home]
