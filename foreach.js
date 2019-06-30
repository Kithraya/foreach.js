function foreach(array, callback, dynamiclength, callscope) {
			
	var i=0, len = array.length; 
	var value, scope, x;
	var version = "1.1";
	
	if (typeof dynamiclength === 'object') {  } // include an object as a third optional argument in later versions
	
	scope = (callscope === x) ? array : callscope;
	
	for (; i < (dynamiclength ? array.length : len); i++) {

		 value = callback.call(scope, i, scope[i]); 
		 
		 if (value === false) { break; } else
		 if (value === true) { continue; } else
		 if (typeof value === 'number') {
			 i+= value;
		 } else
		 if (typeof value === 'object') {
			 // 
		 }		
	}

	return array;
}