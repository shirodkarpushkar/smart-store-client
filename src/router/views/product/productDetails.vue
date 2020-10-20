<template>
  <div v-if="product" class="p-2">
    <a-row type="flex" align="middle">
      <a-col v-bind="imgLayout">
        <img class="product-img" :src="imageBaseURL + product.image" alt="" />
      </a-col>
      <a-col v-bind="prodLayout">
        <div class="m-3">
          <h2
            >{{ product.name }}&nbsp;
            <a-tag color="green">
              {{ product.category }}
            </a-tag></h2
          >
          <p>{{ product.description }}</p>
          <h4> No Cost EMI available </h4>
          <h4> Payment Options : Credit/Debit/Cash on Delivery </h4>
          <h4 class="mt-2">Price: &#8377;{{ product.price }}</h4>
          <a-button>Buy Now</a-button>
        </div>
      </a-col>
      <a-col>
        <h2>Reviews</h2>
        <product-review
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        ></product-review>
        <add-review @refresh="getReviews"></add-review>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { productMethods } from '@state/helpers'
import ProductReview from './productReview'
import AddReview from './addReview'
export default {
  page: {
    title: 'ProductDetails',
    meta: [{ name: 'description', content: 'ProductDetails' }],
  },
  components: { ProductReview,AddReview },

  data() {
    return {
      id: null,
      product: null,
      reviews: [],
      imageBaseURL: process.env.VUE_APP_BASE_URL,
      imgLayout: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      prodLayout: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getProduct()
    this.getReviews()
  },
  methods: {
    ...productMethods,
    getProduct() {
      this.getProductById({ id: this.id })
        .then((res) => {
          this.product = res.result
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
    getReviews() {
      this.getProductReviewsById({ id: this.id })
        .then((res) => {
          this.reviews = res.result
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
}
</script>

<style scoped>
.product-img {
  width: 100%;
  height: 26rem;
  object-fit: contain;
}
</style>
