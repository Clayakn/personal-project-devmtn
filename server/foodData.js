// const fs = require('fs');
// const axios = require('axios');




// axios.get('https://api.nal.usda.gov/ndb/search/?format=json&sort=n&max=1000&offset=0&api_key=jJwYb4N4BKJEW9jEXU8NbDXltGlKqIqTtcTcJ1Rz&ds=Standard%20Reference').then(response => {
// fs.writeFile ("input.json", JSON.stringify(response.data.list.item), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// )
// })

// Request 7x in order to obtain all data from database
// axios.get('https://api.nal.usda.gov/ndb/search/?format=json&sort=n&max=1000&offset=7000&api_key=jJwYb4N4BKJEW9jEXU8NbDXltGlKqIqTtcTcJ1Rz&ds=Standard%20Reference').then(response => {
//     fs.readFile("input.json", function (err, data) {
//         let json = JSON.parse(data)
//         json.push(response.data.list.item)
//     fs.writeFile("input.json", JSON.stringify(json), function(err) {
//         if (err) throw err;
//         console.log('complete');
//         })
//     })
// })

