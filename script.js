/*1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2) {
        console.log(`${i} - это нечетное число`);
    }
    else {
        console.log(`${i} - это четное число`);
         }    
}

/*2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
console.log(arr);

/*3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

const randomArray = new Array (5);
let sumElements = 0;
for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = Math.floor(Math.random()*10);
    sumElements += randomArray[i];
}
console.log(randomArray);
console.log(`Сумма элементов массива  ${sumElements}`);

const minElement = Math.min(...randomArray)

console.log(`Минимальное число массива  ${minElement}`);

let findElement = 3;
for (let i = 0; i < randomArray.length; i++) {
    if (findElement === randomArray[i]) {
        findElement = true;
    }    
}
console.log ((findElement === true) ? 'В массиве есть число  3' : 'В массиве нет числа  3');
