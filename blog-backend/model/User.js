class User {
    constructor(userId, username, userPseudonym, email, admin, createdAt) {
      this.userId = userId;
      this.username = username;
      this.userPseudonym = userPseudonym;
      this.email = email;
      this.admin = admin;
      this.createdAt = createdAt;
    }
  
    getUserId() {
      return this.userId;
    }
  
    setUserId(userId) {
      this.userId = userId;
    }
  
    getUsername() {
      return this.username;
    }
  
    setUsername(username) {
      this.username = username;
    }

    getUserPseudonym() {
      return this.userPseudonym;
    }
  
    setUserPseudonym(userPseudonym) {
      this.userPseudonym = userPseudonym;
    }
  
    getEmail() {
      return this.email;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    isAdmin() {
      return this.admin;
    }
  
    setAdmin(admin) {
      this.admin = admin;
    }
  
    getCreatedAt() {
      return this.createdAt;
    }
  
    setCreatedAt(createdAt) {
      this.createdAt = createdAt;
    }
  }
  
  module.exports = User;