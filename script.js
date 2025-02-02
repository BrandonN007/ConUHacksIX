const API_KEY = "AIzaSyC_KqAccj5n3T7zTNQJTS7OqoCBt_CPEvA";

function getUserResponses() {
    return {
        financialGoal: document.getElementById("financial_goal").value,
        riskTolerance: document.querySelector('input[name="risk"]:checked')?.value || "Not Specified",
        savings: document.getElementById("emergency_fund").value || "Not Specified",
        investment: document.querySelector('input[name="invest"]:checked')?.value || "Not Specified",
        biggestSpending: document.getElementById("biggest_spend").value || "Not Specified",
        retirementAge: document.getElementById("retire_age").value || "Not Specified",
    };
}

function getFinancialSummary() {
    return `Current Balance: $${balance.toFixed(2)}, 
    Last Month Spending: $${foodExpenses[11] + transportExpenses[11] + clothesExpenses[11] + entertainmentExpenses[11]}, 
    This Month Spending: $${foodExpenses[10] + transportExpenses[10] + clothesExpenses[10] + entertainmentExpenses[10]}, 
    Fixed Expenses: Food ($${foodExpenses[11]}), Transport ($${transportExpenses[11]}), Clothes ($${clothesExpenses[11]}), Entertainment ($${entertainmentExpenses[11]})`;
}

async function getFinancialAdvice() {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "🔄 Analyzing your financial data...";

    const userResponses = getUserResponses();

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: `User Financial Data: ${getFinancialSummary()}.
                                User Financial Goal: ${userResponses.financialGoal}. 
                                Risk Tolerance: ${userResponses.riskTolerance}. 
                                Emergency Savings: ${userResponses.savings}. 
                                Investment Status: ${userResponses.investment}. 
                                Biggest Spending: ${userResponses.biggestSpending}. 
                                Retirement Age: ${userResponses.retirementAge}.

                                You are an advisor assistant made to provide advices, actionable financial advice based on these datas as well as for goal to reach the goals of the users mentioned. You will make sure you divide the answers so the readabilidy is easy`
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            responseDiv.innerHTML = `<strong>📢 AI Financial Tip:</strong> ${data.candidates[0].content.parts[0].text}`;
        } else {
            console.error("Invalid Gemini API Response:", data);
            responseDiv.innerHTML = "⚠️ Error: Unexpected API response. Please try again.";
        }

    } catch (error) {
        responseDiv.innerHTML = `⚠️ Google Gemini API Error: ${error.message}`;
        console.error("Google Gemini API Error:", error);
    }
}

function trackQuizProgress() {
    const totalQuestions = document.querySelectorAll(".question").length;
    let completedQuestions = 0;

    document.querySelectorAll(".question input, .question select").forEach(input => {
        input.addEventListener("change", () => {
            completedQuestions = Array.from(document.querySelectorAll(".question input, .question select"))
                .filter(input => (input.type === "radio" || input.type === "checkbox") ? input.checked : input.value.trim() !== "").length;

            if (completedQuestions >= totalQuestions) {
                console.log("Quiz completed! Starting AI analysis...");
                getFinancialAdvice();
            }
        });
    });
}
function finishQuiz() {
    document.getElementById("modal").style.display = "none"; // Hide modal
}

document.addEventListener("DOMContentLoaded", trackQuizProgress);
