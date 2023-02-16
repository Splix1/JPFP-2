const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api/index.ts'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
