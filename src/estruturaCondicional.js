/*aqui estamos criando um array de informações o array é um conjunto
de informações agrupadas em linha*/
let valores = [7.7, 8.5, 5.5];
/*aqui estamos acessando os indices de um array*/
console.log(valores[0], valores[3]);
console.log(valores);
/*aqui estamos adicionando um novo elemento ao array usando o indice*/
valores[4] = 10;
console.log(valores.lenght);
/*o push é uma fração do array e é ultilizado quando queremos adicionar
um conjunto de informações ao array*/
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);
/*mesmo podendo adicionar diversostipos diferentes devemos prezar dentro
de um array devemos prezar por array's homogeneos ou seja do mesmo tipo
primitivo*/
valores.pop();
console.log(valores);
/*o pop() remove o ultimo elemento do array por vez*/
/*o delete remove o elemento do array pelo indice 
escolhido pelo usuario*/
delete valores[0];
console.log(typeof valores);
console.log(valores);
/*pódemos tambem fazer uso dos arrays para criar operações aritmeticas*/
let calculo = [10, 15];
let resultado = calculo[0] + calculo[1];
console.log(resultado);
