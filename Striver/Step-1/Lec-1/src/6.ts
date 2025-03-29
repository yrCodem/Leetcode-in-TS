function findNthFibonacci(n:number):number{
   const fib = [0,1]
   for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
   }
   return fib[n]
}
console.log(findNthFibonacci(5));
console.log(findNthFibonacci(6));
console.log(findNthFibonacci(18));
