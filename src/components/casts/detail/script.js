import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      name: '',
      imgSrc: ''
    } 
  },
  methods: {
    getDataSuccess (res) {
      console.log(res)
      const { data } = res;
      this.name = data[0].name;
      this.imgSrc = data[0].avatars.small;
    },
    getDataFail (err) {
      console.log(err)
    }
  },
  mounted () {
    console.log(this)
    // const {id} = this.$route.query;
    const {id} = this.$route.params;
    axios.get('http://localhost:3000/api/getCastDetailRoute?id=' + id)
          .then(this.getDataSuccess)
          .catch(this.getDataFail)
  }
}