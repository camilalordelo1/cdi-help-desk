import React from "react";
import "./styles.scss";
import SystemCard from "../../components/systemCard/SystemCard";

const SistemasUnicamp = () => {
  return (
    <>
      <div className="container">
        <div className="titulo">
          <h1>Sistemas Unicamp</h1>
        </div>
      </div>
      <div className="conteudo">
        <SystemCard title="SIGA" description="Descrição" link="link.com" />
        <SystemCard title="E-DAC" description="Descrição" link="https://sistemas.dac.unicamp.br/siga/mobile/signin" />
        <SystemCard title="GDE" description="Descrição" link="https://grade.daconline.unicamp.br/arvore/" />
      </div>
    </>
  );
};

export default SistemasUnicamp;
