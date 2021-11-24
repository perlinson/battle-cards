<template>
  <v-container fill-height fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <material-card
          color="green"
          title="用户列表"
          text="Here is a subtitle for this table"
        >
          <v-data-table :headers="headers" :items="users" hide-default-footer />
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.get('/api/users').then((res) => res.data.rows)
    return { users }
  },
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name',
      },
    ],
  }),
}
</script>
