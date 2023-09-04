import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Here’s the places you must visit!"
        text="Tour givs you the opportunity to discover about the place!!"
        heroImg="https://images.unsplash.com/photo-1693287528551-b3c3a6b28843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="description">
        <h1>Every Nation's New Year Festival /Hebo/ </h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              YEM Zone is one of the districts in the Southern Nations and
              Peoples region. It is named after people who live in this
              particular district of their homeland. It is bordered by the
              Oromia region in the west and north, separated from Gurage in the
              northeast and Hadia in the east by the Omo River, High points in
              Bayem include Mount Bor Ama, Mount Azulu and Mount Toba. Its
              administrative center is Saja. The type of agriculture practiced
              in this district is based on pulses and grains. Important cash
              crops include teff, wheat, barley and pulses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
