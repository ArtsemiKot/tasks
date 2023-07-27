// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = '12dfd21DD#$@';

function checkPass(password) {
    let specsymbol;
    let uppercase;
    let includenum;
    let includestring;
    let passlength;

    (password.includes('@') || password.includes('$') || password.includes('%') || password.includes('#')) ? (specsymbol = true) : (specsymbol = false);
    for (let i = 0; i < password.length; i++) {
        if (password[i] == password[i].toUpperCase()) {
            uppercase = true;
            break;
        } else {
            uppercase = false;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            includenum = true;
            break;
        } else {
            includenum = false;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            includestring = true;
            break;
        } else {
            includestring = false;
        }
    }
    if (password.length >= 8) {
        passlength = true;
    } else {
        passlength = false;
    }

    if(specsymbol && uppercase && includenum && includestring && passlength == true){
        return 'Strong password'
    }else{
        return 'Low password'
    }

}
const result = checkPass(pass);
console.log(result)