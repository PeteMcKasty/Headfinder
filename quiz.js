document.addEventListener("DOMContentLoaded", function() {
    const questions = {
        position: {
            question: "What position do you play?",
            options: {
                Attack: {
                    question: "What type of attackman are you?",
                    options: {
                        Dodger: {
                            question: "Where do you position yourself on the field?",
                            options: {
                                "Behind the net at X": {
                                    question: "Where do you like to be on the fast break?",
                                    options: {
                                        Point: {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "2nd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "3rd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                    },
                                },
                                "In front of the net on the crease": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                                "On the wings": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                            },
                        },
                        Feeder: {
                            question: "Where do you position yourself on the field?",
                            options: {
                                "Behind the net at X": {
                                    question: "Where do you like to be on the fast break?",
                                    options: {
                                        Point: {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "2nd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "3rd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                    },
                                },
                                "In front of the net on the crease": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                                "On the wings": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                            },
                        },
                        Shooter: {
                            question: "Where do you position yourself on the field?",
                            options: {
                                "Behind the net at X": {
                                    question: "Where do you like to be on the fast break?",
                                    options: {
                                        Point: {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "2nd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "3rd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                    },
                                },
                                "In front of the net on the crease": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                                "On the wings": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                            },
                        },
                        "Crease Rat": {
                            question: "Where do you position yourself on the field?",
                            options: {
                                "Behind the net at X": {
                                    question: "Where do you like to be on the fast break?",
                                    options: {
                                        Point: {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "2nd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "3rd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                    },
                                },
                                "In front of the net on the crease": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                                "On the wings": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                            },
                        },
                        BalancedAttackman: {
                            question: "Where do you position yourself on the field?",
                            options: {
                                "Behind the net at X": {
                                    question: "Where do you like to be on the fast break?",
                                    options: {
                                        Point: {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "2nd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                        "3rd": {
                                            question: "Preferred shot type?",
                                            options: {
                                                "Catch and shoot": { result: "Result for Catch and shoot" },
                                                "Time and room": { result: "Result for Time and room" },
                                                "Off a dodge": { result: "Result for Off a dodge" },
                                            },
                                        },
                                    },
                                },
                                "In front of the net on the crease": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                                "On the wings": {
                                    question: "Preferred shot type?",
                                    options: {
                                        "Catch and shoot": { result: "Result for Catch and shoot" },
                                        "Time and room": { result: "Result for Time and room" },
                                        "Off a dodge": { result: "Result for Off a dodge" },
                                    },
                                },
                            },
                        },
                    },
                },
                // Continue with options and questions for other positions
                Midfield: {
                    question: "What type of midfielder are you?",
                    options: {
                        // Add options and questions for midfield
                    },
                },
                ShortStickDMiddie: {
                    question: "What type of short stick D-Middie are you?",
                    options: {
                        // Add options and questions for short stick D-Middie
                    },
                },
                FaceOffSpecialist: {
                    question: "Face-Off Specialist Questions",
                    options: {
                        // Add options and questions for face-off specialist
                    },
                },
                LongStickMiddie: {
                    question: "Long Stick Middie Questions",
                    options: {
                        // Add options and questions for long stick middie
                    },
                },
                CloseDefense: {
                    question: "Close Defense Questions",
                    options: {
                        // Add options and questions for close defense
                    },
                },
                Goalie: {
                    question: "Goalie Questions",
                    options: {
                        // Add options and questions for goalie
                    },
                },
            },
        },
    };
    

    let currentStep = questions.position;
    let result = null;

    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    function displayQuestion() {
        if (currentStep) {
            questionContainer.innerHTML = currentStep.question;
            optionsContainer.innerHTML = "";

            if (currentStep.options) {
                for (const option in currentStep.options) {
                    const optionElement = document.createElement("div");
                    optionElement.innerHTML = `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer" id="option${option}" value="${option}">
                            <label class="form-check-label" for="option${option}">
                                ${option}
                            </label>
                        </div>
                    `;
                    optionsContainer.appendChild(optionElement);
                }
            }
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.style.display = "none";
        optionsContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultText.innerHTML = result;
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (currentStep.options && currentStep.options[selectedAnswer]) {
                currentStep = currentStep.options[selectedAnswer];
                if (currentStep.result) {
                    result = currentStep.result;
                    currentStep = null;
                }
                displayQuestion();
            }
        }
    }

    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", checkAnswer);

    displayQuestion();
});
