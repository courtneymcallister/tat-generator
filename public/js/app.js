const locations = require('./locations');
const styles = require('./styles');
const subjects = require('./subjects');

var randomLocationNum = Math.floor(Math.random() * (locations.length))
var randomStyleNum = Math.floor(Math.random() * (styles.length))
var randomSubjectNum = Math.floor(Math.random() * (subjects.length))
var tatLocation = locations[randomLocationNum]
var tatStyle = styles[randomStyleNum]
var tatSubject = subjects[randomSubjectNum]
document.getElementById('tatDisplay').innerHTML = `You're getting a ${tatStyle} ${tatSubject} on your ${tatLocation}! Congrats!`

function generate(){
  document.getElementById('tatDisplay').innerHTML = tatLocation
  // console.log('hey');
}
