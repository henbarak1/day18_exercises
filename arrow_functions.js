//1
getPlayerName= () => {
    return player.name;
}

//2
getPlayerHealth= (health) => {
    if (health > 70) 
        { 
            return "High"; 

        }
         else if (health > 40)
             { 
                return "Medium";

              } 
              else 
              { 
                return "Low"; 

              }
}
//3
getTotalInventoryValue= (items) => {
let totalValue = 0;
 for (let i = 0; i < items.length; i++) 
    { 
        totalValue += items[i].value; 

    } 
    return 'Total inventory value is ' + totalValue;
}
//4
let sortedItems = items.sort(sort1 = (a,b) => {return b.value-a.value;}
); 


//5


function getItemNames(items){ return items.map(getItem=(index)=>{return item[index]});}


