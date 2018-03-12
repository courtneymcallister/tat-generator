const locations = require('./locations');
const styles = require('./styles');
const subjects = require('./subjects');

const vowels = ['a', 'e', 'i', 'o', 'u'] //lol

function generateTat(){

  //generate random index number in each list
  var randomLocationNum = Math.floor(Math.random() * (locations.length))
  var randomStyleNum = Math.floor(Math.random() * (styles.length))
  var randomSubjectNum = Math.floor(Math.random() * (subjects.length))
  //choose each part at generated index
  var tatLocation = locations[randomLocationNum]
  var tatStyle = styles[randomStyleNum]
  var tatSubject = subjects[randomSubjectNum]

  //set indefinite article to 'a' or 'an'
  if (vowels.indexOf(tatStyle.substring(0,1)) >= 0){
    var article = 'an'
  } else {
    var article = 'a'
  }

  //spit out full string
  document.getElementById('tatDisplay').innerHTML = `You're getting ${article} ${tatStyle} ${tatSubject} on your ${tatLocation}! Congrats!`
}

var generate = document.getElementById('generate')
generate.addEventListener('click', generateTat)
