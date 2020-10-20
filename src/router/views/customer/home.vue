<template>
  <div>
    <banner></banner>
    <div class="p-2">
      <h2>Today's Smart Deals</h2>
      <a-row :gutter="[16, 16]">
        <a-col v-for="(el, i) in products" :key="i" v-bind="layout">
          <product-card :product="el" @refreshList="getProducts"></product-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import Banner from './components/banner'
import { productMethods } from '@state/helpers'
import ProductCard from '../product/productCard'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: { Banner, ProductCard },
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
      this.getCustomerProducts()
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
<style scoped></style>
