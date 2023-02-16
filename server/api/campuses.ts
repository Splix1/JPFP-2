const campuses = require('express').Router();
import { NextFunction, Request, Response } from 'express';
import { prisma } from '..';

// mounted on /api/campuses

campuses.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allCampuses = await prisma.campus.findMany();
    res.json(allCampuses);
  } catch (err) {
    next(err);
  }
});

campuses.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const singleCampus = await prisma.campus.findUnique({
        where: {
          id: +id,
        },
      });
      res.json(singleCampus);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = campuses;
