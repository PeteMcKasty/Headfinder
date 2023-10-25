document.addEventListener("DOMContentLoaded", function() {
    const questions = {
        position: {
            question: "What position do you play? (See assortment doc for heads by position)",
            options: {
                attack: {
                    question: "ATTACK QUESTIONS",
                    options: {
                        typeOfAttackman: {
                            question: "What type of attackman are you?",
                            options: {
                                dodger: {},
                                feeder: {},
                                shooter: {},
                                creaseRat: {},
                                balancedAttackman: {},
                            },
                        },
                        fieldPosition: {
                            question: "Where do you position yourself on the field?",
                            options: {
                                behindTheNetAtX: {},
                                inFrontOfTheNetOnTheCrease: {},
                                onTheWings: {},
                            },
                        },
                        fastBreakLocation: {
                            question: "Where do you like to be on the fast break?",
                            options: {
                                point: {},
                                second: {},
                                third: {},
                            },
                        },
                        preferredShotType: {
                            question: "Preferred shot type?",
                            options: {
                                catchAndShoot: {},
                                timeAndRoom: {},
                                offADodge: {},
                            },
                        },
                    },
                },
                midfield: {
                    question: "MIDFIELD QUESTIONS",
                    options: {
                        typeOfMidfielder: {
                            question: "What type of midfielder are you?",
                            options: {
                                downhillDodger: {},
                                feeder: {},
                                outsideShooter: {},
                                offBallCutter: {},
                                balancedMiddie: {},
                            },
                        },
                        preferredSpotOnClear: {
                            question: "Preferred spot on a clear?",
                            options: {
                                carryingTheBall: {},
                                breakingUpTheField: {},
                                trailingMiddie: {},
                            },
                        },
                        favoritePlaceToShootFrom: {
                            question: "Favorite place to shoot from?",
                            options: {
                                outsideWithTimeAndRoom: {},
                                inTightCatchAndShoot: {},
                                downTheAlleyOnTheRun: {},
                                acrossTheMiddleOnTheRun: {},
                            },
                        },
                    },
                },
                shortStickDmiddie: {
                    question: "SHORT STICK D-MIDDIE QUESTIONS",
                    options: {
                        typeOfShortStickDmiddie: {
                            question: "What type of short stick D-middie are you?",
                            options: {
                                groundballMachine: {},
                                transitionDefenseMiddie: {},
                                lockdownDefender: {},
                                balanced: {},
                            },
                        },
                        defensiveMentality: {
                            question: "Defensive Mentality",
                            options: {
                                patient: {},
                                takeawayCheck: {},
                                strengthAndBody: {},
                                strategicOffBall: {},
                            },
                        },
                        dodgeFrequency: {
                            question: "How often do you dodge in a game?",
                            options: {
                                never: {},
                                oneToTwoTimes: {},
                                threeOrMoreTimes: {},
                                everyChanceIGet: {},
                            },
                        },
                        preferredSpotOnClear: {
                            question: "Preferred spot on a clear?",
                            options: {
                                carryingTheBall: {},
                                breakingUpTheField: {},
                                trailingMiddie: {},
                            },
                        },
                    },
                },
                faceOffSpecialist: {
                    question: "FACE-OFF SPECIALIST QUESTIONS",
                    options: {
                        gripPreference: {
                            question: "What grip do you like to use?",
                            options: {
                                motorcycle: {},
                                traditional: {},
                            },
                        },
                        ballWinningPreference: {
                            question: "Where do you prefer to win the ball to?",
                            options: {
                                forwardToYourself: {},
                                toTheWing: {},
                                backwards: {},
                            },
                        },
                        clampMethodPreference: {
                            question: "What clamp method do you most often use?",
                            options: {
                                pinchAndPop: {},
                                sweepToTheSide: {},
                                jamOpponent: {},
                            },
                        },
                    },
                },
                longStickMiddie: {
                    question: "LONG STICK MIDDIE QUESTIONS",
                    options: {
                        typeOfLongStickMiddie: {
                            question: "What type of long stick middie are you?",
                            options: {
                                groundballMachine: {},
                                takeawayCheckSpecialist: {},
                                offensiveThreat: {},
                                balanced: {},
                            },
                        },
                        defensiveMentality: {
                            question: "Defensive mentality",
                            options: {
                                patient: {},
                                takeawayCheck: {},
                                strengthAndBody: {},
                                strategicOffBall: {},
                            },
                        },
                        offensiveTransitionFrequency: {
                            question: "How often do you push offensive transition in a game?",
                            options: {
                                never: {},
                                oneToTwoTimes: {},
                                threeOrMoreTimes: {},
                                everyChanceIGet: {},
                            },
                        },
                        ballPossessionPreference: {
                            question: "What is your likely choice with the ball in your stick?",
                            options: {
                                passToAnyoneOpen: {},
                                findAnOpenShortStick: {},
                                dodgeToOpenSpace: {},
                                shoot: {},
                            },
                        },
                    },
                },
                closeDefense: {
                    question: "CLOSE DEFENSE QUESTIONS",
                    options: {
                        typeOfDefender: {
                            question: "What type of defender are you?",
                            options: {
                                groundballMachine: {},
                                takeawayCheckSpecialist: {},
                                twoWayDefender: {},
                                balanced: {},
                            },
                        },
                        defensiveMentality: {
                            question: "Defensive mentality",
                            options: {
                                patient: {},
                                takeawayCheck: {},
                                strengthAndBody: {},
                                strategicOffBall: {},
                            },
                        },
                        preferredClearingMethod: {
                            question: "Preferred clearing method?",
                            options: {
                                notTouchingTheBall: {},
                                multipleShortPasses: {},
                                longPassUpTheField: {},
                                carryingOverTheMidlineYourself: {},
                            },
                        },
                        carryFrequency: {
                            question: "How often do you carry the ball over the midline?",
                            options: {
                                never: {},
                                oneToTwoTimesPerGame: {},
                                threeOrMoreTimesPerGame: {},
                                everyChanceIGet: {},
                            },
                        },
                    },
                },
                goalie: {
                    question: "GOALIE QUESTIONS",
                    options: {
                        yearsOfExperience: {
                            question: "How long have you been playing?",
                            options: {
                                lessThanOneYear: {},
                                oneToThreeYears: {},
                                fourToSixYears: {},
                                sevenPlusYears: {},
                            },
                        },
                        clearingPreference: {
                            question: "Most common clear",
                            options: {
                                carryTheBallYourself: {},
                                slowOutletToADefender: {},
                                quickOutletToAMiddie: {},
                            },
                        },
                        ageLevel: {
                            question: "What age level are you playing at?",
                            options: {
                                youth: {},
                                middleSchool: {},
                                highSchool: {},
                                collegiate: {},
                            },
                        },
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
                Object.keys(currentStep.options).forEach((option) => {
                    const optionElement = document.createElement("div");
                    optionElement.innerHTML = `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer" id="option${option}" value="${option}">
                            <label class="form-check-label" for="option${option}">
                                ${option[0].toUpperCase() + option.slice(1)} <!-- Capitalize first letter -->
                            </label>
                        </div>
                    `;
                    optionsContainer.appendChild(optionElement);
                });
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
                if (!currentStep.options) {
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
