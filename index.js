function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var unitsToChange = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < unitsToChange.length; i++) {
    unitsToChange[i].innerHTML = (parseInt(unitsToChange[i].innerHTML) + n).toString()
  }
}

function deepestChild () {
  var initNode = '#grand-node'
  var divTimes = document.querySelectorAll(initNode + ' div')
  for (let i = 0; i < divTimes.length; i++) {
    initNode = initNode + ' div'
  }
  return document.querySelector(initNode)
}