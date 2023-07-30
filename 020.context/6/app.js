// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function check() {
    let count = 0;
    return function twocheck() {
      count += 1;
      console.log(count);
    };
  }
  
  let Result = check();
  
  Result();
  Result();
  Result();