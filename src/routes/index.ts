import { Router } from 'express';
<<<<<<< HEAD
import appointmentsRouter from './Appointment.routes';

const routes = Router();

routes.use('/template', appointmentsRouter);
=======
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
>>>>>>> 110f934... Setup template

export default routes;
