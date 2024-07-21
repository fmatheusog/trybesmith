#!/bin/sh

# Use wait-for-it para aguardar o serviço do banco de dados
/wait-for-it.sh db:5432 -- npx prisma migrate dev

npm run dev