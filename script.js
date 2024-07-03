document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit');
    const questionCountEl = document.getElementById('questionCount');
    let currentQuiz = 0; // Initialize current question counter
    let totalQuestions = quizData.length; // Assuming you have an array quizData with all questions

    // Function to update the question count display
    function updateQuestionCount() {
        questionCountEl.innerText = `Question: ${currentQuiz + 1}/${totalQuestions}`;
    }

    // Initial call to display the first question count
    updateQuestionCount();

    submitBtn.addEventListener('click', () => {
        // Logic to load the next question goes here
        // For demonstration, simply increment and update count without validation
        currentQuiz++;
        if(currentQuiz < totalQuestions) {
            updateQuestionCount();
            // Load your next question logic here
        } else {
            // End of quiz logic here
            questionCountEl.style.display = 'none'; // Hide count at the end or adjust as needed
            // Optionally display quiz completion message
        }
    });
});

const quizData = [
    {
        question: "What is the primary goal of graphic design?",
        a: "To entertain viewers",
        b: "To sell products or ideas",
        c: "To write content",
        d: "To critique art",
        correct: "b",
    },

    {
        question: "Which Gestalt principle states that elements are perceived as grouped together when they are similar to each other?",
        a: "Proximity", 
        b: "Similarity", 
        c: "Continuation", 
        d: "Closure", 
        correct: "b",
    },

    {
        question: "Visual communication in graphic design does NOT include:",
        a: "Typography",
        b: "Photography",
        c: "Choreography",
        d: "Iconography",
        correct: "c",
    },

    {
        question: "Vector graphics are based on:", 
        a: "Pixels", 
        b: "Mathematical equations", 
        c: "Bitmaps", 
        d: "Dot matrix data", 
        correct: "b"
    },

    {
        question: "Which typeface category is known for its decorative details on the ends of the strokes?", 
        a: "Sans-serif", 
        b: "Serif", 
        c: "Script", 
        d: "Monospace", 
        correct: "b"
    },

    {
        question: "Kerning adjusts the space between:", 
        a: "Lines of text", 
        b: "Paragraphs", 
        c: "Individual letters", 
        d: "Words", 
        correct: "c"
    },

    {
        question: "Using images in graphic design enhances:", 
        a: "Confusion", 
        b: "Text density", 
        c: "Visual appeal and communication", 
        d: "Production costs only", 
        correct: "c"
    },

    {
        question: "The resolution of digital images is measured in:", 
        a: "Inches", 
        b: "Pixels per inch (PPI)", 
        c: "Centimeters", 
        d: "Millimeters", 
        correct: "b"
    },

    {
        question: "Grid systems in graphic design are used to:", a: "Limit creativity", b: "Organize content", c: "Increase complexity", d: "Decrease readability", correct: "b"
    },

    {
        question: "An example of a grid system is:", a: "The Fibonacci sequence", b: "The Rule of Thirds", c: "The Golden Ratio", d: "The color wheel", correct: "b"
    },

    {
        question: "The main goal of layout and composition in graphic design is to:", a: "Confuse the viewer", b: "Balance whitespace only", c: "Ensure content hierarchy and flow", d: "Use as many fonts as possible", correct: "c"
    },

    {
        question: "Symmetrical balance in graphic design means:", a: "Elements are the same on both sides of a central line", b: "Elements are different on each side of the design", c: "Only circular elements are used", d: "Text is aligned to the right", correct: "a"
    },

    {
        question: "The RGB color model is used for:", a: "Print materials", b: "Screen displays", c: "Watercolor painting", d: "Traditional photography", correct: "b"
    },

    {
        question: "A color scheme based on adjacent colors on the color wheel is known as:", a: "Complementary", b: "Analogous", c: "Monochromatic", d: "Triadic", correct: "b"
    },

    {
        question: "White space in graphic design:", a: "Should be minimized at all costs", b: "Is also known as negative space", c: "Makes designs look unfinished", d: "Is only used in minimalist designs", correct: "b"
    },

    {
        question: "Which of the following is true about asymmetrical layouts?", a: "They are less appealing than symmetrical layouts", b: "They offer more visual interest and dynamic balance", c: "They are easier to create", d: "They use only geometric shapes", correct: "b"
    },

    {
        question: "The Gestalt principle of 'Common Fate' suggests that:", a: "Elements moving in the same direction are perceived as part of a single group", b: "Elements are more related if they are symmetrical", c: "Objects closer to each other are seen as a group", d: "The human eye prefers to see a continuous flow in lines", correct: "a"
    },

    {
        question: "'Figure-Ground' in Gestalt theory refers to:", a: "The tendency to ignore backgrounds in favor of figures", b: "The relationship between an object and its surrounding area", c: "The preference for ground over figure in visual perception", d: "The use of background to convey messages", correct: "b"
    },

    {
        question: "For which application are raster graphics preferred over vector graphics?", a: "Detailed photo editing", b: "Scalable logo design", c: "Typographic designs", d: "Line art illustrations", correct: "a"
    },

    {
        question: "What is a significant advantage of vector graphics for logo design?", a: "They maintain quality at any size", b: "They offer more realistic textures", c: "They are easier to compress without losing detail", d: "They are supported by all web browsers without the need for plugins", correct: "a"
    },

    {
        question: "The term 'legibility' in typography refers to:", a: "The spacing between lines of text", b: "How easily individual characters can be distinguished", c: "The overall aesthetic appeal of the text", d: "The size of the text", correct: "b"
    },

    {
        question: "What is the main purpose of using different typefaces in a single design?", a: "To make the design as colorful as possible", b: "To confuse the reader", c: "To create a visual hierarchy and guide the reader's attention", d: "To use as many fonts as the design software allows", correct: "c"
    },

    {
        question: "The term 'iconography' in graphic design refers to:", a: "The study of historical paintings", b: "The use of symbols and images to communicate ideas", c: "The creation of icons for desktop interfaces only", d: "The graphic depiction of data in statistics", correct: "b"
    },

    {
        question: "How can texture be used effectively in graphic design?", a: "By making every element in the design have a heavy texture", b: "To add depth and dimension to a flat design", c: "To distract the viewer from the main message", d: "To reduce the overall visual appeal", correct: "b"
    },

    {
        question: "Which statement best describes the function of a column grid in magazine layout design?", a: "To restrict the use of images and graphics", b: "To provide a flexible structure for organizing content", c: "To eliminate white space", d: "To complicate the layout process", correct: "b"
    },

    {
        question: "How do grids contribute to the design process?", a: "By limiting creative options", b: "By adding unnecessary complexity", c: "By providing a guideline for aligning and organizing elements", d: "By determining the color scheme", correct: "c"
    },

    {
        question: "What role does the 'Rule of Thirds' play in composition?", a: "It ensures that all elements are centered", b: "It divides the layout into nine equal parts for dynamic balance", c: "It is used to create a monochromatic color scheme", d: "It dictates that only three colors can be used", correct: "b"
    },

    {
        question: "How can contrast be effectively used in graphic design?", a: "By making everything the same color", b: "To draw attention to key elements", c: "To make texts unreadable", d: "By using only light colors", correct: "b"
    },

    {
        question: "What is the significance of the color wheel in design?", a: "It shows the relationship between colors", b: "It is only used for painting", c: "It determines the typography style", d: "It is a tool for web coding only", correct: "a"
    },

    {
        question: "How does color psychology influence design decisions?", a: "Colors have no impact on the viewer's emotions or perceptions", b: "Colors can evoke certain emotions and influence how a design is perceived", c: "Colors are used solely to match the designer's preferences", d: "Colors are chosen based on the latest fashion trends only", correct: "b"
    },

    {
        question: "Which Gestalt principle explains why we perceive lines as continuous, even when interrupted?", a: "Closure", b: "Continuity", c: "Proximity", d: "Similarity", correct: "b"
    },

    {
        question: "A major advantage of raster graphics is:", a: "Scalability without loss of quality", b: "Smaller file sizes compared to vector graphics", c: "Better for complex illustrations", d: "Easy to edit individual elements", correct: "c"
    },

    {
        question: "Which of the following fonts is considered a 'Sans-serif' font?", a: "Times New Roman", b: "Arial", c: "Courier", d: "Georgia", correct: "b"
    },

    {
        question: "When selecting images for a design project, it's important to consider:", a: "Only the color of the images", b: "The cultural significance and symbolism", c: "Using as many different styles as possible", d: "The personal preference of the designer only", correct: "b"
    },

    {
        question: "The purpose of using a modular grid in design is to:", a: "Create a complex structure that is visually appealing but not functional", b: "Provide a flexible framework that can organize content into columns and rows", c: "Limit the creative options available to a designer", d: "Focus solely on text-based content without images", correct: "b"
    },

    {
        question: "Baseline grids are especially useful for:", a: "Aligning elements that are not text-based", b: "Ensuring the consistency of horizontal spaces across a layout", c: "Setting the tone of a design through color choices", d: "Aligning the bottom edges of text across multiple columns", correct: "d"
    },

    {
        question: "Z-pattern layout is particularly effective for:", a: "Text-heavy documents like books", b: "Designs where text is less important than images", c: "Websites and interfaces where users scan horizontally first", d: "Posters that rely on a single visual impact", correct: "c"
    },

    {
        question: "The principle of alignment in design composition:", a: "Is only relevant for text", b: "Helps create a unified and aesthetically pleasing look", c: "Should be avoided to make designs more dynamic", d: "Applies only to images, not text", correct: "b"
    },

    {
        question: "A 'Monochromatic' color scheme involves:", a: "Only black and white", b: "Various shades, tints, and tones of a single color", c: "Three colors that are equidistant on the color wheel", d: "Colors directly opposite each other on the color wheel", correct: "b"
    },

    {
        question: "Color harmony refers to:", a: "The use of warm colors only", b: "The balance and aesthetically pleasing integration of colors", c: "A design that uses one color in different shades", d: "The technique of using contrasting colors to attract attention", correct: "b"
    },

    {
        question: "In graphic design, the term 'Hierarchy' refers to:", a: "The arrangement of elements to signal importance", b: "The sequence of colors from light to dark", c: "The physical layout of objects in a room", d: "The chronological order of design trends", correct: "a"
    },

    {
        question: "An effective way to create visual interest in a layout is through:", a: "Cluttering the space with as many elements as possible", b: "Using a single font and color throughout", c: "Variation in size, color, and placement of elements", d: "Keeping all elements aligned to the left margin", correct: "c"
    },

    {
        question: "Which principle suggests that objects grouped together are seen as a whole?", a: "Isolation", b: "Continuity", c: "Proximity", d: "Segregation", correct: "c"
    },

    {
        question: "How does the Gestalt principle of similarity help in design?", a: "By ensuring all elements are of the same color", b: "Through grouping similar elements to create visual connections", c: "By using different shapes to enhance contrast", d: "Through the exclusive use of geometric shapes", correct: "b"
    },

    {
        question: "Raster images are best used for:", a: "Creating logos that need to be scaled", b: "Detailed photographs in web design", c: "Illustrations that require resizing to various dimensions", d: "Print media where scaling is not required", correct: "b"
    },

    {
        question: "What is a significant advantage of vector graphics for web design?", a: "They maintain quality at any size", b: "They offer more realistic textures", c: "They are easier to compress without losing detail", d: "They are supported by all web browsers without the need for plugins", correct: "a"
    },

    {
        question: "Tracking in typography affects:", a: "The space between characters in a specific section of text", b: "The vertical spacing between lines of text", c: "The initial letter of a paragraph that is enlarged", d: "The adjustment of space for a group of letters", correct: "a"
    },

    {
        question: "The term 'resolution' in graphic design specifically refers to:", a: "The physical size of an image", b: "The color depth of an image", c: "The number of pixels in a digital image", d: "The dimensions of a print layout", correct: "c"
    },

    {
        question: "What is the primary function of grids in graphic design?", a: "To limit the designer's creativity", b: "To add unnecessary complexity to designs", c: "To provide a structured framework for layout", d: "To dictate the color scheme of the design", correct: "c"
    },

    {
        question: "What is the purpose of using white space in graphic design layouts?", a: "To reduce printing costs", b: "To create a sense of balance and structure", c: "To fill up empty areas", d: "To increase the page count", correct: "b"
    }


    // Add more questions as needed
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});
