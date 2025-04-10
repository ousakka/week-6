
// Function to check if grade is sufficient for driving license (60 or more)
function drivingLicense(grade) {
  
  return grade>=60;
}


// Function to check if input matches my name
function isMyName(name)
{
    return name == "oumaima";
}

// Bonus point -> Add an input field in html and a button that will verify your name
function onGradeCheck()
{
  const hasPassed = drivingLicense(document.getElementById ("grade").value);
  alert(hasPassed ? "Exam is passed" : "Exam is failed");
}

function onNameCheck()
{
  const nameIsCorrect = isMyName(document.getElementById("name").value);
  alert (nameIsCorrect?  "The name is correct" : "The name is incorrect");
} 