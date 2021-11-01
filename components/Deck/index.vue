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
    <el-dialog :visible.sync="dialogVisible">
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

    <el-card style="margin-top: 10px; font-family: 'Noto Serif SC', serif">
      <div slot="header">游戏状态信息</div>
      <el-card>
        <div slot="header">赛马信息:</div>
        <span
          >本轮获胜🐎:
          {{
            game_status.track_win && game_status.track_win.length
              ? game_status.track_win
              : '暂未分出胜负'
          }}</span
        >
        <el-table
          :data="racetracks"
          height="220"
          style="width: 100%; margin-top: 10px"
        >
          <el-table-column
            prop="total_token"
            label="总下注量"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="distance"
            label="跑出距离"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </el-card>
      <el-card style="margin-top: 10px">
        <div slot="header">游戏状态:</div>
        <div>
          <div>
            游戏状态：{{ game_status.isGaming ? '比赛开始' : '等待开始' }}
          </div>
          <div>
            下注状态：{{ game_status.isBetting ? '可以下注' : '下注停止' }}
          </div>
          <div>
            结算状态：{{
              !game_status.isGaming && !game_status.isBetting
                ? '结算冷却时间'
                : '未开始结算'
            }}
          </div>
          <div>游戏局数：第 {{ game_status.iteration }} 局</div>
        </div>
      </el-card>
      <el-card style="margin-top: 10px">
        <div slot="header">选用的BlockID:</div>
        <el-table
          :data="block_ids"
          height="150"
          style="width: 100%; margin-top: 10px"
        >
          <el-table-column
            prop="blockid"
            label="BlockID"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="time"
            label="Time"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </el-card>
    </el-card>
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
