function addUp(num) {

	let i = 0;
	let r = 0;
	while(i != num){
		i++
		r += i;
	}
	return r;

     //  return (num * (num + 1))/2;   // Otra solucion

//     //Otra solucion
//     if (num === 1) return 1;
//   return num + addUp(num - 1);
//
}

// function addUp(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }