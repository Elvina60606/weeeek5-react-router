import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const { VITE_API, VITE_APIPATH } = import.meta.env;

const Product =() => {
    const paramas = useParams();
    const { id } = paramas;

    const [ product, setProduct ] = useState([])

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API}v2/api/${VITE_APIPATH}/product/${id}`)
                //console.log(response.data.product)
                setProduct(response.data.product)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])


        
      //加入購物車
    const addCart = async() =>{
        let data = {
             "product_id": id,
             "qty": 1
            }

        try {
            const response = await axios.post(`${VITE_API}v2/api/${VITE_APIPATH}/cart` , {data})
            console.log(response.data.message)
        } catch (error) {
            console.log(error)
        }
  
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={product.imageUrl} 
                             alt="product-imageUrl" 
                             className="w-100" />
                    </div>
                    <div className="col-6">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}
                                    <span className="badge text-bg-warning rounded-pill ms-2">{product.category}</span>
                                </h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.content}</p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <h5 className="mb-0">
                                        <del className="me-2">NT${product.origin_price}</del>
                                        NT${product.price}
                                    </h5>
                                    <button type="button"
                                            className="btn btn-success"
                                            onClick={()=>{addCart()}}>
                                            加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;