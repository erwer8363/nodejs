<template>
  <transition name="custom-loading-fade">
    <div v-show="visible" class="custom-loading-mask">
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <p class="custom-loading-text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      visible: false,
      text: '',
    }
  },
}
</script>

<style scoped lang="scss">

</style>
