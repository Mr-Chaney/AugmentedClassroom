const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Route for the homepage
app.get('/', (req, res) => {
    
    res.render('index', { 
        user: students['John.Doe6974@GCPSK12.org'],
        masterUnitContent: masterUnitContent,
        classroomPointSetup: classroomPointSetup
     });
});

app.listen(3000, () => {
    console.log('Server running on port ${Port}');
});


// =========================================================================
// 1. Setup
// =========================================================================
const classroomPointSetup = {
    Gradebook:{
        "unit-1": {test: 6, lab: 4, progress: 3},
        "unit-2": {test: 6, lab: 4, progress: 3},
        "unit-3": {test: 6, lab: 4, progress: 3},
        "unit-4": {test: 6, lab: 4, progress: 3},
        "unit-5": {test: 6, lab: 4, progress: 3},
        "unit-6": {test: 6, progress: 3},
        "cumulative": {interim: 2, performanceFinal: 5, project: 4, final: 15}
    },

    pointValues:{
        unitPointPerGradebookPoint: 1000,
        maxQuizPoints: 500,
        testBonus: {pointConverstion:100, maxBonus:20,},
        labBonus: {pointConverstion:100, maxBonus:20}
    }
};

// =========================================================================
// 2. Questions
// =========================================================================
const masterUnitContent = {
    "unit-1": {
        title: "Unit 1: Atomic Theory",
        quizzes: [
            {
                name: "1.1 History of Atomic Models",
                questions: [
                    {
                        id: "1.1-1",
                        type: "multi-select",
                        pointValue: 10,
                        questionText: "Which of these scientists contributed to our understanding of the atom?",
                        options: ["Dalton", "Bohr", "Mendelev", "Schrodinger", "Hawking"],
                        correctIndices: [0, 1, 3] // Dalton, Bohr, Schrodinger
                    }
                ]
            },
            {
                name: "1.2 Subatomic Particles",
                questions: [
                    {
                        id: "1.2-1",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "How many protons does He-4 have?",
                        options: ["1", "2", "3", "4"],
                        correctIndex: 1
                    },
                    {
                        id: "1.2-2",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "What is the atomic number of Oxygen?",
                        options: ["8", "16", "15.99", "2"],
                        correctIndex: 0
                    }
                ]
            },
            {
                name: "1.3 Isotopes",
                questions: [
                    {
                        id: "1.3-1",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "What isotope has 6 protons, 8 neutrons, and 6 electrons?",
                        options: ["Carbon-6", "Carbon-14", "Oxygen-8", "Oxygen-14"],
                        correctIndex: 1
                    }
                ]
            },
            {
                name: "1.4 Relative Abundance and Average Atomic Mass",
                questions: [
                    {
                        id: "1.4-1",
                        type: "algorithmic-math",
                        pointValue: 20,
                        questionText: "Element [e] has three isotopes: [e]-[m1], [e]-[m2], and [e]-[m3], which have abundances of [a1]%, [a2]%, and [a3]% respectively. What is the average atomic mass of element [e]?",
                        variables: "m1=int(20,80); a1=float(50.00,80.00,2); a2=float(5.00,15.00,2); e=choice('X','Y','Z','Q','A','G')",
                        equations: "m2=m1+1; m3=m1+2; a3=100.00-(a1+a2)",
                        formula: "((m1 * a1) + (m2 * a2) + (m3 * a3)) / 100",
                        roundingMode: "decimals",
                        roundingValue: 2,
                        unitSymbol: "amu"
                    }
                ]
            },
            {
                name: "1.5 Creating Bohr Models",
                questions: [
                    {
                        id: "1.5-1",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "How many electrons fit in the electron shell closest to the nucleus?",
                        options: ["2", "6", "8", "14"],
                        correctIndex: 0
                    }
                ]
            },
            {
                name: "1.6 Electron Configuration",
                questions: [
                    {
                        id: "1.6-1",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "What element has the electron configuration 1s^2, 2s^2, 2p^6?",
                        options: ["Oxygen", "Neon", "Helium", "Sulfur"],
                        correctIndex: 1
                    }
                ]
            },
            {
                name: "1.7 Electron Excitation",
                questions: [
                    {
                        id: "1.7-1",
                        type: "dropdown",
                        pointValue: 30,
                        textSegments: ["An electron becomes ", " when it absorbs energy and jumps to a higher energy state. It will then ", " energy in the form of ", " as it relaxes back to the ground state."],
                        blanks: [
                            { options: ["excited", "energized", "electromagnet"], correct: "excited" },
                            { options: ["emit", "absorb", "watch"], correct: "emit" },
                            { options: ["sound", "visible light", "dancing"], correct: "visible light" }
                        ]
                    }
                ]
            }
        ]
    },
    "unit-2": {
        title: "Unit 2: Periodic Table",
        quizzes: [
            {
                name: "2.1 Valence Electrons and Reactivity",
                questions: [
                    {
                        id: "2.1-1",
                        type: "multiple-choice",
                        pointValue: 5,
                        questionText: "What type of electron determines how an atom reacts?",
                        options: ["octet", "valence", "inert", "orbital"],
                        correctIndex: 1
                    }
                ]
            },
            {
                name: "2.2 Periodic Trends",
                questions: [
                    {
                        id: "2.1-2",
                        type: "dropdown",
                        pointValue: 10,
                        textSegments: ["Atomic radius ", " as you move across the table and ", " as you move down the table."],
                        blanks: [
                            { options: ["increases", "decreases"], correct: "decreases" },
                            { options: ["increases", "decreases"], correct: "increases" }
                        ]
                    }
                ]
            }
        ]
    },
    "unit-3":{
        title: "Unit 3: Chemical Bonding",
        quizzes:[
            {
                name: "3.1 How do elements bond?",
                questions: [
                    
                ]
            },
            {
                name: "3.2 Ionic Bonds, Formulas, and Names",
                questions: [
                    
                ]
            },
            {
                name: "3.3 Covalent Bonds, Formulas, and Names",
                questions: [
                    
                ]
            },
            {
                name: "3.4 Identifying Bond Type with Electronegativity",
                questions: [
                    
                ]
            },
            {
                name: "3.5 Compound Properties and Designed Materials",
                questions: [
                    
                ]
            }
        ]
    },
    "unit-4":{
        title: "Unit 4: Chemical and Physical Properties",
        quizzes:[
            {
                name: "4.1 Chemical and Physical Properties",
                questions: [
                    
                ]
            },
            {
                name: "4.2 Measuring Density: Mass and Volume",
                questions: [
                    
                ]
            },
            {
                name: "4.3 Calculating Density",
                questions: [
                    
                ]
            },
            {
                name: "4.4 Density Applications",
                questions: [
                    
                ]
            },
            {
                name: "4.5 Intermolecular Forces and Intramolecular Forces",
                questions: [
                    
                ]
            }
        ]
    },
    "unit-5":{
        title: "Unit 5: Intro to Chemical Reactions",
        quizzes:[
            {
                name: "5.1 Indicators of a chemical reaction",
                questions: [
                    
                ]
            },
            {
                name: "5.2 Law of Conservation of Matter",
                questions: [
                    
                ]
            },
            {
                name: "5.3 Types of Reactions",
                questions: [
                    
                ]
            }
        ]
    },
    "unit-6":{
        title: "Unit 6: Chemical Equations",
        quizzes:[
            {
                name: "6.1 Predicting Products",
                questions: [
                    
                ]
            },
            {
                name: "6.2 Balancing Equations",
                questions: [
                    
                ]
            }
        ]
    }

};




// =========================================================================
// 3. Student Data (One Example for Now)
// =========================================================================
const students = {
    "John.Doe6974@GCPSK12.org":{
        name: "John Doe",
        username: "John Doe",
        earnedPoints: 0,
        possiblePoints: 0,
        classPercentage: 0,
        units: {
            "unit-1": {
                test: {raw: 90, bonus: 7, display: 97.9, points: 5.8},
                lab: {raw: 90, bonus: 0, display: 90, points: 3.6},
                progress: {total:3720, display: 100, points: 3},
                inClassPoints: 2700,
                inClassAssignments:{"Unit 1 Packet": 700, "Unit 1 Quiz": 1000, "Unit 1 Review": 1000},
                quizPoints: 1020,
                quizScores: { 0: 250, 1: 250, 2: 500, 3: 20, 4: 0, 5: 0, 6: 0 },
                cumulativeQuizScore: 0
                
            },  
            "unit-2": {
                test: {raw: 0, bonus: 20, display: 0, points: 0},
                lab: {raw: 0, bonus: 20, display: 0}, points: 0,
                progress: {total:7000, display: 100}, points: 3,
                inClassPoints: 7000,
                inClassAssignments:{"2.1 Paper": 7000},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0},
                cumulativeQuizScore: 0
            },
            "unit-3": {
                test: {raw: 0, bonus: 0, display: 0, points: 0},
                lab: {raw: 0, bonus: 0, display: 0, points: 0},
                progress: {total:0, display: 0, points: 0},
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
                cumulativeQuizScore: 0
            },
            "unit-4": {
                test: {raw: 0, bonus: 0, display: 0, points: 0},
                lab: {raw: 0, bonus: 0, display: 0, points: 0},
                progress: {total:0, display: 0, points: 0},
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
                cumulativeQuizScore: 0
            },
            "unit-5": {
                test: {raw: 0, bonus: 0, display: 0, points: 0},
                lab: {raw: 0, bonus: 0, display: 0, points: 0},
                progress: {total:0, display: 0, points: 0},
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0},
                cumulativeQuizScore: 0
                
            },
            "unit-6": {
                test: {raw: 0, bonus: 0, display: 0, points: 0},
                lab: {raw: 0, bonus: 0, display: 0, points: 0},
                progress: {total:0, display: 0, points: 0},
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0},
                cumulativeQuizScore: 0
                
            } 
        },
        quizSessions: []
    }
};



// server.js

/**
 * Calculates the sum of in-class assignment points for each unit 
 * and updates the respective `inClassPoints` property.
 * @param {Object} studentsObj - The master students object
 */
function updateInClassPoints(studentsObj) {
    // 1. Loop through each student email key
    for (const email in studentsObj) {
        const student = studentsObj[email];
        
        // Safety check to ensure the student has a 'units' object
        if (student.units) {
            
            // 2. Loop through each unit (e.g., "unit-1", "unit-2")
            for (const unitId in student.units) {
                const unit = student.units[unitId];
                
                // Safety check: ensure 'inClassAssignments' exists for this unit
                if (unit.inClassAssignments) {
                    
                    // 3. Extract all assignment scores as an array
                    const scores = Object.values(unit.inClassAssignments);
                    
                    // 4. Sum up the scores using reduce (start at 0)
                    const totalSum = scores.reduce((sum, currentScore) => {
                        return sum + (Number(currentScore) || 0);
                    }, 0);
                    
                    // 5. Update the inClassPoints property
                    unit.inClassPoints = totalSum;
                }
            }
        }
    }
}

// Calculate points for everyone right away
updateInClassPoints(students);

// Verify it worked for John Doe:
console.log("John's Unit 1 In-Class Points:", students["John.Doe6974@GCPSK12.org"].units["unit-1"].inClassPoints);
// Output should be: 2700 (700 + 1000 + 1000)
