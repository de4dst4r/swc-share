// Importing modules
import fs from "fs";
import path from "path";

// Constants
const DATA_DIR = path.join(__dirname, "data");
const OUTPUT_FILE = path.join(__dirname, "output.txt");
const PI = Math.PI;

// Helper functions
function calculateCircleArea(radius) {
  return PI * radius * radius;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class definition
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return calculateCircleArea(this.radius);
  }

  static compareAreas(circle1, circle2) {
    return circle1.area - circle2.area;
  }
}

// Main function
async function main() {
  const circles = [];
  for (let i = 0; i < 1000; i++) {
    const radius = randomNumber(1, 100);
    circles.push(new Circle(radius));
  }

  circles.sort(Circle.compareAreas);

  let output = "Sorted Circle Areas:\n";
  circles.forEach((circle) => {
    output += `Radius: ${circle.radius}, Area: ${circle.area.toFixed(2)}\n`;
  });

  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, output, "utf8");
    console.log(`Output saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error writing output:", error);
  }
}

// Execute main function
if (require.main === module) {
  main().catch((error) => {
    console.error("Error in main execution:", error);
  });
}

// Async utility example
async function asyncExample() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async operation completed.");
    }, 2000);
  });
}

// Async call with then/catch
asyncExample()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// More ES6+ features
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((n) => n * 2);

console.log("Doubled array:", doubled.join(", "));

// Using default parameters and rest/spread operators
function sumAll(multiplier = 1, ...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) * multiplier;
}

console.log("Sum all with multiplier:", sumAll(2, ...arr));
