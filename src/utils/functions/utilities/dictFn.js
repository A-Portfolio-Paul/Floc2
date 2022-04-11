const dictToKeyArray =(dict)=>{
    let res = []
    for (const [key, value] of Object.entries(dict)) {
      res.push(key)
    }
    return res
    }

    export {dictToKeyArray} 

