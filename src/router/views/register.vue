<template>
  <a-form class="register-form" @submit.prevent="handleSubmit">
    <h3>Register</h3>
    <a-row type="flex" justify="space-between" align="middle">
      <a-col :sm="4" :xs="24">
        <a-upload
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :custom-request="handleUpload"
          :show-upload-list="false"
          :before-upload="beforeUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="avatar" />
          <div v-else>
            <a-icon :type="imageLoading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
      </a-col>
      <a-col :sm="20" :xs="24">
        <a-form-item
          v-bind="formItemLayout"
          :class="{ 'has-error': $v.user.firstName.$error }"
        >
          <span slot="label">
            First Name&nbsp;
            <a-tooltip title="Your First Name">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input
            v-model.trim="user.firstName"
            @input="$v.user.firstName.$touch"
          />
          <div v-if="$v.user.firstName.$error" class="ant-form-explain">
            First Name is required
          </div>
        </a-form-item>

        <a-form-item
          v-bind="formItemLayout"
          :class="{ 'has-error': $v.user.lastName.$error }"
        >
          <span slot="label">
            Last Name&nbsp;
            <a-tooltip title="Your Last Name">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input
            v-model.trim="user.lastName"
            @input="$v.user.lastName.$touch"
          />
          <div v-if="$v.user.lastName.$error" class="ant-form-explain">
            Last Name is required
          </div>
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item
          label="E-mail"
          :class="{ 'has-error': $v.user.email.$error }"
        >
          <a-input v-model="user.email" @input="$v.user.email.$touch" />
          <div v-if="!$v.user.email.required && $v.user.email.$dirty" class="ant-form-explain">
            Email is required.
          </div>
          <div v-if="!$v.user.email.email && $v.user.email.required && $v.user.email.$dirty" class="ant-form-explain">
            Enter a valid email.
          </div>
        </a-form-item>
        <a-form-item
          label="Password"
          :class="{ 'has-error': $v.user.password.$error }"
        >
          <a-input
            v-model="user.password"
            type="password"
            @input="$v.user.password.$touch"
          />
          <div v-if="$v.user.password.$error" class="ant-form-explain">
            Password is required
          </div>
        </a-form-item>
        <a-form-item
          label="Confirm Password"
          :class="{ 'has-error': $v.user.confirmPassword.$error }"
        >
          <a-input
            v-model="user.confirmPassword"
            type="password"
            @input="$v.user.confirmPassword.$touch"
          />
          <div v-if="!$v.user.confirmPassword.required && $v.user.confirmPassword.$dirty " class="ant-form-explain">
            Pls enter your password again.
          </div>
          <div v-if="!$v.user.confirmPassword.sameAsPassword && $v.user.confirmPassword.required && $v.user.confirmPassword.$dirty " class="ant-form-explain">
            Password is inconsistent.
          </div>
        </a-form-item>
        <a-form-item
          label="Address Line 1"
          :class="{ 'has-error': $v.user.addressLine1.$error }"
        >
          <a-input
            v-model="user.addressLine1"
            @input="$v.user.addressLine1.$touch"
          />
          <div v-if="$v.user.addressLine1.$error" class="ant-form-explain">
            This field is required
          </div>
        </a-form-item>
        <a-form-item
          label="Address Line 2"
          :class="{ 'has-error': $v.user.addressLine2.$error }"
        >
          <a-input
            v-model="user.addressLine2"
            @input="$v.user.addressLine2.$touch"
          />
          <div v-if="$v.user.addressLine2.$error" class="ant-form-explain">
            This field is required
          </div>
        </a-form-item>
        <a-form-item label="City" :class="{ 'has-error': $v.user.city.$error }">
          <a-input v-model="user.city" @input="$v.user.city.$touch" />
          <div v-if="$v.user.city.$error" class="ant-form-explain">
            This field is required
          </div>
        </a-form-item>
        <a-form-item
          label="State"
          :class="{ 'has-error': $v.user.state.$error }"
        >
          <a-input v-model="user.state" @input="$v.user.state.$touch" />
          <div v-if="$v.user.state.$error" class="ant-form-explain">
            This field is required
          </div>
        </a-form-item>
        <a-form-item :class="{ 'has-error': $v.user.agreement.$error }">
          <a-checkbox v-model="user.agreement">
            I have read the
            <a href="" @click.prevent="">
              agreement
            </a>
          </a-checkbox>
          <div v-if="$v.user.agreement.$error" class="ant-form-explain">
            Pls agree to the agreement.
          </div>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            Register
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { userMethods } from '@state/helpers'
import { required, email, sameAs } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        agreement: true,
      },
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },

      imageUrl: '',
      imageLoading: false,
      image: null,
      imageBaseURL: process.env.VUE_APP_BACKEND_SERVER,
    }
  },
  methods: {
    ...userMethods,
    handleSubmit(e) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('handleSubmit -> e', e, this.user)
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG/PNG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      this.image = file
      return isJpgOrPng && isLt2M
    },
    handleUpload(info) {
      const formData = new FormData()
      formData.append('image', this.image)
      this.imageLoading = true
      this.uploadImage({ data: formData })
        .then((res) => {
          this.imageLoading = false
          this.imageUrl = this.imageBaseURL + res.result.destination
          this.$message.success(res.status.message)
        })
        .catch((err) => {
          console.log('handleUpload -> err', err)
          this.imageLoading = false
          this.$message.error(err.message)
        })
    },
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required ,email},
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      addressLine1: { required },
      addressLine2: { required },
      city: { required },
      state: { required },
      agreement: { sameAs: sameAs(() => true) },
    },
  },
}
</script>

<style scoped>
.register-form {
  max-width: 40rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.avatar {
  height: auto;
  width: inherit;
}
.ant-form-explain {
  position: absolute;
}
</style>
