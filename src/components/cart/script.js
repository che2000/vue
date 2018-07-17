export default {
  beforeRouteEnter (to, from, next) {
    if(localStorage.isLogin == 1){
      next()
    }else{
      next((vm) => {
        vm.$router.push('/login')
      })
    }
  }

}