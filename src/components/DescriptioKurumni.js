import Image from "./Image";
import "./description.css";
const Description = () => {
  return (
    <>
      <Image
        cName="hero"
        title="Kurumni natural cave!"
        text="DISCOVER A PLACE WITH US!!"
        heroImg="https://images.unsplash.com/photo-1521417860827-c26217c1d964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
      />
      <div className="description">
        <h1>Kurumni natural cave! </h1>
        <div className="first-des">
          <div className="des-txt">
            <h2>Yem | Tourism</h2>
            <p>
              Kurumni Natural Cave is located in Mela Kebele, 29.8 km from the
              capital of the special district, Saja, on the bank of the road to
              Salini No. 2. It is a wide cave that is 59 meters deep. Elderly
              people say that in ancient times, they used to hide their precious
              possessions, the weak and children in it for housing and during
              war.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
