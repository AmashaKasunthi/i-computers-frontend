import { Link, Route, Routes } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4  flex bg-accent">
            <div className="w-75 h-full flex flex-col bg-accent">
                
                <Link to="/admin/"> <FaRegListAlt /> Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>         
                <Link to="/admin/reviews"> <FaCommentAlt />Reviews</Link>       
            </div>
            <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-primary">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>}/>
                    <Route path="/products" element={<h1>Products Page</h1>}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>                
            </div>
        </div>
    )
}
//instead of w-[calc(100%-300px)] you can use flex-1