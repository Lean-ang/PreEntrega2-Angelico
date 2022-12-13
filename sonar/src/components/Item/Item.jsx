import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) => {
  return ( 
     <div className="col-md-3 cards container-fluid">
        <Link to={`/detail/${product.id}`} >
           
           <div className="card w-100 mt-5 ">
              <div className="card-header card-title text-center">
               {`${product.name}`}
              </div>
              <div className="card-body text-center ">
               <img src={product.foto} alt='' className='w-50  ' />
               <div className="text-center">{product.price}</div>
               
              </div>

           </div>
        </Link>
      </div>  
           
  )
}

export default Item




                                 
     