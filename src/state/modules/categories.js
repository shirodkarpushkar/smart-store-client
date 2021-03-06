import axios from 'axios'
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  async getAllCategories({ commit }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}categories`,
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
  async getCategoryById({ commit }, { id }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}categories/${id}`,
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
  async getProductByCategoryId({ commit }, { id }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}categories/${id}/products`,
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
