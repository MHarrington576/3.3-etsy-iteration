(function(){
  "use strict";

  var itemTotal = items.reduce(function(total, item){
    return total + item.price;
  }, 0);

  console.log('$' + (itemTotal/items.length).toFixed(2));

}());
