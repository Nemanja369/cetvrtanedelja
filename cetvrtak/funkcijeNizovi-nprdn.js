// map, filter

// funkcija koja mapira niy br u niz korena tih brojeva
const koreni = (niz) => niz.map(el =>{
    return Math.sqrt(el)
})

//filter - ocekuje funciju, vraca true ili false, kod svih ako pisemo viticaste pisemo i return

//mapira niz u brojeve
const brojevi = (niz) => niz.map(el=>{
return Number(el)
})
console.log(brojevi(['5', 43, 'dasda']))
//reduce

//slice

//sort


