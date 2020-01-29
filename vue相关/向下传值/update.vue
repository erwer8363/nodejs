<template>
    <div>
        {{app.userInfo}}
    </div>
</template>

<script>
    export default {
        name: 'update',
        inject:['app'],
        methods:{
            // 这里修改完用户数据后, 通知app.vue更新
            changeUserInfo(){
                $.ajax('/user/update',()=>{
                    // 直接通过this.app 就可以调用app.vue更新
                    this.app.getUserInfo()
                })
            }
        }
    }
</script>

<style scoped>

</style>
