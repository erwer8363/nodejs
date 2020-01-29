<template>

</template>

<script>
    export default {
        name: 'App',
        provide(){
            return {
                app:this
            }
        },
        data(){
            return {
                userInfo:null
            }
        },
        methods:{
            getUserInfo(){
                $.ajax('/user/info',(data)=>{
                    this.userInfo = data
                })
            }
        },
        mounted() {
            this.getUserInfo()
        }
    }
</script>

<style scoped>

</style>
