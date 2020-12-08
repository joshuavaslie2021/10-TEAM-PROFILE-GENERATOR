// TODO: Write code to define and export the Employee class

class Employee {
     constructor(Name,ID,Email,Role) {
          this.Name = Name;
          this.ID = ID;
          this.Email = Email;
          this.Role = Role;
     }
getRole() {
return this.Role
}
getName() {
return this.Name
}
getEmail(){
return this.Email
}
getID(){
return this.ID
}



}






module.exports = Employee