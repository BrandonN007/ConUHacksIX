document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const questions = document.querySelectorAll(".question");

    if (openBtn && closeBtn && modal && questions.length > 0) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
            questions[0].classList.add("active"); // Show first question
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
            questions.forEach(q => q.classList.remove("active")); // Hide all questions
        });
    } else {
        console.error("Modal or questions not found in the DOM");
    }

    // Function to navigate to the next question with validation
    window.nextQuestion = function (current) {
        let currentQuestion = document.getElementById(`q${current}`);
        let nextQuestion = document.getElementById(`q${current + 1}`);

        if (!validateInput(currentQuestion)) {
            alert("Please complete the question correctly before proceeding.");
            return;
        }

        if (currentQuestion && nextQuestion) {
            currentQuestion.classList.remove("active");
            nextQuestion.classList.add("active");

            // Show previous button for the next question
            let prevButton = nextQuestion.querySelector(".prev-btn");
            if (prevButton) prevButton.style.display = "inline-block";
        }
    };

    // Function to navigate to the previous question
    window.prevQuestion = function (current) {
        let currentQuestion = document.getElementById(`q${current}`);
        let prevQuestion = document.getElementById(`q${current - 1}`);

        if (currentQuestion && prevQuestion) {
            currentQuestion.classList.remove("active");
            prevQuestion.classList.add("active");
        }
    };

    // Function to validate input before allowing to proceed
    function validateInput(questionDiv) {
        let inputs = questionDiv.querySelectorAll("input, select");
        let isValid = false;

        inputs.forEach(input => {
            // Validate radio and checkbox selections
            if ((input.type === "radio" || input.type === "checkbox") && input.checked) {
                isValid = true;
            } 
            // Validate text input and dropdown selection
            else if ((input.type === "text" || input.tagName.toLowerCase() === "select") && input.value.trim() !== "") {
                // If input is a text field requiring only numbers, validate as numeric
                if (input.type === "text" && input.hasAttribute("data-numeric")) {
                    if (!/^\d+$/.test(input.value.trim())) {
                        alert("Please enter a valid number.");
                        isValid = false;
                    } else {
                        isValid = true;
                    }
                } else {
                    isValid = true;
                }
            }
        });

        return isValid;
    }
});
