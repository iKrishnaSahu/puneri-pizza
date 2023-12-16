import { Router } from 'express';
import PizzaRoutes from './pizza';

const router = Router();

router.use('/pizza', PizzaRoutes);
// add other routes...

export default router;