import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Fofa Debre medhanialem Church!"
        text="DISCOVER A PLACE WITH US!!"
        heroImg="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
      />
      <div className="description">
        <h1>Fofa Debre medhanialem Church</h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              The Fofa Debre Madiyyah Church, which is surrounded by ancient
              indigenous and overseas trees, is located in Fofa town, 26
              kilometers away from the capital of the special district, Saja.
              The church was built in 1888. Information indicates that the third
              dynasty of the Bem ethnic group was established during the reign
              of King Sonutgerano (Fataurari G/Medhn). In the church, there are
              various parchment scriptures made from squirrel and goat skin,
              painted by local artists, ancient vestments and crosses made of
              wood, ice and bronze.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
