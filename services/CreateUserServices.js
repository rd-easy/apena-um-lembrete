// import User from 'models' => importa o model que você vai usar
//import hash from 'hash'; => importa a lib de gerar o hash da senha

async function createUser({ email, name, password}) {
  try {
    // faz a query na database
    const user = await User.findOne({ where: { email}});

    //compara se o usuário já exite
    if(user) {
      //retorna seu erro
      return ('email ja existe')
    }

    //gera a o hash da senha
    const passwordHash = await hash(password);

    //aqui cria o usuário
    const user = User.create({
      email,
      name,
      password: hashedPassword,
    });

      // aqui salva
    await User.save(user);

    return user;
    
  } catch (error) {
    console.log(error)
  }
}

export default createUser;