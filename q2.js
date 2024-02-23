class Circle {
    /* constructor() {   
          this.radius = 1.0;
          this.color = "red";     
      }
      constructor(radius) {
          this.radius = radius;
      } */
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
    setColor() {
      this.color = color;
    }
    toString() {
      return `Circle [radius=${this.radius},color=${this.color}]`;
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  console.log(new Circle());
  console.log(new Circle(3.5));
  console.log(new Circle(45.5, "red"));
  
  console.log(new Circle(9.9, "Green").toString());
  
  console.log(new Circle(2.2).getArea());
  
  console.log(new Circle(20.2).getCircumference());