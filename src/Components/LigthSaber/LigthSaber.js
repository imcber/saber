import React, { useState, useEffect, useRef } from "react";
import "./LigthSaber.scss";

const LightSaber = () => {
  const [ligthOn, setLigthOn] = useState(false);
  return (
    <div className="container">
      <SaberCmp on={ligthOn} handlerClick={() => setLigthOn(!ligthOn)} />
    </div>
  );
};

const SaberCmp = ({ on, handlerClick }) => {
  return (
    <div className="saber-container" onClick={handlerClick}>
      <div className="top-tr-black"></div>
      <div className="top-tr-gray"></div>
      <div className="t-sq-b1"></div>
      <div className="t-sq-g1"></div>
      <div className="t-sq-b2"></div>
      <div className="t-sq-g2"></div>
      <div className="t-sq-b3"></div>
      <div className="t-tg-w1"></div>
      <div className="t-sq-w1"></div>
      <div className="t-sq-wg1"></div>
      <div className="m-tg-b1"></div>
      <div className="m-sq-wg1"></div>
      <div className="m-sq-w1"></div>
      <div className="m-sq-wg2"></div>
      <div className="c-sq-r1"></div>
      <div className="c-sq-r2"></div>
      <div className="m-sq-wg3"></div>
      <div className="m-sq-w2"></div>
      <div className="m-sq-wg4"></div>
      <div className="m-sq-b3"></div>
      <div className="m-sq-b1"></div>
      <div className="m-sq-g1"></div>
      <div className="m-hd-b1"></div>
      <div className="m-hd-b2"></div>
      <div className="m-hd-b3"></div>
      <div className="m-sq-b2"></div>
      <div className="m-c-b1"></div>
      <div className="b-sq-w1"></div>
      <div className="b-sq-wg1"></div>
      <div className="b-sq-g1"></div>
      <div className="b-sq-g2"></div>
      <div className="b-sq-g3"></div>
      <div className="b-sq-g4"></div>
      <div className={`ligth ${on ? "ligthOn" : "ligthOff"}`}></div>
    </div>
  );
};

export default LightSaber;
