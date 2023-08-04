import styles from './Description.module.css';

import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://www.oliviascuisine.com/four-cheese-lasagna/";
    let authorPhoto = "https://www.oliviascuisine.com/wp-content/uploads/2020/12/about.png";
    let authorName = "Olivia Mesquita";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Photograph of Olivia Mesquita" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Olivia's Cuisine</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
   <div> 
      <div>
         <h1>Four Cheese Lasagna</h1>
         <p>Lasagna! Quatro Formaggi! Like Mama used to make-a!</p>
      </div>
      <RecipeAuthor />
   </div>
        )
    }
}

export default RecipeDescription;