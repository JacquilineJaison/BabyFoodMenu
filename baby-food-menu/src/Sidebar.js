//import React from 'react';
import Recipe from './Recipe';

var Recipes = ["dosa", "roti", "parantha", "biriyani", "idli", "adda"];

function Sidebar() {

    const Recipelist =  Recipes.map((recipe,index) => 
        //    console.log(recipe);
           <tr key={index}><td>{ recipe}</td></tr>
            // <Recipe name= {recipe}/>
        );
    return <table  className="App-sidebar"><tbody>{Recipelist}</tbody></table>;
       
    
}

export default Sidebar;