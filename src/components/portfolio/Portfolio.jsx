import React, { useState } from "react";
import Slider from "./slider";
import ModalMain from "./modal/ModalMain";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main m-auto" style={{width: "60%"}}>
        <Slider/>
      </div>
    </>
  );
};

export default Portfolio;
