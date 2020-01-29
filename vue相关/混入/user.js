export default {
    data(){
        return{
            userInfo:null
        }
    },
    methods:{
        getUserInfo() {
            $.ajax('/user/info',data=>{
                this.userInfo = data
            })
        }
    },
    mounted() {
        this.getUserInfo()
    }
}
