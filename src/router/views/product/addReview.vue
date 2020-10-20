<template>
  <a-form
    :form="form"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 12 }"
    @submit.prevent="handleSubmit"
  >
    <a-form-item label="Title">
      <a-input
        v-decorator="[
          'title',
          { rules: [{ required: true, message: 'Please input your Title!' }] },
        ]"
        placeholder="Title"
      />
    </a-form-item>
    <a-form-item label="Description">
      <a-textarea
        v-decorator="[
          'description',
          {
            rules: [
              { required: true, message: 'Please input your description' },
            ],
          },
        ]"
        :rows="4"
        placeholder="Description"
        :max-length="255"
      />
    </a-form-item>
    <a-form-item label="Rating">
      <a-rate v-model="rating" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :loading="submit"
        >Post</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script>
import { productMethods } from '@state/helpers'

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'add_review' }),
      submit: false,
      rating: 1,
    }
  },
  methods: {
    ...productMethods,
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.submit = true

          let data = {
            title: values.title,
            description: values.description,
            rating: this.rating,
          }
          this.addProductReviewsById({ id: this.$route.params.id, data })
            .then((result) => {
              this.$message.success(result.status.message)
              this.form.resetFields()
              this.$emit('refresh')
              this.submit = false
            })
            .catch((err) => {
              this.submit = false

              this.$message.error(err)
            })
        }
      })
    },
  },
}
</script>

<style></style>
