import React from "react";
import { useState } from "react";
import "./quiz.css"

export default function Quiz() {


    var questions = [
        {
            qst: "what is js?",
            option: ["react", "javascript", "HTML", "css"],
            answer: 2
        },
        {
            qst: " What is a Moon?",
            option: ["star", "satalite", "planet", "UFO"],
            answer: 2
        },
        {
            qst: "Sun is a ____?",
            option: ["UFO", "Stone", "star", "planet"
            ],
            answer: 3
        },
        {
            qst: "what is 1+1?",
            option: ["1", "4", "3", "2"
            ],
            answer: 4
        }


    ];
    const [currentqstn, setCurrentqstn] = useState(0)
    const [score, setScore] = useState(0)
    const [totalScore, setTotalScore] = useState(false)
    const [clickedOption, setClickedOption] = useState(0)




    const handleNext = () => {
        updateScore();
        if (currentqstn + 1 < questions.length) {
            setCurrentqstn(currentqstn + 1)
            setClickedOption(0);

        } else {
            setTotalScore(true)

        }
    }
    const handlePrev = () => {
        if (currentqstn > 0) {
            setCurrentqstn(currentqstn - 1)
        }
    }
    const updateScore = () => {
        if (clickedOption === questions[currentqstn].answer) {
            setScore(score + 1);
        }
    }



    return (
        <div className="bgimagequiz">

            <div className=" p-4 w-50 question mb-5 ">
                {totalScore ? (
                    <div className="text-center mt-3 "> <h4> Your total score is <i className="fa-solid fa-trophy"></i> : {score} / {questions.length} </h4>
                        <h4 className="mt-4"> Percentage <i className="fa-solid fa-award"></i> : {(score / questions.length) * 100}% </h4>

                        <table className="text-start table  mt-md-4" >
                            <tr >
                                <td><h5>Correct answers <i className="fa-regular fa-face-laugh"></i></h5></td>
                                <td><h5>{score}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Wrong answers <i className="fa-regular fa-face-frown"></i></h5></td>
                                <td><h5>{(questions.length) - (score)}</h5></td>
                            </tr>
                        </table>
                    </div>

                ) : (
                    <>
                        <div className="text-center text-md-start mb-3 mb-md-0">
                            <span className="badge bg-dark p-2 ">
                                {currentqstn + 1}/{questions.length}</span>
                        </div>
                        <div className="text-center mainheading">
                            <h3>{questions[currentqstn].qst}</h3>
                            <br />
                            {questions[currentqstn].option.map((val, i) => (
                                <button type="button" className={`btn btn-outline-dark m-2 ${clickedOption === i + 1 ? "checked" : null
                                    }`} key={i} onClick={() => setClickedOption(i + 1)}>{val}</button>

                            ))}
                        </div>
                        <br /> <br />
                        <div className="d-md-flex text-center  justify-content-evenly  ">
                            <button type="button" className="btn btn-dark" onClick={handlePrev} >Previous</button>
                            <button type="button" className="btn btn-dark ms-1 mt-3 mt-md-0" onClick={handleNext}  >Next</button>

                        </div>


                    </>
                )}
            </div>
        </div>
    )
}