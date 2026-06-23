const builder = document.getElementById("questionBuilder");
const addBtn = document.getElementById("addQuestion");
const typeSelect = document.getElementById("questionType");

let questionCount = 1;

addBtn.addEventListener("click", () => {

    const type = typeSelect.value;

    const card = document.createElement("div");
    card.className = "card question-card";

    // Multiple Choice

    if (type === "Multiple Choice") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <input
        class="questionText"
        placeholder="Question">

        <br><br>

        <input
        class="optionA"
        placeholder="Option A">

        <br><br>

        <input
        class="optionB"
        placeholder="Option B">

        <br><br>

        <input
        class="optionC"
        placeholder="Option C">

        <br><br>

        <input
        class="optionD"
        placeholder="Option D">

        <br><br>

        <input
        class="correctAnswer"
        placeholder="Correct Answer (A/B/C/D)">

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // Multiple Answers

    else if (type === "Multiple Answers") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <input
        class="questionText"
        placeholder="Choose TWO answers">

        <br><br>

        <input class="optionA" placeholder="Option A">
        <br><br>

        <input class="optionB" placeholder="Option B">
        <br><br>

        <input class="optionC" placeholder="Option C">
        <br><br>

        <input class="optionD" placeholder="Option D">

        <br><br>

        <input
        class="correctAnswer"
        placeholder="Example: A,C">

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // TFNG

    else if (type === "True False Not Given") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <input
        class="questionText"
        placeholder="Statement">

        <br><br>

        <select class="correctAnswer">

            <option>True</option>

            <option>False</option>

            <option>Not Given</option>

        </select>

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // YNNG

    else if (type === "Yes No Not Given") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <input
        class="questionText"
        placeholder="Statement">

        <br><br>

        <select class="correctAnswer">

            <option>Yes</option>

            <option>No</option>

            <option>Not Given</option>

        </select>

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // Sentence Completion

    else if (type === "Sentence Completion") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <textarea
        class="questionText"
        placeholder="Use [blank] where answer box should appear">

        </textarea>

        <br><br>

        <input
        class="correctAnswer"
        placeholder="Correct answer">

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // Summary Completion

    else if (type === "Summary Completion") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <textarea
        class="questionText"
        placeholder="Summary with [blank]">

        </textarea>

        <br><br>

        <input
        class="correctAnswer"
        placeholder="Answer">

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    // Short Answer

    else if (type === "Short Answer Questions") {

        card.innerHTML = `

        <h2>Question ${questionCount}</h2>

        <input
        class="questionText"
        placeholder="Question">

        <br><br>

        <input
        class="correctAnswer"
        placeholder="Answer">

        <button class="delete-btn">

        Delete

        </button>

        `;

    }

    builder.appendChild(card);

    questionCount++;

    card
    .querySelector(".delete-btn")
    .addEventListener("click", () => {

        card.remove();

    });

});


// Generate Link

document
.getElementById("generateLink")
.addEventListener("click", () => {

    const exam = {

        title:
        document
        .getElementById("passageTitle")
        .value,

        passage:
        document
        .getElementById("passageContent")
        .value,

        questions: []

    };



    document
    .querySelectorAll(".question-card")
    .forEach(card => {

        const qText =
        card.querySelector(".questionText")?.value;

        const answer =
        card.querySelector(".correctAnswer")?.value;


        let q = {

            question: qText,

            answer: answer,

            type:
            typeSelect.value

        };


        if (

            typeSelect.value === "Multiple Choice"

            ||

            typeSelect.value === "Multiple Answers"

        ) {

            q.options = [

                card.querySelector(".optionA")?.value,

                card.querySelector(".optionB")?.value,

                card.querySelector(".optionC")?.value,

                card.querySelector(".optionD")?.value

            ];

        }


        exam.questions.push(q);

    });



    try {

        const payload =
        btoa(
            JSON.stringify(exam)
        );

        const link =
        `${location.origin}/index.html?payload=${payload}`;


        document
        .getElementById("generatedLink")
        .value = link;

    }

    catch {

        alert(
            "Failed to generate exam."
        );

    }

});
