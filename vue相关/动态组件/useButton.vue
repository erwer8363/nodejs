<template>
    <div>
        <i-button>普通按钮</i-button>
        <br>
        <i-button to="https://juejin.im">链接按钮</i-button>
        <br>
        <i-button to="https://juejin.im" target="_blank">新窗口打开链接按钮</i-button>
    </div>
</template>

<script>
    import IButton from './components/button'
    export default {
        name: 'useButton',
        components: {IButton}
    }
</script>

<style scoped>

</style>
