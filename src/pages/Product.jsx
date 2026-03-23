import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [productData, setProductData] = useState([]);

    const productEndpoint = `https://fakestoreapi.com/products/${id}`;

    function fetchProduct(endpoint) {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setProductData(data))
            .catch(err => navigate("/products"))
    }


    useEffect(() => {
        fetchProduct(productEndpoint);
    }, []);

    return (
        <main>
            <div className="app-container">
                <div className="row row-cols-1 row-cols-md-2">

                    <div className="col d-flex justify-content-center">
                        <img src={productData.image} alt="" />
                    </div>

                    <div className="col product-details">
                        <span>{productData.category}</span>

                        <h2 className="mt-4">{productData.title}</h2>

                        <p>{productData.description}</p>

                        <div>{productData.price}</div>

                        <button className="app-btn primary" >Add to Cart</button>

                    </div>
                </div>
            </div>
        </main>
    );
}