<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="card-form"
    @submit.prevent="handleSubmit"
  >
    <h3 class="mb-1">Forgot password</h3>
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
      <a-button
        :loading="loading"
        type="primary"
        html-type="submit"
        class="card-form-button"
      >
        Recover
      </a-button>
      <router-link :to="{ name: 'signin' }">
        I'm already a member
      </router-link>
    </a-form-item>
  </a-form>
</template>
<script>
import { userMethods } from '@state/helpers'
export default {
  page: {
    title: 'ForgotPassword',
    meta: [{ name: 'description', content: 'ForgotPassword' }],
  },
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'forgot_password' }),
      loading: false,
    }
  },
  methods: {
    ...userMethods,
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true
          let data = {
            email: values.email,
          }
          let self = this
          this.forgotPassword({ data })
            .then((res) => {
              this.$success({
                title: 'Email Sent!',
                content:
                  ' An email was sent to your registered email address. Please check your email',
                onOk() {
                  self.$router.push({ name: 'signin' })
                },
              })
              this.loading = false
            })
            .catch((err) => {
              this.$message.error(
                err.message ? err.message : err.status.message
              )
              this.loading = false
            })
        }
      })
    },
  },
}
</script>

<style scoped></style>
