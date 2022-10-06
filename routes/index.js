var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adj1} houses started to ${formData.verb1}! The ${formData.noun2} ${formData.verb2}ed, the ${formData.adj2} town was torn asunder. There was no ${formData.verb3} from this ${formData.adj3} ${formData.noun3}.`

}

function generateStory2(formData) {
  return `Everything was ${formData.adj1} in this ${formData.noun1}. The ${formData.noun2} ${formData.verb1} ${formData.adj2} songs, the sun ${formData.verb2}ed brighter here than most other places. So it was a ${formData.verb3} that this ${formData.adj3} city was named ${formData.noun3}.`
}

function generateStory3(formData) {
  return `An ${formData.adj1} day in the life of Stanley. ${formData.verb1}, get some ${formData.noun1}, get to ${formData.noun2} to ${formData.verb2} a ${formData.noun3} every second. It was nothing special, this ${formData.adj2}, ${formData.adj3} life of his. But, one day, everything ${formData.verb3}d.`
}

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}