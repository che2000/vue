import {Toast} from 'mint-ui'
import Controller from './controller/index.vue'
import Box from './box/index.vue'
export default {
  methods: {
    pay () {
      localStorage.isPay = 1
    }
  },
  components:{
    'v-box': Box,
    'v-controller': Controller
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter')
    // var r = confirm('你买电影票了吗？');
    // next()
    // console.log(r)
    // r ? next() : next(false)
   /*  localStorage.getItem('isBuy') == 1 
    ? next() 
    : Toast('没有票看什么电影');next((vm) => {
      vm.$router.push('/register')
    }) */
    if(localStorage.getItem('isBuy') == 1){
      next() 
    }else  if(localStorage.getItem('isBuy') == 0){
      next( (vm) => {
        vm.$router.push('/register')
      })
      // this.$router.push('/register')
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave')

//     var r = confirm('你付钱了吗？');
//     r ? next() : next(false)
    if(localStorage.getItem('isPay') == 1){
    	next() 
    }else  if(localStorage.getItem('isPay') == 0){
    	Toast('想吃霸王餐？');
    	next(false)
    	// this.$router.push('/register')
    }
  }
}