export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    console.log('Request headers: ' + JSON.stringify(config))
  })

  $axios.onResponse((response) => {
    console.log('Received response ' + response.config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
