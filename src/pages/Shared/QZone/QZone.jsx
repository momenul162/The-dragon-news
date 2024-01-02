import React from "react";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary p-4 mb-4">
      <h3 className="mb-4">Q-Zone</h3>
      <img src={Qzone1} alt="" />
      <img src={Qzone2} alt="" />
      <img src={Qzone3} alt="" />
    </div>
  );
};

export default QZone;
