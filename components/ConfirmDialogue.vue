<template>
  <v-dialog v-model="localDialog" width="300" overlay-opacity="0.7">
    <template v-slot:activator="{ on }">
      <v-icon v-if="message.icon" color="error" small v-on="on">{{ message.icon }}</v-icon>
      <v-btn
        v-if="message.title === 'End Game'"
        depressed
        color="error"
        class="font-weight-bold"
        v-on="on"
      >
        end game
      </v-btn>
      <v-btn
        block
        large
        class="font-weight-bold"
        v-on="on"
        :color="message.headerColor"
        v-else-if="message.title != 'Kick Player'"
      >
        {{ message.title }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="white--text headline primary font-weight-bold">
        {{ message.title }}
      </v-card-title>
      <v-card-text class="font-weight-bold mt-3">{{ message.body }}</v-card-text>
      <v-divider />
      <v-card-actions class="mt-2 ">
        <v-spacer />
        <v-btn large color="error" class="font-weight-bold" @click="localDialog = false">
          {{ message.button1 }}
        </v-btn>
        <v-btn
          large
          class="font-weight-bold"
          v-if="message.title === 'Start Game'"
          color="success"
          @click="$emit('start')"
        >
          {{ message.button2 }}
        </v-btn>
        <v-btn
          large
          class="font-weight-bold"
          v-if="message.title === 'Cancel Game'"
          color="success"
          @click="$emit('cancelGame')"
        >
          {{ message.button2 }}
        </v-btn>
        <v-btn
          large
          class="font-weight-bold"
          v-if="message.title === 'Kick Player'"
          color="success"
          @click="$emit('removeUser', userToRemove)"
        >
          {{ message.button2 }}
        </v-btn>
        <v-btn
          large
          class="font-weight-bold"
          v-if="message.title === 'Leave Lobby'"
          color="success"
          @click="$emit('removeUser', userToRemove)"
        >
          {{ message.button2 }}
        </v-btn>
        <v-btn
          large
          class="font-weight-bold"
          v-if="message.title === 'End Game'"
          color="success"
          @click="$emit('finishGame')"
        >
          {{ message.button2 }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "confirm-dialogue",
    props: {
      dialog: {
        type: Boolean,
        required: true,
      },
      message: {
        type: Object,
        required: true,
      },
      userToRemove: {
        type: String,
      },
    },
    data() {
      return {
        localDialog: true,
      };
    },
    watch: {
      dialog: {
        immediate: true,
        handler() {
          this.localDialog = this.dialog;
        },
      },
    },
  };
</script>

<style lang="scss" scoped></style>