import React, { useState } from 'react'
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import Buttona from "../components/Buttoncomp"
import {
    useHistory
} from "react-router-dom";
const QuizApp = () => {

    var quiz = [

        {


            question: "The value of(5 / 4) – (8 / 3) is:",

            A: "17 / 12",

            B: "-17 / 12",

            C: "12 / 17",

            D: "-12 / 17",

            Answer: "B",

        },


        {
            question: "The associative property is applicable to:",

            A: "Addition and subtraction",

            B: "Multiplication and division",

            C: "Addition and Multiplication",

            D: "Subtraction and Division",

            Answer: "C",

        },
        {

            question: "The value of(-10 / 3) x(-15 / 2) x(17 / 19) x 0 is:",

            A: "0",

            B: "22.66",

            C: "20",

            D: "35",

            Answer: "A",

        },

        {
            question: "The additive identity of rational numbers is:",

            A: "0",

            B: "1",

            C: "2",

            D: "-1",

            Answer: "A",
        },

        {

            question: "The multiplicative identity of rational numbers is:",

            A: "0",

            B: "1",

            C: "2",

            D: "-1",

            Answer: "B",

        },
    ];









    let history = useHistory();

    // const [state, setstate] = useState(quiz[num])
    const [num, setnum] = useState(0)
    const [state, setstate] = useState("")
    const [score, setscore] = useState(0)

    console.log(state);

    let ques = quiz[num]


    function changeQues() {
        setnum(num + 1)
        if (state == ques.Answer) {
            setscore(score + 10)
        } else {
            console.log("jahil ha bhai tu rehnay da");
        }
    }

    function seeResult() {
        history.push("/result")
        localStorage.setItem("result", score)
    }

    function getValue(e) {
        setstate(e.target.value);
    }


    return (
        <>
            <h1>WELCOME HOME</h1>
            <h3>YOUR SCORE IS {score}</h3>
            <div className="mainApp">
                <Container >
                    <h3>{ques.question}</h3>
                    <Row>
                        <InputGroup>
                            <InputGroup.Radio onChange={getValue} name="quiz" aria-label="Radio button  for following text input" value="A" />
                            <FormControl aria-label="Text input with radio button" value={`${ques.A}`} />
                        </InputGroup>
                    </Row>
                    <br />
                    <Row>
                        <InputGroup>
                            <InputGroup.Radio onChange={getValue} name="quiz" aria-label="Radio button for following text input" value="B" />
                            <FormControl aria-label="Text input with radio button" value={`${ques.B}`} />
                        </InputGroup>
                    </Row>
                    <br />

                    <Row>

                        <InputGroup>
                            <InputGroup.Radio onChange={getValue} name="quiz" aria-label="Radio button for following text input" value="C" />
                            <FormControl aria-label="Text input with radio button" value={`${ques.C}`} />
                        </InputGroup>
                    </Row>
                    <br />

                    <Row>

                        <InputGroup>
                            <InputGroup.Radio onChange={getValue} name="quiz" aria-label="Radio button for following text input" value="D" />
                            <FormControl aria-label="Text input with radio button" value={`${ques.D}`} />
                        </InputGroup>
                    </Row>
                    <br />
                    {
                        num == 4 ? <Buttona value="See Result" onClick={seeResult} /> : <Buttona value="Next Question" onClick={changeQues} />
                    }

                </Container>

            </div>
        </>
    )
}

export default QuizApp
