# Seat Booking API

Instalar as dependências: npm install

Iniciar o servidor: npm run start

A API ficará disponível em http://localhost:3000

1. Ver Lugares Disponíveis
Retorna a lista de todos os assentos e o seu estado atual.

Método: GET
URL: http://localhost:3000/api/seats

2. Reservar Lugares
Permite reservar um ou mais assentos para um utilizador. Suporta reservas parciais.

Método: POST
URL: http://localhost:3000/api/seats

Body (Exemplo):
  {
    "userId": "tiago",
    "seatNumbers": ["A1", "B2"]
  }

3. Ver Lugares de um User
Filtra a lista de assentos, mostrando apenas os reservados pelo utilizador especificado.

Método: GET
URL: http://localhost:3000/api/seats?userId=tiago


Notas de Implementação
A base de dados é em memória (array)

A lógica de reserva trata cenários de sucesso total, parcial e falha total.
