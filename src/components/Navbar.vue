<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new Proj.</span>
      <v-btn flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat app>
    <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">The Mother Of</span>
        <span> Wi-Fi</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu offset-y>
      <v-btn flat slot="activator" color="grey">
        <v-icon>expand_more</v-icon>
        <span>Menu</span>
      </v-btn>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-title>{{ link.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn flat color="grey">
      <span>Sign Out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <img src="https://www.womenshistory.org/sites/default/files/styles/4_up_card/public/images/2018-09/Lamarr%20square.jpg?itok=gfMOSbgq">
          </v-avatar>
          <h6 class="white--text title mt-3 ml-3 font-weight-thin">Hedy Lamarr</h6>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
      </v-layout>
      <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-action>
                  <v-icon class="amber--text">{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title class="amber--text">{{ link.text }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from './Popup'

export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'widgets', text: 'Dashboard', route: '/' },
        { icon: 'functions', text: 'Projects', route: '/projects' },
        { icon: 'movie', text: 'Films', route: '/films' },
        { icon: 'mood', text: 'Team', route: '/team' },
        { icon: 'face', text: 'About', route: '/about' }
      ],
      snackbar: false
    }
  }
}
</script>