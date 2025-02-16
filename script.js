// Dark Mode Toggle
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Chatbot Toggle Button
const chatbotToggleBtn = document.getElementById("chatbot-toggle-btn");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotCloseBtn = document.getElementById("chatbot-close-btn");


chatbotToggleBtn.addEventListener("click", () => {
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
});

chatbotCloseBtn.addEventListener("click", () => {
    chatbotContainer.style.display = "none";
});

// Chatbot Logic
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim(); // Trim whitespace
    const chatbotBody = document.getElementById("chatbot-body");

    if (userInput === "") return; // Don't send empty messages

    // Display user message
    chatbotBody.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Bot response logic
    let botResponse = '';
    if (userInput.toLowerCase() === "hi" || userInput.toLowerCase() === "hello") {
        botResponse = "Hello! 👋I'm a Backend Developer at IBM, an Open Source Contributor, a passionate Blog Writer, and a Tech Speaker who loves sharing knowledge through sessions and workshops. What would you like to know about me?<br>" +
                      "<button onclick=\"selectOption('Education')\">Education 🎓</button>" +
                      "<button onclick=\"selectOption('Experience')\">Experience 🎓</button>" +
                      "<button onclick=\"selectOption('Blogs')\">Blogs ✍️</button>" +
                      "<button onclick=\"selectOption('Presentations')\">Presentations 📊</button>" +
                      "<button onclick=\"selectOption('Projects')\">Projects 🧑‍💻</button>" +
                      "<button onclick=\"selectOption('Contact')\">Contact 📞</button>";
    } else {
        botResponse = "I’m still learning. Can you please send <strong>Hi</strong> or <strong>Hello</strong> to start?";
    }

    // Display bot message
    chatbotBody.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    // Clear input
    document.getElementById("user-input").value = "";

    // Scroll to the bottom of the chatbot body
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Add Enter key functionality
document.getElementById("user-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function selectOption(option) {
    const chatbotBody = document.getElementById("chatbot-body");
    let botResponse = '';

    switch (option) {
        case "Education":
            botResponse = "Great! Here are the levels of education I have completed:<br>" +
              "<button onclick=\"selectOption('Matriculation')\">Matriculation 🏫</button>" +
              "<button onclick=\"selectOption('Higher Secondary')\">Higher Secondary</button>" +
              "<button onclick=\"selectOption('Undergraduate')\">Undergraduate 🎓</button>";

            break;
        case "Matriculation":
            botResponse = "I completed my Matriculation from Sobhana Public School with CGPA 10.";
            break;
        case "Higher Secondary":
            botResponse = "I completed my Higher Secondary education in Computer Science from St George HSS, Kothamangalam with 97.25%";
            break;
        case "Undergraduate":
            botResponse = "I completed my B.Tech in Electronics and Communication Engineering from Mar Athanasius College of Engineering, Kothamangalam with CPGA 9.48. I also have minor degree in Computer Science Engineering and Honours degree in Electronics and Communication Engineering.";
            break;
        case "Blogs":
            botResponse = "Here are some of my featured blogs. Click to explore!<br>" +
                              "<button onclick=\"selectOption('Virtual Threads')\">Virtual Threads: A Game-Changer for Concurrency 💻</button>" +
                              "<button onclick=\"selectOption('Low-Code Platforms')\">Unleashing Creativity: The Rise of Low-Code/No-Code 🎨</button>" +
                              "<button onclick=\"selectOption('Jakarta WebSocket')\">Jakarta WebSocket Essentials 🌐</button>";
            break;

            case "Experience":
                botResponse = "Here’s an overview of my professional experience:<br>" +
                              "<button onclick=\"selectOption('Intern')\">Software Developer Intern 💼</button>" +
                              "<button onclick=\"selectOption('Developer')\">Software Developer 👨‍💻</button>";
                break;
            
            case "Intern":
                botResponse = "<h3>Software Developer Intern</h3>" +
                              "<p><strong>Company:</strong> IBM India Private Limited, Kochi</p>" +
                              "<p><strong>Duration:</strong> 30/01/2023 - 31/07/2023</p>" +
                              "<p><strong>Project:</strong> WebSphere Application Server</p>" +
                              "<p>Engaged in L3 support cases and development activities for JCA and JDBC components of traditional WebSphere and Open Liberty, as well as the Bean Validation component of Open Liberty.</p>";
                break;
            
            case "Developer":
                botResponse = "<h3>Software Developer</h3>" +
                              "<p><strong>Company:</strong> IBM India Private Limited, Kochi</p>" +
                              "<p><strong>Duration:</strong> 01/08/2023 - Present</p>" +
                              "<p><strong>Project:</strong> WebSphere Application Server</p>" +
                              "<p>Engaged in L3 support cases and development activities for JCA and JDBC components of traditional WebSphere and Open Liberty, as well as the Bean Validation component of Open Liberty.</p>";
                break;
            
        case "Virtual Threads":
            botResponse = "<h3>Virtual Threads: A Game-Changer for Concurrency</h3>" +
                              "<p>Published on DZone, this blog explores Java Virtual Threads, comparing them to traditional platform threads and providing example code.</p>" +
                              "<a href='https://dzone.com/articles/deep-dive-into-java-virtual-threads-a-game-changer' target='_blank'>Read Full Blog</a>";
            break;
            
        case "Low-Code Platforms":
            botResponse = "<h3>Unleashing Creativity: The Rise of Low-Code and No-Code Platforms</h3>" +
                              "<p>This blog likens low-code and no-code platforms to an artist's canvas, emphasizing how these platforms empower users to transform ideas into software solutions without extensive technical skills.</p>" +
                              "<a href='https://medium.com/@sweettypdevassy2001/unleashing-creativity-the-rise-of-low-code-and-no-code-platforms-8c09bd10261b' target='_blank'>Read Full Blog</a>";
            break;
            
        case "Jakarta WebSocket":
            botResponse = "<h3>Jakarta WebSocket Essentials: A Guide to Full-Duplex Communication in Java</h3>" +
                              "<p>Published on DZone, this blog demonstrates how to build a real-time chat app using Jakarta WebSocket and Open Liberty.</p>" +
                              "<a href='https://dzone.com/articles/jakarta-websocket-essentials' target='_blank'>Read Full Blog</a>";
            break;
            
            case "Presentations":
                botResponse = "I’ve delivered several presentations. Click on a topic to learn more!<br>" +
                              "<button onclick=\"selectOption('Java Migration')\">Java 8 to 17 Migration ☕</button>" +
                              "<button onclick=\"selectOption('Containerization')\">Enterprise App Containerization 📦</button>" +
                              "<button onclick=\"selectOption('Low-Code')\">The Rise of Low-Code/No-Code 🚀</button>";
                break;
            
            case "Java Migration":
                botResponse = "<h3>Java 8 to 17 Migration</h3>" +
                              "<p><strong>Event:</strong> Java User Group</p>" +
                              "<p>Discussed major changes from Java 8 to 17, including JPMS, var, garbage collectors, pattern matching, and best migration practices.</p>";
                break;
            
            case "Containerization":
                botResponse = "<h3>Enterprise App Containerization</h3>" +
                              "<p><strong>Event:</strong> WebSphere User Group</p>" +
                              "<p>Presented how Open Liberty and OpenShift simplify enterprise application deployment, focusing on scalability and cloud-native best practices.</p>" +
                              "<a href='https://drive.google.com/file/d/1W0UCDC9BBQ7YDIIuHImIP9wP6dcdKa_Z/view?usp=sharing' target='_blank'>Watch Presentation</a>";
                break;
            
            case "Low-Code":
                botResponse = "<h3>The Rise of Low-Code/No-Code Platforms</h3>" +
                              "<p><strong>Event:</strong> Think Friday Session</p>" +
                              "<p>Explored how low-code and no-code platforms empower users to develop software with minimal coding, accelerating digital transformation.</p>" +
                              "<a href='https://drive.google.com/file/d/1WPZutUhxL7Ex-ucdeeiF8MmH-Uvf_i6o/view?usp=sharing' target='_blank'>Watch Presentation</a>";
                break;
            
        case "Projects":
            botResponse = "Here are some of my projects:<br>" +
                          "<button onclick=\"selectOption('WebSocket Chat Application')\">WebSocket Chat Application</button>" +
                          "<button onclick=\"selectOption('BMI Calculator')\">BMI Calculator</button>";
            break;
        case "WebSocket Chat Application":
            botResponse = "A simple chat server using Jakarta WebSocket API. Check out the <a href='https://github.com/sweettypdevassy/ws-blog-backend' target='_blank'>Backend Repo</a> and <a href='https://github.com/sweettypdevassy/ws-blog-frontend' target='_blank'>Frontend Repo</a>.";
            break;
        case "BMI Calculator":
            botResponse = "A BMI calculator web application using Open Liberty, HttpServlet, and Tailwind CSS. Check out the <a href='https://github.com/sweetty01/bmi-calculator' target='_blank'>GitHub Repo</a>.";
            break;
        case "Contact":
            botResponse = "You can reach out to me via:<br>" +
                          "<strong>Email:</strong> sweettypdevassy91@gmail.com<br>" +
                          "<strong>GitHub:</strong> <a href='https://github.com/sweettypdevassy' target='_blank'>sweettypdevassy</a><br>" +
                          "<strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/sweetty-p-devassy/' target='_blank'>Sweetty P Devassy</a>";
            break;
        default:
            botResponse = "I’m still learning. Can you please choose an option?";
    }

    chatbotBody.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    // Scroll to the bottom of the chatbot body
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Your existing JavaScript code for animations and toggling details
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    let talkCards = document.querySelectorAll(".talk-card");
    talkCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let educationCards = document.querySelectorAll(".education-card");
    educationCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
});


// Toggle visibility of details inside each card
function toggleDetails(card) {
    let details = card.querySelectorAll("p");
    details.forEach(detail => {
        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    });
}
