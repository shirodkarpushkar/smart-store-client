<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="card-form"
    @submit.prevent="handleSubmit"
  >
    <h3>Login</h3>
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              { required: true, message: 'Please input youe email!' },
              { type: 'email', message: 'Enter a valid email!' },
            ],
          },
        ]"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your Password!' }],
          },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <router-link class="card-form-forgot" :to="{ name: 'forgotPassword' }">
        Forgot password
      </router-link>
      <a-button
        :loading="buttonLoader"
        type="primary"
        html-type="submit"
        class="card-form-button"
      >
        Log in
      </a-button>
      Or
      <router-link to="/register">
        register now!
      </router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { authMethods } from '@state/helpers'
export default {
  page: {
    title: 'signIn',
    meta: [{ name: 'description', content: 'signIn' }],
  },
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'normal_login' }),
      buttonLoader: false,
    }
  },

  methods: {
    ...authMethods,
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.buttonLoader = true
          this.signIn({ email: values.email, password: values.password })
            .then((result) => {
              this.$notification.success({
                message: 'Success',
                description: 'User Logged in successfully.',
              })
              this.buttonLoader = false
            })
            .catch((err) => {
              this.$notification.error({
                message: 'Error',
                description: err.message ? err.message : err.status.message,
              })
              this.buttonLoader = false
            })
        }
      })
    },
  },
}
</script>
<style scoped></style>
