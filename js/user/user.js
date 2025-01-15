// ./js/user/user.js

class User {
    constructor(id, email) {
      this.id = id;
      this.email = email;
    }
}
  
class UserList {
    constructor() {
        this.users = [];
    }
    // Se verifica que el usuario no se agrege si ya está en la lista
    add(user) {
        if (!this.users.find(u => u.email === user.email)) {
        this.users.push(user);
        } else {
        throw new Error("El usuario ya existe");
        }
    }
    //Verifica que al intentar eliminar un usuario que no está en la lista, envie un error.
    remove(user) {
        const index = this.users.findIndex(u => u.email === user.email);
        if (index !== -1) {
        this.users.splice(index, 1);
        } else {
        throw new Error("Usuario no encontrado");
        }
    }
    //Verifica que un usuario se pueda encontrar por email.
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    //Encontrar por identication
    findById(id) {
        return this.users.find(user => user.id === id);
    }
}
  module.exports = { User, UserList };
  