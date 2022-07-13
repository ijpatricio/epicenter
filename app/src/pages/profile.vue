<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/vuetify-logo.svg"
        alt="Vuetify.js"
        class="logo-height mb-2"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ProfilePage'
}
</script>

<style scoped>
.logo-height {
  height: 120px;
}
</style>
