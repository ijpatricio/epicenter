<template>
  <v-app>
    <div class="d-flex flex-grow-1">

      <!-- Navigation -->
      <v-navigation-drawer
        v-model="drawer"
        app
        floating
        class="elevation-1"
        :right="$vuetify.rtl"
        :light="menuTheme === 'light'"
        :dark="menuTheme === 'dark'"
      >
        <!-- Navigation menu info -->
        <template v-slot:prepend>
          <div class="pa-2">
            <div class="title font-weight-bold text-uppercase primary--text">{{ product.name }}</div>
            <div class="overline grey--text">{{ product.version }}</div>
          </div>
        </template>

        <!-- Navigation menu -->
        <main-menu :menu="navigation.menu"/>

        <!-- Navigation menu footer -->
        <template v-slot:append>
          <!-- Footer navigation links -->
          <div class="pa-1 text-center">
            <v-btn
              v-for="(item, index) in navigation.footer"
              :key="index"
              :href="item.href"
              :target="item.target"
              small
              text
            >
              {{ item.key ? $t(item.key) : item.text }}
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <!-- Toolbar -->
      <v-app-bar
        app
        :color="isToolbarDetached ? 'surface' : undefined"
        :flat="isToolbarDetached"
        :light="toolbarTheme === 'light'"
        :dark="toolbarTheme === 'dark'"
      >
        <v-card
          class="flex-grow-1 d-flex"
          :class="[isToolbarDetached ? 'pa-1 mt-3 mx-1' : 'pa-0 ma-0']"
          :flat="!isToolbarDetached"
        >
          <div class="d-flex flex-grow-1 align-center justify-space-between">

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <div class="d-flex align-center">
              <toolbar-user/>
            </div>
          </div>
        </v-card>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height" :fluid="!isContentBoxed">
          <v-layout>
            <nuxt/>
          </v-layout>
        </v-container>

      </v-main>
    </div>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'

// navigation menu configurations
import config from '../configs'

import MainMenu from '../components/navigation/MainMenu'
import ToolbarUser from '../components/toolbar/ToolbarUser'
import ToolbarApps from '../components/toolbar/ToolbarApps'
import ToolbarNotifications from '../components/toolbar/ToolbarNotifications'

export default {
  components: {
    MainMenu,
    ToolbarUser,
    ToolbarApps,
    ToolbarNotifications
  },
  data() {
    return {
      drawer: null,
      showSearch: false,

      navigation: config.navigation
    }
  },
  computed: {
    ...mapState('app', ['product', 'isContentBoxed', 'menuTheme', 'toolbarTheme', 'isToolbarDetached'])
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.buy-button {
  box-shadow: 1px 1px 18px #ee44aa;
}
</style>
