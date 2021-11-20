export default fucntion({$axios, redirect}){
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(response => {
  })
}

