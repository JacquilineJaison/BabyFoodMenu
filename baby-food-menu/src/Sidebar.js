import Recipe from './Recipe';
import ListGroup from 'react-bootstrap/ListGroup';

var Recipes = ["dosa", "roti", "parantha", "biriyani", "idli", "adda"];

function Sidebar() {

    const Recipelist =  Recipes.map((recipe,index) => 
        //    console.log(recipe);
           //<tr key={index}><td>{ recipe}</td></tr>
           <ListGroup.Item key={index}>{ recipe}</ListGroup.Item>
            // <Recipe name= {recipe}/>
        );
//     return <table  className="App-sidebar"><tbody>{Recipelist}</tbody></table>;
       
    
// }




  return (
    <ListGroup>
      {Recipelist}
     
    </ListGroup>
  );
}


export default Sidebar;