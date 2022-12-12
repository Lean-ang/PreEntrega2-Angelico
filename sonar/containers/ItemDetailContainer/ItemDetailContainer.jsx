import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../src/components/ItemDetail/ItemDetail"
import  gFetch  from "../../src/helpers/gFetch"


export const ItemDetailContainer = () => {
  const[product,setProduct]= useState({})
  const { productoId}= useParams()
  console.log(productoId)

  useEffect(()=>{
    
    gFetch(productoId)
        .then(resp=>setProduct(resp))
        .catch(err=>console.log(err))
  },[])
  return (
    <ItemDetail
              product={product}/>
    
  )
}
