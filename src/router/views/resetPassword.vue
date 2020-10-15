<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="card-form"
    @submit.prevent="handleSubmit"
  >
    <h3>Reset Your Password</h3>
    <a-form-item label="Password" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item label="Confirm Password" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item>
      <a-button
        :loading="loading"
        type="primary"
        html-type="submit"
        class="card-form-button"
      >
        Reset Password
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
    title: 'ResetPassword',
    meta: [{ name: 'description', content: 'ResetPassword' }],
  },
  components: {},
  data() {
    return {
      confirmDirty: false,
      form: this.$form.createForm(this, { name: 'reset_password' }),
      token: '',
      loading: false,
    }
  },
  created() {
    if (this.$route.query) {
      this.token = this.$route.query.token
    }
  },
  methods: {
    ...userMethods,
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          let data = { token: this.token, newPassword: values.password }
          this.loading = true
          let self = this
          this.resetPassword({ data })
            .then((res) => {
              this.$success({
                title: 'Password Reset Success!',
                content:
                  'Your password was changed successfully! Go to login page and enter your newly created password',
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
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback(new Error('Two passwords that you enter is inconsistent!'))
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
  },
}
</script>
<style scoped></style>
