import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['signedIn']),
}

export const authGetters = mapGetters('auth', [
  'getAuthenticationToken',
  'signedIn',
])

export const authMethods = mapActions('auth', ['signIn', 'signOut'])

export const userMethods = mapActions('users', [
  'registration',
  'verifyEmail',
  'changePassword',
  'forgotPassword',
  'resetPassword',
  'getProfile',
  'updateProfile',
  'uploadImage',
])
export const productMethods = mapActions('products', [
  'getAllProducts',
  'getProductById',
])
export const categoryMethods = mapActions('categories', [
  'getAllCategories',
  'getCategoryById',
])
