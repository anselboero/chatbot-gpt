import PRODUCTS from "../data/products";
import "./Products.css";
import React from 'react';

function Sidenav(props) {
    return (
        <div className="sidenav">
            <div className="container bg-dark">
                <div className="form-container">
                    <span>Price:</span>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" name="price" id="price01"
                            onChange={props.changeHandler}  />
                        <label className="form-check-label" htmlFor="price01">
                            Up to €20
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" name="price" id="price02"
                            onChange={props.changeHandler}  />
                        <label className="form-check-label" htmlFor="price02">
                            20-40
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" name="price" id="price03"
                            onChange={props.changeHandler}  />
                        <label className="form-check-label" htmlFor="price03">
                            40-100
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" name="price" id="price04"
                            onChange={props.changeHandler}  />
                        <label className="form-check-label" htmlFor="price04">
                            over €100
                        </label>
                    </div>
                </div>
            </div>

            <div className="container bg-dark">
                <div className="form-container">
                    <span>Gender:</span>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="checkbox" name="genders" id="man"
                            onChange={props.changeHandler} />
                        <label className="form-check-label" htmlFor="man">
                            Man
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="checkbox" name="genders" id="woman"
                            onChange={props.changeHandler} />
                        <label className="form-check-label" htmlFor="woman">
                            Woman
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="checkbox" name="genders" id="kids"
                            onChange={props.changeHandler} />
                        <label className="form-check-label" htmlFor="kids">
                            Kids
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ListOfProducts(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {props.products.map((p) => (
            <div className="col" key={p.id}>
                <div className="card">
                    <img src={require("../assets/images/products/" + 
                        p.imageUrl)} className="card-img-top" alt="..."
                        style={p.imgStyle}/>
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.price} €</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}


function Products() {
    const imgStyle= {
        maxHeight: "600px",
    }
    const [products, updateProducts] = React.useState(PRODUCTS);
    const [activeFilters, updateFilters] = React.useState({});

    function checkGender(product) {
        for (const g of activeFilters.genders) {
            if (product.genders.includes(g)) {
                return true;
            }
        }
        return false;
    };

    function changeHandler(e) {
        if (e.target.name === 'price') {
            let min = 0;
            let max = 0;
            
            switch(e.target.id) {
                case ("price01"):
                    min = 0;
                    max = 20;
                    break;
                case ("price02"):
                    min = 20;
                    max = 40;
                    break;
                case("price03"):
                    min = 40;
                    max = 100;
                    break;
                case("price04"):
                    min = 100;
                    max = Infinity;
                    break;
            }
            updateFilters({...activeFilters, price: {min: min, max: max}})
        }
        else if (e.target.name === 'genders') {
            let gendersList = []
            if ("genders" in activeFilters) {
                gendersList = activeFilters.genders;
            }
            if (gendersList.includes(e.target.id)) {
                console.log('removing');
                const index = gendersList.indexOf(e.target.id);
                gendersList.splice(index,1);
            }
            else {
                gendersList.push(e.target.id);
            }
            updateFilters({...activeFilters, genders: gendersList});
        }
    }
    
    React.useEffect(() => {
        let newList = PRODUCTS;
        if ("price" in activeFilters) {
            newList = newList.filter(p => p.price <= activeFilters.price.max && 
            p.price >=  activeFilters.price.min);
        }
        if ("genders" in activeFilters && activeFilters.genders.length >0) {
            newList = newList.filter(checkGender);
        }

        updateProducts(newList);
    }, [activeFilters])
    

    return (
        <>
            <Sidenav changeHandler={changeHandler}/>
            <div className="container">
                <ListOfProducts products={products} />           
            </div>
        </>
    );
}

export default Products;