<template>
  <div class="p-2">
    <h2>Your Favourites</h2>
    <a-row :gutter="[16, 16]">
      <a-col v-for="(el, i) in products" :key="i" v-bind="layout">
        <product-card :product="el" @refreshList="getProducts"></product-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { productMethods } from '@state/helpers'
import ProductCard from '../product/productCard';
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      collapsed: false,
      products: [],
      imageBaseURL: process.env.VUE_APP_BASE_URL,
      layout: {
        xs: {
          span: 24,
        },
        sm: {
          span: 12,
        },
        md: {
          span: 8,
        },
        lg: {
          span: 6,
        },
      },
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...productMethods,
    getProducts() {
      this.getFavoriteProducts()
        .then((res) => {
          this.products = res.result
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },

  },
}
</script>

<style></style>
