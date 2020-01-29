<template>
    <button @click="handleClick">触发事件</button>
</template>

<script>
    import Emmit from './emmitter'
    export default {
        name: 'componentA',
        mixins:[Emmit],
        methods:{
            handleClick(){
                this.broadcast('componentB','on-message','Hello vue.js')
            }
        }
    }
</script>

<style scoped>

</style>
