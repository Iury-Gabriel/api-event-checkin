import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: "fd23cbd8-259b-4180-831e-13679e35af96",
            title: 'Event 1',
            slug: 'event-1',
            details: 'Event 1 details',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})