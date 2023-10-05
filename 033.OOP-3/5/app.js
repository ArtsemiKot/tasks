// 5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
    doRegistration() {
        const getLog = {
            email: '',
            password: ''
        }
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            const inp_email = document.querySelector('.email');
            const inp_password = document.querySelector('.password');
            getLog.email = inp_email.value;
            getLog.password = inp_password.value;
        })
        console.log(getLog);
    }
}

const client = new Client();
client.doRegistration();