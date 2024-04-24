function next() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
console.log("Check");
// const errorMessage = document.getElementById("error-message");
const checkEL = document.getElementById("sub");
const userEL=document.getElementById("mail");
const passEL=document.getElementById("psw");

checkEL.addEventListener("click", (confirm) => {
    const username = userEL.value;
    console.log(username);
    const password = passEL.value;
    console.log(password);
    if (username === "harshit" && password === "harry") {
        confirm.preventDefault();
        // errorMessage.textContent = '';
        //alert('Login successful!');
        window.location.href="./proj-nav.html";
        //Add the location of page you want ot redirect
    } else {
        // errorMessage.textContent = 'Invalid username or password.';
        checkEL.disabled = true;
        alert("Wrong input");
    }
    // setTimeout(() => {
    //     checkEL.disabled = false;
    // }, 2000)
});