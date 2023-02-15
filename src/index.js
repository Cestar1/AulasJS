// declarando variavel com let
let numero = 1;

{
  let numero = 2;
  console.log("dentro = ", numero);
}

console.log("fora =", numero);

// declarando variavel com var
let numero1 = 1;

{
  let numero1 = 2;
  console.log("dentro1 =", numero1);
}
console.log("fora1 =", numero1);

//declarando uma constante

const numero2 = 50;
numero2 = 11;
