<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-text>
          <div>Welcome to</div>
          <p class="text-h4 text--primary">
            News page
          </p>
          <p>adjective</p>
        </v-card-text>
      </v-card>


      <v-card
        class="mx-auto mt-4"
        max-width="344"
      >
        <div class="ma-4">
          <v-btn @click="login"> Login </v-btn>
          <v-btn @click="logout"> Logout </v-btn>
        </div>
        <v-card-text>
          User:

          {{ $auth.user?.name }}
        </v-card-text>
      </v-card>


      <v-card
        class="mx-auto mt-4"
        max-width="344"
        v-for="(newsItem, i) in news"
        :key="i"
      >
        <v-card-text>
          <p class="text-h4 text--primary">
            {{ newsItem.title }}
          </p>
          <p> {{ newsItem.body }} </p>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'NewsPage',

  data: () => ({
    news: [],
  }),

  computed: {
    authData() {
      return this.$auth.user
    }
  },

  created() {
    this.getNews()
  },

  methods: {
    getNews() {
      this.$api.get('/news')
        .then(data => this.$set(this, 'news', data))
    },
    login() {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: 'admin@admin.com',
          password: 'password',
        }
      })
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
