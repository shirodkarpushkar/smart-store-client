import axios from 'axios'
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  async registration({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'post',
        url: `${backendURL}customers/registration`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async verifyEmail({ commit }, { token }) {
    try {
      const result = await axios({
        method: 'post',
        url: `${backendURL}customers/verifyemail`,
        data: { token },
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async changePassword({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'put',
        url: `${backendURL}customers/changepassword`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async forgotPassword({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'post',
        url: `${backendURL}customers/forgotpassword`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async resetPassword({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'put',
        url: `${backendURL}customers/resetpassword`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async getProfile({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'get',
        url: `${backendURL}customers/profile`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async updateProfile({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'patch',
        url: `${backendURL}customers/profile`,
        data,
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
  async uploadImage({ commit }, { data }) {
    try {
      const result = await axios({
        method: 'post',
        url: `${backendURL}images`,
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const response = result.data
      if (response.status.code === 200) {
        return response
      } else {
        throw response
      }
    } catch (error) {
      throw error
    }
  },
}
