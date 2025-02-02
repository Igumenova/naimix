function openRegisterForm() {
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
}

function openLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'flex';
}

async function handleLogin(event) {
    event.preventDefault();

    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message-log');
    errorMessage.textContent = ' ';
    const formData = new FormData(form);
    const passwordInput = document.getElementById('login-password');

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const result = await response.json();
            passwordInput.value = '';
            errorMessage.textContent = result.error || 'Неверный логин или пароль';
        } else {
            const result = await response.json();
            const token = result.access_token;
            document.cookie = `access_token=${token}; `;
            localStorage.setItem('username', formData.get('username'));
            window.location.href = '/chat';
        }
    } catch (error) {
        errorMessage.textContent = 'Произошла ошибка';
        console.log(error);
        passwordInput.value = '';
    }
}

async function registerUser() {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordCheck = document.getElementById('register-password-check').value;

    const errorMessage = document.getElementById('error-message-reg');
    errorMessage.textContent = ' ';

    if (password === passwordCheck) {
        try {
            const response = await fetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok) {
                console.log('ok');
                window.location.href = '/auth';
            } else {
                errorMessage.textContent = 'Пользователь с таким E-mail уже существует';
            }
        } catch (error) {
            console.error('Ошибка:', error);
            errorMessage.textContent = 'Произошла ошибка. Попробуйте снова';
        }
    } else {
        console.log('не совпаает');
        errorMessage.textContent = 'Пароли должны совпадать';
    }
}

document.getElementById('show').onclick = function (e) {
    let passwordInput = document.getElementById('login-password');

    if (passwordInput.type == 'text') {
        passwordInput.type = 'password';
        document.getElementById(
            'show'
        ).innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57442 12.7075C2.39493 12.4296 2.25004 12.1889 2.14075 12C2.25004 11.8111 2.39493 11.5704 2.57442 11.2925C3.03544 10.5787 3.71817 9.6294 4.60454 8.68394C6.39553 6.77356 8.89952 5 12 5C15.1005 5 17.6045 6.77356 19.3955 8.68394C20.2818 9.6294 20.9646 10.5787 21.4256 11.2925C21.6051 11.5704 21.75 11.8111 21.8593 12C21.75 12.1889 21.6051 12.4296 21.4256 12.7075C20.9646 13.4213 20.2818 14.3706 19.3955 15.3161C17.6045 17.2264 15.1005 19 12 19C8.89952 19 6.39553 17.2264 4.60454 15.3161C3.71817 14.3706 3.03544 13.4213 2.57442 12.7075ZM23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479L23.8925 12.4511L23.889 12.458L23.8777 12.4802C23.8681 12.4987 23.8547 12.5247 23.8373 12.5576C23.8025 12.6233 23.752 12.7168 23.686 12.834C23.5542 13.0684 23.3602 13.3985 23.1057 13.7925C22.5979 14.5787 21.8432 15.6294 20.8545 16.6839C18.8955 18.7736 15.8995 21 12 21C8.1005 21 5.10449 18.7736 3.14547 16.6839C2.15684 15.6294 1.40207 14.5787 0.894343 13.7925C0.639857 13.3985 0.445799 13.0684 0.313979 12.834C0.248031 12.7168 0.197547 12.6233 0.162761 12.5576C0.145364 12.5247 0.131882 12.4987 0.122345 12.4802L0.110997 12.458L0.107546 12.4511L0.106377 12.4488L0.105932 11.5521L0.107546 11.5489L0.110997 11.542L0.122345 11.5198C0.131882 11.5013 0.145364 11.4753 0.162761 11.4424C0.197547 11.3767 0.248031 11.2832 0.313979 11.166C0.445799 10.9316 0.639857 10.6015 0.894343 10.2075C1.40207 9.42131 2.15684 8.3706 3.14547 7.31606C5.10449 5.22644 8.1005 3 12 3C15.8995 3 18.8955 5.22644 20.8545 7.31606C21.8432 8.3706 22.5979 9.42131 23.1057 10.2075C23.3602 10.6015 23.5542 10.9316 23.686 11.166C23.752 11.2832 23.8025 11.3767 23.8373 11.4424C23.8547 11.4753 23.8681 11.5013 23.8777 11.5198L23.889 11.542L23.8925 11.5489L23.8941 11.5521ZM23.8941 12.4479C24.0348 12.1664 24.0348 11.8336 23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479ZM0.10558 12.4472L0.105756 11.9996L0.105932 11.5521C-0.0348316 11.8336 -0.0351837 12.1657 0.10558 12.4472ZM12 8C10.9391 8 9.92173 8.42143 9.17158 9.17157C8.42143 9.92172 8.00001 10.9391 8.00001 12C8.00001 13.0609 8.42143 14.0783 9.17158 14.8284C9.92173 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142Z" fill="currentColor"></path>
  </svg>`;
    } else {
        passwordInput.type = 'text';
        document.getElementById(
            'show'
        ).innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3372_12119)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L18.6471 17.2329L23.7071 22.2929C24.0976 22.6834 24.0976 23.3166 23.7071 23.7071C23.3166 24.0976 22.6834 24.0976 22.2929 23.7071L17.8261 19.2403C16.0962 20.3536 14.0848 20.966 12.0163 20.9999L12 21C8.10049 21 5.10448 18.7736 3.14546 16.6839C2.15683 15.6294 1.40207 14.5787 0.894336 13.7925C0.63985 13.3985 0.445792 13.0684 0.313971 12.834C0.248023 12.7168 0.19754 12.6233 0.162753 12.5576C0.145357 12.5247 0.131875 12.4987 0.122338 12.4802L0.11099 12.458L0.107539 12.4511L0.10637 12.4488C0.105243 12.4466 0.105573 12.4472 0.105573 12.4472C-0.0397387 12.1566 -0.0347895 11.8135 0.118844 11.5272C1.25035 9.4185 2.7597 7.53966 4.56848 5.98269L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893ZM5.9871 7.40131C4.45031 8.70137 3.14935 10.2582 2.14257 12.0032C2.25165 12.1915 2.39592 12.4311 2.57441 12.7075C3.03543 13.4213 3.71817 14.3706 4.60454 15.3161C6.39395 17.2248 8.89512 18.9969 11.9918 19C13.5373 18.9733 15.0437 18.5524 16.3714 17.7856L14.0488 15.463C12.267 16.5678 9.79005 16.1033 8.58772 14.2835C7.71625 12.9644 7.73675 11.2513 8.53883 9.95305L5.9871 7.40131ZM10.0357 11.4499C9.85312 12.0195 9.91725 12.6676 10.2564 13.181C10.7564 13.9378 11.7265 14.2193 12.5495 13.9637L10.0357 11.4499ZM17.0856 6.70102C14.9633 5.29968 12.557 4.6451 10.1279 5.21368C9.59016 5.33955 9.05219 5.00566 8.92632 4.46791C8.80045 3.93016 9.13434 3.39219 9.67209 3.26632C12.7656 2.54221 15.7301 3.40934 18.1876 5.03203C20.6382 6.65016 22.6448 9.0535 23.8944 11.5528C24.0395 11.8429 24.0348 12.1853 23.8819 12.4714C23.2421 13.6684 22.4791 14.7954 21.6051 15.8339C21.2495 16.2564 20.6187 16.3107 20.1961 15.9551C19.7736 15.5995 19.7193 14.9687 20.0749 14.5461C20.7468 13.7476 21.3457 12.8909 21.8646 11.9862C20.7474 9.93812 19.0667 8.00914 17.0856 6.70102Z" fill="currentColor"></path>
    </g>
    <defs>
      <clipPath id="clip0_3372_12119">
        <rect width="24" height="24" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>`;
    }
};
