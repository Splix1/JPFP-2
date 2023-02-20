const students = require('express').Router();
import { NextFunction, Request, Response } from 'express';
import { prisma } from '..';

// mounted on /api/students

students.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allStudents = await prisma.student.findMany();
    res.json(allStudents);
  } catch (err) {
    next(err);
  }
});

students.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const singleStudent = await prisma.student.findUnique({
        where: {
          id: +id,
        },
      });
      res.json(singleStudent);
    } catch (err) {
      next(err);
    }
  }
);

students.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        imageUrl: true,
        gpa: true,
      },
    });
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

students.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await prisma.student.delete({
        where: {
          id: +id,
        },
      });
      res.send();
    } catch (err) {
      next(err);
    }
  }
);

students.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, imageUrl, gpa } = req.body;
      const updatedStudent = await prisma.student.update({
        where: {
          id: +id,
        },
        data: {
          firstName,
          lastName,
          imageUrl,
          gpa,
        },
      });
      res.json(updatedStudent);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = students;
