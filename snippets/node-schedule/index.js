var schedule = require('node-schedule');
var axios = require('axios');


// axios({
//   method: 'post',
//   url: 'https://maker.ifttt.com/trigger/dtweet/with/key/jxnXklwvCcEj15uSQqH2ADiAcPHrqbcaan_nL4qN975',
//   data: {
//     value1: 'Hi, I\'m a bot and this is an automatically message for a rocket launch testing',
//   }
// })then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


axios({
  method: 'post',
  url: 'http://deconve.com/gru/crud',
  data: {
    client_id:"5c92416a32d9ef051880a19e",
    action:"request",
    type:"getDailyDataChart",
    tool_type: "PeopleCounter",
    date: "23/03/2019",
    specifiers: { "video_device_name": "João Paulo-F20|Porta Principal" }
  }
}).then(function (response) {

    data = response.data.data.has_entered;
    let sum=0;
    let start = data[1][0];
    for( i = 1, length = data.length; i < length; i++) {
      sum = sum + data[i][1];
    }
    let end = data[i-1][1];
    console.log(`Das ${start}:00hs até este momento passaram ${sum} veículos`);
  })
  .catch(function (error) {
    console.log(error);
  });


//
// var j = schedule.scheduleJob('0 9 15 * * *', function(){
//   fetch('', options)
//   console.log('1');
// });
//
// var z = schedule.scheduleJob('30 42 14 * * *', function(){
//   console.log('2');
// });
