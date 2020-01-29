<template>
    <div>
        <my-component :render="render"/>
    </div>
</template>

<script>
    import MyComponent from './my-component'
    export default {
        name: 'demo',
        components: {MyComponent},
        data(){
            return {
                render:(h)=>{
                    return h('div',{
                        style:{
                            color: 'red'
                        }
                    },'自定义内容')
                }
            }
        }
    }
</script>

<style scoped>

</style>
