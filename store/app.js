export const state = () => ({
  drawer: null,
  color: 'success',
  image: 'http://rekryt.ru/files/sidebar-2.32103624.jpg'
})

export const mutations = {
  setDrawer: (state, value) => (state.drawer = value),
  setImage: (state, value) => (state.image = value),
  setColor: (state, value) => (state.color = value),
  toggleDrawer: (state) => (state.drawer = !state.drawer)
}
