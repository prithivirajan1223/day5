class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
  toString() {
    return `Hi there  i'm ${this.name}, ${this.age} years old now`;
  }
}

console.log(new Person("prithivi", 20).toString());