/*---------------------Question 1------------------------*/
(function(){
  "use strict";

  var itemTotal = items.reduce(function(total, item){
    return total + item.price;
  }, 0);

  console.log('Q1) ' + '$' + (itemTotal/items.length).toFixed(2));
  console.log('');

}());


/*---------------------Question 2------------------------*/
(function(){
  "use strict";

  var cheapProducts = items.map(function(item){
    if(item.price >= 14 && item.price <= 18){
      console.log('Q2) ' + item.title + ': ' + '$' + item.price);
      return (item.title + ': ' + '$' + item.price);
    }
  });
  console.log('');

}());


/*---------------------Question 3------------------------*/
(function(){
  "use strict";

  var britishProduct = items.filter(function(item){
    if(item.currency_code == "GBP"){
      console.log('Q3) ' + item.title + ': ' + '£' + item.price);
      return (item.title + ': ' + '£' + item.price);
    }
  });
  console.log('');

}());


/*---------------------Question 4------------------------*/
(function(){
  "use strict";

  var woodProducts = items.map(function(item){
    if(item.materials.indexOf('wood') !== -1){
      console.log('Q4) Wooden: ' + item.title);
      return item.title;
    }
  });
  console.log('');

}());


/*---------------------Question 5------------------------*/
(function(){
  "use strict";

  var complexItems = items.map(function(item){
    if(item.materials.length >= 8){
      console.log('Q5) ' + item.title + ' ~ ' + item.materials.length + ' materials');
      return item.title;
    }
  });
  console.log('');

}());


/*---------------------Question 6------------------------*/
(function(){
  "use strict";

  var homemadeItemCount = 0;
  var homemadeItems = items.map(function(item){
    if(item.who_made == "i_did"){
      homemadeItemCount += 1;
    }
    return homemadeItemCount;
  });

  var finalCount = homemadeItemCount;
  console.log('Q6) ' + finalCount + ' items');

}());
