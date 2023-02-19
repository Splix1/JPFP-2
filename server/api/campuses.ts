const campuses = require('express').Router();
import { NextFunction, Request, Response } from 'express';
import { prisma } from '..';

// mounted on /api/campuses

campuses.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allCampuses = await prisma.campus.findMany({
      include: {
        students: true,
      },
    });
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

campuses.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, imageUrl, address, description } = req.body;
    const newCampus = await prisma.campus.create({
      data: {
        name,
        imageUrl,
        address,
        description,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        imageUrl: true,
        address: true,
        description: true,
      },
    });
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

campuses.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await prisma.campus.delete({
        where: { id: +id },
      });
      res.send();
    } catch (err) {
      next(err);
    }
  }
);

module.exports = campuses;
