//Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {

    for (let segIndex = 0; segIndex < index; segIndex++) {

        if (numbers[index] < numbers[segIndex]) {
            let posicao = numbers[index];
            numbers[index] = numbers[segIndex];
            numbers[segIndex] = posicao;

        }

    }

}

console.log('Ordem crescente',numbers);

    
