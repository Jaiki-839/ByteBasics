import { Topic } from "@/lib/types";

export const module01Topics: Topic[] = [
  {
    id: 1,
    moduleId: 1,
    title: "What is a Computer?",
    slug: "what-is-a-computer",
    description:
      "The starting point: what actually makes something a computer, and what it does with the data you give it.",
    definition:
      "A computer is an electronic device that accepts data as input, processes that data according to a set of instructions (a program), and produces meaningful output — while also being able to store data for later use.",
    explanation:
      "Strip away the screen, the keyboard, and the apps, and a computer is really just a very fast, very obedient follower of instructions. You give it raw data — numbers, text, a photo, a voice clip — and a program tells it exactly what to do with that data. It follows those steps without deviation and hands back a result. A calculator adds two numbers because you pressed the right keys, not because it understands mathematics; a phone recommends a video because a program compared your history to a pattern. The 'intelligence' you see is really just very precise instruction-following at enormous speed.",
    keyPoints: [
      "A computer needs three things to be useful: input, a set of instructions, and a way to produce output.",
      "It processes data based on a stored program — change the program, and the same hardware does something completely different.",
      "It can store data and instructions for reuse, which is what separates it from a simple calculator.",
      "It performs operations electronically, which is why it can work at speeds far beyond any manual process.",
    ],
    examples: [
      "Typing a message on a laptop: your keystrokes are the input, the word processor is the program, and the text on screen is the output.",
      "A UPI payment app: your tap is the input, the banking logic is the program, and the confirmation screen is the output.",
      "A washing machine's embedded computer: the dial setting is input, the wash cycle logic is the program, and the spin/rinse sequence is the output.",
    ],
    importantTerms: [
      { term: "Input", definition: "Raw data or instructions fed into a computer for processing." },
      { term: "Output", definition: "The processed, meaningful result a computer produces." },
      { term: "Program", definition: "A set of step-by-step instructions that tells a computer what to do." },
      { term: "Data", definition: "Raw, unprocessed facts and figures given to a computer." },
    ],
    rememberThis:
      "Computer = Input + Process (by a stored program) + Output + Storage. If any one of these is missing, you don't have a complete computer system.",
    relatedTopics: [
      { slug: "evolution-of-computers", title: "Evolution of Computers" },
      { slug: "characteristics-of-computers", title: "Characteristics of Computers" },
    ],
    quizQuestions: [
      {
        id: "q1-1",
        question: "Which of these is NOT one of the core functions of a computer?",
        options: ["Accepting input", "Processing data", "Understanding emotions", "Producing output"],
        correctIndex: 2,
        explanation:
          "A computer processes data exactly as instructed — it doesn't understand or feel anything, no matter how natural its responses seem.",
      },
      {
        id: "q1-2",
        question: "What is a 'program' in the context of a computer?",
        options: [
          "A physical circuit board",
          "A set of instructions telling the computer what to do",
          "A type of output device",
          "The screen showing results",
        ],
        correctIndex: 1,
        explanation: "A program is the ordered set of instructions the computer follows to turn input into output.",
      },
    ],
  },
  {
    id: 2,
    moduleId: 1,
    title: "Evolution of Computers",
    slug: "evolution-of-computers",
    description:
      "From beads on a frame to silicon chips — how calculating tools slowly became the computers we use today.",
    definition:
      "The evolution of computers refers to the historical progression of calculating and computing devices, from simple manual tools to mechanical calculators and finally to electronic computers.",
    explanation:
      "Long before electricity, people still needed to calculate — trade, taxes, and astronomy all demanded it. The abacus, one of the earliest known calculating tools, let people add and subtract by sliding beads. Centuries later, mechanical devices took over: Blaise Pascal built the Pascaline in the 1640s to mechanically add numbers using gears, and Charles Babbage designed the Analytical Engine in the 1830s — a mechanical device with a processing unit and memory, conceptually similar to a modern computer, though it was never fully built in his lifetime. This is why Babbage is often called the 'Father of the Computer.' The real leap came in the 20th century, when electronic components replaced mechanical gears entirely, giving rise to the generations of computers we study next.",
    keyPoints: [
      "The abacus is one of the earliest known calculating devices, used for basic arithmetic by sliding beads.",
      "Blaise Pascal's Pascaline (1642) was an early mechanical calculator that could add and subtract.",
      "Charles Babbage designed the Analytical Engine, a mechanical device with the conceptual building blocks of a modern computer.",
      "Ada Lovelace wrote instructions for the Analytical Engine, and is widely regarded as the first computer programmer.",
      "The shift from mechanical gears to electronic components in the 20th century marked the birth of modern computing.",
    ],
    examples: [
      "The abacus is still used today in parts of Asia for teaching arithmetic.",
      "Modern calculators are a direct descendant of Pascal's mechanical adding machines.",
      "Babbage's Analytical Engine design foreshadowed the CPU and memory found in every computer today.",
    ],
    importantTerms: [
      { term: "Abacus", definition: "An ancient manual calculating tool using beads on rods." },
      { term: "Pascaline", definition: "A mechanical calculator built by Blaise Pascal that could add and subtract." },
      {
        term: "Analytical Engine",
        definition: "Charles Babbage's proposed mechanical general-purpose computer, never completed in his lifetime.",
      },
    ],
    rememberThis:
      "Evolution path: Abacus → Mechanical calculators (Pascaline) → Babbage's Analytical Engine → Electronic computers. Babbage = father of the computer; Ada Lovelace = first programmer.",
    relatedTopics: [
      { slug: "what-is-a-computer", title: "What is a Computer?" },
      { slug: "generations-of-computers", title: "Generations of Computers" },
    ],
    quizQuestions: [
      {
        id: "q1-3",
        question: "Who is widely known as the 'Father of the Computer'?",
        options: ["Blaise Pascal", "Charles Babbage", "Ada Lovelace", "Alan Turing"],
        correctIndex: 1,
        explanation:
          "Charles Babbage designed the Analytical Engine, which contained the conceptual building blocks — a processing unit and memory — found in modern computers.",
      },
      {
        id: "q1-4",
        question: "What was the Pascaline?",
        options: [
          "An electronic circuit",
          "A mechanical calculator that could add and subtract",
          "The first programming language",
          "A type of abacus",
        ],
        correctIndex: 1,
        explanation: "The Pascaline, built by Blaise Pascal, used gears to mechanically perform addition and subtraction.",
      },
    ],
  },
  {
    id: 3,
    moduleId: 1,
    title: "Generations of Computers",
    slug: "generations-of-computers",
    description:
      "Five eras of computing technology, each defined by a leap in the hardware used to build the machine.",
    definition:
      "The generations of computers is a classification based on the core technology used to build computing hardware — from vacuum tubes through transistors, integrated circuits, and microprocessors, to today's intelligent systems.",
    explanation:
      "Each generation is defined by the switch to a smaller, faster, and more reliable building block for electronic circuits. The first computers relied on vacuum tubes, which were bulky, generated huge amounts of heat, and failed often. The invention of the transistor solved most of those problems, and the later invention of the integrated circuit packed many transistors onto a single chip. The fourth generation squeezed an entire processor onto one microchip — the microprocessor — which is the foundation of every computer you use today. The fifth generation is less about one single component and more about a shift in capability: computers that use AI, natural language processing, and massive parallel processing to behave in increasingly intelligent ways.",
    keyPoints: [
      "1st Generation (roughly 1940s–1950s): vacuum tubes. Large, expensive, generated heavy heat. Example: ENIAC.",
      "2nd Generation (roughly late 1950s–1960s): transistors. Smaller, faster, more reliable, less heat than vacuum tubes.",
      "3rd Generation (roughly 1960s–1970s): integrated circuits (ICs). Multiple transistors on a single chip, further boosting speed and reliability.",
      "4th Generation (roughly 1970s–present): microprocessors. An entire CPU fits on one chip, enabling personal computers.",
      "5th Generation (ongoing): AI-based and intelligent computing, focused on natural language processing, machine learning, and parallel processing.",
    ],
    examples: [
      "ENIAC, one of the earliest electronic general-purpose computers, is a well-known first-generation machine built with vacuum tubes.",
      "The move to transistors in the second generation is what allowed computers to shrink from room-sized to cabinet-sized.",
      "Your smartphone's processor is a direct product of fourth-generation microprocessor technology.",
    ],
    importantTerms: [
      { term: "Vacuum Tube", definition: "An early electronic component used to control electric current; bulky and heat-prone." },
      { term: "Transistor", definition: "A small semiconductor device that replaced vacuum tubes, enabling smaller and more reliable circuits." },
      { term: "Integrated Circuit (IC)", definition: "A chip containing many transistors and other components manufactured together." },
      { term: "Microprocessor", definition: "A single chip containing a complete CPU." },
    ],
    rememberThis:
      "Generations, in order: Vacuum Tubes → Transistors → Integrated Circuits → Microprocessors → AI/Intelligent Computing. Each step made computers smaller, faster, cheaper, and more reliable.",
    relatedTopics: [
      { slug: "evolution-of-computers", title: "Evolution of Computers" },
      { slug: "characteristics-of-computers", title: "Characteristics of Computers" },
    ],
    quizQuestions: [
      {
        id: "q1-5",
        question: "Which component defines the second generation of computers?",
        options: ["Vacuum tubes", "Transistors", "Integrated circuits", "Microprocessors"],
        correctIndex: 1,
        explanation: "Second-generation computers replaced vacuum tubes with transistors, making machines smaller and more reliable.",
      },
      {
        id: "q1-6",
        question: "What defines a fourth-generation computer?",
        options: [
          "Use of vacuum tubes",
          "An entire CPU built on a single microprocessor chip",
          "Mechanical gears",
          "Multiple separate transistor circuits",
        ],
        correctIndex: 1,
        explanation: "The fourth generation is defined by the microprocessor — a complete CPU fabricated onto a single chip.",
      },
    ],
  },
  {
    id: 4,
    moduleId: 1,
    title: "Characteristics of Computers",
    slug: "characteristics-of-computers",
    description:
      "The traits that make computers uniquely useful — and the ones people often misunderstand.",
    definition:
      "The characteristics of a computer are the core traits — speed, accuracy, diligence, storage capacity, versatility, and automation — that distinguish it from manual methods of processing information.",
    explanation:
      "None of these traits are magic; each comes directly from how a computer is built. Speed comes from electronic circuits switching billions of times a second. Accuracy comes from the fact that a computer only makes errors when given wrong input or a flawed program — it doesn't get careless. Diligence means it performs the millionth repetition of a task exactly as precisely as the first, with no fatigue. Storage lets it hold vast amounts of data for instant recall. Versatility lets the same hardware run a spreadsheet, edit a video, or control a robot arm, because it's really just running different programs. And automation means once a program starts, it can run through a whole sequence of steps without a person intervening at each one.",
    keyPoints: [
      "Speed: performs billions of operations per second.",
      "Accuracy: produces correct results as long as input and instructions are correct (Garbage In, Garbage Out).",
      "Diligence: never tires or loses focus, no matter how repetitive the task.",
      "Storage: can hold enormous amounts of data and retrieve it almost instantly.",
      "Versatility: the same machine can handle vastly different tasks by running different programs.",
      "Automation: can execute a full sequence of instructions without manual intervention at every step.",
    ],
    examples: [
      "A spreadsheet recalculating thousands of formulas in a split second demonstrates speed.",
      "A payroll system processing the same salary calculation for 10,000 employees without a single slip demonstrates diligence.",
      "The same laptop being used for coding, gaming, and video calls in one day demonstrates versatility.",
    ],
    importantTerms: [
      { term: "GIGO (Garbage In, Garbage Out)", definition: "A principle stating that flawed input or instructions will always produce flawed output, regardless of how powerful the computer is." },
      { term: "Automation", definition: "The ability of a computer to carry out a sequence of tasks with minimal human intervention." },
    ],
    rememberThis:
      "Six core traits: Speed, Accuracy, Diligence, Storage, Versatility, Automation. A computer has no feelings and no judgement — it does exactly what it's told, exactly as fast as its hardware allows.",
    relatedTopics: [
      { slug: "generations-of-computers", title: "Generations of Computers" },
      { slug: "advantages-and-limitations", title: "Advantages and Limitations" },
    ],
    quizQuestions: [
      {
        id: "q1-7",
        question: "What does the principle 'Garbage In, Garbage Out' describe?",
        options: [
          "Computers slow down over time",
          "Wrong input or instructions lead to wrong output",
          "Old computers produce more errors",
          "Computers automatically fix bad data",
        ],
        correctIndex: 1,
        explanation: "GIGO means the accuracy of a computer's output depends entirely on the correctness of the input and program it's given.",
      },
      {
        id: "q1-8",
        question: "Which characteristic explains why a computer can repeat the same task a million times without a mistake?",
        options: ["Versatility", "Diligence", "Storage", "Automation"],
        correctIndex: 1,
        explanation: "Diligence refers to a computer's ability to perform repetitive tasks with the same precision every single time, without fatigue.",
      },
    ],
  },
  {
    id: 5,
    moduleId: 1,
    title: "Advantages and Limitations",
    slug: "advantages-and-limitations",
    description:
      "What computers genuinely do better than people — and where they still fall short.",
    definition:
      "The advantages and limitations of a computer describe the practical benefits it offers over manual methods, along with the inherent constraints that mean it still depends on human direction and oversight.",
    explanation:
      "It's tempting to think of computers as simply 'better' than people, but the honest picture is more specific: they're better at a narrow set of things, and dependent on humans for everything else. Their advantages — speed, accuracy, storage, the ability to multitask across processes, and round-the-clock availability — are why they've become central to nearly every industry. But those same strengths come with real limits. A computer has no original thought or creativity of its own; it can only do what it has been explicitly programmed or trained to do. It has no genuine understanding or emotion, however convincingly it might mimic conversation. It depends entirely on correct instructions and is vulnerable to malware, hardware failure, and misuse. Understanding both sides is what lets people use computers effectively instead of over-trusting them.",
    keyPoints: [
      "Advantage — Speed: completes complex calculations in fractions of a second.",
      "Advantage — Accuracy and storage: minimal error rate with the ability to store and retrieve huge volumes of data.",
      "Advantage — Multitasking and availability: can run many processes at once, and operate continuously without rest.",
      "Limitation — No original intelligence: cannot think, reason, or create beyond what it's programmed or trained to do.",
      "Limitation — Dependency: requires correct instructions and input, and cannot function meaningfully without them.",
      "Limitation — Security risk: vulnerable to viruses, malware, and misuse if not properly protected.",
    ],
    examples: [
      "A bank's computer system processing thousands of transactions per second shows the advantage of speed.",
      "A computer infected by malware that corrupts files shows the limitation of security vulnerability.",
      "An AI chatbot that only responds within the patterns it was trained on illustrates the lack of true original thought.",
    ],
    importantTerms: [
      { term: "Multitasking", definition: "A computer's ability to run multiple processes or programs during the same period of time." },
      { term: "Malware", definition: "Malicious software designed to damage, disrupt, or gain unauthorised access to a computer system." },
    ],
    rememberThis:
      "Advantages: speed, accuracy, storage, multitasking, availability. Limitations: no original thinking, total dependency on instructions, no real emotion, and vulnerability to security threats.",
    relatedTopics: [
      { slug: "characteristics-of-computers", title: "Characteristics of Computers" },
      { slug: "applications-of-computers", title: "Applications of Computers" },
    ],
    quizQuestions: [
      {
        id: "q1-9",
        question: "Which of the following is a genuine limitation of computers?",
        options: [
          "They can store large amounts of data",
          "They lack original thought and creativity of their own",
          "They can perform calculations quickly",
          "They can run multiple programs at once",
        ],
        correctIndex: 1,
        explanation: "Computers can only act within what they've been programmed or trained to do — they don't originate genuinely new ideas the way people do.",
      },
      {
        id: "q1-10",
        question: "Why are computers considered vulnerable systems?",
        options: [
          "They cannot store data",
          "They are susceptible to malware and misuse",
          "They cannot multitask",
          "They work too slowly",
        ],
        correctIndex: 1,
        explanation: "Without proper safeguards, computers are vulnerable to malware, unauthorised access, and other security threats.",
      },
    ],
  },
  {
    id: 6,
    moduleId: 1,
    title: "Applications of Computers",
    slug: "applications-of-computers",
    description:
      "Where computers actually show up in day-to-day life — far beyond just desktops and laptops.",
    definition:
      "The applications of computers refer to the wide range of fields and industries — including education, business, healthcare, communication, entertainment, and science — where computers are used to store, process, or transmit information.",
    explanation:
      "Once you start looking, computers are embedded in almost every part of modern life, often invisibly. In education, they power everything from online classes to research databases. In business, they handle accounting, inventory, and customer records. In healthcare, they run diagnostic imaging equipment and store patient records securely. In communication, they're the backbone of email, video calls, and instant messaging. In entertainment, they render the graphics in games and stream video to your phone. In science, they run simulations and process enormous experimental datasets that would be impossible to work through by hand. What connects all of these is the same core loop from the first topic in this module — input, processing, output — just applied to very different kinds of problems.",
    keyPoints: [
      "Education: e-learning platforms, digital libraries, research and data analysis.",
      "Business: accounting, inventory management, payroll, and customer relationship management.",
      "Healthcare: diagnostic imaging, electronic health records, hospital management systems.",
      "Communication: email, video conferencing, instant messaging, and social platforms.",
      "Entertainment: video games, streaming media, and digital content creation.",
      "Science and research: simulations, data analysis, and modelling of complex systems.",
    ],
    examples: [
      "A hospital's electronic health record system is a healthcare application of computers.",
      "An online banking app handling fund transfers is a business application of computers.",
      "A weather forecasting model run on a supercomputer is a scientific application of computers.",
    ],
    importantTerms: [
      { term: "E-learning", definition: "The use of computers and the internet to deliver educational content." },
      { term: "Electronic Health Record (EHR)", definition: "A digital version of a patient's medical history maintained by a healthcare provider." },
    ],
    rememberThis:
      "Computers show up everywhere the same core loop is useful: education, business, healthcare, communication, entertainment, and science — anywhere data needs to be input, processed, and turned into a useful output.",
    relatedTopics: [
      { slug: "advantages-and-limitations", title: "Advantages and Limitations" },
      { slug: "what-is-a-computer", title: "What is a Computer?" },
    ],
    quizQuestions: [
      {
        id: "q1-11",
        question: "Which field relies on computers for electronic health records and diagnostic imaging?",
        options: ["Entertainment", "Healthcare", "Communication", "Science"],
        correctIndex: 1,
        explanation: "Healthcare uses computers extensively for storing patient records and running diagnostic imaging equipment.",
      },
      {
        id: "q1-12",
        question: "What is a common business application of computers?",
        options: [
          "Rendering video game graphics",
          "Payroll and inventory management",
          "Weather simulation",
          "Streaming movies",
        ],
        correctIndex: 1,
        explanation: "Businesses widely use computers for accounting, payroll, and inventory management tasks.",
      },
    ],
  },
];
