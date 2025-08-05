import { addToCart } from "../new_redux/action";
import { useDispatch } from "react-redux"

const products=[{id:100,name:'Iphone',price:1500000},
    {id:500,name:'Android',price:1500000},
    {id:200,name:'Dell',price:1500000},
    {id:300,name:'HP',price:1500000},
    {id:400,name:'Samsung',price:1500000},
]

function Productlist(){

    const dispatch=useDispatch();
    
    return(
        <div> <h2>Products:</h2>
        {products.map(product=>(
            <div key={product.id} style={{marginBotttom:'10px'}}>
                <span>{product.name}::{product.price}</span>
                <button onClick={()=>dispatch(addToCart(product))}>
                    Add to cart
                </button>
                
                </div>
       ) )}
        

        </div>
    )
}
export default Productlist;