const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// =========================================================================
// 1. Questions
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
// 2. Student Data (One Example for Now)
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
                test: 90,
                lab: 82,
                inClassPoints: 0,
                inClassAssignments:{"Unit 1 Packet": 700, "Unit 1 Quiz": 1000, "Unit 1 Review": 1000},
                quizPoints: 0,
                quizScores: { 0: 250, 1: 250, 2: 500, 3: 20, 4: 0, 5: 0, 6: 0 },
                cumulativeQuizScore: 0,
                totalUnitProgress: 0,
                displayProgress: 0,
                testBonus: 0,
                labBonus: 0,
                displayLab: 0,
                displayTest: 0 
            },  
            "unit-2": {
                test: 70,
                lab: 83,
                inClassPoints: 0,
                inClassAssignments:{"2.1 Paper": 6000},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0},
                cumulativeQuizScore: 0,
                totalUnitProgress: 0,
                displayProgress: 0,
                testBonus: 0,
                labBonus: 0,
                displayLab: 0,
                displayTest: 0 
            },
            "unit-3": {
                test: 0,
                lab: 0,
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
                cumulativeQuizScore: 0,
                totalUnitProgress: 0,
                displayProgress: 0,
                testBonus: 0,
                labBonus: 0,
                displayLab: 0,
                displayTest: 0 
            },
            "unit-4": {
                test: {raw: 0, bonus: 0, display: 0},
                lab: {raw: 0, bonus: 0, display: 0},
                progress: {total:0, display: 0},
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
                cumulativeQuizScore: 0
            },
            "unit-5": {
                testOriginal: 0,
                labOriginal: 0,
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0, 2: 0},
                cumulativeQuizScore: 0,
                totalUnitProgress: 0,
                displayProgress: 0,
                testBonus: 0,
                labBonus: 0,
                displayLab: 0,
                displayTest: 0
            },
            "unit-6": {
                test: 0,
                lab: 0,
                inClassPoints: 0,
                inClassAssignments:{},
                quizPoints: 0,
                quizScores: { 0: 0, 1: 0},
                cumulativeQuizScore: 0,
                totalUnitProgress: 0,
                displayProgress: 0,
                testBonus: 0,
                labBonus: 0,
                displayLab: 0,
                displayTest: 0 
            } 
        },
        quizSessions: []
    }
};

// Calculate running balance aggregates safely across tracked blocks
function calculatePointsTotals() {
    let globalRunningTotal = 0;
    
    Object.keys(studentData.units).forEach(uId => {
        const studentUnit = studentData.units[uId];
        
        // Sum up standard capped topic quiz allocations
        let calculatedQuizSum = 0;
        Object.keys(studentUnit.quizScores).forEach(qIdx => {
            calculatedQuizSum += studentUnit.quizScores[qIdx];
        });
        
        studentUnit.pointsFromQuizzes = calculatedQuizSum;
        studentUnit.totalUnitPoints = studentUnit.inClassPoints + studentUnit.pointsFromQuizzes;
        globalRunningTotal += studentUnit.totalUnitPoints;
    });

    studentData.overallPoints = globalRunningTotal;
    studentData.overallGoal = Object.keys(masterUnitContent).length * POINT_GOAL_PER_UNIT;
}

// Initial calculation call on boot
calculatePointsTotals();

// =========================================================================
// 3. EXPRESS ROUTE CONTROLLER CONTROLS
// =========================================================================

// Root Classroom Student Path
app.get('/', (req, res) => {
    res.render('dashboard', { student: studentData, masterContent: masterUnitContent });
});

// Unit Landing View
app.get('/unit/:unitId', (req, res) => {
    const masterUnit = masterUnitContent[req.params.unitId];
    const studentUnit = studentData.units[req.params.unitId];
    
    if (!masterUnit) return res.status(404).send("Unit blueprints missing.");
    
    res.render('unit', { 
        unitId: req.params.unitId,
        unit: masterUnit, 
        studentUnit: studentUnit,
        goal: POINT_GOAL_PER_UNIT
    });
});

// Quiz Execution Pipeline
app.get('/quiz/:unitId/:quizIndex', (req, res) => {
    const masterUnit = masterUnitContent[req.params.unitId];
    const targetIdx = parseInt(req.params.quizIndex);
    
    if (!masterUnit) return res.status(404).send("Unit template not found.");

    let sourceQuestions = [];
    let titleName = "";

    if (targetIdx === masterUnit.quizzes.length) {
        titleName = `${masterUnit.title} Cumulative Review`;
        masterUnit.quizzes.forEach(quiz => {
            sourceQuestions = sourceQuestions.concat(quiz.spreadsheetQuestions);
        });
        sourceQuestions.sort(() => Math.random() - 0.5);
    } else {
        const targetQuiz = masterUnit.quizzes[targetIdx];
        if (!targetQuiz) return res.status(404).send("Quiz track missing.");
        titleName = targetQuiz.name;
        sourceQuestions = targetQuiz.spreadsheetQuestions;
    }

    const compiledQuestions = sourceQuestions.map((q, idx) => {
        if (q.type !== 'algorithmic-math') return { ...q, originalIndex: idx };

        let context = {};
        let instanceText = q.questionText;
        
        let varSpecs = q.spreadsheetVariables.split(';');
        varSpecs.forEach(spec => {
            let [name, command] = spec.trim().split('=');
            name = name.trim(); command = command.trim();
            
            if (command.startsWith('int')) {
                let [min, max] = command.replace('int(', '').replace(')', '').split(',').map(Number);
                context[name] = Math.floor(Math.random() * (max - min + 1)) + min;
            
            } else if (command.startsWith('float')) {
                let [min, max, dec] = command.replace('float(', '').replace(')', '').split(',').map(Number);
                context[name] = parseFloat((Math.random() * (max - min) + min).toFixed(dec));
            
            }else if (command.startsWith('choice')) {
                let options = command.replace('choice(', '').replace(')', '')
                                     .split(',')
                                     .map(str => str.trim().replace(/['"]/g, '')); // Strips out quote marks
                context[name] = options[Math.floor(Math.random() * options.length)];
            }
        });

        if (q.spreadsheetEquations) {
            let eqSpecs = q.spreadsheetEquations.split(';');
            eqSpecs.forEach(spec => {
                let [name, expression] = spec.trim().split('=');
                name = name.trim(); expression = expression.trim();
                let fn = new Function(...Object.keys(context), `return ${expression};`);
                let result = fn(...Object.values(context));
                context[name] = typeof result === 'number' && !Number.isInteger(result) ? parseFloat(result.toFixed(2)) : result;
            });
        }

        for (let key in context) {
            instanceText = instanceText.replace(new RegExp(`\\[${key}\\]`, 'g'), `<strong>${context[key]}</strong>`);
        }

        let formulaFn = new Function(...Object.keys(context), `return ${q.spreadsheetFormula};`);
        let rawAnswer = formulaFn(...Object.values(context));
        let finalizedAnswer = parseFloat(rawAnswer.toFixed(q.roundingValue));

        return {
            id: q.id,
            type: 'algorithmic-math',
            questionText: instanceText,
            computedAnswer: finalizedAnswer,
            unitSymbol: q.unitSymbol,
            pointValue: q.pointValue,
            originalIndex: idx,
            spreadsheetVariables: q.spreadsheetVariables,
            spreadsheetEquations: q.spreadsheetEquations,
            spreadsheetFormula: q.spreadsheetFormula,
            roundingValue: q.roundingValue
        };
    });

    res.render('quiz', {
        unitId: req.params.unitId,
        quizIndex: req.params.quizIndex,
        quizName: titleName,
        compiledQuestions: compiledQuestions
    });
});

// NEW & SECURE: Point Allocation & Audit Logging Controller 
app.post('/quiz/:unitId/:quizIndex/save-points', (req, res) => {
    const studentUnit = studentData.units[req.params.unitId];
    const incomingPoints = parseInt(req.body.pointsEarnedThisSession) || 0;
    const targetIdx = parseInt(req.params.quizIndex);
    
    // Read secure telemetry variables tracking payload sent from client session
    const startTime = req.body.startTime; 
    const endTime = req.body.endTime;
    const attemptedIds = req.body.attemptedQuestionIds || [];
    
    let durationSeconds = 0;
    if (startTime && endTime) {
        durationSeconds = Math.round((new Date(endTime) - new Date(startTime)) / 1000);
    }

    const quizCount = Object.keys(studentUnit.quizScores).length;

    // Apply points to grade buckets
    if (targetIdx === quizCount) {
        studentUnit.inClassPoints += incomingPoints; 
    } else {
        const currentPoints = studentUnit.quizScores[targetIdx] || 0;
        const potentialNewPoints = currentPoints + incomingPoints;

        if (currentPoints >= TOPIC_POINT_CAP) {
            studentUnit.quizScores[targetIdx] = TOPIC_POINT_CAP;
        } else if (potentialNewPoints > TOPIC_POINT_CAP) {
            studentUnit.quizScores[targetIdx] = TOPIC_POINT_CAP;
        } else {
            studentUnit.quizScores[targetIdx] = potentialNewPoints;
        }
    }

    // AUDIT LOG GENERATION: Push telemetry details to profile timeline history
    studentData.quizSessions.push({
        sessionUuid: `sess-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        unitId: req.params.unitId,
        quizIndex: targetIdx,
        pointsEarned: incomingPoints,
        quizStartedAt: startTime,
        quizFinishedAt: endTime,
        timeElapsedSeconds: durationSeconds,
        questionsAttemptedList: attemptedIds,
        flaggedSuspicious: durationSeconds < 10 && incomingPoints > 40 // Example flag condition
    });

    calculatePointsTotals();
    
    // Log to server console so the teacher can see it in terminal instantly
    console.log("📊 NEW ATTEMPT COMPLETED:\n", studentData.quizSessions[studentData.quizSessions.length - 1]);

    res.json({ success: true, redirectUrl: `/unit/${req.params.unitId}` });
});

// Post Point Allocation Route Enforcing 500 Caps
app.post('/quiz/:unitId/:quizIndex/save-points', (req, res) => {
    const studentUnit = studentData.units[req.params.unitId];
    const incomingPoints = parseInt(req.body.pointsEarnedThisSession) || 0;
    const targetIdx = parseInt(req.params.quizIndex);

    const quizCount = Object.keys(studentUnit.quizScores).length;

    if (targetIdx === quizCount) {
        // Cumulative review has no point cap; bypass constraints and add directly
        studentUnit.inClassPoints += incomingPoints; 
    } else {
        // Standard Topic Track Cap Enforcer
        const currentPoints = studentUnit.quizScores[targetIdx] || 0;
        const potentialNewPoints = currentPoints + incomingPoints;

        if (currentPoints >= TOPIC_POINT_CAP) {
            studentUnit.quizScores[targetIdx] = TOPIC_POINT_CAP;
        } else if (potentialNewPoints > TOPIC_POINT_CAP) {
            studentUnit.quizScores[targetIdx] = TOPIC_POINT_CAP;
        } else {
            studentUnit.quizScores[targetIdx] = potentialNewPoints;
        }
    }

    calculatePointsTotals();
    res.json({ success: true, redirectUrl: `/unit/${req.params.unitId}` });
});

app.listen(3000, () => console.log('Relational Classroom Engine listening on port 3000!'));
