const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    //Filtro para usuario 
    if (usernameValue == "") {
        setErrorFor(username, "O nome de usuário é obrigatório!");
    } else {
        setSuccessFor(username);
    }

    //Filtro para email
    if (emailValue == "") {
        setErrorFor(email, "O Email é obrigatório!");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido!");
    } else {
        setSuccessFor(email);
    }


    //Filtro para senha
    if (passwordValue == "") {
        setErrorFor(password, "A Senha é obrigatória!");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A Senha precisa ter no mínimo 7 caracteres!");
    } else {
        setSuccessFor(password);
    }

    //Filtro para confirmação de password
    if (passwordConfirmationValue == "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, "As senha não conferem!");
    } else {
        setSuccessFor(passwordConfirmation);
    }


    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className === "form-control success");
    });

    if (formIsValid) {
        alert("Conta criada com sucesso!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // Adionar a mensagem de Erro
    small.innerText = message;

    // Adicionar classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}