import dayjs from "dayjs"
import { FastifyInstance } from "fastify" //serve para saber o formato da aplicação app
import { z } from 'zod'
import { prisma } from "./lib/prisma" /** para acessar o BD */


/** criando a rota HTTP: */
/** async => quer dizer assíncrona */
/** await e findMany => A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido */

export async function appRoutes(app: FastifyInstance) {
    app.post('/habits', async (request) => { //vamos buscar do front o title e weekdays

        const createHabitBody = z.object({ //criou o objeto validador dos dados
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })

        const { title, weekDays } = createHabitBody.parse(request.body) //vai trazer o corpo dos dados

        const today = dayjs().startOf('day').toDate()
        //startOf irá zerar a hora em que o hábito foi incluído para evitar qualquer erro de listagem do hábito

        //agora chamamos o prisma para criar um novo hábito
        // ao mesmo tempo em que criamos o hábito, também vamos criar os dias da semana
        await prisma.habit.create({
            data: {
                title,
                created_at: new Date(),
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay,
                        }
                    })
                }
            }
        })


    })
}




