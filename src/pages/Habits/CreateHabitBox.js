import { useState } from "react";
import styled from "styled-components";
import days from "../../configs/constants/days";
import CreateHabitBoxDay from "./CreateHabitBoxDay";

export default function CreateHabitBox({ visible }) {
  const auth = JSON.parse(localStorage.getItem("org"));
  const [name, setName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  //adc no banco

  return (
    <Wrapper visible={visible}>
      <input
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DaysContainer>
        {days.map((day, i) => (
          <CreateHabitBoxDay
            key={day + i}
            selectedDays={selectedDays}
            setDays={setSelectedDays}
            day={day}
          />
        ))}
      </DaysContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 24rem;
  height: 8rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s linear;
  display: ${(props) => (props.visible === true ? "inital" : "none")};
  > input {
    width: 20rem;
    height: 3rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
