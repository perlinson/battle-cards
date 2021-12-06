const uri = 'api/orders/'

export const state = () => ({
  orders: []
})

export const mutations = {
  SET_ORDERS: (state, orders) => (state.orders = orders),
  CREATE_ORDER: (state, order) => state.orders.unshift(order),
  UPDATE_ORDER: (state, updatedOrder) => {
    const index = state.orders.findIndex((t) => t.id === updatedOrder.id)
    if (index !== -1) {
      state.orders.splice(index, 1, updatedOrder)
    }
  },
  DELETE_ORDER: (state, order) =>
    (state.orders = state.orders.filter((t) => order.id !== t.id))
}

export const getters = {
  allOrders: (state) => state.orders
}

export const actions = {
  async fetchOrders({ commit }) {
    const orders = await this.$axios.$get(uri)
    commit('SET_ORDERS', orders)
  },
  async addOrder({ commit }, order) {
    await this.$axios.$post(uri, order)
    commit('CREATE_ORDER', order)
  },
  async updateOrder({ commit }, order) {
    const updatedOrder = await this.$axios.$put(`${uri}${order.id}`, order)
    commit('UPDATE_ORDER', updatedOrder)
  },
  async deleteOrder({ commit }, order) {
    await this.$axios.$delete(`${uri}${order.id}`)
    commit('DELETE_ORDER', order)
  }
}
