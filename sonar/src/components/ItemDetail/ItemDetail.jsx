import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {
  const onAdd=(cantidad)=> alert(`cantidad de productos: ${cantidad}`)
  console.log(product)
  return (
    <div className="row">
        <div className="col text-center">
            <h2>{product.name}</h2>
            <img src={product.foto} className="w-50" alt="imagen del producto"/>
            <h4>Categoria: {product.categoria}</h4>
            <h4>Precio: {product.price}</h4>
        </div>
        <div className="col">
            <ItemCount stock={10}
                       initial={1}
                       onAdd={onAdd}/>

        </div>
    </div>
  )
}

export default ItemDetail