

function create_account() {
    let user1 = document.getElementById("username").value;
    localStorage.setItem("username", user1);
    let pass1 = document.getElementById("password").value;
    localStorage.setItem("password", pass1);

    alert("Your account has been created successfully")
}