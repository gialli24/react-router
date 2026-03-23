import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams();

    const [productData, setProductData] = useState([]);

    const productEndpoint = `https://fakestoreapi.com/products/${id}`;

    function fetchProduct(endpoint) {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setProductData(data))
    }


    useEffect(() => {
        fetchProduct(productEndpoint);
    }, []);


    console.log(productData)

    return (
        <main>
            <div className="app-container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col d-flex justify-content-center">
                        <img src={productData.image} alt="" />
                    </div>
                    <div className="col">
                        <span>{productData.category}</span>

                        <h2>{productData.title}</h2>

                        <p>{productData.description}</p>

                        <span>{productData.price}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}