import React from "react";
import InitiationCard from "../../components/initiationCard/InitiationCard";

import './styles.scss'

const Iniciacoes = () => {
  return (
    <>
      <div className="container">
        <div className="titulo">
          <p>Você sabe como funciona as</p>
          <h1>Iniciações? </h1>
        </div>
      </div>
      <div className="iniciacoes">
        <InitiationCard
          title="PIBIC"
          description="O PIBIC da Unicamp tem como objetivo proporcionar aos alunos de graduação a oportunidade de aprender o método científico e técnicas em sua área de atuação, através do desenvolvimento de projetos de pesquisa orientados por docentes pesquisadores, concedendo bolsas de R$ 700,00 por mês por até 12 meses. Os projetos de Iniciação Científica podem envolver pesquisa básica ou aplicada, visando a produção de conhecimento, com ou sem um objetivo prático específico."
        />
        <InitiationCard
          title="PIBIT"
          description="O PIBITI da Unicamp visa proporcionar aos alunos de graduação a oportunidade de aprender o método científico e técnicas específicas em suas áreas de atuação através do desenvolvimento de projetos de pesquisa tecnológica sob a orientação de docentes pesquisadores, oferecendo bolsas de R$ 700,00 por mês por até 12 meses. O programa tem como objetivo iniciar os alunos na área tecnológica e inovadora, permitindo a realização de projetos que envolvam desenvolvimento, aprimoramento ou viabilidade de produtos, protótipos, processos, serviços, sistemas ou modelos de negócios, entre outros."
        />
        <InitiationCard
          title="IC Voluntária"
          description="O Programa de Iniciação Científica Voluntária da UNICAMP tem como objetivo oferecer aos alunos de graduação a oportunidade de aprender o método científico e técnicas em sua área de estudo através do desenvolvimento de projetos de pesquisa sob a orientação de um docente pesquisador, seguindo o mesmo calendário e processo seletivo do Programa de Iniciação Científica tradicional"
        />
      </div>
    </>
  );
};

export default Iniciacoes;
