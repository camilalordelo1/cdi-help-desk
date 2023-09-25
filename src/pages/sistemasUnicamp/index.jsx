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
        <SystemCard title="SIGA" description="O SIGA (Sistema Integrado de Gestão Acadêmica) é a principal ferramenta de gestão acadêmica da universidade, permitindo o acesso a informações sobre matrículas, horários de matrículas" link="link.com" />
        <SystemCard title="E-DAC" description="O sistema E-DAC da UNICAMP é uma plataforma acadêmica central que permite aos estudantes acessar informações sobre cursos, matrículas, históricos acadêmicos e outros serviços relacionados à vida universitária." link="https://sistemas.dac.unicamp.br/siga/mobile/signin" />
        <SystemCard title="SAE" description="O SAE (Sistema de Apoio ao Estudante) é uma ferramenta essencial que oferece suporte aos alunos da UNICAMP, fornece informações sobre bolsas, assistência estudantil, orientação acadêmica e recursos para promover o bem-estar estudantil." link="https://www.sae.unicamp.br/portal/pt/" />
        <SystemCard title="GDE" description="O GDE é uma iniciativa não oficial, mas altamente útil, que auxilia os alunos na organização na matrícula de disciplinas, além de conseguirem visualizar o planejamento e o cumprimento de sua vida acadêmica" link="https://grade.daconline.unicamp.br/arvore/" />
      </div>
    </>
  );
};

export default SistemasUnicamp;
