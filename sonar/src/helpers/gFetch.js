let productos =[
    {id: '1', name: 'Cabezal Movil de Descarga', categoria: 'iluminacion',stock: '4',price: '$8000',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '2', name: 'Cabezal Movil de Led', categoria: 'iluminacion',stock: '8',price: '$4500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '3', name: 'Quad Beam Led', categoria: 'iluminacion',stock: '2',price: '$5000',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '4', name: 'Caja Doble Das', categoria: 'sonido', stock: '4',price: '$6000',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'},
    {id: '5', name: 'Caja Activa AudioLab', categoria: 'sonido', stock: '4',price: '$5000',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'}

]

    const gFetch =(id) =>{
        return new Promise((aceptado)=>{
            setTimeout(()=>{
                aceptado(id ? productos.find(prod=>prod.id === id) : productos)
            }, 1000 )
           
        })
    }



export default gFetch