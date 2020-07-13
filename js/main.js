function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigada por clicar</br";
    //alert("Obrigada por clicar");
}

function redirecionamento(){
    //window.open("https://www.flaticon.com/search?word=java");
    window.location.href= "https://www.flaticon.com/search?word=java";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML= "Obrigada por passar o mouse aqui";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
        console.log(elemento.value);
}
//funcao
/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(2, 2));*/

// variavel global

/*var validar = 0;

function validaIdade(idade){
    // variavel local
    //  var validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);

console.log(validar);
*/ 
//var d = new Date();
//alert(d);
//alert(d.getMonth());
//alert(d.getMonth() + 1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getFullYear());

/*var count;
for (count=0; count <= 5; count++){
    console.log(count);
};*/

/*var count =0 

while(count <= 5){
    console.log(count);
    count++;
}*/


/*var idade = prompt("Qual a sua idade");

if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

// dicionario
/*var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
alert(fruta.nome);
console.log(fruta.nome);
alert(fruta.cor);
console.log(fruta.cor);*/

//var lista = ["maça", "pêra", "laranja"];
// adiciona elemento da lista
//lista.push("uva");
// tira ultimo elemento da lista
//lista.pop();

// trazer elemento ao contrario da lista
//console.log(lista.reverse());

// toString
//console.log(lista[0]);
//console.log(lista.toString()[0  ]);

// join lista e nao quero separar por , mas por - ou |
//console.log(lista.join(" - "));



// verifica o tamanho da lista
//console.log(lista.length);
//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);


//var nome = "Ana Sousa";
//ar idade = 29;
//var idade2 = 10;
//var frase = "Vamos entender isso"
//alert(nome + " tem " + idade);
//alert(idade + idade2);

//console.log(nome);
//console.log(idade);
//console.log(frase.replace("isso", "aquilo"));
//alert(frase.replace("isso", "aquilo"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());