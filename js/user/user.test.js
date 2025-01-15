// ./js/user/user.test.js
const { User, UserList } = require('./user');
const UserController = require('./user-controller');

describe('Pruebas para la clase UserList', () => {

  let userList;
  let user1;
  let user2;

  beforeEach(() => {
    userList = new UserList();
    user1 = new User(1, 'user1@example.com');
    user2 = new User(2, 'user2@example.com');
  });

  test('Debe agregar un usuario que no está en la lista', () => {
    userList.add(user1);
    expect(userList.users).toContain(user1);
  });

  test('Debe lanzar un error al intentar eliminar un usuario que no está en la lista', () => {
    expect(() => userList.remove(user1)).toThrow("Usuario no encontrado");
  });

  test('Debe encontrar un usuario por email', () => {
    userList.add(user1);
    const foundUser = userList.findByEmail('user1@example.com');
    expect(foundUser).toBe(user1);
  });

  test('Debe devolver undefined si no encuentra un usuario por email', () => {
    const foundUser = userList.findByEmail('nonexistent@example.com');
    expect(foundUser).toBeUndefined();
  });

  test('Debe encontrar un usuario por id', () => {
    userList.add(user1);
    const foundUser = userList.findById(1);
    expect(foundUser).toBe(user1);
  });

  test('Debe devolver undefined si no encuentra un usuario por id', () => {
    const foundUser = userList.findById(99);
    expect(foundUser).toBeUndefined();
  });
});

describe('Pruebas para la clase UserController', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test('Debe agregar un usuario correctamente al controlador', () => {
    userController.addUser(1, 'user1@example.com');
    const foundUser = userController.getUserByEmail('user1@example.com');
    expect(foundUser.email).toBe('user1@example.com');
  });

  test('Debe eliminar un usuario correctamente del controlador', () => {
    userController.addUser(1, 'user1@example.com');
    userController.removeUser('user1@example.com');
    const foundUser = userController.getUserByEmail('user1@example.com');
    expect(foundUser).toBeUndefined();
  });
});
