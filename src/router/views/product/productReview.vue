<template>
  <a-comment>
    <template slot="actions">
      <a-rate :default-value="review.rating" disabled />
    </template>
    <a slot="author">&nbsp;{{ review.customer.name }}  &nbsp; <span class="float-right">{{ review.createdAt | dateIST}}</span></a>
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
      let date = new Date(value)
      let dateUTC = date.getTime()
      var dateIST = new Date(dateUTC)
      dateIST.setHours(dateIST.getHours() + 5)
      dateIST.setMinutes(dateIST.getMinutes() + 30)
      return dateIST
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
