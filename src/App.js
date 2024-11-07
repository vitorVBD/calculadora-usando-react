import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row} from './styles'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('');
    setOperation('');
  };

  const handleSumNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      handleClear();
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFirstNumber('');
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      handleClear();
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
      setFirstNumber('');
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      handleClear();
      setOperation('/');
    } else {
      const sub = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
      setFirstNumber('');
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      handleClear();
      setOperation('*');
    } else {
      const sub = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
      setFirstNumber('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMultiNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
