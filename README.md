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