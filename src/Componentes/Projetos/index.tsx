import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../Styles/Breakpoint/breakpoint';

import TesteBugBankImg from '../Projetos/Imagens/relatorio.png'; // Substitua pelas imagens apropriadas
import TesteViaCepImg from '../Projetos/Imagens/Allure_Report.png';
import TestRestAssuredImg from '../Projetos/Imagens/relatorioTestRestAssured.png';
import VotacaoReactJavaImg from '../Projetos/Imagens/votacao.png';
import TesteE2EImg from '../Projetos/Imagens/ReportAllure.png';
import CypressImg from '../Projetos/Imagens/image.png';
import CrudAlunoImg from '../Projetos/Imagens/imagemCrud.png';

const ProjetosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;

  @media ${breakpoints.bg} {
    margin-left: 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 306px;
  flex: 0 1 calc(33.33% - 20px);
  max-width: 306px;
  background-color: #f5f5f5ff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.bg} {
    flex: 0 1 100%;
    min-width: 280px;
  }
`;

const CardImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 183px;
  background-color: #d9d9d9ff;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 32px;
  color: #292929ff;
  margin: 10px 0;
`;

const CardSubtitle = styled.p`
  font-family: 'TTSupermolot-Bold';
  font-size: 14px;
  color: #ed177dff;
  margin: 10px 0;
`;

const CardContent = styled.p`
  font-family: 'Roboto Flex';
  font-weight: 300;
  font-size: 16px;
  color: #292929ff;
  line-height: 1.5;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #201f53ff;
  color: #ffffff;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #1d1b4fff;
  }
`;

const Projetos: React.FC = () => {
  return (
    <ProjetosContainer>
      <h1>Meus Projetos</h1>
      <h2>Projetos</h2>
      <Cards>
        <Card>
          <CardImage imageUrl={TesteBugBankImg} />
          <CardTitle>Teste BugBank</CardTitle>
          <CardSubtitle>Automatização com Selenium</CardSubtitle>
          <CardContent>Testes automatizados com Selenium na API BugBank para realizar um ciclo de transferência de dinheiro entre contas.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/TesteBugBank" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={TesteViaCepImg} />
          <CardTitle>Teste ViaCEP</CardTitle>
          <CardSubtitle>Automatização com RestAssured</CardSubtitle>
          <CardContent>Testes automatizados utilizando RestAssured para validação de CEPs via o serviço ViaCEP.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/TesteViaCEP" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={TestRestAssuredImg} />
          <CardTitle>Test RestAssured</CardTitle>
          <CardSubtitle>Automatização com RestAssured</CardSubtitle>
          <CardContent>Testes automatizados utilizando RestAssured para validação da API de Votação.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/TestRestAssured" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={VotacaoReactJavaImg} />
          <CardTitle>Votação React Java</CardTitle>
          <CardSubtitle>Desafio de Votação</CardSubtitle>
          <CardContent>Desafio de votação utilizando React e Java.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/votacao-react-java" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={TesteE2EImg} />
          <CardTitle>Teste E2E</CardTitle>
          <CardSubtitle>Automatização E2E</CardSubtitle>
          <CardContent>Testes automatizados E2E da aplicação biblioteca com RestAssured.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/TesteE2E" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={CypressImg} />
          <CardTitle>Cypress</CardTitle>
          <CardSubtitle>Apresentação sobre Cypress</CardSubtitle>
          <CardContent>Projeto criado para uma apresentação sobre Cypress.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/Cypress" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImage imageUrl={CrudAlunoImg} />
          <CardTitle>Crud Aluno</CardTitle>
          <CardSubtitle>CRUD</CardSubtitle>
          <CardContent>Projeto de um CRUD para gerenciar alunos.</CardContent>
          <ButtonContainer>
            <a href="https://github.com/Lucca08/CrudAluno" target="_blank" rel="noopener noreferrer">
              <Button>Acessar</Button>
            </a>
          </ButtonContainer>
        </Card>
      </Cards>
    </ProjetosContainer>
  );
};

export default Projetos;
