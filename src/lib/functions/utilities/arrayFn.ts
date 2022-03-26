//Functions for working with arrays
export const findSharedVal = (ar1, ar2) => {
	let res = '';
	for (var i = 0; i < ar1.length; ++i) {
		// console.log(ar1[i])
		for (var n = 0; n < ar2.length; ++n) {
			// console.log('val AR1:',i,ar1[i], '| Val Ar2:}',n,ar2[n])
			if (ar1[n] == ar2[i]) {
				return ar1[n];
			}
		}
	}
};
// get by id: ex: const arrOfObj = [{id:1,'name':'Alpha'},{id:2,'name':'Beta'}]
export const getObjById =  (arr, id, idName ) => {
	console.log('getObjById: ARGS:ARR',arr)
	console.log('id:',id,'idName:',idName)
	let res = []
	for (var i = 0; i < arr.length; ++i) {
		if (String(arr[i][idName])== String(id)) {
			res.push(arr[i]) 
		}
	}
	return res
	}