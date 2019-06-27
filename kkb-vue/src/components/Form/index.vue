<template>
    <div>
        <Form :model="model" :rules="rules" ref="login">
            <FormItem prop="username" label="username:">
                <KInput placeholder="please input your username" v-model="model.username" autocomplete="off"></KInput>
            </FormItem>
            <FormItem prop="password" label="password:">
                <KInput type="password" placeholder="please input your password" v-model="model.password" autocomplete="off"></KInput>
            </FormItem>
            {{ model }}
            <FormItem label="">
                <button @click="submitForm()">提交</button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import Form from './Form'
import FormItem from './FormItem'
import KInput from './Input'
import Notice from '../KNotice/KNotice'
export default {
    components: { Form, FormItem, KInput },
    data () {
        return {
            model: {
                username: '',
                password: ''
            },
            rules: {
                username: [{required: true, message: 'username is required'}],
                password: [{required: true, message: 'password is required'}]
            }
        }
    },
    methods: {
        submitForm () {
            this.$refs['login'].validate(valid => {
                console.log(valid)
                // if (valid) {
                //     alert('提交成功')
                // } else {
                //     alert('提交失败')
                // }
                const notice = this.$create(Notice, {
                    title: '提示',
                    message: valid ? '登陆成功' : '校验失败',
                    duration: 1500
                })
                console.log(notice)
                notice.show()
            })
        }
    }
}
</script>
<style scoped>

</style>
