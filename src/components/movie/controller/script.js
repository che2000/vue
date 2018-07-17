import bus from '@/bus.js'
export default {
  methods: {
    sendData (val) {
      this.$bus.$emit('controller-box', val)
    }
  },
  mounted () {
    this.$bus.$on('box-controller', function (val) {
      console.log('controller接收到', val)
    })
    this.$bus.$on('box-controller1', function (val) {
    	console.log('controller接收到', val)
    	this.$bus.$emit('controller-box1', '072号')
    })
  }
}