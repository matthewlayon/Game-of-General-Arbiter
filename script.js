document.getElementById('play-btn').addEventListener('click', function() { 
    // Get player ranks from dropdown menus
    const player1RankIndex = document.getElementById('player1-rank').selectedIndex; // retrieve data from index from the dropdown meny starting from 0
    const player2RankIndex = document.getElementById('player2-rank').selectedIndex;
  
    // Soldier rankings
    const soldierRankings = [
        'Spy', //0
        '5 Star General', //1
        '4 Star General', //2
        '3 Star General', //3
        '2 Star General', //4
        '1 Star General', //5
        'Colonel', //6
        'Lt. Colonel', //7
        'Major', //8
        'Captain', //9
        '1st Lieutenant', //10
        '2nd Lieutenant', //11
        'Sergeant', //12
        'Private', //13
        'Flag' //14

    ];
    
   const SPY_RANK = 1
   const FIVE_STAR_GENERAL_RANK = 2
   const FOUR_STAR_GENERAL_RANK = 3
   const THREE_STAR_GENERAL_RANK = 4
   const TWO_STAR_GENERAL_RANK = 5
   const ONE_STAR_GENERAL_RANK = 6
   const COLONEL_RANK = 7
   const LTCOLONEL_RANK = 8
   const MAJOR_RANK = 9
   const CAPTAIN_RANK = 10
   const FIRST_LIEUTENANT_RANK = 11
   const SECOND_LIEUTENANT_RANK = 12
   const SERGEANT_RANK = 13
   const PRIVATE_RANK = 14
   const FLAG_RANK = 15



   

    // Compare player ranks
    function compareRanks(rank1, rank2) {
      if (rank1 === rank2) {
        return "Both Eliminated!";
      } else if (  
        (rank1 === 14 && rank2 === 1)|| //Private vs Spy
        (rank1 === 14 && rank2 === 15) //Private vs Flag
       ){
        return 'Player 1 wins!';
      }else if (rank1 === 1 && rank2 === 14){ // If player 1 is Spy then player 2 is Private
        return 'Spy cant Eliminate the Private';
      }else if (rank1 === FLAG_RANK && rank2 === FLAG_RANK){ // flag vs flag
        return 'First player to input wins';
      }else if (rank1 < rank2)  {
        return 'Player 1 wins!';
      } else {
        return 'Player 2 wins!';
      }
      
    }
  
    // Check if ranks are selected
    if (player1RankIndex !== 0 && player2RankIndex !== 0) { // to check both players are not equal to 0
        const player1Rank = soldierRankings[player1RankIndex - 1]; // since array starts with 0 and the dropdown value starts at 1
        const player2Rank = soldierRankings[player2RankIndex - 1];// the code with -1 from the dropdown value to match the array 
        const result = compareRanks(player1RankIndex, player2RankIndex);
        document.getElementById('result').textContent = `Player 1 (${player1Rank}) vs. Player 2 (${player2Rank}): ${result}`;
    
        const battleResult = {
            player1Rank,
            player2Rank,
            result
          };
      
          // Store battle result in history
          const historyItem = document.createElement('li'); // list item
          historyItem.textContent = `Player 1 (${player1Rank}) vs. Player 2 (${player2Rank}): ${result}`; //copied from result
          document.getElementById('history-list').appendChild(historyItem); // to put the battle history to the end of the list 
      
          console.log(battleResult); // Log the battle result object
       
      } else {
        document.getElementById('result').textContent = 'Please select ranks for both players.'; // condition if both the player didnt input anything
      }
    });
    
   