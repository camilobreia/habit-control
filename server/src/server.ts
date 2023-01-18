import Fastify from 'fastify' /** importamos a função Fastify do framework fastify */
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client' /** para acessar o BD */

const app = Fastify() /** criando a aplicação */
const prisma = new PrismaClient() /** a conexão com o BD está feita */

app.register(cors) /** para o front acessar os dados do back-end */

/** criando a rota HTTP: */
/** async => quer dizer assíncrona */
/** await e findMany => A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido */

app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

/**usamos o método LISTEN para fazer com que a aplicação ouça a porta 3333 */
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!!!') /** somente para mostrar em tempo real que o server está rodando */
})
