// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

let str = 'fullstack';
rezult = '';

for(i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'y' || str[i] === 'u'){
        rezult +=str[i];
    }
}
console.log(rezult);