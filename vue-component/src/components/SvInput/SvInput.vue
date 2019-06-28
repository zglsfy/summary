<template>
    <div class="input-container clearfix">
        <div class="sv-input_slot__container sv-input_right__append"><slot name="beforeAppend"></slot></div>
        <input 
        v-bind="$attrs" 
        :value="value" 
        @input="onInput"
        >
        <div class="sv-input_slot__container sv-input_left__append"><slot name="afterAppend"></slot></div>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    name: 'SvInput',
    props: {
        value: String
    },
    methods: {
        onInput (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>
<style scoped>
    .input-container{
        margin: 10px;
    }
    .clearfix {
        overflow: auto;
    }
    input {
        display: inline-block;
        outline: none;
        border: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
        width: 200px;
        box-sizing: border-box;
        padding: 0 10px;
        float: left;
    }
    input:focus {
        outline: none;
        border-color: #9ecaed;
        box-shadow: 0 0 5px #9ecaed;
    }
    input:disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
    }
    .sv-input_slot__container{
        float: left;
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: middle;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 14px;
        display: inline-block;
        white-space: nowrap;
    }
    .sv-input_right__append{
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .sv-input_left__append{
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>
