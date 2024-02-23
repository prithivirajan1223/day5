 //write a class to calculate the uber price//
 
 
 
 class UberPrice {
    constructor(dist = 0, rate = 0) {
      this.distance = dist;
      this.price = rate;
    }
    setDistance(distance) {
      this.distance = distance;
    }
    setPrice(price) {
      this.price = price;
    }
    calculatePrice() {
      return this.distance * this.price;
    }
  }
  
  let carA = new UberPrice(89, 5).calculatePrice();
  console.log(carA);
 let carB = new UberPrice(22,25).calculatePrice();
 console.log(carB);