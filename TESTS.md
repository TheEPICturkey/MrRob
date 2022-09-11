Describe: MrRobo
Test:"recieve data from user."
Code: "1"
Expect: User data recived 

Test:"It should ask you to redo if number is less than one."
Code: "0"
Expect: "please enter a larger number!"
-failed

Test:"It should return error if nothing is submitted"
Code: ""
Expect: "please enter a larger number!"
-failed

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: "5";
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array with the numbers converted to a string"
Code: "5";
Expected Output: ["0, 1, 2, 3, 4, 5"]

Describe: replaceElements()
Test: "It should return an array with the number 1 and 2 replaced with their    respecive strings, "Beep!" and "Boop!".
Code: numberArray = beepBoop(2);
beepBoop(numberArray);
Expected Output: ["0", "Beep!", "Boop!"]
