<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header class="nav-head">
      <div class="brand">
        <div class="brand-drawer">
          <a-icon type="menu" @click="openDrawer" />
        </div>

        <div class="brand-img">
          <img src="@assets/logo.svg" alt="" />
        </div>
        <h3
          class="brand-title cursor-pointer"
          @click="gotoRoute({ name: 'home', path: '/home' })"
          >Smart Store <small>v1.0</small>
        </h3></div
      >
      <a-menu mode="horizontal" class="nav-menu">
        <a-menu-item
          :class="{
            'ant-menu-item-selected': currentRoute({
              name: 'favorites',
              path: '/favorites',
            }),
          }"
          @click="gotoRoute({ name: 'favorites' })"
          ><a-icon type="heart" />Favourites
        </a-menu-item>
        <a-menu-item>
          <a-icon :size="64" type="shopping-cart" /> Orders
        </a-menu-item>
        <a-menu-item v-if="user">
          <a-dropdown>
            <a-avatar
              style="margin-top: -5px;"
              :src="imgBaseUrl + user.result.avatar"
            />
            <a-menu slot="overlay">
              <a-menu-item>
                <h4> {{ user.result.firstName }} {{ user.result.lastName }}</h4>
                <p> {{ user.result.email }}</p>
              </a-menu-item>
              <a-menu-item
                ><a-icon type="setting" />Account Settings</a-menu-item
              >
              <a-menu-item><a-icon type="read" />About Us</a-menu-item>
              <a-menu-item><a-icon type="phone" />Contact Us</a-menu-item>
              <a-menu-item @click="signOutUser"
                ><a-icon type="logout" />Sign Out</a-menu-item
              >
            </a-menu>
          </a-dropdown>
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
      v-if="user"
      title="Smart Store v1.0"
      placement="left"
      :closable="false"
      :visible="showDrawer"
      @close="onClose"
      ><a-avatar style="" :size="64" :src="imgBaseUrl + user.result.avatar" />
      <h3 class="mt-1"
        >Hello, {{ user.result.firstName }} {{ user.result.lastName }}</h3
      >
      <p>{{ user.result.email }}</p>
      <a-divider type="horizontal" />

      <a-menu
        mode="inline"
        :default-open-keys="['category', 'account']"
        class="drawer-menu"
      >
        <a-sub-menu key="category">
          <span slot="title"
            ><a-icon type="apartment" /><span> Available Categories</span></span
          >
          <a-menu-item
            v-for="el in categoryList"
            :key="el.id"
            :class="{
              'ant-menu-item-selected': currentRoute({
                name: 'category',
                params: { id: el.id },
                path: '/category/' + el.id,
              }),
            }"
            @click="
              gotoRoute({
                name: 'category',
                params: { id: el.id },
                query: {
                  categoryName: el.name,
                },
                path: '/category/' + el.id,
              })
            "
          >
            {{ el.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="account">
          <span slot="title"><a-icon type="user" /><span>Personal</span></span>
          <a-menu-item>
            Your Account
          </a-menu-item>
          <a-menu-item>
            Your Orders
          </a-menu-item>
          <a-menu-item>
            Favourites
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
      <a-divider type="horizontal" />
      <h4 class="mt-1">Contact Us</h4>
      <h4 class="mt-1">About Us</h4>
      <h4 class="mt-1">Sign Out</h4>
    </a-drawer>
  </a-layout>
</template>
<script>
import layoutFooter from '@layouts/footer'
import { authGetters, authMethods, categoryMethods } from '@state/helpers'
export default {
  components: {
    layoutFooter,
  },
  data() {
    return {
      showDrawer: false,
      imgBaseUrl: process.env.VUE_APP_BASE_URL,
      categoryList: [],
    }
  },
  computed: {
    user() {
      return this.getAuthenticationToken()
    },
  },
  created() {
    console.log('created -> this.$route', this.$route)
    this.getCategoryList()
  },
  methods: {
    ...authGetters,
    ...authMethods,
    ...categoryMethods,
    openDrawer() {
      this.showDrawer = true
    },
    onClose() {
      this.showDrawer = false
    },
    signOutUser() {
      this.$router.push({ name: 'signin' })
      this.signOut()
    },
    currentRoute(route) {
      if (route.path === this.$route.path) {
        return true
      } else {
        return false
      }
    },
    gotoRoute(route) {
      if (route.path !== this.$route.path || route.name !== this.$route.name) {
        this.$router.push(route)
      }
    },
    getCategoryList() {
      this.getAllCategories()
        .then((res) => {
          this.categoryList = res.result
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
}
</script>

<style scoped></style>
