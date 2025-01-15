// ./js/user/user-controller.js
const { User, UserList } = require('./user');

class UserController {
  constructor() {
    this.userList = new UserList();
  }

  //Verifica que un usuario se pueda agregar correctamente al controlador y acceder por su email
  addUser(id, email) {
    const user = new User(id, email);
    this.userList.add(user);
  }
  //Se asugura de que una vez borrado, no se pueda acceder a él después
  removeUser(email) {
    const user = this.userList.findByEmail(email);
    if (user) {
      this.userList.remove(user);
    }
  }

  getUserByEmail(email) {
    return this.userList.findByEmail(email);
  }

  getUserById(id) {
    return this.userList.findById(id);
  }
}

module.exports = UserController;
