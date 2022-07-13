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

  created() {
    this.getNews()
  },

  methods: {
    getNews() {
      this.$api.get('/news')
        .then(data => this.$set(this, 'news', data))
        .catch(e => console.log(e))
    },
  },
}
</script>
