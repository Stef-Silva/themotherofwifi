<template>
  <div class="home">
    <h1 class="subheading grey--text">Home page</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip right>
          <v-btn small flat color="grey"  @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort project by person</span>
        </v-tooltip>  
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due date</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import db from '@/fb'

  export default {
    data() {
      return {
        projects: [
          
        ]
      }
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1) // whaaaat? o.o
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    }
  }
  /*
  { title: 'Create a secret communication system', person: 'Hedy Kiesler', due: '1940', status: 'done' },
          { title: 'Send description of the concept to the National Inventions Council', person: 'Hedy-Antheil', due: '1941', status: 'done' },
          { title: 'Earn a patent', person: 'Hedy-Antheil', due: '11th August 1942', status: 'done' },
          { title: 'Being recognized', person: 'Hedy Lamarr', due: '1990s', status: 'done' },
          { title: 'Make Hedy Lamarr known by every women', person: 'Me Stef Silva', due: 'today', status: 'ongoing' },
          { title: 'Fight against sexism', person: 'Women', due: 'nowadays', status: 'ongoing' } */ 
</script>
<style>
.project.done {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.done {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}
</style>


