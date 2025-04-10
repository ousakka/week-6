

function drivingLicense(grade) {
  
  return grade>=60;
}



function isMyName(name)
{
    return name == "oumaima";
}


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