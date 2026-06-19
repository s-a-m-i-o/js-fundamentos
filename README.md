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

## Bloco 2 - Tipos de Dados

OS TIPOS PRINCIPAIS:
string    → textos entre aspas ou crase → "Samio", 'Silva', `Olá`
number    → números sem aspas → 36, 1.75, -10
boolean   → verdadeiro ou falso → true, false
null      → vazio intencionalmente → const endereco = null
undefined → variável sem valor definido → let telefone;

COMO DESCOBRIR O TIPO:
typeof variavel → retorna o tipo como string

ATENÇÃO:
- "36" é string (tem aspas)
- 36 é number (sem aspas)
- typeof null retorna "object" — bug histórico do JS desde 1995

NULL vs UNDEFINED:
- null → você decidiu deixar vazio de propósito
- undefined → você esqueceu de atribuir um valor

EXEMPLOS:
const nome = "Samio";        // string
const idade = 36;            // number
const estudando = true;      // boolean
const endereco = null;       // null
let telefone;                // undefined

## Bloco 3 - Operadores

GRUPO 1 — ARITMÉTICOS:
+  → soma
-  → subtração
*  → multiplicação
/  → divisão
%  → resto da divisão (ex: 10 % 3 = 1)

GRUPO 2 — COMPARAÇÃO (sempre retorna true ou false):
===  → idêntico (valor E tipo)
!==  → diferente (valor OU tipo)
>    → maior que
<    → menor que
>=   → maior ou igual
<=   → menor ou igual
REGRA: sempre use === e !==, nunca == e !=

GRUPO 3 — LÓGICOS:
&&  → E (os DOIS precisam ser true para retornar true)
||  → OU (UM dos dois sendo true já retorna true)
!   → NÃO (inverte o boolean: !true = false)

GRUPO 4 — ATRIBUIÇÃO (atalhos):
+=  → soma ao valor atual (x += 5 = x = x + 5)
-=  → subtrai do valor atual