const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const userWithPost = await prisma.anotherUser.create({
    data: {
      name: "Alice",
      anotherPost: {
        create: { title: "Hello World" },
      },
    },
  });
  const allUsers1 = await prisma.anotherUser.findMany();
  const allPosts1 = await prisma.anotherPost.findMany();
  console.log(
    `Before deleting the \`AnotherUser\` record there are ${allUsers1.length} users and ${allPosts1.length} posts.`
  );
  const deletedUser = await prisma.anotherUser.delete({
    where: { id: userWithPost.id },
  });
  const allUsers2 = await prisma.anotherUser.findMany();
  const allPosts2 = await prisma.anotherPost.findMany();
  console.log(
    `After deleting the \`AnotherUser\` record there are ${allUsers2.length} users and ${allPosts2.length} posts.`
  );
}
main();
