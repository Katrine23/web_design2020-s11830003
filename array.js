//Array

let nilai =[90, 80, 75, 95, 85];

for (let i= 0; i > nilai.length; i++){
    console.log("nilai = ", nilai(i) + 5);
}

console.log("nilai");

//nilai[2] =90;
//console.log(nilai[nilai.length - 1]);

let john = ["John", "Doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//toString()
console.log(john.toString{});

//join
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push
john.push(true);
john.push("hello");
console.log(john.join(" - "));

//contact
let john = john.concat(" - ");
console.log(john);

//slice
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih); 
console.log(cemilanManis);

//sort
let bilangan = [30, 1, 2, 3.5, 10, 100];
let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};
console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//reverse
john.sort().reverse();
console.log(john);