import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Birbirsa waterfall!"
        text="DISCOVER A PLACE WITH US!!"
        heroImg="https://images.unsplash.com/photo-1531698451051-18c97580aeb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      />
      <div className="description">
        <h1>Birbirsa waterfall! </h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              Berbrsa Falls, located 600 meters from the main road from Addis
              Ababa to Jimma, in Saja, the capital city of the special district,
              got its name from the name of a tree at the place where a river
              called Zabe turns into a waterfall and the local residents say
              that the tree fell due to old age.
            </p>
            <p>
              Barbarsa waterfall is a mixture of spring water and Zabe river
              that rises from Tigr Kebele. Behind the waterfall, the rocks that
              are arranged in a certain height and thickness are carved by human
              hands and do not seem to have been designed by nature, as well as
              the rocks that accompany the waterfall.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
