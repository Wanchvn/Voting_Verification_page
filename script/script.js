function checkAge(){
    const ageInput = Number(document.querySelector(".ageInput").value);
    const result = document.querySelector(".result");

    if(isNaN(ageInput) || ageInput < 0 || emptyInput(ageInput)){
        result.innerHTML = "Please enter a valid age.";
        result.style.color = "orange";
        return;
    }

    if(ageInput >= 18){
        result.innerHTML = "You are eligible to vote!";
        result.style.color = "green";
    }
    else if(ageInput < 18){
        result.innerHTML = "You are not eligible to vote yet.";
        result.style.color = "red";
    }   
}

function resetForm(){
    document.querySelector(".ageInput").value = "";
    document.querySelector(".result").innerHTML = "";
}
