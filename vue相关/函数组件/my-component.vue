<template>
    <div>
        <Render :render="render"/>
    </div>
</template>

<script>
    import Render from './render'
    export default {
        name: 'my-component',
        components: {Render},
        props:{
            render:Function
        }
    }
</script>

<style scoped>

</style>
