<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header class="nav-head">
      <div class="brand">
        <div class="brand-drawer">
          <a-icon type="menu-fold" @click="openDrawer" />
        </div>

        <div class="brand-img">
          <img src="@assets/logo.svg" alt="" />
        </div>
        <h3 class="brand-title">Smart Store <small>v1.0</small> </h3></div
      >
      <a-menu mode="horizontal" class="nav-menu">
        <a-menu-item> <a-icon type="bell" />Notifications </a-menu-item>
        <a-menu-item>
          <a-icon :size="64" type="shopping-cart" /> Orders
        </a-menu-item>
        <a-menu-item>
          <a-avatar
            style="margin-top: -5px;"
            :src="imgBaseUrl + user.result.avatar"
          />
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div class="nav-content">
        <RouterView :key="$route.fullPath" />
      </div>
    </a-layout-content>
    <layout-footer></layout-footer>
    <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      :visible="showDrawer"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </a-layout>
</template>
<script>
import layoutFooter from '@layouts/footer'
import { authGetters } from '@state/helpers'
export default {
  components: {
    layoutFooter,
  },
  data() {
    return {
      showDrawer: false,
      imgBaseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  computed: {
    user() {
      return this.getAuthenticationToken()
    },
  },

  methods: {
    ...authGetters,
    openDrawer() {
      this.showDrawer = true
    },
    onClose() {
      this.showDrawer = false
    },
  },
}
</script>

<style scoped>
.brand {
  display: flex;
}
.brand-img {
  width: 5rem;
  height: 2rem;
  float: left;
  object-fit: contain;
}
.brand-img img {
  width: 100%;
  height: 100%;
}
.brand-title {
  float: left;
  margin: 0;
}
.brand-drawer {
  margin: 0 0 0 1rem;
}
</style>
