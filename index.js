// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const copyofCats =[...cats]
    copyofCats.push(name);
    return(copyofCats);
}
function prependCat(name){
    const copyofCats =[...cats]
    copyofCats.unshift(name);
    return(copyofCats);
}
function removeLastCat(){
    const copyofCats =[...cats]
    copyofCats.pop();
    return(copyofCats);
}
function removeFirstCat(){
   const copyofCats =[...cats]
   copyofCats.shift();
   return(copyofCats);
    // const cat = [
    //     "Milo",
    //     "Otis",
    //     "Garfield",
    //   ];
      
    //   const newCat = [
    //     cat.slice(0, 1),
    //     "Garfield",
    //     "Milo",
    //     "Otis",
    //     cat.slice(2),
    //   ];
      
}