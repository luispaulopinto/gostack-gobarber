import express from 'express';
import routes from './routes';

<<<<<<< HEAD
import './database';

=======
>>>>>>> 110f934... Setup template
const app = express();
app.use(express.json());
app.use(routes);

export default app;
