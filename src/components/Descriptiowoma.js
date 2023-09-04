import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Woma hot spring!"
        text="DISCOVER A PLACE WITH US!!"
        heroImg="https://plus.unsplash.com/premium_photo-1661963749842-8c69a3f99987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="description">
        <h1>Woma hot spring! </h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              Woma Hot Spring is located 75 kilometers from the district
              capital, Saja, in the southern part of the district at the tip of
              the Sorunagon keel and close to the Gibe River. As it is believed
              by the community that the healing power of the hot water
              increases, the trip to this hot water is usually done in the
              months of Pagome.
            </p>
            <p>
              When people go to the hot water, they take the food they need for
              their journey and stay, they bathe in the water, they drink, they
              study.
            </p>
            <p>
              Because it has the power to cure various diseases, thousands of
              people from different districts, different zones and neighboring
              districts come to the hot water every year in the month of Pagume.
              Another advantage of Woma Hot Springs is the natural beauty of the
              area and the herds of hippos in the flowing Gebe River, which
              makes it even more desirable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
