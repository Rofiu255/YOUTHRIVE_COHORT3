// 1. Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)
function checkScore(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

// 2. Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".
function checkEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

// 3. Write a function that takes a name and score, then returns:

// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function evaluateScore(name, score) {
    if (score >= 90) {
        return `${name}, Excellent`;
    } else if (score >= 75) {
        return `${name}, Good`;
    } else if (score >= 50) {
        return `${name}, Average`;
    } else {
        return `${name}, Fail`;
    }
}

// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

// 5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.
function evaluateScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}


// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const checkSubjects = (mathScore, englishScore) => {
    if (mathScore >= 50 && englishScore >= 50) {
        return "Yes";
    } else {
        return "No";
    }
}


// 7. Create a function that checks if a user has either an email or a phone number before signing up.
function checkSignup(email, phone) {
    if (email || phone) {
        return "Signup successful";
    } else {
        return "Please provide an email or phone number";
    }
}

// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
function validateCredentials(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Valid input";
    }
}


// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function checkWorkHours(hours) {
    return (hours >= 40) ? "Full-time" : "Part-time";
}

// 10. Write an arrow function that takes two numbers and returns the larger one.
const findLargerNumber = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}