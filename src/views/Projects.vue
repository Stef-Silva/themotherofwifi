<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Create a secret communication system",
          person: "Hedy Kiesler",
          due: "1940",
          status: "done",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        },
        {
          title:
            "Send description of the concept to the National Inventions Council",
          person: "Hedy-Antheil",
          due: "1941",
          status: "done",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        },
        {
          title: "Earn a patent",
          person: "Hedy-Antheil",
          due: "11th August 1942",
          status: "done",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        },
        {
          title: "Being recognized",
          person: "Hedy Lamarr",
          due: "1990s",
          status: "done",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        },
        {
          title: "Make Hedy Lamarr known by every women",
          person: "Me Stef Silva",
          due: "today",
          status: "ongoing",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        },
        {
          title: "Fight against sexism",
          person: "Women",
          due: "nowadays",
          status: "ongoing",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et sequi itaque, ullam iusto labore fuga tempora veniam maiores consequuntur, laudantium magnam perferendis ipsa ipsum ab error sunt? Rerum, exercitationem."
        }
      ]
    };
  },

  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Hedy Kiesler'
      })
    }
  }
};
</script>
