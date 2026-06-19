const nome = "Samio";
const idade = 36;
const estudando =true;

const a = 10;
const b = 3;

const verificarIdade = (idade) => {
    if (idade <=12) {
        return "Criança";
    }else if (idade >12 && idade <= 17) {
        return "Adolecente";
    }else {
        return "Adulto";
    }
}

console.log(verificarIdade(36));
console.log(verificarIdade(8));

const amigos = ["Jayne", "Luiz", "Thay"];

console.log(amigos[0]);
console.log(amigos[1]);
console.log(amigos[2]);

console.log(amigos.length);