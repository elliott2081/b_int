const axios = require('axios')

axios
  .post('http://localhost/mean',{
    "spectrum": "{AAAAAAAA8D8AAAAAAAAIQAAAAAAAABBAAAAAAAAAFEAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKkA=}"
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })