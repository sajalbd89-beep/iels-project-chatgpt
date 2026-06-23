const builder = document.getElementById("questionBuilder");
const addBtn = document.getElementById("addQuestion");
const typeSelect = document.getElementById("questionType");

let questionCount = 1;

addBtn.addEventListener("click", () => {

    const type = typeSelect.value;

    const card = document.createElement("div");
    card.className = "card";

    // MCQ
    if (type === "Multiple Choice") {

        card.innerHTML = `
        <h3>Question ${questionCount}</h3>

        <input class="questionText"
        placeholder="Question">

        <input class="optionA"
        placeholder="Option A">

        <input class="optionB"
        placeholder="Option B">

        <input class="optionC"
        placeholder="Option C">

        <input class="optionD"
        placeholder="Option D">

        <input class="correctAnswer"
        placeholder="Correct Answer (A/B/C/D)">
        `;
    }

    // TFNG
    else if (type === "True False Not Given") {

        card.innerHTML = `
        <h3>Question ${questionCount}</h3>

        <input class="questionText"
        placeholder="Statement">

        <select class="correctAnswer">

            <option>True</option>

            <option>False</option>

            <option>Not Given</option>

        </select>
        `;
    }

    // YNNG
    else if (type === "Yes No Not Given") {

        card.innerHTML = `
        <h3>Question ${questionCount}</h3>

        <input class="questionText"
        placeholder="Statement">

        <select class="correctAnswer">

            <option>Yes</option>

            <option>No</option>

            <option>Not Given</option>

        </select>
        `;
    }

    // Sentence Completion
    else if (type === "Sentence Completion") {

        card.innerHTML = `
        <h3>Question ${questionCount}</h3>

        <textarea class="questionText"
        placeholder="Example:

The experiment lasted for [blank].">

        </textarea>

        <input class="correctAnswer"
        placeholder="Correct Answer">
        `;
    }

    builder.appendChild(card);

    questionCount++;

});
document
.getElementById("generateLink")
.addEventListener("click", () => {

    const exam = {

        title: document
        .getElementById("passageTitle")
        .value,

        passage: document
        .getElementById("passageContent")
        .value,

        questions: []

    };


    document
    .querySelectorAll("#questionBuilder .card")
    .forEach(card => {

        const qText =
        card.querySelector(".questionText")?.value;

        const answer =
        card.querySelector(".correctAnswer")?.value;

        let question = {

            type: typeSelect.value,

            question: qText,

            answer: answer

        };


        // MCQ options

        if(typeSelect.value==="Multiple Choice"){

            question.options=[

                card.querySelector(".optionA").value,

                card.querySelector(".optionB").value,

                card.querySelector(".optionC").value,

                card.querySelector(".optionD").value

            ];

        }

        exam.questions.push(question);

    });


    try{

        const payload =
        btoa(JSON.stringify(exam));

        const link =
        `${location.origin}/index.html?payload=${payload}`;

        document
        .getElementById("generatedLink")
        .value=link;

    }

    catch{

        alert("Failed to generate exam link.");

    }

});
