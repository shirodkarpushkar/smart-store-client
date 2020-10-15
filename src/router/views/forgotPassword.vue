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
      <a-button type="primary" html-type="submit" class="card-form-button">
        Recover
      </a-button>
      <router-link :to="{ name: 'signin' }">
        I'm already a member
      </router-link>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  page: {
    title: 'ForgotPassword',
    meta: [{ name: 'description', content: 'ForgotPassword' }],
  },
  components: {},
   data() {
    return { form: this.$form.createForm(this, { name: 'forgot_password' }) }
  },
  methods:{
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  }
}
</script>

<style scoped></style>
