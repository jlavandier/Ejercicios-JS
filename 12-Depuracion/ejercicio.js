// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

function fibonacci(num) {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
  }