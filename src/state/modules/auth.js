import axios from 'axios'
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
  authToken: getSavedState('authToken'), // Gets stored authtoken from the session storage
}

export const mutations = {
  SET_CURRENT_USER_AUTHTOKEN(state, newValue) {
    state.authToken = newValue
    saveState('authToken', newValue) // stores authtoken into the session storage
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  signedIn(state) {
    return !!state.authToken
  },
  getAuthenticationToken(state) {
    return state.authToken
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    if (state.authToken !== null) {
      setDefaultAuthHeaders(state)
    }
  },

  // Logs in the current user.
  async signIn({ commit }, { email, password } = {}) {
    try {
      const userData = await axios({
        method: 'post',
        url: `${backendURL}customers/signin`,
        data: { email, password },
      })
      const user = userData.data
      if (user.status.code === 200) {
        commit('SET_CURRENT_USER_AUTHTOKEN', user)

        return user
      } else {
        throw user
      }
    } catch (error) {
      throw error
    }
  },

  signOut({ commit }) {
    commit('SET_CURRENT_USER_AUTHTOKEN', null)
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.sessionStorage.getItem(key))
}

function saveState(key, state) {
  window.sessionStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common['auth'] = state.authToken
    ? state.authToken.result.token
    : ''
}
