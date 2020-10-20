<template>
  <a-comment>
    <template slot="actions">
      <a-rate :default-value="review.rating" disabled />
    </template>
    <a slot="author"
      >&nbsp;{{ review.customer.name }} &nbsp;
      <span class="float-right">{{ review.createdAt | dateIST }}</span></a
    >
    <a-avatar
      slot="avatar"
      :src="imageBaseURL + review.customer.avatar"
      alt="Han Solo"
    />

    <div slot="content">
      <h4>&nbsp;{{ review.title }}</h4>
      <p> {{ review.body }}</p>
    </div>
  </a-comment>
</template>

<script>
export default {
  filters: {
    dateIST: function(value) {
      let currentTime = new Date(value)

      let currentOffset = currentTime.getTimezoneOffset()

      let ISTOffset = 330 // IST offset UTC +5:30

      let ISTTime = new Date(
        currentTime.getTime() + (ISTOffset + currentOffset) * 60000
      )
      return ISTTime
    },
  },
  props: {
    review: {
      type: Object,
      default: () => {
        return {
          id: null,
          title: '',
          body: '',
          rating: 0,
          product: null,
          customer: {
            id: null,
            name: '',
            avatar: '',
          },
          createdAt: '',
        }
      },
    },
  },
  data() {
    return {
      imageBaseURL: process.env.VUE_APP_BASE_URL,
    }
  },
}
</script>

<style></style>
