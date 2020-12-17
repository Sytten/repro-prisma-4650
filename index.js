const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const calendar = await prisma.calendar.create({
    data: {
      provider: "GOOGLE",
      providerId: "123",
      accessRole: "viewer",
      summary: "test",
      timeZone: "edt",
      events: {
        create: [
          {
            start: new Date(),
            end: new Date(),
            provider: "Google",
            providerId: "456",
          },
          {
            start: new Date(),
            end: new Date(),
            provider: "Google",
            providerId: "897",
          },
        ],
      },
    },
  });
  const calendarsCount1 = await prisma.calendar.count();
  const eventsCount1 = await prisma.calendarEvent.count();
  console.log(
    `Before deleting the calendar record there are ${calendarsCount1} calendars and ${eventsCount1} events.`
  );
  await prisma.calendar.delete({
    where: { id: calendar.id },
  });
  const calendarsCount2 = await prisma.calendar.count();
  const eventsCount2 = await prisma.calendarEvent.count();
  console.log(
    `After deleting the calendar record there are ${calendarsCount2} calendars and ${eventsCount2} events.`
  );
}
main();
