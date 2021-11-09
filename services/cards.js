export const saveCards = async (cards) => {
  return new Promise((resolve, reject) => {
    this.$axios
      .post('/api/cards', { cards })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
