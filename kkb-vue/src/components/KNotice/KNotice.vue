<template>
    <div class="bg" v-if="isShow">
        <div class="notice-container">
            <h3>{{ title }}</h3>
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 1000
        } 
    },
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        show () {
            this.isShow = true
            setTimeout(this.hide, this.duration)
        },
        hide () {
            this.isShow = false
            this.remove()
        }
    }
}
</script>
<style scoped>
.bg{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
}
.notice-container{
    width: 400px;
    height: 200px;
    background: #fff;
    border-radius: 5px;
}   
</style>
