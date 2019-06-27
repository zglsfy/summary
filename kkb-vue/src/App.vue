<template>
  <div id="app">
    <!-- <router-view/> -->
    <tree></tree>
    <Form></Form>
  </div>
</template>

<script>
import Tree from '@/components/Tree'
import Form from '@/components/Form'
export default {
  name: 'App',
  components: { Tree, Form }
}
</script>

<style>

</style>
