<template>
    <div>
        <button @click="handleChange('A')">显示A组件</button>
        <button @click="handleChange('B')">显示B组件</button>
        <button @click="handleChange('C')">显示C组件</button>
        <keep-alive>
            <component :is="component"/>
        </keep-alive>
    </div>
</template>

<script>
    /*
    * keep-alive 还有额外的props可以配置
    * include 字符串或正则表达式,只有名称匹配的组件会被缓存
    * exclude 字符串或正则表达式,任何名称匹配的组件都不会被缓存
    * max 数字, 可以缓存多少组件实例
    * */
    import componentA from './A'
    import componentB from './B'
    import componentC from './C'
    export default {
        name: 'parent',
        data(){
          return {
              component: componentA
          }
        },
        methods:{
            handleChange(component){
                if(component === 'A'){
                    this.component = componentA
                }else if(component === 'B'){
                    this.component = componentB
                }else if(component === 'C'){
                    this.component = componentC
                }
            }
        }
    }
</script>

<style scoped>

</style>
