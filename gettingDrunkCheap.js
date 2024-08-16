function gettingDrunkCheap(drinks) {
  drinks.array.forEach(drink => { 
  drink.pricePerAbv = Math.floor(drink.price / drink.volume / drink.abv) //adds new key, value is rounded down
  });

  let lowestPricePerAbv = drinks[0]  // proclaims first object to be the cheapest drink

  for (let i = 1; i < drinks.length; i++) { // checks all objects, if pricePerAbv if lower, that object will be the new lowestPricePerAbv
    if (drinks[i].pricePerAbv < lowestPricePerAbv.pricePerAbv) {
      lowestPricePerAbv = drinks[i];
    }
  }
  
  delete lowestPricePerAbv.price  // removing keys that are not needed
  delete lowestPricePerAbv.abv
  delete lowestPricePerAbv.volume

  return lowestPricePerAbv
}


module.exports = gettingDrunkCheap
