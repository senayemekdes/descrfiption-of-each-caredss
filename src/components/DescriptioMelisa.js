import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Melissa plant stone"
        text="DISCOVER A PLACE WITH US!!"
        heroImg="https://images.unsplash.com/photo-1596303100092-cd7058b23b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
      />
      <div className="description">
        <h1>Melissa plant stone </h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              Melissa plant stone is located in Idia Kebele Melissa village, 25
              kilometers away from Saja, the capital of the special district.
              The plants and stones were planted on the tomb of Sheh Dnbul, who
              was the first king of the Gemelo dynasty of the Yam nation, as a
              memorial to his power and kingship. The elders of the tribe
              explain that Sheikh Danbul immigrated from Yemen and was the
              founder of the Gemelo dynasty.
            </p>
            <p>
              The founder of the Gemelu dynasty, Sheh Dnbul, has his residence
              at Kanfocha. In general, during the Gemelo dynasty, there was a
              period of high civilization, so it is said that the stones stand
              as a symbol of their civilization and bravery. The plant stones
              come in different shapes, sizes and heights. The largest plant
              stone is 2.6 meters long and there are more than 162 plant stones
              in the place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
