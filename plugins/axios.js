export default function({$axios, redirect}) {
  $axios.onRequest(config =>{
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse(response => {
    console.log('Response ' + response.status + ' ' + response.statusText)
  })
}