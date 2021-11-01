<template>
  <div>
    <form @submit.prevent="createRoom">
      <label for="nameRoom">Room</label>
      <input id="nameRoom" v-model="name_room" type="text" name="nameRoom" />
      <button type="submit">submit</button>
    </form>
    <br />
    <div>
      <div v-for="(room, index) in list_rooms" :key="index">
        <span>{{ index }}.</span>
        <li>{{ room.name }}</li>
        <li>{{ room.players.length }}/2 players</li>
        <button @click="joinRoom(room)">join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      name_room: '',
      list_rooms2: [],
    }
  },
  computed: {
    ...mapState('room', {
      list_rooms: (state) => state.list_rooms,
    }),
    ...mapGetters({
      roomList: 'roomList',
    }),
  },

  watch: {
    list_rooms() {
      console.log('list_rooms', this.list_rooms)
      // // this.list_rooms = this.list_rooms
      // const uniqueIndex = []
      // const x = this.list_rooms.map((el) => el.id)
      // const unique = x.filter(onlyUnique)
      // // console.log(unique,'op')
      // // console.log(x,'p')
      // for (let i = 0; i < unique.length; i++) {
      //   uniqueIndex.push(x.lastIndexOf(unique[i]))
      // }
      // // console.log([2,5,3].indexOf(2))
      // // console.log(uniqueIndex,'iopiop')
      // const newest = []
      // for (let i = 0; i < uniqueIndex.length; i++) {
      //   newest.push(this.list_rooms[uniqueIndex[i]])
      // }
      // this.list_rooms2 = newest
    },
  },

  mounted() {
    console.log("this.$store.dispatch('room/getRoomList')")
    this.$store.dispatch('room/getRoomList')
  },

  methods: {
    ...mapActions({
      createRoom: 'room/createRoom',
      joinRoom: 'room/joinRoom',
    }),
    createRwwwoom() {
      // // this.list_rooms = []
      // db.collection('rooms')
      //   .add({
      //     room_name: this.name_room,
      //     players: [
      //       {
      //         player1: {
      //           player_name: localStorage.username,
      //         },
      //       },
      //     ],
      //   })
      //   .then((docRef) => {
      //     this.getRooms()
      //     console.log('create room success', docRef)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    getRooms() {
      // this.list_rooms = []
      // console.log(this.list_rooms, 'opopop')
      // db.collection('rooms').onSnapshot((querySnapshot) => {
      //   let count = 1
      //   querySnapshot.forEach((doc) => {
      //     const room = {
      //       id: doc.id,
      //       data: doc.data(),
      //     }
      //     this.list_rooms.push(room)
      //     // this.list_rooms2 = this.list_rooms.slice(-(localStorage.roomlength))
      //     count++
      //   })
      //   localStorage.setItem('roomlength', count)
      //   // return this.list_rooms.filter(el => el.id !== doc.id)
      //   // console.log(doc.data())
      // })
    },
    joinRoom(room) {
      // console.log(room)
      // // this.list_rooms = []
      // db.collection('rooms')
      //   .doc(room.id)
      //   .update({
      //     players: [
      //       room.data.players[0],
      //       {
      //         player2: {
      //           player_name: localStorage.username,
      //         },
      //       },
      //     ],
      //   })
      //   .then((data) => {
      //     this.getRooms()
      //     console.log('berhasil')
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
  },
}
</script>

<style></style>
