import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState('no boards yet!');

   const boards = [
      {label: "Lasagna Board",
      value: 0},
      {label: "Four Cheese Board",
      value: 1},
      {label: "Garfield Board",
      value: 2}
   ];

   const handleChange = (event) => {
      let index = event.target.value;
      setBoardName(boards[index].label);
   }

   function boardChoices() {
         return boards.map((board) => <option value={board.value}>{board.label}</option>)
      };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select name={boardName} onChange={handleChange}>
         {boardChoices()}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}