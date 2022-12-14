import homeBannerDesktop from "../assets/images/home/homeBannerDesktop.jpg";
import homeBannerMobile from "../assets/images/home/homeBannerMobile.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom" 

function Home() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/products";
        navigate(path);
    }

    return (
        <>
            <div className="home-banner">
                <div className="container home-banner-text">
                    <div className="row">
                        <div className="col col-lg-6">
                            <span>NUOVA COLLEZIONE</span>
                            <h2>Autunno Inverno</h2>
                            <p>Prova i nostri nuovi prodotti della collezione
                                Autunno-Inverno 2022. E da oggi potrai pagare anche
                                tramite ETH!
                            </p>
                            <button type="button"
                                onClick={routeChange} className="btn btn-outline-light">DISCOVER</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ends-screen">
            </div>
        </>
    );
}

export default Home;