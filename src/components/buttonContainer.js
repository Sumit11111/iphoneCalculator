const buttonContainer = (props) => {
  return (
    <div className="button-container">
      <button
        className="numbers light-grey-btn"
        value="AC"
        onClick={props.clear}
      >
        {props.operandOne ? "C" : "AC"}
      </button>
      <button
        className="numbers light-grey-btn"
        value="+/-"
        onClick={props.posNegHandler}
      >
        +/-
      </button>
      <button
        className="numbers light-grey-btn"
        value="%"
        onClick={props.operatorHandler}
      >
        %
      </button>
      <button
        className={
          props.id === "id1"
            ? "numbers orange-numbers orange-and-black"
            : "numbers orange-numbers"
        }
        value="/"
        onClick={props.operatorHandler}
        id="id1"
      >
        /
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="7"
        onClick={props.numberHandler}
      >
        7
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="8"
        onClick={props.numberHandler}
      >
        8
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="9"
        onClick={props.numberHandler}
      >
        9
      </button>
      <button
        className={
          props.id === "id2"
            ? "numbers orange-numbers orange-and-black"
            : "numbers orange-numbers"
        }
        value="*"
        onClick={props.operatorHandler}
        id="id2"
      >
        *
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="4"
        onClick={props.numberHandler}
      >
        4
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="5"
        onClick={props.numberHandler}
      >
        5
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="6"
        onClick={props.numberHandler}
      >
        6
      </button>
      <button
        className={
          props.id === "id3"
            ? "numbers orange-numbers orange-and-black"
            : "numbers orange-numbers"
        }
        value="-"
        onClick={props.operatorHandler}
        id="id3"
      >
        -
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="1"
        onClick={props.numberHandler}
      >
        1
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="2"
        onClick={props.numberHandler}
      >
        2
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="3"
        onClick={props.numberHandler}
      >
        3
      </button>
      <button
        className={
          props.id === "id4"
            ? "numbers orange-numbers orange-and-black"
            : "numbers orange-numbers"
        }
        value="+"
        onClick={props.operatorHandler}
        id="id4"
      >
        +
      </button>
      <button
        className="zero dark-grey-numbers"
        value="0"
        onClick={props.numberHandler}
      >
        0
      </button>
      <button
        className="numbers dark-grey-numbers"
        value="."
        onClick={props.numberHandler}
      >
        .
      </button>
      <button
        className="numbers orange-numbers"
        value="="
        onClick={props.calculation}
      >
        =
      </button>
    </div>
  );
};

export default buttonContainer;
