import Carsol from "./Carsol";
import "./description.css";
const Description = () => {
  return (
    <>
      <Carsol />
      <div className="description">
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
            <ol>
              <h3> yem zone has many attraction areas</h3>
              <li>Natural attraction</li>
              <ul>
                <li>Melissa plant stone </li>
                <li>Birbirsa waterfall </li>
                <li>Kurumni natural cave </li>
                <li> Woma hot water </li>
              </ul>
              <li>Historical attraction</li>
              <ul>
                <li>The man-made caves of Samu Awasho </li>
                <li>Chalo traditional judging and dancing </li>
                <li>Fofa Debre Medhanalem Church </li>
                <li>Zofcar plant stone </li>
              </ul>
              <li>Cultural attraction</li>
              <ul>
                <li>Ancient palace of Angeri </li>
                <li>
                  Bor Mountain and Traditional Medicine Picking /October 17/{" "}
                </li>
                <li>Every Nation's New Year Festival /Hebo/ </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
