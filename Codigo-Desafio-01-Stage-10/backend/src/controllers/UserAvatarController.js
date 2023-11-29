const knex = require("knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(request, response){
    const user_id = request.user_id;
    const avatarFileName = request.file.filename;
    const user = await knex("users").where({id: user_id}).first();
    const diskStorage = new DiskStorage();

    if(!user){
      throw new AppError("Somente usuários autenticados podem alterar o avatar.", 401);
    }
    
    if(user.avatar){
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFileName);
    user.avatar = filename;

    await knex("users").update(user).where({id:user_id});

    return response.json(user) 
  }
}

module.exports = UserAvatarController;