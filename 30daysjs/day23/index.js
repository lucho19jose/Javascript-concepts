class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  isLoggedIn() {
    console.log(this.isLogged);
    return this.isLogged;
  }
}

class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if(this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("Usuario no registrado")
    }
  }

  getHistory() { 
    return this.messages.getHistory();  
  }
}

/* const user = new User("John")

console.log(user)
user.login()
user.isLoggedIn() */

/* const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

user.login()
console.log(messagesProxy.sendMessage("Hola"))
console.log(messagesProxy.getHistory())
 */
const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

messagesProxy.sendMessage("Hola")

Output: Error("Usuario no registrado")