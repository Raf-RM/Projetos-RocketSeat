const AppError = require("../utils/AppError")


class UserController {
  create(request, response) {
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("É obrigatório informar um nome.")
    }

    response.send({ name, email, password });
  } 
}

module.exports = UserController;