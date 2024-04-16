# <Can't Stop Express>

A description of your game. Background info of the game is a nice touch.

# Screenshot

<img src="url to your image on imgur">
<img src="url to your image on imgur">
# Technologies Used

JavaScript
HTML
CSS
CardStarter CSS Library

# Getting Started

[Click to Play Connect Four!](your deployment url here)

# Next Steps

Future enhancement one...
Future enhancement two...

# Pseudocode
1. draw game board
1. Roll dice to get 1 number between 1 to 6 (use math.random to get random number, use for loop to loop roll 5 times because the game requires 5 numbers, push all 5 numbers into an array)
1. sort the array starting from the smallest to biggest number
1. remove duplicates from array
1. (check 5th die arrays)
1. remove the first number of the array and spit the rest of the numbers into 2 pairs
1. do that for every number and list the possible combinations
1. assign row number for each possibility 
1. write function to get the sum of each pair split them in "set 1 & 2"
1. draw game board that displays possible combinations
1. event handler to select a combination that user wants
1. create score card
scorecard: create an array of 4 columns.
    - Column A to consist array of score
    - Column B to consist array of possible sum of each pair
    - Column C to contain array of display 10 empty boxes
    - Column D to to contain 2 arrays
        - D1 = initialise to 0, set to -200 when first item in array C returns true
        - When 5th item in array C returns true, D1  = 0
        - D2 = initialise to 0. When 6th item in array C returns true, score of listed in array A will be recorded in D2. For example, 6th item in C returns true, set to D2 = score * 1
        7th item in C returns true, set to D2 = score * 2
1. set function to check if the sum of pairs is equals to the combination that player has selected 

1. Create "5th die" array to push the unwanted 5th die to an empty array, that is not in any pairs. (stop at 3 arrays)
1. game ends when any of the "5th die" array has 9 true (true = unwanted die in a round) (tbc)



display sum of D1 + D2

