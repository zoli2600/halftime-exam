function leetSpeak(text) {
const modifiedText = text.toUpperCase() // ensures that no matter if a character is entered in lower case or uppercase it is going to be changed as .replace only gets upper case values. Also characters that are not changed are in uppercase as required
.replaceAll("O", "0")
.replaceAll("L","1")
.replaceAll("I", "1")
.replaceAll("Z", "2")
.replaceAll("E", "3")
.replaceAll("A", "4")
.replaceAll("S", "5")
.replaceAll("G", "6")
.replaceAll("T", "7")
.replaceAll("B", "8")
console.log(modifiedText)
return modifiedText // a teszt csak akkor ad vissza jó eredményt ha itt console.log és return is szerepel egymás után. Ezt vizsga közben nem akartam megkérdezni (bár sok időbe telt, mire rájöttem), de a return önmagában miért nem elég?
  
}

module.exports = leetSpeak