import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const { VITE_API, VITE_APIPATH } = import.meta.env;



const Products =() => {
    const [ products, setProducts ] = useState([]);


    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API}v2/api/${VITE_APIPATH}/products/all`)
                setProducts(response.data.products)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])

    return (
        <>
            <div className="container">
                <div className="row row-cols-3">
                    {
                        products.map((product) => {
                            return (
                                <div className="col mb-3"
                                     key={product.id}>
                                    <div className="card h-100">
                                        <img src={product.imageUrl} 
                                             className="card-img-top"
                                             style={{height:200}} 
                                             alt="product-image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center">
                                                <p className="h5 mb-0">NT$ {product.price}</p>
                                                <Link to={`/product/${product.id}`} 
                                                      className="btn btn-primary">GO~
                                                </Link>
                                            </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Products;