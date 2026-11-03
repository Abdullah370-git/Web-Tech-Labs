//Task 1
console.log("Task-1");
function addition(a, b) {
    let sum = a + b;
    return sum;
}
console.log(addition(10, 20));
console.log(addition(5, 15));
console.log(addition(15, 45));









//Task 2
console.log("Task-2");
function bitwiseAND(a, b) {
  return a & b;
}
console.log(bitwiseAND(10, 13));
function bitwiseOR(a, b) {
  return a | b;
}
console.log(bitwiseOR(20, 36));

function bitwiseXOR(a, b) {
  return a ^ b;
}
console.log(bitwiseXOR(9, 23));












//Task 3
console.log("TASK-3");

function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }

  return sum;
}
console.log(addUp(3));
console.log(addUp(15));











//Task 4
console.log("TASK-4");
function progressBar(a) {
    let filled = Math.floor(a / 10);
    let empty = 10 - filled;
    return "#".repeat(filled) + "-".repeat(empty);
}
console.log(progressBar(10)); 
console.log(progressBar(40)); 
console.log(progressBar(49)); 
console.log(progressBar(75)); 
console.log(progressBar(100));







//Task 5
console.log("TASK-5");
function minMax(arr) {
  let size = arr.length;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < size; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(minMax([11, 22, 33, 44, 55]));
console.log(minMax([1, 22, 33, 4, 5]));













//Task 6
console.log("TASK-6");
function calculateRepoStats(repos) {
    const stars = repos.map(function(repo) {
        return repo.stars;
    });
    const maxStars = Math.max(...stars);
    const minStars = Math.min(...stars);
    const avgStars = Math.floor(
        stars.reduce(function(sum, star) {
            return sum + star;
        }, 0) / stars.length);
    const varianceScore = Math.abs(maxStars - minStars);
    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}
const repos = [
    { name: 'repo-a', stars: 10 },
    { name: 'repo-b', stars: 42 },
    { name: 'repo-c', stars: 3 }
];
console.log(calculateRepoStats(repos));









//Task 7
console.log("TASK 7");
function roundTo2(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    let discountedPrice = basePrice * (1 - discountPercentage / 100);
    let priceWithTax = discountedPrice * (1 + taxRate / 100);
    let finalPrice = roundTo2(priceWithTax);
    let loyaltyPoints = Math.ceil(finalPrice);
    return {
        finalPrice,
        loyaltyPoints
    };
}
console.log(calculateFinalPrice(20, 30, 100));
console.log(calculateFinalPrice(100, 10, 20));
console.log(calculateFinalPrice(50, 5, 10));









//Task 8
console.log("TASK 8");
function paginateData(items, pageNumber, pageSize = 5) {
    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const data = items.slice(startIndex, startIndex + pageSize);
    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}
const allProducts = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Desk",
    "Chair",
    "Webcam",
    "Headphones"
];
console.log(paginateData(allProducts, 2, 3));