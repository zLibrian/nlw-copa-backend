import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Fulana',
      email: 'fulana@gmail.com',
      avatarUrl: 'https://github.com/zLibrian.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Pool 1',
      code: 'Bol123',
      ownerId: user.id,
      participants: {
        create: {
          userId: user.id,
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T14:00:00.380Z',
      firstTeamCountryCode: 'DZ',
      secondTeamCountryCode: 'AW',
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-05T14:00:00.380Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',
      guesses: {
        create: {
          firstTeamPoints: 7,
          secondTeamPoints: 1,
          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              }
            }
          }
        }
      }
    }
  })
}

main()