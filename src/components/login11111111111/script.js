export default {
  methods: {
    login(){
      localStorage.isLogin = 1
      window.history.go(-1)
    }
  }
}
