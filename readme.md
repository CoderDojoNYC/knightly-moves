## Knightly Moves
**Prerequisite**
Basic HTML, CSS + Programming Knowledge.

**Description:**

### Lesson 0: Laying out the Board
**Concepts:**
Reviewing basic HTML / CSS.

**Objective:**
Your first objective is to create an X by X dimension board using HTML / CSS. Make sure the board has alternating colors similar to a chessboard.

### Lesson 1: Moving the Knight
**Concepts:**
Start to think about javascript classes.
Conditional statements.
jQuery Click

**Objective:**
Define a player and a board object. This player object is the "Knight." You should be able to click a tile on the board and the knight should move to that spot.

```javascript
function Player(name) {
  this.name = name;

  this.sayName = function() {
    console.log("My name is " + name);
  };
}
```

Once you get the knight moving, proceed by making it so the knight can only move in an L shape. If you click on a tile that the knight can't move, `console.log("error. invalid move.")`;

### Lesson 2: Adding Spikes
**Concepts:**
Math.random()
Data Structures

**Objective:** Add a single spike object to the board. A knight should not be able to click on this object. Now randomly generate some more spikes on the board.
