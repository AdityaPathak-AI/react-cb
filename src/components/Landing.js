import React from "react";
import image from "./assets/nfpgta36lve81.jpg";
const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card" style={{ width: "18rem;" }}>
            {<img src={image} className="card-img-top" alt="i" />}
            <div className="card-body">
              <h1 className="card-title font-extrabold">
                Hi , I'm Aditya Pathak 👋
              </h1>
              <hr/>
              <p className="card-text font-sans text-base mt-3">
                As an impassioned software developer, I harbor an insatiable
                thirst for acquiring new skills and mastering cutting-edge
                technologies.  My insatiable appetite for knowledge fuels my pursuit
                of complex and challenging projects, as I relish the opportunity
                to expand my expertise and surpass expectations.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
