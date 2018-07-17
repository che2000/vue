<template>
  <footer>
    <ul>
      <router-link to='/home' tag='li'>首页</router-link>
      <router-link to='/casts' tag='li'>演员</router-link>
      <router-link to='/movie' tag='li'>电影</router-link>
      <router-link to='/cart' tag='li'>购物车</router-link>
      <router-link :to='{path: "/user"}' tag='li'>我的 </router-link>
    </ul>
  </footer>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
