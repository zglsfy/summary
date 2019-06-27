<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
</template>
<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    props: {
        prop: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            errorMsg: ''
        }
    },
    mounted () {
        this.$on('validate', this.validate)
    },
    methods: {
        validate () {
            const value = this.form.model[this.prop]
            const rules = this.form.rules[this.prop]
            const desc = {[this.prop]: rules}
            const schema = new Schema(desc)

            return schema.validate({[this.prop]: value}, error => {
                if (error) {
                    this.errorMsg = error[0].message
                } else {
                    this.errorMsg = ''
                }
            })
        }
    }
}
</script>
<style scoped>

</style>
