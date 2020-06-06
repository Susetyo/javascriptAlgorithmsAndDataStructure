function fibonaci(position) {
  if (position <= 2) return 1;
  return fibonaci(position - 1) + fibonaci(position - 2);
}

console.log(fibonaci(4));
