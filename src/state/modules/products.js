import axios from 'axios'
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  async getAllProducts({ commit }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}products`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
  async getProductById({ commit }, { id }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}products/${id}`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
  async getCustomerProducts({ commit }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}customers/products`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
  async getFavoriteProducts({ commit }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}customers/favorites`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
  async markProductFavorite({ commit }, { id }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}customers/favorite/${id}`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
  async unmarkProductFavorite({ commit }, { id }) {
    try {
      const result = await axios({
        method: 'delete',
        url: `${backendURL}customers/favorite/${id}`,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw errorHandler(error)
    }
  },
}

function errorHandler(err) {
  return err.message ? err.message : err.status.message
}
