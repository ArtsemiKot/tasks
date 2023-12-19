// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

const array4: string[] = ['avada', 'avadakedavra', 'hello', 'yo', 'hi', 'cat'];

const new_array4 = array4.some(function(el:string){
    if(el.length>5){
        return true
    }else{
        return false
    }
})

console.log(new_array4);
