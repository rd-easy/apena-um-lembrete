// importa o routes do express
import { Router } from 'express';

import createUser from './services/CreateUserService';

const usersRouter = Router();

// Rota POST
usersRouter.post('/', async (request, response) => {
  // requisita os dados do usuário
  const { email, name, password } = request.body;

  //passa os dados pro service
  const user = await createUser({
    name,
    email,
    password,
  });

  //não voltar a senha pro usuário (dica de segurança)
  delete user.password;

    // retorna pro usuário os dados
  return response.json(user);
});

export default usersRouter;