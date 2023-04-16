function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById("start-button");
    const startContainer = document.getElementById("start-container");
    const gameContainer = document.getElementById("game-container");
    const questionElement = document.getElementById("question");
    const answersContainer = document.getElementById("answers-container");
    const messageElement = document.getElementById("message");
    const progressBar = document.getElementById("progress-bar-inner");
    const progressText = document.getElementById("progress-text");
    const explanationElement = document.getElementById("explanation");
    const summaryContainer = document.getElementById("summary-container");
    const summaryText = document.getElementById("summary-text");
    const retryButton = document.getElementById("retry-button");
  
    const questions = [
      {
        question: "Which of the following is not a type of nonpoint source pollution?",
        answers: ["Sewage treatment plants", "Agricultural runoff"],
        correct: "Sewage treatment plants",
        explanation: "Sewage treatment plants are considered point source pollution because they discharge pollutants from a single, identifiable location."
      },
      {
        question: "What is the main purpose of a storm drain?",
        answers: ["Transport wastewater", "Prevent flooding"],
        correct: "Prevent flooding",
        explanation: "Storm drains are designed to prevent flooding by quickly transporting excess rainwater and snowmelt from roads and other surfaces to nearby water bodies."
      },
      {
        question: "Which of the following is not considered a stormwater best management practice (BMP)?",
        answers: ["Porous pavement", "Dumping oil in the storm drain"],
        correct: "Dumping oil in the storm drain",
        explanation: "Dumping oil in the storm drain is not a BMP. It contributes to stormwater pollution, whereas BMPs aim to reduce the impact of stormwater runoff on the environment."
      },
      {
        question: "What is the most common method to prevent soil erosion?",
        answers: ["Vegetative cover", "Removing vegetation"],
        correct: "Vegetative cover",
        explanation: "Establishing vegetative cover, like grass and other plants, is the most common method to prevent soil erosion as it helps hold the soil together and reduces the impact of rain."
      },
      {
        question: "What is a rain garden?",
        answers: ["A garden for growing rain", "A shallow depression designed to absorb rainwater"],
        correct: "A shallow depression designed to absorb rainwater",
        explanation: "A rain garden is a shallow depression in the landscape that collects rainwater from roofs, driveways, or other surfaces, allowing it to infiltrate into the ground and reduce stormwater runoff."
      },
      {
        question: "Which of these materials is safe to dispose of in a storm drain?",
        answers: ["Yard waste", "None of the above"],
        correct: "None of the above",
        explanation: "No materials should be disposed of in storm drains. Doing so can contribute to water pollution and harm aquatic life in nearby water bodies."
      },
      {
        question: "What type of pollution occurs when rainwater washes contaminants from roads, rooftops, and other surfaces into waterways?",
        answers: ["Point source pollution", "Nonpoint source pollution"],
        correct: "Nonpoint source pollution",
        explanation: "Nonpoint source pollution occurs when rainwater washes contaminants from various diffuse sources, like roads and rooftops, into waterways."
    },
    {
      question: "Which of the following is an example of a low-impact development (LID) practice?",
      answers: ["Green roofs", "Paved parking lots"],
      correct: "Green roofs",
      explanation: "Green roofs are an LID practice that helps reduce stormwater runoff by retaining and absorbing rainwater, reducing the volume and rate of runoff from rooftops."
    },
    {
      question: "What is the primary goal of stormwater management?",
      answers: ["Preventing flooding and protecting water quality", "Increasing water flow"],
      correct: "Preventing flooding and protecting water quality",
      explanation: "The primary goal of stormwater management is to prevent flooding and protect water quality by controlling the volume, rate, and pollutant load of stormwater runoff."
    },
    {
      question: "What term is used to describe the water that flows across land surfaces, collecting pollutants before entering waterways?",
      answers: ["Stormwater runoff", "Point source pollution"],
      correct: "Stormwater runoff",
      explanation: "Stormwater runoff is water that flows across land surfaces after rainfall or snowmelt, picking up pollutants and carrying them into nearby waterways."
    },
    {
      question: "Which of the following practices can help to reduce stormwater runoff?",
      answers: ["Increasing impervious surfaces", "Planting trees"],
      correct: "Planting trees",
      explanation: "Planting trees helps to reduce stormwater runoff by intercepting and absorbing rainwater, allowing it to infiltrate into the ground rather than running off."
    },
    {
      question: "What is the primary benefit of permeable pavement?",
      answers: ["Easier maintenance", "Allows water to infiltrate into the ground"],
      correct: "Allows water to infiltrate into the ground",
      explanation: "Permeable pavement allows water to infiltrate into the ground, reducing stormwater runoff and helping to recharge groundwater supplies."
    },
    {
      question: "Which of the following can contribute to urban heat island effects?",
      answers: ["Parks and green spaces", "Impervious surfaces like asphalt and concrete"],
      correct: "Impervious surfaces like asphalt and concrete",
      explanation: "Impervious surfaces like asphalt and concrete can contribute to urban heat island effects by absorbing and radiating heat, raising local temperatures."
    },
    {
      question: "How does stormwater runoff contribute to the erosion of stream banks?",
      answers: ["By reducing water velocity", "By increasing water velocity"],
      correct: "By increasing water velocity",
      explanation: "Stormwater runoff can contribute to the erosion of stream banks by increasing water velocity, which in turn can scour and erode the banks."
    },
    {
      question: "Which of the following is a key component of integrated stormwater management?",
      answers: ["Relying solely on gray infrastructure", "Combining gray and green infrastructure"],
      correct: "Combining gray and green infrastructure",
      explanation: "Integrated stormwater management involves combining gray infrastructure, such as pipes and drains, with green infrastructure, like rain gardens and permeable pavement, to manage stormwater more effectively."
    },
    {
      question: "What is the purpose of a stormwater detention basin?",
      answers: ["To store stormwater and release it slowly", "To treat sewage"],
      correct: "To store stormwater and release it slowly",
      explanation: "A stormwater detention basin is designed to store stormwater runoff and release it slowly over time, helping to prevent downstream flooding and reduce peak flow rates."
    },
    {
      question: "What is the main function of a constructed wetland in stormwater management?",
      answers: ["Provide habitat for wetland species", "Improve water quality by filtering pollutants"],
      correct: "Improve water quality by filtering pollutants",
      explanation: "While constructed wetlands can provide habitat for wetland species, their main function in stormwater management is to improve water quality by filtering pollutants, such as sediments, nutrients, and pathogens."
    },
    {
      question: "Vegetated swales are designed to convey stormwater runoff and promote infiltration, but they are not intended to treat sewage.",
      answers: ["Treat sewage", "Convey stormwater runoff"],
      correct: "Treat sewage",
      explanation: "Vegetated swales are designed to convey stormwater runoff and promote infiltration, but they are not intended to treat sewage."
    },
    {
      question: "What is the role of a stormwater retention pond in stormwater management?",
      answers: ["Temporarily store stormwater and promote infiltration", "Provide drinking water"],
      correct: "Temporarily store stormwater and promote infiltration",
      explanation: "A stormwater retention pond is designed to temporarily store stormwater runoff, promote infiltration into the ground, and reduce peak flows, thereby preventing downstream flooding and improving water quality."
    },
    {
      question: "Which of the following is not a benefit of green infrastructure?",
      answers: ["Increased air pollution", "Improved water quality"],
      correct: "Increased air pollution",
      explanation: "Green infrastructure provides numerous benefits, including improved water quality, reduced flooding, and enhanced biodiversity. However, it does not contribute to increased air pollution."
    },
    {
      question: "What is the main purpose of a catch basin?",
      answers: ["Collect sediment and debris", "Provide habitat for aquatic species"],
      correct: "Collect sediment and debris",
      explanation: "A catch basin is designed to collect sediment and debris from stormwater runoff, preventing them from entering storm drains and ultimately waterways."
    },
    {
      question: "Which of the following is an example of gray infrastructure?",
      answers: ["Rain garden", "Piped storm drain"],
      correct: "Piped storm drain",
      explanation: "Gray infrastructure refers to conventional, engineered stormwater management systems, such as piped storm drains, culverts, and detention basins."
    },
    {
      question: "How does a bioretention area help to manage stormwater?",
      answers: ["By increasing the rate of runoff", "By filtering and infiltrating stormwater"],
      correct: "By filtering and infiltrating stormwater",
      explanation: "A bioretention area is a landscaped depression that helps to manage stormwater by filtering pollutants and promoting infiltration into the ground, reducing runoff volume and peak flows."
    },
    {
      question: "Which of the following is a primary pollutant found in stormwater runoff?",
      answers: ["Sediment", "Clean rainwater"],
      correct: "Sediment",
      explanation: "Sediment is a primary pollutant found in stormwater runoff, which can harm aquatic habitats by reducing light penetration, lowering oxygen levels, and smothering aquatic organisms."
    },
    {
      question: "What is the purpose of a curb cut in stormwater management?",
      answers: ["Redirect stormwater runoff into a landscaped area", "Prevent pedestrians from crossing the street"],
      correct: "Redirect stormwater runoff into a landscaped area",
      explanation: "Curb cuts are openings in a street curb that allow stormwater runoff to be redirected into landscaped areas, such as rain gardens or bioretention areas, where it can be filtered and infiltrated."
    },
    {
      question: "What is an example of a source control strategy for stormwater management?",
      answers: ["Wastewater treatment plant", "Reducing impervious surfaces"],
      correct: "Reducing impervious surfaces",
      explanation: "Source control strategies aim to address stormwater pollution at its source. Reducing impervious surfaces, such as replacing asphalt with permeable pavement or planting green spaces, can help reduce the amount of stormwater runoff and associated pollutants."
    },
    {
      question: "How can green roofs help with stormwater management?",
      answers: ["By increasing the amount of runoff", "By capturing and absorbing rainfall"],
      correct: "By capturing and absorbing rainfall",
      explanation: "Green roofs are vegetated rooftops that help with stormwater management by capturing and absorbing rainfall, reducing the amount of stormwater runoff and associated pollutants that enter waterways."
    },
    {
      question: "Which of the following is a common method used to measure stormwater runoff?",
      answers: ["Gauge plate reader", "Rain gauge"],
      correct: "Rain gauge",
      explanation: "A rain gauge is a common method used to measure precipitation, which can then be used to estimate stormwater runoff volume based on land use, impervious surfaces, and other factors."
    },
    {
      question: "Which of the following is not a potential impact of stormwater pollution?",
      answers: ["Improved water quality", "Degradation of aquatic habitats"],
      correct: "Improved water quality",
      explanation: "Stormwater pollution can have numerous negative impacts, including the degradation of aquatic habitats, reduced water quality, and increased risk of flooding. However, it does not improve water quality."
    },
    {
      question: "What is the primary goal of low-impact development (LID) in stormwater management?",
      answers: ["Mimic pre-development hydrology", "Increase property values"],
      correct: "Mimic pre-development hydrology",
      explanation: "The primary goal of low-impact development (LID) in stormwater management is to mimic pre-development hydrology by using green infrastructure and other strategies to reduce stormwater runoff, promote infiltration, and protect water quality."
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function startGame() {
    shuffle(questions);
    startContainer.style.display = "none";
    gameContainer.style.display = "block";
    showQuestion();
  }

  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";
    for (const answer of currentQuestion.answers) {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => checkAnswer(button);
      answersContainer.appendChild(button);
    }
    messageElement.textContent = "";
  }

  function checkAnswer(button) {
    const answer = button.textContent;
    const correctAnswer = questions[currentQuestionIndex].correct;
    let message = "";

    disableAnswerButtons(true);

    if (answer === correctAnswer) {
        button.style.backgroundColor = "green";
        score += 10;
        message = "Correct!";
        messageElement.style.color = "green";
        floatingScoreAnimation(button);
    } else {
        button.style.backgroundColor = "red";
        message = "Better luck on the next question!";
        messageElement.style.color = "red";
    }

    messageElement.textContent = message;
    showExplanation();
    button.disabled = true;

    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            hideExplanation();
            showNextQuestion();
            disableAnswerButtons(false);
        }, 3000);
    } else {
        setTimeout(() => {
            showSummary();
        }, 7000);
    }
}
  
function showExplanation() {
  explanationElement.textContent = questions[currentQuestionIndex].explanation;
  explanationElement.classList.add("explanation");
  explanationElement.style.display = "block";
  scoreProgressBar.style.display = "block"; // Add this line
}
  
  function hideExplanation() {
    explanationElement.style.display = "none";
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      showSummary();
    } else {
      showQuestion();
    }
    updateProgressBar();
  }
  


function hideExplanation() {
    explanationElement.style.display = "none";
}

answersContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.style.backgroundColor === "green") {
        const buttons = answersContainer.querySelectorAll("button");
        buttons.forEach((button) => {
            button.style.backgroundColor = "white";
            button.disabled = false;
        });
        showNextQuestion();
        hideExplanation();
    }
});

function showSummary() {
  gameContainer.style.display = "none";
  summaryContainer.style.display = "flex";
  summaryText.textContent = `You've completed the trivia! Your score: ${score}`;
  currentQuestionIndex = 0;
  score = 0;
  updateProgressBar();
}

retryButton.addEventListener('click', () => {
  summaryContainer.style.display = "none";
  startGame();
});


  function floatingScoreAnimation(button) {
    const floatingScore = document.createElement("span");
    floatingScore.textContent = "+10";
    floatingScore.style.position = "absolute";
    floatingScore.style.left = button.offsetLeft + "px";
    floatingScore.style.top = button.offsetTop + "px";
    floatingScore.style.fontSize = "24px";
    floatingScore.style.color = "green";
    floatingScore.style.opacity = 1;
    floatingScore.style.transition = "all 1s ease-out";
    gameContainer.appendChild(floatingScore);

    setTimeout(() => {
      floatingScore.style.opacity = 0;
      floatingScore.style.transform = "translateY(-20px)";
    }, 50);

    setTimeout(() => {
      gameContainer.removeChild(floatingScore);
    }, 1000);

    updateProgressBar();
  }

  function updateProgressBar() {
    const progressPercentage = (score / (questions.length * 10)) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Your Score: ${score}`;
    const pointCounter = document.getElementById("point-counter-inner");
    const pointCounterPercentage = (score / (questions.length * 10)) * 100;
    pointCounter.style.width = `${pointCounterPercentage}%`;
  }  
  
  function disableAnswerButtons(disable) {
    const buttons = answersContainer.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = disable;
    });
  }
  answersContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.style.backgroundColor === "green") {
      const buttons = answersContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "white";
        button.disabled = false;
      });
      showNextQuestion();
    }
  });

  startButton.addEventListener('click', () => startGame());})