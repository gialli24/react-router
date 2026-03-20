import versaceLogo from "../assets/img/versace.png"
import zaraLogo from "../assets/img/zara.png"
import calvinKleinLogo from "../assets/img/calvin-klein.png"
import gucciLogo from "../assets/img/gucci.png"
import pradaLogo from "../assets/img/prada.png"

export default function Home() {
    return (
        <main>
            <section id="hero" className="pt-4">
                <div className="app-container">
                    <div className="content">
                        <h2>Find clothes that mathches your style</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia ipsa magnam fuga ut cupiditate error dolorum totam dicta, ipsum, aliquid accusamus libero? Debitis corrupti quas alias soluta eum? Odit?</p>

                        <button className="app-btn primary mt-4">
                            Shop Now
                        </button>
                    </div>

                    <div className="scores">
                        <div className="score-card">
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className="score-card">
                            <h3>2000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="score-card">
                            <h3>30.000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="brands">
                <div className="app-container">
                    <div className="row row-cols-5">
                        <div className="col">
                            <img src={versaceLogo} alt="" />
                        </div>
                        <div className="col">
                            <img src={gucciLogo} alt="" />
                        </div>
                        <div className="col">
                            <img src={zaraLogo} alt="" />
                        </div>
                        <div className="col">
                            <img src={pradaLogo} alt="" />
                        </div>
                        <div className="col">
                            <img src={calvinKleinLogo} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}