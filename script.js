let players = []

let player1 = ''
let player2 = ''


document.getElementById('player1-rank').addEventListener('change', function(e){
  player1 = Number(e.target.value)
  if (player1 === 15){
    players.push({name:"Player 1", value:player1});
  }
 
})
document.getElementById('player2-rank').addEventListener('change', function(e){
  player2 = Number(e.target.value)
  if (player2 === 15){
    players.push({name:"Player 2", value:player2});
  }
 
})

document.getElementById('play-btn').addEventListener('click', function() { 

  // Reset the dropdown menus
  document.getElementById('player1-rank').selectedIndex = 0;
  document.getElementById('player2-rank').selectedIndex = 0;

    const PIECES_RANKING ={
      SPY:1,
      FIVE_STAR_GENERAL:2,
      FOUR_STAR_GENERAL:3,
      THREE_STAR_GENERAL:4,
      TWO_STAR_GENERAL:5,
      ONE_STAR_GENERAL:6,
      COLONEL:7,
      LT_COLONEL:8,
      MAJOR:9,
      CAPTAIN:10,
      FIRST_LIEUTENENT:11,
      SECOND_LIEUTENANT:12,
      SERGEANT:13,
      PRIVATE:14,
      FLAG:15

    };
    
    const pieces =[
      {
        name:'Spy',
        rank: PIECES_RANKING.SPY,
        logoUrl: ''
      },
      {
        name:'5 Star General',
        rank: PIECES_RANKING.FIVE_STAR_GENERAL,
        logoUrl: ''
      },
      {
        name:'4 Star General',
        rank: PIECES_RANKING.FOUR_STAR_GENERAL,
        logoUrl: ''
      },
      {
        name:'3 Star General',
        rank: PIECES_RANKING.THREE_STAR_GENERAL,
        logoUrl: ''
      },
      {
        name:'2 Star General',
        rank: PIECES_RANKING.TWO_STAR_GENERAL,
        logoUrl: ''
      },
      {
        name:'1 Star General',
        rank: PIECES_RANKING.ONE_STAR_GENERAL,
        logoUrl: ''
      },
      {
        name:'Colonel',
        rank: PIECES_RANKING.COLONEL,
        logoUrl: ''
      },
      {
        name:'Lt. Colonel',
        rank: PIECES_RANKING.LT_COLONEL,
        logoUrl: ''
      },
      {
        name:'Major',
        rank: PIECES_RANKING.MAJOR,
        logoUrl: ''
      },
      {
        name:'Captain',
        rank: PIECES_RANKING.CAPTAIN,
        logoUrl: ''
      },
      {
        name:'1st Lieutenant',
        rank: PIECES_RANKING.FIRST_LIEUTENENT,
        logoUrl: ''
      },
      {
        name:'2nd Lieutenant',
        rank: PIECES_RANKING.SECOND_LIEUTENANT,
        logoUrl: ''
      },
      {
        name:'Sergeant',
        rank: PIECES_RANKING.SERGEANT,
        logoUrl: ''
      },
      {
        name:'Private',
        rank: PIECES_RANKING.PRIVATE,
        logoUrl: ''
      },
      {
        name:'Flag',
        rank: PIECES_RANKING.FLAG,
        logoUrl: ''
      }

    ];

    // Compare player ranks

    const bothFlags = player1 === PIECES_RANKING.FLAG && player2 === PIECES_RANKING.FLAG

    const privateVsSpy = player1 === PIECES_RANKING.PRIVATE && player2 === PIECES_RANKING.SPY || player2 === PIECES_RANKING.PRIVATE && player1 === PIECES_RANKING.SPY

    // Compare player ranks switch case
    function compareRanks() {
     
      if (bothFlags) {
        return players[0].name + " Wins!";
      } 

      if(player1 === player2){
        return 'Both are eliminated!';
      }

      if (privateVsSpy){
        return 'Private wins!';
      }

      if (player1 < player2) {
        return 'Player 1 wins!';
      } else {
        return 'Player 2 wins!';
      }
    }
  
    // Check if ranks are selected
    if (player1 !== '' && player2 !== '') { // to check both players are not equal to 0
        const player1Rank = pieces[player1 -1 ].name; // since array starts with 0 and the dropdown value starts at 1
        const player2Rank = pieces[player2 -1 ].name;// the code with -1 from the dropdown value to match the array
              
        const result = compareRanks();
        document.getElementById('result').textContent = `Player 1 (${player1Rank}) vs. Player 2 (${player2Rank}): ${result}`;
    
        const battleResult = {
            player1Rank,
            player2Rank,
            result
          };
      
          // Store battle result in history
          const historyList = document.getElementById('history-list');
          const historyItem = document.createElement('li'); // list item
          historyItem.textContent = `Player 1 (${player1Rank}) vs. Player 2 (${player2Rank}): ${result}`; //copied from result
          historyList.insertBefore(historyItem, historyList.firstChild); // to put the latest battle history on top of the list.0

          players = []

      
      } else {
        document.getElementById('result').textContent = 'Please select ranks for both players.'; // condition if both the player didnt input anything
      }
    });
    
   