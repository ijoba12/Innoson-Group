import React from "react";
import "../Styles/Product.css";
import ford from "../assets/ford.png";
import bike from "../assets/jincheng 1 (6).png";
import plastic from "../assets/plastic.png";
import tyre from "../assets/Tyre.jpg";
import hands from "../assets/istockphoto-537311780-612x612 1.png";
import arrow from "../assets/Arrow 1.png";
const Product = () => {
  return (
    <>
      <div className="WWD text-center container">What we do</div>
      <section className="sect container align-item-center d-flex">
        <img src={ford} alt="Ford-img" className="img" />
        <div className="Txt container text-align-center pt-3">
          <h3 className="AUT">Automobile Manufacturing</h3>
          <p>
            Innoson Vehicle Manufacturing [IVM] introduces automotive products
            from China, Japan and Germany. Our product line includes heavy duty
            vehicles, middle and high level buses, special environment friendly
            vehicles. The company carries out optimization design and assembly
            according to African road condition so as produce suitable products
            at affordable prices
          </p>
          <button className="LM mt-5">Learn More <img src={arrow} alt="" /></button>
        </div>
      </section>
      {/* section 2 */}
      <section className="sect container d-flex pt-3">
        <div className="Txt container pt-5">
          <h3>Plastic Manufacturing</h3>
          <p>
            Innoson Technical & Industrial Co. Ltd manufactures high quality
            household and industrial plastics, health & safety accessories,
            storage containers, fixtures & fittings, electrical components &
            accessories. Plastic products manufactured include; plastic chairs,
            tables, trays, plates, spoons, cups, jerry cans of different sizes
            and many other allied products.
          </p>
          <button className="LM mt-4">Learn More <img src={arrow} alt="" /></button>
        </div>
        <img src={plastic} alt="plastic-img " className="img" />
      </section>
      {/* section 3 */}
      <section className="sect container d-flex pt-3">
        <img src={bike} alt="bike-img" className="img" />
        <div className="align-item-center pt-5">
          <h3>Motorcycle Manufacturing</h3>
          <p>
            Innoson Nigeria Limited Nnewi Manufactures motorcycles, tri-cycles,
            spare parts and accessories. We pioneered the first Made-in-Nigeria
            Motorcycle brand that sold for as low as N60,000. By year 2002, we
            successfully drove out tokunbo (foreign used) motorcycles out of
            Nigeria forever
          </p>
          <button className="LM mt-4">Learn More <img src={arrow} alt="" /></button>
        </div>
      </section>
      {/* section 4 */}
      <section className="sect container d-flex pt-3">
        <div className="Txt align-item-center pt-5">
          <h3>Tires & Tube Manufacturing</h3>
          <p>
            General Tyres & Tubes Co. Ltd Enugu, manufacturers of high quality
            tyres & Tubes. The plant has a production capacity of about 8,000
            pieces of motorcycle tyres daily and 13,000 tubes daily.
          </p>
          <button className="LM mt-4">Learn More <img src={arrow} alt="" /></button>
        </div>
        <img src={tyre} alt="tyre-img" className="img" />
      </section>
      <section className="hand">
        {/* section-5 */}
        <h1 className="Hnd container text-center">Elevating Africa through Excellence in Manufacturing.</h1>
      </section>
    </>
  );
};

export default Product;
