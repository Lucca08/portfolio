import styled from 'styled-components';
import breakpoints from "../../Styles/Breakpoint/breakpoint.jsx";

interface CircleProps {
  filled: boolean; 
}

const Container = styled.div`
  padding: 0 100px;
  width: 300px;
  margin-top: 45px;
  margin-right: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.bg} {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #292929;
  margin-top: 16px;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: circle;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  @media ${breakpoints.bg} {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const SkillName = styled.span`
  width: 100px;
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;

  @media ${breakpoints.bg} {
    text-align: center;
  }
`;

const CirclesContainer = styled.div`
  display: flex;

  @media ${breakpoints.bg} {
    justify-content: center;
    margin-bottom: 23px;
  }
`;

const Circle = styled.div<CircleProps>`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background: ${({ filled }) => (filled ? '#EAB53D' : 'transparent')};
  border: 2px solid #EAB53D;

  @media ${breakpoints.bg} {
    margin-left: 2px;
  }
`;

const skills = [
  { name: 'JUnit', level: 5 },
  { name: 'Mockito', level: 5 },
  { name: 'Mockmvc', level: 5 },
  { name: 'RestAssured', level: 5 },
  { name: 'Selenium', level: 5 },
  { name: 'Cypress', level: 5 },
  { name: 'Java', level: 5 },
  { name: 'Spring Boot', level: 4 },
  { name: 'Spring Web', level: 4 },
  { name: 'Spring Security', level: 3 },
  { name: 'Spring Data JPA', level: 4 },
  { name: 'Flyway', level: 3 },
  { name: 'Swagger', level: 2 },
  { name: 'TypeScript', level: 4 },
  { name: 'React', level: 4 },
  { name: 'HTML', level: 4 },
  { name: 'CSS', level: 4 },
  { name: 'SQL', level: 5 },
];

const ListSkills = () => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <CirclesContainer>
              {[...Array(5)].map((_, i) => (
                <Circle key={i} filled={i < skill.level} />
              ))}
            </CirclesContainer>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};

export default ListSkills;
