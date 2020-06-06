function power(p, n) {
  if (n == 0) return 1;
  if (n == 1) return p;
  return p * power(p, n - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
