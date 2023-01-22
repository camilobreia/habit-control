import Fastify from 'fastify' /** importamos a função Fastify do framework fastify */
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify() /** criando a aplicação */
// const prisma = new PrismaClient() (const foi alterada para prisma.ts)

app.register(cors) /** para o front acessar os dados do back-end */
app.register(appRoutes) // para o server.ts se comunicar com as rotas criadas no routes.ts

/**usamos o método LISTEN para fazer com que a aplicação ouça a porta 3333 */
app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP Server Running!!!') /** somente para mostrar em tempo real que o server está rodando */
})
