<template>
  <div class="mt-3">
    <a-result
      v-if="!verified && !linkExpired"
      title="Please wait while we verify your email..."
    >
      <template #icon>
        <a-spin size="large" />
      </template>
    </a-result>
    <a-result
      v-if="verified && !linkExpired"
      status="success"
      title="Email Verified"
      sub-title="Your Email has been successfully registered with us. Kindly click
              the below button to go to Login page."
    >
      <template #extra>
        <router-link :to="{name:'signin'}" class="ant-btn ant-btn-primary" >
          Login
        </router-link>
      </template>
    </a-result>
    <a-result
      v-if="linkExpired"
      status="error"
      title="Link Expired"
      sub-title="Please create a new registration from below button"
    >
      <template #extra>
        <router-link :to="{name:'register'}" class="ant-btn ant-btn-primary" >
          Register
        </router-link>
      </template>
    </a-result>
  </div>
</template>

<script>
import { userMethods } from '@state/helpers'

export default {
  page: {
    title: 'VerifyEmail',
    meta: [{ name: 'description', content: 'VerifyEmail' }],
  },
  components: {},
  data() {
    return {
      verified: false,
      linkExpired:false
    }
  },
  mounted() {
    if (this.$route.query) {
      let token = this.$route.query.token
      this.verifyEmail({ token })
        .then((result) => {
          this.verified = true
        })
        .catch((err) => {
          this.$message.error(err.message ? err.message : err.status.message)
          if(err.status.message === "jwt expired"){
            this.linkExpired = true
          }
        })
    }
  },
  methods: {
    ...userMethods,
  },
}
</script>

<style scoped></style>
