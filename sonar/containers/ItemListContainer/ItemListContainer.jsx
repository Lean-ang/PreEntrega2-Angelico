import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../src/components/ItemList/ItemList"
import  gFetch  from "../../src/helpers/gFetch"

const ItemListContainer = (props) => {
  const[products, setProducts]= useState([])
  const[loading, setLoading]= useState(true)
  const{categoriaId}= useParams()

   useEffect(()=>{
        if (categoriaId){
          gFetch()  
        .then(resp => setProducts(resp.filter(product=>product.categoria===categoriaId)))
        .catch(err=> console.log(err))
        .finally(()=>setLoading(false))
        } else {
          gFetch()
          .then( resp=> setProducts(resp))
          .catch( err=> console.log(err))
          .finally(()=>setLoading(false))
        }    
   },[categoriaId]) 
  return (
    
    <>
      <h2>{props.titulo}</h2>
      {
        loading ?
        <h2>Cargando productos</h2>
            :
            <ItemList products={products} />
      }
    </>

  )
}

export default ItemListContainer