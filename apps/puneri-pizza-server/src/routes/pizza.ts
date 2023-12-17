import { Request, Response, Router } from 'express';
import { PIZZA_LIST } from './mock-pizza';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json(PIZZA_LIST);
});

export default router;