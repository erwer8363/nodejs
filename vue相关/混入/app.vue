<template>
    <div>
        {{mixins_user.userInfo}}
    </div>
</template>

<script>
    import mixins_user from './user'
    export default {
        name: 'app',
        mixins:['mixins_user'],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
