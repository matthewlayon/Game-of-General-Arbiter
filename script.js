document.getElementById('play-btn').addEventListener('click', function() { 
    // Get player ranks from dropdown menus
  const player1RankIndex = document.getElementById('player1-rank').value;
  const player2RankIndex = document.getElementById('player2-rank').value;

  // Rest of the game logic and battle result display

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

    // Compare player ranks switch case
    function compareRanks(rank1, rank2) {
      if (rank1 === PIECES_RANKING.FLAG && rank2 === PIECES_RANKING.FLAG){ // flag vs flag NOT WORKING 
        return 'First player to input wins';
      } else if (  
        (rank1 === rank2 ) // same input
       ){
        return "Both Eliminated!";
      }else if (rank1 === 1 && rank2 === 14){ // If player 1 is Spy then player 2 is Private  NOT WORKING 
        return 'Spy cant Eliminate the Private';
      }else if (rank1 < rank2)  { 
        return 'Player 1 wins!';
      } else {
        return 'Player 2 wins!';
      }

      //ADD FUNCTION WHERE IF ONE FLAG IS ELIMNATED THE SYSTEM WILL DECLARE A WINNING PLAYER
      
    }
  
    // Check if ranks are selected
    if (player1RankIndex !== 0 && player2RankIndex !== 0) { // to check both players are not equal to 0
        const player1Rank = pieces[player1RankIndex -1 ].name; // since array starts with 0 and the dropdown value starts at 1
        const player2Rank = pieces[player2RankIndex -1 ].name;// the code with -1 from the dropdown value to match the array 
        const result = compareRanks(player1RankIndex, player2RankIndex);
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

      
      } else {
        document.getElementById('result').textContent = 'Please select ranks for both players.'; // condition if both the player didnt input anything
      }
    });
    
   