// The Use of JSON.stringify in my code is to convert [Object object] to string when consoling an object in a string
// AHMED BOLARINWA
//SLACK USERNAME: ABATOMS

function convertFahrToCelsius(numb) {
	var numberInCelsius ;
		parseInt(numb, 10);	
			
			if(Array.isArray(numb)){
				// Used a string word for array as typeof array is object
				return (`${numb} is not a valid number but a / an Array`);		
			}
			else if(typeof(numb) === 'boolean'){
				return(`${JSON.stringify(numb)} is not a valid number but a / an ${typeof(numb)}`);
			}
			// else if(typeof(numb) == 'undefined'){
			// 	return(`${JSON.stringify(numb)} is not a valid number but a / an ${typeof(numb)}`);
			// }
			else if(isNaN(numb)){
				return(`${JSON.stringify(numb)} is not a valid number but a / an ${typeof(numb)}`);
			}
			else{
				numberInCelsius = 5/9 * (numb - 32);
				return numberInCelsius.toFixed(4);
			}
		}
		
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius(true));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius("Yello"));
console.log(convertFahrToCelsius({temp: 0}));

/* End of ConvertFahrToCelsius Function*/


/*Beginning the CheckYuGiOh Function*/

function checkYuGiOh(n){
	var message = [];
	console.log("\nYuGiOh program")
	if(isNaN(n)){
		return (`Invalid Paremeter: ${JSON.stringify(n)}`);
	}
	else{
	for(let i = 1; i <= n; i++){
		if((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)){
			message.push('yu-gi-oh');
		}
		else if ((i % 2 === 0) && (i % 3 === 0)){
			message.push('yu-gi');
		}
		else if((i % 2 === 0) && (i % 5 === 0)){
			message.push('yu-oh');
		}
		else if((i % 3 === 0) && (i % 5 === 0)){
			message.push('gi-oh');
		}
		else if(i % 2 === 0){
			message.push('yu');
		}
		else if (i % 3 === 0){
			message.push('gi');
		}
		else if (i % 5 === 0){
			message.push('oh');
		}
		else{
			message.push(i);
		}
	}
}
return message;
}
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzBuzz is meh"));
console.log(checkYuGiOh({temp: 0}));