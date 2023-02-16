const api = require('express').Router();
import { NextFunction, Request, Response } from 'express';
import createHttpError = require('http-errors');
// mounted on /api

api.use('/students', require('./students'));
api.use('/campuses', require('./campuses'));

api.use((req: Request, res: Response, next: NextFunction) => {
  const err = createHttpError('API route not found!');
  err.status = 404;
  next(err);
});

api.use((err: any, req: Request, res: Response, next: NextFunction) => {
  next(err);
});

module.exports = api;
