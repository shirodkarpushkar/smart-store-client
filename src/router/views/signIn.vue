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
          'userName',
          {
            rules: [{ required: true, message: 'Please input youe email!' }],
          },
        ]"
        placeholder="Username"
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
      <a-button type="primary" html-type="submit" class="card-form-button">
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
export default {
  page: {
    title: 'signIn',
    meta: [{ name: 'description', content: 'signIn' }],
  },
  components: {},
  data() {
    return { form: this.$form.createForm(this, { name: 'normal_login' }) }
  },

  methods: {
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>
<style scoped></style>
