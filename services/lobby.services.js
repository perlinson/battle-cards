export const getAllGames = () => {
  return new Promise((resolve, reject) => {
    this.$axios
      .get('/api/games')
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
