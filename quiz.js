document.addEventListener("DOMContentLoaded", function() {
    const treeData = {
        position: {
            question: "What position do you play?",
            options: {
                attack: {
                    question: "As an Attack, do you prefer dodging or shooting?",
                    options: {
                        dodging: {
                            result: "You are an aggressive attacker who loves dodging!",
                        },
                        shooting: {
                            result: "You are a sharpshooter when it comes to scoring!",
                        },
                    },
                },
                middie: {
                    question: "As a Middie, do you like playing offense or defense?",
                    options: {
                        offense: {
                            result: "You are an offensive-minded midfielder!",
                        },
                        defense: {
                            result: "You play a crucial role in midfield defense!",
                        },
                    },
                },
                defense: {
                    question: "As a Defense, are you more focused on 1-on-1 or team defense?",
                    options: {
                        oneOnOne: {
                            result: "You excel in 1-on-1 defensive situations!",
                        },
                        team: {
                            result: "You are a strong team defender!",
                        },
                    },
                },
                goalie: {
                    result: "You are the last line of defense as a goalie!",
                },
            },
        },
    };

    let currentStep = treeData.position;
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
