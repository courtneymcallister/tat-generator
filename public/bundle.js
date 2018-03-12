(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

  //add random celebration at the end of the tat output
  const celebrations = ['Congrats', 'Fancy', 'Sexy', 'How fun', "That'll probably hurt"]
  var celebration = celebrations[Math.floor(Math.random() * celebrations.length)]

  //spit out full string
  document.getElementById('tatDisplay').innerHTML = `You're getting ${article} ${tatStyle} ${tatSubject} on your ${tatLocation}! ${celebration}!`
}

var generate = document.getElementById('generate')
generate.addEventListener('click', generateTat)

},{"./locations":2,"./styles":3,"./subjects":4}],2:[function(require,module,exports){
module.exports = [
  "outer forearm",
  "inner forearm",
  "wrapped around the left thigh",
  "wrapped around the right thigh",
  "spine",
  "left ankle",
  "right ankle",
  "collarbone",
  "left rib",
  "right rib",
  "lower back",
  "left foot",
  "right foot",
  "inner finger",
  "behind left ear",
  "behind right ear",
  "upper shoulder",
  "hip",
  "elbow",
  "upper inner arm",
  "wrapped around forearm",
  "wrapped around upper arm",
  "wrapped around fingers",
  "neck",
  "inner wrist",
  "back of neck",
  "calf",
  "palm",
  "back of hand",
  "top of finger",
  "inner elbow",
  "underboob",
  "inner thigh",
  "sternum",
  "chest",
  "around nipple",
  "around belly button",
  "mons pubis",
  "elbow",
  "top of shoulder",
  "forehead",
  "cheek",
  "big toe",
  "bottom of foot",
  "armpit",
  "inner lip",
  "near ear canal",
  "buttcheek",
  "back of thigh",
  "kneecap",
  "shin",
  "wrapped around toes",
  "tongue",
  "eyelid",
  "side of head"
];

},{}],3:[function(require,module,exports){
module.exports = [
  "american traditional",
  "realism",
  "watercolor",
  "tribal (polynesian)",
  "new school",
  "neo-traditional",
  "traditional japanese",
  "blackwork",
  "illustrative",
  "biomechanical",
  "color horror",
  "neo-japanese",
  "surrealism",
  "trash polka",
  "dotwork (pointalism)",
  "geometric",
  "stick and poke",
  "sketchwork"
];

},{}],4:[function(require,module,exports){
module.exports = [
  "butterfly",
  "ninja",
  "arrow",
  "infinity sign",
  "golden spiral",
  "succulent",
  "dragonfly",
  "coffee cup",
  "skeleton",
  "feather",
  "dreamcatcher",
  "chinese symbol that means white hooker",
  "moon",
  "sun",
  "sword",
  "skull",
  "rose"
];

},{}]},{},[1]);
