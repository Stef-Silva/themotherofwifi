<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
          </v-card>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  

  export default {
    data() {
      return {
        team: [          
          { name: 'Stefani Silva', role: 'Web developer', avatar: 'data:image/jpeg;base64,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' },
          { name: 'Hedy', role: 'Actress & Inventor', avatar: 'https://www.hedylamarr.com/wp-content/uploads/2017/03/Hedy-Lamarr-classic-movies-9477803-1194-1500-e1490366447977.jpg' },
          { name: 'George Antheil', role: 'Musician', avatar: 'https://www.abc.net.au/radionational/image/6249622-1x1-700x700.jpg' },
          { name: 'Women In Tech', role: 'Developers', avatar: 'https://unifor199.org/wp-content/uploads/2016/01/women-power.png' }
        ]
      }
    }
  }
</script>
