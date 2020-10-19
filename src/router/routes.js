import store from '@state/store'

export default [
  /* full page routes */
  {
    path: '',
    component: () => lazyLoadView(import('@layouts/FullPage')),
    children: [
      {
        path: '/',
        redirect: 'signin',
      },

      {
        path: '/signin',
        name: 'signin',
        component: () => lazyLoadView(import('@views/signIn')),
      },

      {
        path: '/register',
        name: 'register',
        component: () => lazyLoadView(import('@views/register')),
      },
      {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: () => lazyLoadView(import('@views/forgotPassword')),
      },
      {
        path: '/reset-password',
        name: 'resetPassword',
        component: () => lazyLoadView(import('@views/resetPassword')),
      },
      {
        path: '/verify',
        name: 'verifyEmail',
        component: () => lazyLoadView(import('@views/verifyEmail')),
      },
      {
        path: '/404',
        name: '404',
        component: require('@views/_404').default,
        props: true,
      },
    ],
  },
  /* user protected routes */

  {
    path: '',
    component: () => lazyLoadView(import('@layouts/userLayout')),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => lazyLoadView(import('@views/customer/home')),
        meta: {
          authRequired: true,
        },
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => lazyLoadView(import('@views/customer/favorites')),
        meta: {
          authRequired: true,
        },
      },
      {
        path: '/category/:id',
        name: 'category',
        component: () =>
          lazyLoadView(import('@views/customer/CategoryProduct')),
        meta: {
          authRequired: true,
        },
      },
    ],
  },

  /* user protected routes */

  {
    path: '*',
    redirect: '404',
  },
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
