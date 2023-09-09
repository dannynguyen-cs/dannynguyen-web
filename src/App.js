import React, { useState } from 'react';
import './App.css';

function App() {
    const [isModalVisible, setIsModalVisible] = useState(true); // Show the modal initially
    const [selectedContent, setSelectedContent] = useState('Home');


    const closeModal = () => {
        setIsModalVisible(false);
    }

    return (
        <div className="App">
            {isModalVisible && <IntroModal onClose={closeModal} />}
            <Sidebar onSelectContent={setSelectedContent} />
            <NumberLine />
            <MainContent selected={selectedContent} />
        </div>
    );
}

function IntroModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>👋Hello! I'm Danny, an aspiring Computer Science intern from Houston.</h2>
                <p>Explore the sidebar to navigate different sections!</p>
                <button className="got-it-btn" onClick={onClose}>Got it!</button>
            </div>
        </div>
    );
}

function Sidebar({ onSelectContent }) {
    return (
        <div className="sidebar">
            <h4>EXPLORER</h4>
            <Directory name="Danny Nguyen" onSelectContent={onSelectContent}>
                <File name="About Me" onClick={() => onSelectContent('About Me')} />
                <Directory name="More" onSelectContent={onSelectContent}>
                    <File name="Activities" onClick={() => onSelectContent('Activities')} />
                </Directory>
            </Directory>
        </div>
    );
}

function Directory({ name, children, onSelectContent }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        onSelectContent(name);  // When a directory is clicked, update the main content to show its details
    };

    return (
        <div className="directory">
            <span className="directory-name" onClick={toggleExpand}>
                {isExpanded ? "📂" : "📁"} {name}
            </span>
            {isExpanded && <div className="directory-contents">{children}</div>}
        </div>
    );
}

function File({ name, onClick }) {
    return <div className="file" onClick={onClick}>📄 {name}</div>;
}

function NumberLine() {
    const lines = Array.from({ length: 48 }, (_, i) => i + 1);
    return (
        <div className="numberline">
            {lines.map(line => (
                <div key={line} className="line-number">
                    {line}
                </div>
            ))}
        </div>
    );
}

function MainContent({ selected }) {
    if (selected === 'About Me') {
        return (
            <div className="main-content">
            <div className="code comment">// About Me</div>
            <div className="code-line"><span className="function">function</span> Danny_Nguyen() <span className="keyword">{`{`}</span></div>
            <div className="code-indent">Hello! I'm a proud Houstonian, currently studying Computer Science at the University of Houston, class of 2025. My journey in the tech world is driven by my deep-seated passion for coding, having gained proficiency in languages and frameworks like Python, C++, CSS, JavaScript, HTML, and React;</div>
            <div className="code-line"><span className="keyword">{`}`}</span>;</div>

            <div className="code comment">// Projects</div>
            <div className="code-line"><span className="function">function</span> Personal_Web_Portolio() <span className="keyword">{`{`}</span></div>
            <div className="code-indent">As a Computer Science major, I've crafted this website from scratch, mastering HTML, CSS, JavaScript, and React along the way. It's not just a digital resume—it's a testament to my skills, presenting my projects with professionalism and passion. Dive in to see what I bring to the table;</div>
            <div className="code-line"><span className="keyword">{`}`}</span>;</div>

            <div className="code comment">// Contact</div>
            <div className="code-line"><span className="variable">const</span> phone = <span className="string">"(832)406-5046"</span>;</div>
            <div className="code-line"><span className="variable">const</span> email = <span className="string">"dannynguyen320@gmail.com"</span>;</div>
            <div className="code-line"><span className="variable">const</span> linkedin = <span className="string">"www.linkedin.com/in/dannynguyen-cs/"</span>;</div>
            
            </div>
        );
    }

    if (selected === 'Activities') {
        return (
            <div className="main-content">
            <div className="code comment">// Soaring Phoenix Dragon & Lion Dance Association</div>
            <div className="code-line"><span className="function">function</span> About() <span className="keyword">{`{`}</span></div>
            <div className="code-indent">Established in September 2008, Soaring Phoenix - CRCT commits to raising awareness and generating funds for impoverished people around the world through the traditional art of lion and dragon dancing.
We perform around the local Houston area to bring good luck and good fortune;</div>
            <div className="code-line"><span className="keyword">{`}`}</span>;</div>
            </div>
        );
    }

    // Default content (e.g., for the "Home" state)
    return (
        <div className="main-content">
            {/* Default content */}
        </div>
    );
}

// function MainContent({ selected }) {
//     return (
//         <div className="main-content">
//             <Section title="About Me" isSelected={selected === "About Me"}>
//             <div className="code comment">// About Me</div>
//             <div className="code-line"><span className="function">function</span> Danny_Nguyen() <span className="keyword">{`{`}</span></div>
//             <div className="code-indent">Hello! I'm a proud Houstonian, currently studying Computer Science at the University of Houston, class of 2025. My journey in the tech world is driven by my deep-seated passion for coding, having gained proficiency in languages and frameworks like Python, C++, CSS, JavaScript, HTML, and React;</div>
//             <div className="code-line"><span className="keyword">{`}`}</span>;</div>
//             </Section>

//             <Section title="Projects" isSelected={selected === "Projects"}>
//             <div className="code comment">// Projects</div>
//             <div className="code-line"><span className="function">function</span> Personal_Web_Portolio() <span className="keyword">{`{`}</span></div>
//             <div className="code-indent">As a Computer Science major, I've crafted this website from scratch, mastering HTML, CSS, JavaScript, and React along the way. It's not just a digital resume—it's a testament to my skills, presenting my projects with professionalism and passion. Dive in to see what I bring to the table;</div>
//             <div className="code-line"><span className="keyword">{`}`}</span>;</div>
//             </Section>

//             <Section title="Contact" isSelected={selected === "Contact"}>
//             <div className="code comment">// Contact</div>
//             <div className="code-line"><span className="variable">const</span> phone = <span className="string">"(832)406-5046"</span>;</div>
//             <div className="code-line"><span className="variable">const</span> email = <span className="string">"dannynguyen320@gmail.com"</span>;</div>
//             <div className="code-line"><span className="variable">const</span> linkedin = <span className="string">"www.linkedin.com/in/dannynguyen-cs/"</span>;</div>
//             </Section>
//         </div>
//     );
// }

function Section({ title, isSelected, children }) {
    return (
        <div className={`section ${isSelected ? 'highlighted' : ''}`}>
            {children}
        </div>
    );
}

export default App;
