// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5

let str = 'АааГГЦЦцТТтттА'.toLowerCase();

count_А = 0;
count_Г = 0;
count_Ц = 0;
count_Т = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'а') {
        count_А++;
    } else if (str[i] === 'г') {
        count_Г++;
    } else if (str[i] === 'ц') {
        count_Ц++;
    } else if (str[i] === 'т') {
        count_Т++;
    }

} console.log('А-' + count_А, 'Г-' + count_Г, 'Ц-' + count_Ц, 'Т-' + count_Т);