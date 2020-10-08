<template>
  <a-form :form="form" class="register-form" @submit.prevent="handleSubmit">
    <h3>Register</h3>
    <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :custom-request="handleUpload"
      :show-upload-list="false"
      :before-upload="beforeUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <a-icon :type="imageLoading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        First Name&nbsp;
        <a-tooltip title="Your First Name">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          'firstName',
          {
            rules: [
              {
                required: true,
                message: 'Please input your First Name!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        Last Name&nbsp;
        <a-tooltip title="Your Last Name">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          'firstName',
          {
            rules: [
              {
                required: true,
                message: 'Please input your Last Name!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="E-mail">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Address Line 1">
      <a-input
        v-decorator="[
          'AddressLine1',
          {
            rules: [
              {
                required: true,
                message: 'This field is required!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Address Line 2">
      <a-input
        v-decorator="[
          'AddressLine2',
          {
            rules: [
              {
                required: true,
                message: 'This field is required!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="City">
      <a-input
        v-decorator="[
          'city',
          {
            rules: [
              {
                required: true,
                message: 'This field is required!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="State">
      <a-input
        v-decorator="[
          'state',
          {
            rules: [
              {
                required: true,
                message: 'This field is required!',
                whitespace: true,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="" @click.prevent="">
          agreement
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        Register
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { userMethods } from '@state/helpers'
export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
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
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      imageUrl: '',
      imageLoading: false,
      image: null,
      imageBaseURL:process.env.VUE_APP_BACKEND_SERVER
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    ...userMethods,
    handleSubmit(e) {
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
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
</style>
