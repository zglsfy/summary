<template>
    <div>
        <h1>home</h1>
        <router-link to='/child'>child</router-link>
        <!-- <router-view></router-view> -->
        <!-- {{$store.state.a}} -->
        <!-- {{$store.state.b}} -->
    </div>
    
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {
        // this.$store.commit('changeA')
        // this.$store.dispatch('asyncChangeB')
        // console.log(this.$store.a)
    }
}
</script>
<style scoped>

</style>
