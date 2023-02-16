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

module.exports = students;
