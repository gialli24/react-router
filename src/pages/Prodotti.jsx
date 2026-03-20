import '../assets/css/Prodotti.css'
import { useEffect, useState } from 'react';

export default function Prodotti() {

    const [products, setProducts] = useState([]);

    const endpoint = "https://fakestoreapi.com/products";

    function fetchProducts(endpoint) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.log("Errore: " + error))
    }

    useEffect(() => {
        fetchProducts(endpoint);
    }, []);

    return (
        <main>
            <section id="products">
                <div className="app-container">

                    <h2 className='text-center'>Prodotti</h2>

                    <div className="app-container">

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                            {
                                products.map((product, i) => (
                                    <div className='col product-card' key={i}>
                                        <img src={product.image} alt="" />

                                        <span>{product.category}</span>

                                        <h4>{product.title}</h4>

                                        <span>$ {product.price}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}