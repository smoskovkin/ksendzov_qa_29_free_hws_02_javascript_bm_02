/*
1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
*/

console.log(`\nЗадание 1:`)

let result = 1

for (let i = 0; i < 10; i++) {
    result *= 2
}

console.log(result)


/*
1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
*/

console.log(`\nЗадание 1*:`)

function raiseToPow(pow) {
    let result = 1

    for (let i = 0; i < pow; i++) {
        result *= 2
    }

    return result
}

console.log(raiseToPow(10))


/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

console.log(`\nЗадание 2:`)

for (let str = ':)', i = 1; i <= 5; i++) {
    console.log(str.repeat(i))
}


/*
2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
e.g. function printSmile(stroka, numberOfRows)
*/

console.log(`\nЗадание 2*:`)

function printSmile(str, rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(str.repeat(i))
    }
}

printSmile(':/', 3)


/*
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли:
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'
*/

console.log(`\nЗадание 3**:`)

// function getWordStructure(word) {
//   let numberOfConsonantLetters = (word.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length
//   let numberOfVowelLetters = (word.match(/[aeiouy]/gi) || []).length
//
//   console.log(`слово ${word} состоит из ${numberOfVowelLetters} гласных и ${numberOfConsonantLetters} согласных букв`)
// }
//
// let word = 'Case'
// getWordStructure(word)

function getWordStructure(word) {
    let dictionaryOfConsonantLetters = 'bcdfghjklmnpqrstvwxyz'
    let dictionaryOfVowelLetters = 'aeiouy'
    let numberOfConsonantLetters = 0
    let numberOfVowelLetters = 0

    for (const el of word.toLowerCase()) {
        if (dictionaryOfConsonantLetters.includes(el)) {
            numberOfConsonantLetters++
            continue
        }
        if (dictionaryOfVowelLetters.includes(el)) {
            numberOfVowelLetters++
        }
    }

    console.log(`Слово ${word} состоит из ${numberOfVowelLetters} гласных и ${numberOfConsonantLetters} согласных букв`)
}

let word = 'Case'
getWordStructure(word)


/*
4**. Написать функцию, которая проверяет, является ли слово палиндрмом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

console.log(`\nЗадание 4**:`)

// function isPalindrom(word) {
//   return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
// }
//
// word = 'Abba'
// console.log(isPalindrom(word) ? `Слово ${word} палиндром` : `Слово ${word} не палиндром`)

function isPalindrom(word) {
    word = word.toLowerCase()

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[(word.length - 1) - i]) {
            return false
        }
    }

    return true
}

word = 'Abba'
console.log(isPalindrom(word) ? `Слово ${word} палиндром` : `Слово ${word} не палиндром`)