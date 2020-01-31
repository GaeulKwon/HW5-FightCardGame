
let deck = {
  cardArray: [],
  load: function(){
  let suitCount;
  let rankCount;
  for(suitCount = 1; suitCount < 5; suitCount++){
  for (rankCount = 2; rankCount < 15; rankCount++){
  this.cardArray.push(new Card(suitCount, rankCount));
  }
  //this.cardArray.push(Card);
  // double nested loop from 0- 4
  // and loop from 2-13
  // this runs all the combination should be 4-6 lines of code
  }
  }
  }
  
  
  