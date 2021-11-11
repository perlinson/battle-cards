<template>
  <div>
    <el-button
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click="dialogVisible = true"
    >
      新增卡组
    </el-button>
    <el-dialog visible.sync="true">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="卡组名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createDeck(form.name)"
            >立即创建</el-button
          >
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      dialogVisible: false,

      infoLoadEngine: null,
      block_ids: [],
      game_status: {
        isGaming: null,
        isBetting: null,
        track_win: null,
        iteration: null,
      },
      racetracks: [],
    }
  },
  computed: {
    ...mapState('deck', {
      list: (state) => state.list_rooms,
    }),
  },
  methods: {
    ...mapActions({
      createDeck: 'deck/createDeck',
      joinDeck: 'deck/joinDeck',
    }),
  },
}
</script>
