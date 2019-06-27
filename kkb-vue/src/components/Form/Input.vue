<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>
<script>
export default {
    // 组件将不会把未被注册的props呈现为普通的HTML属性。但是在组件里我们可以通过其$attrs可以获取到没有使用的注册属性
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput (e) {
            this.$emit('input', e.target.value)
            // 调用父组件校验方法
            this.$parent.$emit('validate')
        }
    }
}
</script>
<style scoped>

</style>
