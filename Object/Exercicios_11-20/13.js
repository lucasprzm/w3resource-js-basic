// 13. Classe estudante criada com um objeto e obtendo as chaves do objeto.

class Student {
  constructor(name, sclass, rollno) {
    {
      (this.name = name), (this.sclass = sclass), (this.rollno = rollno);
    }
  }
}

let student = new Student("David Rayy", "VI", 12);
console.log(Object.keys(student));
