Took basic number guessing game created in class using web development tools and improved it by implementing a 2 player system in it.
First created 2 divs each for player 1 and player 2 to enter their player names as text inputs.
These inputs are taken and displayed in the maingame divs using .innerHTML and .value .








![Screenshot 2024-11-22 122935](https://github.com/user-attachments/assets/889ff612-c60f-4129-865a-e464de6825dc)










Then created 2 different divs for player1 maingame part and player 2 maingame part.
The game runs on the same logic as done in class.
When player 1 is done they click the nextTurn button which calls a nextTurn fucntion which creates a new random number and makes the player2maingame div display block.
Initially had put number generation in the game function for player2 but it was creating a new number everytime breaking the game.









![Screenshot 2024-11-22 123304](https://github.com/user-attachments/assets/42f196ed-a1d0-4cb7-a9fa-ed84e7021e8b)












Finally created result div and function where the player with lesser attempts wins and their username is displayed.











![Screenshot 2024-11-22 123702](https://github.com/user-attachments/assets/e25c81c5-3404-486b-9f33-3770c49bd1cc)












There is a restart button in this result div as well which reloads the entire page upon clicking using window.location.reload method which reloads the entire document essentially working in the same way as the refresh button in our browser.













![Screenshot 2024-11-22 124123](https://github.com/user-attachments/assets/3fb028f0-17eb-42ba-b482-a3c980612837)

Gallery:

![Screenshot 2024-11-22 124218](https://github.com/user-attachments/assets/8feb68df-fe31-4e17-ae26-26bf30268685)
![Screenshot 2024-11-22 124235](https://github.com/user-attachments/assets/13643254-ada1-4efb-adaa-bd67980e3eb2)







entering both the players usernames...










![Screenshot 2024-11-22 124447](https://github.com/user-attachments/assets/04623c33-d775-41e6-8c37-e4a9a30b4bbb)
![Screenshot 2024-11-22 124437](https://github.com/user-attachments/assets/7e2ac1c2-fee0-4fc3-a6f1-843e147d1c19)










working hints and attempts.










![Screenshot 2024-11-22 124649](https://github.com/user-attachments/assets/bcf549d8-869c-4ca6-b4a7-519d45d148d4)



after player2 guessed correctly shows button to display results.


















![Screenshot 2024-11-22 124804](https://github.com/user-attachments/assets/360c42a8-9593-4a61-9c32-80dc772ae5f9)







result screen and restart button.

note:number of attempts should be shown after players turn ends for cleaner UI.
