<template>
    <div>
        组件B
    </div>
</template>

<script>
    import {findBrothersComponents} from '../../utils/assist'

    export default {
        name: 'componentB',
        mounted() {
            const comsB = findBrothersComponents(this, 'componentB')
            console.log(comsB)
        }
    }
</script>

<style scoped>

</style>
