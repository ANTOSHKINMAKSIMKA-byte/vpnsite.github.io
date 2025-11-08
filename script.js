// Приветственое уведомление 
document.addEventListener('DOMContentLoaded', function () {
    var welcomeToast = new bootstrap.Toast(document.getElementById('welcomeToast'), {
        delay: 8000 // Автоматическое скрытие через 8 секунд
    });
    welcomeToast.show();
});


// История с формой......
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за регестрацию!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const agreeTermsInput = document.getElementById('agreeTerms');

    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameInput.classList.add('is-invalid');
            return false;
        } else {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add('is-invalid');
            return false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 6) {
            passwordInput.classList.add('is-invalid');
            return false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
            return true;
        }
    }

    function validateTerms() {
        if (!agreeTermsInput.checked) {
            agreeTermsInput.classList.add('is-invalid');
            return false;
        } else {
            agreeTermsInput.classList.remove('is-invalid');
            agreeTermsInput.classList.add('is-valid');
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    agreeTermsInput.addEventListener('change', validateTerms);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isTermsValid = validateTerms();

        if (isNameValid && isEmailValid && isPasswordValid && isTermsValid) {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };

            console.log('Данные для отправки:', formData);
            alert('Регистрация успешно завершена!');

            const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
            modal.hide();

            form.reset();

            const inputs = form.querySelectorAll('.form-control, .form-check-input');
            inputs.forEach(input => {
                input.classList.remove('is-valid');
            });
        } else {
            alert('Пожалуйста, исправьте ошибки в форме.');
        }
    });

    document.getElementById('registrationModal').addEventListener('hidden.bs.modal', function () {
        form.reset();
        const inputs = form.querySelectorAll('.form-control, .form-check-input');
        inputs.forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
    });
});



