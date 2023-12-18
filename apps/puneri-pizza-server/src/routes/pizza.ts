import { Request, Response, Router } from 'express';
import { PIZZA_LIST, TOPPINGS } from './mock-pizza';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json(PIZZA_LIST);
});

router.get('/toppings', async (req: Request, res: Response) => {
  res.json(TOPPINGS);
});

export default router;