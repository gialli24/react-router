import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

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

                        {

                            productData.length === 0 ?

                                <div class="spinner-grow" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>

                                :
                                <>
                                    <span>{productData.category}</span>

                                    <h2 className="mt-4">{productData.title}</h2>

                                    <p>{productData.description}</p>

                                    <div>{productData.price}</div>

                                    <Button type={"primary"} >Add to Cart</Button>
                                </>
                        }


                    </div>
                </div>
            </div>
        </main>
    );
}