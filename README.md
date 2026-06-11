## Princípio SRP

Cada classe possui uma única responsabilidade:

- GeradorTexto gera textos.
- GeradorImagem gera imagens.
- PagamentoPix realiza pagamentos PIX.
- PagamentoCartao realiza pagamentos com cartão.

## Princípio SRP (Single Responsibility Principle)

O projeto foi refatorado para que cada classe possua apenas uma responsabilidade específica.

### Exemplos

- GeradorTexto: responsável apenas pela geração de texto.
- GeradorImagem: responsável apenas pela geração de imagens.
- GeradorAudio: responsável apenas pela geração de áudio.
- PagamentoPix: responsável apenas pelo pagamento via PIX.
- PagamentoCartao: responsável apenas pelo pagamento via cartão.

## Princípio OCP (Open Closed Principle)

O sistema permite adicionar novos tipos de geração de conteúdo sem modificar as classes existentes.

Exemplo:

- GeradorTexto
- GeradorImagem
- GeradorAudio
- GeradorVideo

## Princípio ISP

As responsabilidades podem ser segregadas em interfaces específicas para cada tipo de conteúdo.

## Tecnologias

- TypeScript
- Git
- GitHub

## Princípios Aplicados

- SRP
- OCP
- LSP
- ISP
- DIP

## Estrutura do Projeto

```text
src/
├── ia
├── pagamentos
└── index.ts
```
## Benefícios do SOLID

- Redução do acoplamento
- Facilidade de manutenção
- Maior escalabilidade
- Melhor organização do código

## Como Executar

npm install

npx tsc

node dist/index.js
## SRP - Single Responsibility Principle

Foi criado o ServicoCobranca para separar a responsabilidade de cobrança da lógica de geração de conteúdo.

Cada classe possui agora uma única responsabilidade.
## ISP - Interface Segregation Principle

As interfaces foram separadas em contratos específicos:

- IGeradorTexto
- IGeradorImagem
- IGeradorAudio

Dessa forma cada implementação depende apenas dos métodos que realmente utiliza.

## DIP - Dependency Inversion Principle

O sistema de cobrança passou a depender da abstração ICobranca em vez de depender diretamente da implementação Stripe.

Isso permite trocar facilmente a forma de pagamento por outras implementações, como Pix ou PayPal.

## LSP - Liskov Substitution Principle

No código legado, um modelo focado em texto era obrigado a implementar métodos de imagem e áudio, gerando exceções em tempo de execução.

Após a refatoração, cada modelo implementa apenas as interfaces necessárias para sua função, garantindo que qualquer implementação possa ser utilizada sem quebrar o comportamento esperado.