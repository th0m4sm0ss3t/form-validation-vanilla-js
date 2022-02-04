let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    /** GET INPUTS **/
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('mail');
    let passwordInput = document.getElementById('password');
    

    /** REGEX FOR VALIDATON **/
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


    /** CSS STYLE FOR ERRORS **/
    let errorMarginBottomStyle = "1.3rem";
    let errorColor = "#c72121";


    // If input is empty...
    if (usernameInput.value.trim() === "") {
        let usernameError = document.getElementById('usernameError');
        usernameError.innerHTML = "The username input must be completed.";

        usernameError.style.color = errorColor;
        usernameError.style.marginBottom = errorMarginBottomStyle;

        // ... don't send the form 
        event.preventDefault();
    }


    if (emailInput.value.trim() === "") {
        let mailError = document.getElementById('mailError');
        mailError.innerHTML = "The email input must be completed."

        mailError.style.color = errorColor;
        mailError.style.marginBottom = errorMarginBottomStyle;

        event.preventDefault();
    } else if (!emailInput.value.match(emailRegex)) {
        let mailError = document.getElementById('mailError');
        mailError.innerHTML = "The email input is incorrect."

        mailError.style.color = errorColor;
        mailError.style.marginBottom = errorMarginBottomStyle;

        event.preventDefault();
    }


    if (passwordInput.value.trim() === "") {
        let passwordError = document.getElementById('passwordError');
        passwordError.innerHTML = "The password input must be completed."

        passwordError.style.color = errorColor;
        passwordError.style.marginBottom = errorMarginBottomStyle;

        event.preventDefault();
    } else if (passwordInput.value.length < 5) {
        let passwordError = document.getElementById('passwordError');
        passwordError.innerHTML = "The password must be completed at least 5 characters long."

        passwordError.style.color = errorColor;
        passwordError.style.marginBottom = errorMarginBottomStyle;

        event.preventDefault();
    }
});