document.addEventListener("DOMContentLoaded", function() {
    console.log("hi")

    let password = document.querySelector("#pwd").value;
    let confirmPassword = document.querySelector("#confirm-pwd").value
    let error = document.querySelector(".error");

    if (password == "" && confirmPassword == "") {
        error.innerHTML = "* Passwords do not match";
    }


    else if (password === confirmPassword) {
        error.innerHTML = "";
    }
})

