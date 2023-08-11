import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState('no boards yet!');

   const boards = [
      {label: ,
      value: },
      {label: ,
      value: },
      {label: ,
      value: }
   ];

   const handleChange = (event) => {
      boardName = event.target.value;
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value={appropriate value}>{appropriate label}</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}