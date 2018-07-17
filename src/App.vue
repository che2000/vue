<template>
  <div class="container">
    <router-view name="header"></router-view>
    <transition name='slide-fade'>
      <router-view name="content"></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {},
  components: {

  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all 0s linear;
}
.slide-fade-enter {
  transform: translateX(100%);
}
.slide-fade-enter-to {
  transform: translateX(0%);
}
.slide-fade-leave {
  transform: translateX(0);
}
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
