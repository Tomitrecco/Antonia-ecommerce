import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {getProducts} from "../../asyncMock"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/client"


export default function ItemListContainer({greeting}) {
  const [products, setProducts]=useState([])
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  
  
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemList products={products}/>



    </div>
  )
}



