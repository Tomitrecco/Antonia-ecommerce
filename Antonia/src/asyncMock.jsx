const products=[{
id:"1",
name:"Mantel",
price:10000,
img: "../src/assets/mantel-matero.jpeg",
stock:10,

},
{id:"2",
name:"Repasador",
price:1500,
img: "../src/assets/repasador.jpg",
stock:17,},

{id:"3",
name:"Guantes",
price:3500,
img: "../src/assets/Guantes.jpeg",
stock:14,},

{id:"4",
name:"Bolso Playero",
price:8000,
img: "../src/assets/bolso-playero.jpeg",
stock:2,},


]   


export const getProducts=()=> {
  return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    },[100])
  })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id === productId));
        console.log(prod);
    });
}

