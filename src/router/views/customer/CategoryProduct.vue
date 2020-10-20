<template>
  <div class="p-2">
    <h2>Category: {{ category.name }}</h2>
    <a-row :gutter="[16, 16]">
      <a-col v-for="(el, i) in products" :key="i" v-bind="layout">
        <product-card :product="el" @refreshList="getProducts"></product-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { categoryMethods, productMethods } from '@state/helpers'
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
      category: {
        id: null,
        name: '',
      },
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
    if (this.$route.name === 'category') {
      const query = this.$route.query
      const params = this.$route.params
      this.category.id = params.id
      this.category.name = query.categoryName
      this.getProducts()
    }
  },
  methods: {
    ...categoryMethods,
    ...productMethods,
    getProducts() {
      this.getProductByCategoryId({ id: this.category.id })
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
