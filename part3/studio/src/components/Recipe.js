const RecipeAuthor = () => {
   let authorLink = "https://www.oliviascuisine.com/four-cheese-lasagna/";
   let authorPhoto = "https://www.oliviascuisine.com/wp-content/uploads/2020/12/about.png";
   let authorName = "Olivia Mesquita";

   return (
      <div>
         <img src={authorPhoto} alt = "photograph of the author, Olivia Mesquita" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "package lasagna noodles",
      "gruyere cheese",
      "mozzarella cheese",
      "parmesan cheese",
      "gorgonzola cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Four Cheese Lasagna</h1>
            <p>Who can resist the sight of an ooey gooey cheese lasagna coming right out of the oven? Made with four different kinds of cheese and a creamy béchamel sauce, this is the ultimate comfort food!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.oliviascuisine.com/wp-content/uploads/2019/03/four-cheese-lasagna.jpg" alt="picture of Four Cheese Lasagna" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}