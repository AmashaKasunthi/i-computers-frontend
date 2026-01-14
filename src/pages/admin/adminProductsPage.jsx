import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const sampleProducts =[

];

export default function AdminProductsPage(){
    const [products,setProducts] =useState(sampleProducts);
    return(
        <div className="w-full h-full overflow-y-scroll ">
            {
                products.map(
                    (item ,index)=>{
                        return <h1 key={item.productId}>{item.name}</h1>
                    }
                )
            }
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
            <Link to="/admin/add-product" className="text-white bg-accent w-12.5 h-12.5 flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus />
            </Link>
        </div>
    )
}