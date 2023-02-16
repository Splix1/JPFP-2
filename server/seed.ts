import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newCampuses = await prisma.campus.createMany({
    data: [
      { name: 'GKHS', address: 'ur mawm', description: 'that' },
      { name: 'FSA', address: 'there', description: 'no' },
    ],
  });

  const newStudents = await prisma.student.createMany({
    data: [
      {
        firstName: 'Austin',
        email: 'austinTgautney@gmail.com',
        lastName: 'Gautney',
        campusId: 3,
      },
      {
        firstName: 'Jeffy',
        email: 'Jeffy@gmail.com',
        lastName: 'Hu',
        campusId: 4,
      },
    ],
  });

  console.log('newCampuses', newCampuses);
  console.log('newStudents', newStudents);
}

main();
