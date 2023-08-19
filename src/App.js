import Button from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, ButtonsContent } from "./styles";
import { number_buttons, side_action_buttons, top_action_buttons } from "./all_buttons_lists";
import { useState } from "react";
import { evaluate } from 'mathjs'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  function changeInputValue(button) {
    if (button.value === "equal") {
      setCurrentNumber(prev => evaluate(prev))
    } else if (button.value === "C") {
      setCurrentNumber("0");
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${button.value}`);
    }
  }

  return (
    <Container>
      <Content>
        <Input className="input" value={currentNumber} />
        <ButtonsContent>
          <div className="top_actions">
            {
              top_action_buttons.map(b => 
                <Button className={b.className} key={b.operation} label={b.operation} onClick={() => changeInputValue(b)} />
              )
            }
          </div>

          <div className="bottom">
            <div className="numbers" >
              {
                number_buttons.map(b => 
                  <Button className={b.className} key={b.number} label={b.number} onClick={() => changeInputValue(b)} />
                )
              }
            </div>
            <div className="side_actions">
              {
                side_action_buttons.map(b => 
                  <Button className={b.className} key={b.operation} label={b.operation} onClick={() => changeInputValue(b)} />
                )
              }
            </div>
          </div>
        </ButtonsContent>
      </Content>
    </Container>
  );
};

export default App;
