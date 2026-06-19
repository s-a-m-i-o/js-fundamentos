## Bloco 1 - Variáveis

CONCEITO:
Variáveis são caixinhas que guardam valores. Você dá um nome e coloca um valor dentro.

QUANDO USAR:
- const → valor não vai mudar (nome, email, configurações)
- let   → valor pode mudar (idade, pontuação, status)
- var   → NUNCA USE (vaza do escopo e causa bugs)

ESTRUTURA:
const nomeDaVariavel = valor;
let outraVariavel = valor;

ESCOPO:
É o bloco {} onde a variável existe. 
let e const ficam presas dentro do bloco onde foram criadas.
var vaza pra fora — por isso não usamos.

EXEMPLOS:
const nome = "Samio";
let idade = 36;
const estudando = true;

TEMPLATE LITERAL (forma moderna de juntar variáveis com texto):
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
Usa crase ` ` e variáveis dentro de ${}