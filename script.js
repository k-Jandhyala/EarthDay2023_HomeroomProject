// Protection, just incase the teacher accidentally closes the tab
window.onbeforeunload = function() {
  return "Are you sure to leave this page?";
}

var nameSubmitButton = document.getElementById("submit");

let teacherName;

nameSubmitButton.addEventListener('click', function() {
  var nameField = document.getElementById("name");
  var container = document.getElementById("container");
  console.log(nameField.value)

  if (nameField.value == " ") {
    nameField.placeholder = "ERROR: Please enter a name. ex: Mr.Smith/Mrs.Smith"

    container.style.borderColor = 'red';

    container.classList.add("applyShake");
    container.addEventListener("animationend", () => {
      container.classList.remove("applyShake");
    });

    container.style.borderColor = 'none';

  } else {
    teacherName = nameField.value;

    document.getElementById("enterName").style.display = 'none';
    document.getElementById("instructions").style.display = 'block';
  }
});


var nextButton1 = document.getElementById('advanceToDemoPage');

nextButton1.addEventListener('click', function() {
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("demo").style.display = 'block';
});



var nextButton2 = document.getElementById('advanceToGamePage');
nextButton2.addEventListener('click', function() {
  document.getElementById("demo").style.display = 'none';
  document.getElementById("game").style.display = 'block';
});



var endGame = document.getElementById('endGame_advanceToScores');