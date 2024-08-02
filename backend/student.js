export class Student {
    constructor(id, name, phone) {
      this.id = id;
      this.name = name;
      this.phone = phone;
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
      this.name = name;
    }
  
    getPhone() {
      return this.phone;
    }
  
    setPhone(phone) {
      this.phone = phone;
    }
  }
  