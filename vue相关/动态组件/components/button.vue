<template>
    <component :is="tagName" v-bind="tagProps">
        <slot/>
    </component>
</template>

<script>
    // i-button组件中的component is绑定的就是一个标签名称button/a, 并且通过v-bind奖一些额外的属性全部绑定到<component>上
    export default {
        name: 'IButton',
        props:{
            to:{
                type:String,
                default:''
            },
            target:{
                type:String,
                default: '_self'
            }
        },
        computed:{
            tagName(){
                return this.to === ''?'button':'a'
            },
            tagProps(){
                let props = {}
                if(this.to){
                    props = {
                        target: this.target,
                        href: this.to
                    }
                }
                return props
            }
        }
    }
</script>

<style scoped>

</style>
