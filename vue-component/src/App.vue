<template>
  <div id="app">
    <router-view/>
    <sv-input v-model="username" placeholder="place input you username">
      <template v-slot:beforeAppend>Username:</template>
      <template v-slot:afterAppend>submit</template>
    </sv-input>
    <sv-input v-model="password" type="text" placeholder="place input you password">
      <template v-slot:beforeAppend>Password:</template>
      <template v-slot:afterAppend>submit</template>
    </sv-input>
    {{username + password}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
