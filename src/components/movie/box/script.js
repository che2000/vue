import bus from '@/bus.js'
export default {
  methods: {
    sendData () {
      this.$bus.$emit('box-controller1', '在哪')
    }
  },
  mounted () {
    this.$bus.$on('controller-box', function (val) {
      console.log("box接到电话",val)
      this.$bus.$emit('box-controller', '马上到')
    })
    this.$bus.$on('controller-box1', function (val) {
    	console.log("box接到消息",val)
    	
    })
  }
}

/**
 * var bus = new Vue()
    A组件和B组件
    A组件  bus.$on('b-a', (val) => {console.log(val)})
    B组件  bus.$emit('b-a', val)
 */
 