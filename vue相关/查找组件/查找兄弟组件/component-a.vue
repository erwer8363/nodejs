<template>
    <div>
        组件A
        <component-b/>
        <component-b/>
    </div>
</template>

<script>
    import ComponentB from './component-b'
    export default {
        name: 'component-a',
        components: {ComponentB}
    }
</script>

<style scoped>

</style>
