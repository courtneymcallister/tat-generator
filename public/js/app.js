const locations = require('./locations');
const styles = require('./styles');
const subjects = require('./subjects');



function generate(){
  var randomNum = Math.floor(Math.random() * (locations.length))
  document.getElementById('tatDisplay').innerHTML = locations[randomNum]
  console.log('hey')
}
