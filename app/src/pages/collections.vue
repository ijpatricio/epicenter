<template>
  <div>
    Collections Page

    <div class="mt-12">
      <Paginator endpoint="/collections" v-slot="__">

        <div class="tw-flex tw-flex-col">
          <div class="tw-flex tw-flex-row tw-gap-4">
            <v-card
              class="mt-4"
              v-for="collection in __.data"
              :key="collection.id"
              :cols="collection.flex"
            >
              <v-img
                :src="collection.img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                max-width="150px"
              >
                <v-card-title v-text="collection.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <v-pagination
            v-model="__.paginator.current_page"
            :length="6"
            circle
          ></v-pagination>

        </div>
      </Paginator>


    </div>

    <div class="mt-12">
      <Paginator endpoint="/news" v-slot="__">
        <div>
          <div v-for="(news, i) in __.data" :key="i">
            <div>
              Foo bar
              <span v-text="news.title"/>
            </div>
          </div>
          <v-pagination
            v-model="__.paginator.current_page"
            :length="6"
          ></v-pagination>
        </div>
      </Paginator>
    </div>


  </div>
</template>

<script>
import Paginator from '@/components/renderless/paginator'

export default {
  name: 'Collections',
  components: {Paginator},
  data: () => ({
    collectionPaginator: {
      data: [],
    },
    newMessage: '',
  }),
  created() {
    this.getCollections()
  },
  methods: {
    getCollections() {
      this.$api
        .get('/collections')
        .then(data => this.collectionPaginator = data)
    },
  },
}
</script>
