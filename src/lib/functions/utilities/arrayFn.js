//Functions for working with arrays
const findSharedVal=(ar1,ar2)=>{
    let res = ''
    for(var i=0 ; i<ar1.length ; ++i) {
        // console.log(ar1[i])
        for(var n=0 ; n<ar2.length ; ++n){
            // console.log('val AR1:',i,ar1[i], '| Val Ar2:}',n,ar2[n])
            if(ar1[n] ==ar2[i]){
                return ar1[n]
            }
        }
    }}
export {findSharedVal}