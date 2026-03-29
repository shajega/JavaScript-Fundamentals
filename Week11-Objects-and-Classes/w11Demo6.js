// Creating Objects
let car1 = {
    make: 'Honda', 
    model: 'Pilot', 
    year: 2023,
    vendor: {
       address: '12 someway drive',
       city: 'Toronto' 
    },
    
    getDetails: function(){
        return (`Make:${this.make}, Model:${this.model}, Year:${this.year}`)
    }
};

console.log(car1.getDetails());
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
car1.year = 2026;
console.log(car1.getDetails());

//Rectangle
let rectangles = {
    area: function (l, w){
        return l * w
    },
    perimeter: function (l, w){
        return (l + w) * 2
    },
}
 
console.log("Area : " + rectangles.area(5,5));
console.log("Perimeter : " + rectangles.perimeter(5,5));