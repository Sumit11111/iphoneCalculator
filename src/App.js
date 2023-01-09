import { useState } from "react";
import ResultContainer from "./components/resultContainer";
import ButtonContainer from "./components/buttonContainer";

function App() {
  //all state declaration
  const [operandOne, setOperandOne] = useState("");
  const [operator, setOperator] = useState("");
  const [operandTwo, setOperandTwo] = useState("");
  const [result, setResult] = useState("0");
  const [id, setId] = useState("");

  //handle click on numbers
  const numberHandler = (e) => {
    var operator1 = operandOne + e.target.textContent;
    if (operator === "" && operandOne.length < 9) {
      setResult(operator1);
      setOperandOne(operator1);
    }

    if (operandOne !== "" && operator !== "" && operandTwo.length < 9) {
      var operator2 = operandTwo + e.target.textContent;
      setOperandTwo(operator2);
      setResult(operator2);
    }
  };

  //handle operators click
  const operatorHandler = (e) => {
    if (e.target.id) {
      setId(e.target.id);
    }
    if (operandOne !== "") {
      setOperator(e.target.textContent);
    }

    if (operandOne !== "" && e.target.value === "%") {
      var x = parseInt(operandOne);
      var res = x / 100;
      setResult(res);
      setOperandOne(res);
    }

    //console.log("operator set:", );
  };

  //handle negative button
  const posNegHandler = () => {
    if (operandOne === "") {
      return;
    }
    var x = parseInt(operandOne) * -1;
    setOperandOne(x);
    setResult(x);
  };

  //handle result calculation on equal to button click
  const calculation = () => {
    if (operandOne !== "" && operator !== "" && operandTwo !== "") {
      var index1 = operandOne.indexOf(".");
      var index2 = operandTwo.indexOf(".");
      var x, y;
      if (index1 || index2) {
        x = parseFloat(operandOne);
        y = parseFloat(operandTwo);
      } else {
        x = parseInt(operandOne);
        y = parseInt(operandTwo);
      }
      var res;
      if (operator === "+") res = y + x;
      if (operator === "-") res = x - y;
      if (operator === "*") res = y * x;
      if (operator === "/") res = x / y;
      res = res.toPrecision(4);
      setOperandOne(res);
      setOperator("");
      setOperandTwo("");
      setResult(res);
      setId("");
    }
  };

  //handle AC/C button to reset the state
  const clear = () => {
    setOperandOne("");
    setOperandTwo("");
    setOperator("");
    setResult("0");
    setId("");
  };

  return (
    <div className="App">
      {console.log("sda:", operandOne, operator, operandTwo)}
      <div className="calculator-container">
        <ResultContainer result={result} />
        <ButtonContainer
          id={id}
          operatorHandler={operatorHandler}
          numberHandler={numberHandler}
          calculation={calculation}
          clear={clear}
          posNegHandler={posNegHandler}
          operandOne={operandOne}
        />
      </div>
    </div>
  );
}

export default App;
