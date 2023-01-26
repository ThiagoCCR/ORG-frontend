import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import CalendarIcon from "../../components/Icons/CalendarIcon.js";
import Carousel from "./Carousel.js";
import SelectionBox from "./SelectionBox.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      <CarouselContainer>
        <CalendarButton onClick={() => navigate("/calendar")}>
          <CalendarIcon
            iconProps={{
              color: "#040404",
              className: "global-class-name",
              size: "35px",
            }}
          />
        </CalendarButton>
        <Carousel />
      </CarouselContainer>
      <h2>QUARTA, 25 DE JANEIRO</h2>
      <SelectionBox/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  position: relative;
  padding: 8rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  > h2 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0 1rem 1rem 0;
  width: 100%;
`;
