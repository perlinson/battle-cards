<template>
  <v-flex xs12 sm12 md12 lg12 xl12>
    <v-card>
      <v-card-title primary-title style="flex-direction: column">
        <span class="headline">{{ title }}</span>
        <div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="newCard.name"
              :rules="[(v) => !!v || 'Name is required']"
              label="Name"
            ></v-text-field>
            <v-text-field
              v-model="newCard.description"
              :rules="[(v) => !!v || 'Description is required']"
              label="Description"
            ></v-text-field>
            <v-text-field v-model="newCard.tags" label="Tags"></v-text-field>
            <v-text-field v-model="newCard.image" label="Image"></v-text-field>
            <v-text-field v-model="newCard.url" label="URL"></v-text-field>
            <v-text-field
              v-model="newCard.source"
              label="Source"
            ></v-text-field>
            <v-text-field
              v-model="newCard.author"
              label="Author"
            ></v-text-field>
            <v-text-field v-model="newCard.date" label="Date"></v-text-field>
            <v-text-field
              v-model="newCard.source_url"
              label="Source URL"
            ></v-text-field>
            <v-text-field
              v-model="newCard.source_author"
              label="Source Author"
            ></v-text-field>
            <v-text-field
              v-model="newCard.source_date"
              label="Source Date"
            ></v-text-field>
            <v-text-field
              v-model="newCard.source_description"
              label="Source Description"
            >
            </v-text-field>
          </v-form>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      newCard: {
        name: '',
        description: '',
        tags: '',
        image: '',
        url: '',
        source: '',
      },
    }
  },
}
</script>

<style></style>
