<template>

</template>

<script>
    export default {
        name: 'componentB',
        created() {
            this.$on('on-message', this.showMessage)
        },
        methods: {
            showMessage(text){
                window.alert(text)
            }
        }
    }
</script>

<style scoped>

</style>
