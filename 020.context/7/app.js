// 7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function check() {
    let count = '';
    return function twocheck() {
      count += 'I am developer ';
      console.log(count);
    };
  }
  
  let Result = check();
  
  Result();
  Result();
  Result();