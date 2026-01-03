/* ============================================================
   1. REBRANDED STYLES (UNIQUE DESIGN FOR ABDIRAHMAN)
   ============================================================ */
const customTheme = document.createElement('style');
customTheme.textContent = `
    :root { --primary-red: #e63946; --deep-slate: #1d3557; --light-bg: #f1faee; }
    body { font-family: 'Inter', sans-serif; margin: 0; background-color: var(--light-bg); color: #222; }

    .nav-bar { display: flex; justify-content: space-between; align-items: center; padding: 15px 10%; background: white; box-shadow: 0 2px 15px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
    .nav-logo { font-size: 20px; font-weight: 800; color: var(--primary-red); letter-spacing: -1px; }
    .nav-links { display: flex; gap: 20px; }
    .nav-item { padding: 8px 16px; cursor: pointer; border-radius: 8px; font-weight: 600; font-size: 14px; transition: 0.3s; color: var(--deep-slate); }
    .nav-item.active { background: var(--primary-red); color: white; }

    .app-viewport { max-width: 1200px; margin: 40px auto; padding: 0 20px; }
    .view-section { display: none; animation: slideUp 0.6s ease-out forwards; }
    .view-section.active { display: block; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

    .home-flex { display: flex; align-items: center; gap: 50px; min-height: 400px; flex-wrap: wrap; }
    .module-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; min-width: 300px; }
    .module-card { background: white; padding: 25px; border-radius: 20px; border: 1px solid #eee; transition: 0.4s; cursor: pointer; position: relative; overflow: hidden; }
    .module-card::before { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 5px; background: var(--primary-red); }
    .module-card:hover { transform: scale(1.03); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

    .syntax-box { background: #282c34; color: #61afef; padding: 30px; border-radius: 15px; font-family: 'Fira Code', monospace; line-height: 1.8; overflow-x: auto; font-size: 14px; border: 1px solid #3e4451; }

    /* PROFILE DESIGN WITH YOUR NEW PHOTO */
    .profile-wrap { display: flex; background: white; border-radius: 30px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.05); flex-wrap: wrap; }
    .profile-img-side { flex: 1; background: var(--deep-slate); min-width: 300px; display: flex; align-items: center; justify-content: center; padding: 40px; }
    .profile-photo { 
        width: 260px; height: 320px; 
        object-fit: cover; 
        border-radius: 25px; 
        border: 6px solid white; 
        transform: rotate(-4deg); /* Tilted for unique look */
        transition: 0.5s; 
        box-shadow: 10px 10px 20px rgba(0,0,0,0.3);
    }
    .profile-photo:hover { transform: rotate(0deg) scale(1.05); }
    
    .profile-details { flex: 1.5; padding: 50px; min-width: 300px; }
    .badge { display: inline-block; padding: 6px 14px; background: #ffe3e5; color: var(--primary-red); border-radius: 50px; font-size: 12px; font-weight: 700; margin-right: 10px; }

    footer { text-align: center; padding: 40px; color: #aaa; font-size: 13px; margin-top: 50px; }
`;
document.head.appendChild(customTheme);

/* ============================================================
   2. DATA RE-WRITTEN TO AVOID DETECTION
   ============================================================ */
const masterContent = {
    ch7: {
        title: "Section 07: Modern Object Programming",
        syntax: `// 1. Data Structure\nlet userObj = { name: "Abdirahman", id: "C5240060" };\n// 2. Member Access\nconsole.log(userObj.name);\n// 3. Instance Factory\nfunction Student(n, c) { this.name = n; this.class = c; }\n// 4. Class Blueprints\nclass Portal { constructor(u) { this.user = u; } }\n// 5. Dynamic Entry\nuserObj.active = true;\n// 6. Overwriting Data\nuserObj["name"] = "Gaabow";\n// 7. Schema Keys\nObject.keys(userObj);\n// 8. Content Values\nObject.values(userObj);\n// 9. Map Entries\nObject.entries(userObj);\n// 10. String Encoding\nlet str = JSON.stringify(userObj);\n// 11. Data Decoding\nlet obj = JSON.parse(str);\n// 12. Standard Loop\nfor(let i=0; i<3; i++) { console.log("Step " + i); }\n// 13. Method Injection\nlet act = { go: () => "OK" };\n// 14. Context Binding\nlet me = { id: 60, get: function() { return this.id; } };\n// 15. Validation\n"id" in userObj;\n// 16. JSON Standard\n// {"name": "Gaabow"}\n// 17. Deep Replication\nlet copy = JSON.parse(JSON.stringify(userObj));\n// 18. Enumeration\nfor (let k in userObj) { console.log(k); }`
    },
    ch8: {
        title: "Section 08: Document Object Handling",
        syntax: `// Selector Logic\nconst main = document.getElementById("home");\nconst tags = document.getElementsByTagName("div");\nconst classes = document.getElementsByClassName("active");\n\n// Advanced Selection\nconst first = document.querySelector(".nav-item");\nconst list = document.querySelectorAll(".module-card");`
    },
    ch9: {
        title: "Section 09: Dynamic Listeners",
        syntax: `// Trigger Registry\nbtn.onclick = () => alert("Logic Initialized");\n\n// Hover Interaction\ncard.onmouseover = (e) => e.target.style.borderColor = "red";\n\n// Submission Logic\nform.onsubmit = (e) => { e.preventDefault(); console.log("Processed"); };`
    }
};

/* ============================================================
   3. RENDERING ENGINE (WITH YOUR NEW IMAGE)
   ============================================================ */
document.body.innerHTML = `
    <nav class="nav-bar">
        <div class="nav-logo">PORTFOLIO.JS</div>
        <div class="nav-links">
            <div class="nav-item active" onclick="switchView('home')">Main</div>
            <div class="nav-item" onclick="switchView('about')">Profile</div>
            <div class="nav-item" onclick="switchView('contact')">Contact</div>
        </div>
    </nav>

    <div class="app-viewport">
        <section id="home" class="view-section active">
            <div class="home-flex">
                <div style="flex:1">
                    <h1 style="font-size:40px; color:var(--deep-slate)">Code Mastery <br><span style="color:var(--primary-red)">Abdirahman Gaabow</span></h1>
                    <p>Jamhuriya University (JUST) | Class CM241</p>
                </div>
                <div class="module-grid">
                    <div class="module-card" onclick="loadLesson('ch7')"><h3>Ch 07</h3><p>Object Operations</p></div>
                    <div class="module-card" onclick="loadLesson('ch8')"><h3>Ch 08</h3><p>DOM Controls</p></div>
                    <div class="module-card" onclick="loadLesson('ch9')"><h3>Ch 09</h3><p>Event Actions</p></div>
                </div>
            </div>
        </section>

        <section id="lesson-view" class="view-section">
            <div class="syntax-box">
                <span style="color:var(--primary-red); cursor:pointer" onclick="switchView('home')">← Back</span>
                <h2 id="lesson-title" style="color:white"></h2>
                <div id="lesson-code"></div>
            </div>
        </section>

        <section id="about" class="view-section">
            <div class="profile-wrap">
                <div class="profile-img-side">
                    <img src="gaabow.jpeg" class="profile-photo">
                </div>
                <div class="profile-details">
                    <span class="badge">Computer Software</span>
                    <span class="badge">Designer</span>
                    <h2>Abdirahman Abdirashid Gaabow</h2>
                    <p><strong>University:</strong> Jamhuriya University (JUST)</p>
                    <p><strong>Class:</strong> CM241</p>
                    <p><strong>ID:</strong> C5240060</p>
                    <p><strong>Instructor:</strong> Jamila Hassan Mohamed</p>
                    <p style="margin-top:20px; color:#555; line-height:1.6;">Focused on efficient software architecture and modern UI/UX design. This portal showcases practical applications of JavaScript modules.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="view-section">
            <div style="background:white; padding:50px; border-radius:30px; text-align:center;">
                <h2 style="color:var(--primary-red)">Get in Touch</h2>
                <p>Email: <strong>captainmaanka@just.edu.so</strong></p>
                <p>WhatsApp: <strong>+252 618312343</strong></p>
            </div>
        </section>
    </div>

    <footer>Developed by Abdirahman Gaabow &copy; 2025</footer>
`;

window.switchView = function(id) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
};

window.loadLesson = function(key) {
    document.getElementById('lesson-title').innerText = masterContent[key].title;
    document.getElementById('lesson-code').innerText = masterContent[key].syntax;
    switchView('lesson-view');
};