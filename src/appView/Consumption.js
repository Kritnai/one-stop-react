import React from "react";
import consumptions from "../data/consumptionDB";
import "./Consumption.css"
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
function Consumption() {
    const consumptionElement = consumptions.map((item, index) => {
        return (
                <div className='card p-3'>
                    <img className='responsive-img scale-img' src={item.image} />
                    <p>{item.title}</p>
                    <iframe className="canteen-map" src={item.map}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        )
    })
    return (
        <>
            <AppHerderMember />
            <section>
                <div className="container">
                    <h2>ศูนย์อาหารของมหาวิทยาลัย</h2>
                    <div className="canteen">
                        {consumptionElement}

                    </div>

                </div>
            </section>
            <AppFooter />
        </>
    );
}

export default Consumption;