<template>
  <div class='index'>
    {{userInfo.name}}
  </div>
</template>

<script>
import {mutations, store} from './store'

export default {
  name: 'index',
  data() {
    return {}
  },
  computed: {
    userInfo() {
      return store.userInfo
    },
  },
  methods: {},
  mounted() {
    mutations.setUserInfo({
      name: '孙悟空',
    })
  },
}
</script>

<style scoped lang="scss">

</style>
