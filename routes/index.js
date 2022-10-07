var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun1: "night",
    noun2: "children",
    noun3: "day",
    verb1: "crumble",
    verb2: "scream",
    verb3: "hope",
    adj1: "old",
    adj2: "grand",
    adj3: "terrible"
  });
});

/* POST form data */
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode(),
    colorText: generateRandomHexCode()
  });
})

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "#") {
    formData.storyChoice = `${randomStoryChoice()}`;
    console.log(formData.storyChoice)
  }
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData) {
  return `Twas a dark and stormy ${formData.noun1.toUpperCase()}, when the ${formData.adj1.toUpperCase()} houses started to ${formData.verb1.toUpperCase()}! The ${formData.noun2.toUpperCase()} ${formData.verb2.toUpperCase()}ED and the ${formData.adj2.toUpperCase()} town was torn asunder. There was no ${formData.verb3.toUpperCase()} from this ${formData.adj3.toUpperCase()} ${formData.noun3.toUpperCase()}.`

}

function generateStory2(formData) {
  return `Everything was ${formData.adj1.toUpperCase()} in this ${formData.noun1.toUpperCase()}. The ${formData.noun2.toUpperCase()} ${formData.verb1.toUpperCase()} ${formData.adj2.toUpperCase()} songs, the sun ${formData.verb2.toUpperCase()}ED brighter here than most other places. So it was a ${formData.verb3.toUpperCase()} that this ${formData.adj3.toUpperCase()} city was named "${formData.noun3.toUpperCase()}".`
}

function generateStory3(formData) {
  return `An ${formData.adj1.toUpperCase()} day in the life of Stanley. ${formData.verb1.toUpperCase()}, get some ${formData.noun1.toUpperCase()}, get to ${formData.noun2.toUpperCase()} to ${formData.verb2.toUpperCase()} a ${formData.noun3.toUpperCase()} every second. It was nothing special, this ${formData.adj2.toUpperCase()}, ${formData.adj3.toUpperCase()} life of his. But, one day, everything ${formData.verb3.toUpperCase()}D.`
}

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}


function randomStoryChoice() {
  let randomNum = Math.floor(Math.random()* 3 + 1);
  return randomNum
}
