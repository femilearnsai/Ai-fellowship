function runFirstProgram() {
    // This is a comment - JavaScript ignores this line
    // Let's display a message in our output area
    document.getElementById('first-output').innerHTML = 'Hello World! This message was created by JavaScript!';
    
    // Also show it in the browser console (open Developer Tools to see)
    console.log('Hello from JavaScript console!');
    }

function showAlert() {
    // Show a popup alert
    alert('This is a JavaScript alert!');
    }

function showBasicVariables() {
    // Creating variables with different declarations
    let studentName = "Alice";
    const schoolName = "Tech Academy";
    let age = 25;
  
    // Display the variables
    let output = `
        <strong>Basic Variables:</strong><br>
        Student Name: ${studentName}<br>
        School Name: ${schoolName}<br>
        Age: ${age}<br><br>
        <em>studentName and age use 'let' (can be changed)<br>
        schoolName uses 'const' (cannot be changed)</em>`;
    
        document.getElementById('variables-output').innerHTML = output;
        console.log('Student:', studentName, 'Age:', age, 'School:', schoolName);
    }

function showVariableTypes() {
    // Different data types
    let userName = "John Doe";           // String
    let userAge = 30;                    // Number
    let isActive = true;                 // Boolean
    let salary = 50000.50;              // Number (with decimals)
    let middleName = null;              // Null (intentionally empty)
    let nickname;                       // Undefined (not assigned)
    
    let output = `
        <strong>Variable Types:</strong><br>
        userName: "${userName}" (type: ${typeof userName})<br>
        userAge: ${userAge} (type: ${typeof userAge})<br>
        isActive: ${isActive} (type: ${typeof isActive})<br>
        salary: ${salary} (type: ${typeof salary})<br>
        middleName: ${middleName} (type: ${typeof middleName})<br>
        nickname: ${nickname} (type: ${typeof nickname})
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}

function demonstrateConstVsLet() {
    let changeable = "I can be changed";
    const permanent = "I cannot be changed";
    
    // Change the let variable
    changeable = "I have been changed!";
    
    // Try to change const (this would cause an error)
    // permanent = "This would cause an error!"; // Don't uncomment this!
    
    let output = `
        <strong>const vs let:</strong><br>
        changeable (let): "${changeable}"<br>
        permanent (const): "${permanent}"<br><br>
        <em>The 'let' variable was successfully changed.<br>
        Trying to change a 'const' variable would cause an error!</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}

function variableNamingExamples() {
    // Good variable names (descriptive and follow conventions)
    let firstName = "Maria";
    let lastName = "Garcia";
    let phoneNumber = "555-0123";
    let isLoggedIn = true;
    let totalPrice = 99.99;
    
    // Examples of what NOT to do (but still valid)
    let a = "Bad name - not descriptive";
    let x123 = "Confusing name";
    
    let output = `
        <strong>Variable Naming Examples:</strong><br><br>
        <strong>Good Names (descriptive):</strong><br>
        firstName: ${firstName}<br>
        lastName: ${lastName}<br>
        phoneNumber: ${phoneNumber}<br>
        isLoggedIn: ${isLoggedIn}<br>
        totalPrice: $${totalPrice}<br><br>
        <strong>Poor Names (avoid these):</strong><br>
        a: "${a}"<br>
        x123: "${x123}"<br><br>
        <em>Use camelCase and descriptive names!</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}

function exploreStrings() {
    // Different ways to create strings
    let singleQuotes = 'Hello World';
    let doubleQuotes = "JavaScript is fun";
    let templateLiteral = `Today is ${new Date().toDateString()}`;
    
    // String properties and methods
    let message = "Learning JavaScript";
    let length = message.length;
    let uppercase = message.toUpperCase();
    let lowercase = message.toLowerCase();
    
    let output = `
        <strong>Working with Strings:</strong><br><br>
        Single quotes: '${singleQuotes}'<br>
        Double quotes: "${doubleQuotes}"<br>
        Template literal: \`${templateLiteral}\`<br><br>
        <strong>String Methods:</strong><br>
        Original: "${message}"<br>
        Length: ${length} characters<br>
        Uppercase: "${uppercase}"<br>
        Lowercase: "${lowercase}"<br><br>
        <em>Template literals (\`) allow embedding variables with \${}</em>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreNumbers() {
    // Different number types
    let integer = 42;
    let decimal = 3.14159;
    let negative = -17;
    let scientific = 2.5e6; // 2,500,000
    
    // Math operations
    let sum = 10 + 5;
    let difference = 20 - 8;
    let product = 6 * 7;
    let quotient = 15 / 3;
    let remainder = 17 % 5;
    
    // Special number values
    let infinity = 1 / 0;
    let notANumber = "hello" * 5;
    
    let output = `
        <strong>Working with Numbers:</strong><br><br>
        Integer: ${integer}<br>
        Decimal: ${decimal}<br>
        Negative: ${negative}<br>
        Scientific notation: ${scientific}<br><br>
        <strong>Math Operations:</strong><br>
        10 + 5 = ${sum}<br>
        20 - 8 = ${difference}<br>
        6 × 7 = ${product}<br>
        15 ÷ 3 = ${quotient}<br>
        17 % 5 = ${remainder} (remainder)<br><br>
        <strong>Special Values:</strong><br>
        1 / 0 = ${infinity}<br>
        "hello" * 5 = ${notANumber}<br>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreBooleans() {
    // Boolean values
    let isTrue = true;
    let isFalse = false;
    
    // Boolean from comparisons
    let isGreater = 10 > 5;        // true
    let isEqual = 5 === 5;         // true
    let isNotEqual = 3 !== 7;      // true
    let isLessOrEqual = 4 <= 4;    // true
    
    // Truthy and falsy values
    let truthyString = Boolean("hello");    // true
    let falsyString = Boolean("");          // false
    let truthyNumber = Boolean(42);         // true
    let falsyNumber = Boolean(0);           // false
    
    let output = `
        <strong>Working with Booleans:</strong><br><br>
        <strong>Direct Boolean Values:</strong><br>
        isTrue: ${isTrue}<br>
        isFalse: ${isFalse}<br><br>
        <strong>Boolean from Comparisons:</strong><br>
        10 > 5: ${isGreater}<br>
        5 === 5: ${isEqual}<br>
        3 !== 7: ${isNotEqual}<br>
        4 <= 4: ${isLessOrEqual}<br><br>
        <strong>Truthy vs Falsy:</strong><br>
        Boolean("hello"): ${truthyString}<br>
        Boolean(""): ${falsyString}<br>
        Boolean(42): ${truthyNumber}<br>
        Boolean(0): ${falsyNumber}<br><br>
        <em>Empty strings, 0, null, undefined are "falsy"</em>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreSpecialValues() {
    // Undefined variable
    let undefinedVar;
    
    // Null value
    let nullVar = null;
    
    // Check types
    let definedVar = "I have a value";
    
    let output = `
        <strong>Special Values:</strong><br><br>
        <strong>Undefined:</strong><br>
        Value: ${undefinedVar}<br>
        Type: ${typeof undefinedVar}<br><br>
        <strong>Null:</strong><br>
        Value: ${nullVar}<br>
        Type: ${typeof nullVar} (this is a JavaScript quirk!)<br><br>
        <strong>Defined Variable:</strong><br>
        Value: "${definedVar}"<br>
        Type: ${typeof definedVar}<br><br>
        <strong>Key Differences:</strong><br>
        • undefined: Variable exists but has no value<br>
        • null: Intentionally set to "no value"<br>
        • Both are "falsy" in boolean context
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}

function showArithmeticOperators() {
    let a = 10;
    let b = 3;
    
    let addition = a + b;        // 13
    let subtraction = a - b;     // 7
    let multiplication = a * b;  // 30
    let division = a / b;        // 3.333...
    let remainder = a % b;       // 1
    let exponentiation = a ** b; // 1000
    
    let output = `
        <strong>Arithmetic Operators:</strong><br><br>
        a = ${a}, b = ${b}<br><br>
        Addition (a + b): ${addition}<br>
        Subtraction (a - b): ${subtraction}<br>
        Multiplication (a * b): ${multiplication}<br>
        Division (a / b): ${division.toFixed(3)}<br>
        Remainder/Modulo (a % b): ${remainder}<br>
        Exponentiation (a ** b): ${exponentiation}<br><br>
        <em>% gives remainder, ** is exponentiation (ES2016)</em>
    `;
    
    document.getElementById('operators-output').innerHTML = output;
}

function showBasicComparisons() {
    let a = 10;
    let b = 5;
    let c = 10;
    
    let output = `
        <strong>Basic Comparison Operators:</strong><br><br>
        a = ${a}, b = ${b}, c = ${c}<br><br>
        <strong>Greater than (>):</strong><br>
        a > b: ${a > b}<br>
        b > a: ${b > a}<br><br>
        <strong>Less than (<):</strong><br>
        a < b: ${a < b}<br>
        b < a: ${b < a}<br><br>
        <strong>Greater than or equal (>=):</strong><br>
        a >= c: ${a >= c}<br>
        b >= a: ${b >= a}<br><br>
        <strong>Less than or equal (<=):</strong><br>
        a <= c: ${a <= c}<br>
        a <= b: ${a <= b}<br><br>
        <em>These operators return boolean values (true/false)</em>
    `;
    
    document.getElementById('comparison-output').innerHTML = output;
}

function showEqualityOperators() {
    let num = 5;
    let str = "5";
    let bool = true;
    let one = 1;
    
    let output = `
        <strong>Equality Operators (== vs ===):</strong><br><br>
        num = ${num} (number), str = "${str}" (string)<br>
        bool = ${bool} (boolean), one = ${one} (number)<br><br>
        <strong>Loose equality (==) - allows type conversion:</strong><br>
        num == str: ${num == str} (5 == "5")<br>
        bool == one: ${bool == one} (true == 1)<br>
        "" == false: ${"" == false} (empty string == false)<br>
        0 == false: ${0 == false} (zero == false)<br><br>
        <strong>Strict equality (===) - no type conversion:</strong><br>
        num === str: ${num === str} (5 === "5")<br>
        bool === one: ${bool === one} (true === 1)<br>
        "" === false: ${"" === false} (empty string === false)<br>
        0 === false: ${0 === false} (zero === false)<br><br>
        <strong>Not equal operators:</strong><br>
        num != str: ${num != str} (loose not equal)<br>
        num !== str: ${num !== str} (strict not equal)<br><br>
        <em>Always use === and !== to avoid unexpected behavior!</em>
    `;
    
    document.getElementById('comparison-output').innerHTML = output;
}

function showTypeCoercion() {
    // Examples of type coercion with ==
    let examples = [
        { left: 5, right: "5", loose: 5 == "5", strict: 5 === "5" },
        { left: true, right: 1, loose: true == 1, strict: true === 1 },
        { left: false, right: 0, loose: false == 0, strict: false === 0 },
        { left: null, right: undefined, loose: null == undefined, strict: null === undefined },
        { left: "", right: 0, loose: "" == 0, strict: "" === 0 }
    ];
    
    let output = `
        <strong>Type Coercion Examples:</strong><br><br>
        <table style="border-collapse: collapse; width: 100%;">
            <tr style="background-color: #dee2e6;">
                <th style="padding: 8px; border: 1px solid #ccc;">Comparison</th>
                <th style="padding: 8px; border: 1px solid #ccc;">== (loose)</th>
                <th style="padding: 8px; border: 1px solid #ccc;">=== (strict)</th>
            </tr>
    `;
    
    examples.forEach(ex => {
        output += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof ex.left === 'string' ? '"' + ex.left + '"' : ex.left} vs ${typeof ex.right === 'string' ? '"' + ex.right + '"' : ex.right}</td>
                <td style="padding: 8px; border: 1px solid #ccc; color: ${ex.loose ? 'green' : 'red'}">${ex.loose}</td>
                <td style="padding: 8px; border: 1px solid #ccc; color: ${ex.strict ? 'green' : 'red'}">${ex.strict}</td>
            </tr>
        `;
    });
    
    output += `
        </table><br>
        <em>Type coercion with == can lead to confusing results. Use === for predictable comparisons!</em>
    `;
    
    document.getElementById('comparison-output').innerHTML = output;
}

function showStringConcatenation() {
    let firstName = "John";
    let lastName = "Doe";
    let age = 25;
    
    // Old way: string concatenation with +
    let greeting1 = "Hello, my name is " + firstName + " " + lastName + ".";
    let info1 = "I am " + age + " years old.";
    
    // Can get messy with complex strings
    let complex1 = "User: " + firstName + " " + lastName + " (Age: " + age + ")";
    
    let output = `
        <strong>String Concatenation with + operator:</strong><br><br>
        firstName = "${firstName}", lastName = "${lastName}", age = ${age}<br><br>
        <strong>Simple concatenation:</strong><br>
        greeting1: "${greeting1}"<br>
        info1: "${info1}"<br><br>
        <strong>Complex concatenation:</strong><br>
        complex1: "${complex1}"<br><br>
        <em>Notice how the + method can become hard to read with many variables</em>
    `;
    
    document.getElementById('string-output').innerHTML = output;
}
function showTemplateLiterals() {
    let firstName = "Jane";
    let lastName = "Smith";
    let age = 30;
    let city = "New York";
    
    // Modern way: template literals with backticks
    let greeting2 = `Hello, my name is ${firstName} ${lastName}.`;
    let info2 = `I am ${age} years old and live in ${city}.`;
    
    // Can include expressions
    let mathExample = `Next year I will be ${age + 1} years old.`;
    let upperCase = `My name in caps: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
    
    // Multi-line strings (impossible with quotes)
    let multiLine = `
        Name: ${firstName} ${lastName}
        Age: ${age}
        City: ${city}
        Status: ${age >= 18 ? 'Adult' : 'Minor'}
    `;
    
    let output = `
        <strong>Template Literals with \` (backticks):</strong><br><br>
        firstName = "${firstName}", lastName = "${lastName}", age = ${age}<br><br>
        <strong>Simple template literals:</strong><br>
        greeting2: "${greeting2}"<br>
        info2: "${info2}"<br><br>
        <strong>With expressions:</strong><br>
        mathExample: "${mathExample}"<br>
        upperCase: "${upperCase}"<br><br>
        <strong>Multi-line string:</strong><br>
        <pre>${multiLine}</pre>
        <em>Template literals are much cleaner and more readable!</em>
    `;
    
    document.getElementById('string-output').innerHTML = output;
}

function showStringMethods() {
    let message = "  JavaScript is Amazing!  ";
    
    let output = `
        <strong>Common String Methods:</strong><br><br>
        Original: "${message}"<br><br>
        <strong>Case methods:</strong><br>
        toLowerCase(): "${message.toLowerCase()}"<br>
        toUpperCase(): "${message.toUpperCase()}"<br><br>
        <strong>Whitespace methods:</strong><br>
        trim(): "${message.trim()}" (removes leading/trailing spaces)<br><br>
        <strong>Information methods:</strong><br>
        length: ${message.length} characters<br>
        charAt(2): "${message.charAt(2)}" (character at index 2)<br>
        indexOf("Script"): ${message.indexOf("Script")} (position of "Script")<br><br>
        <strong>Substring methods:</strong><br>
        substring(2, 12): "${message.substring(2, 12)}"<br>
        slice(-8, -3): "${message.slice(-8, -3)}" (negative indices)<br><br>
        <strong>Replace method:</strong><br>
        replace("Amazing", "Awesome"): "${message.replace("Amazing", "Awesome")}"<br><br>
        <strong>Split method:</strong><br>
        split(" "): [${message.trim().split(" ").map(word => `"${word}"`).join(", ")}]
    `;
    
    document.getElementById('string-output').innerHTML = output;
}

function showStringMethods() {
    let message = "  JavaScript is Amazing!  ";
    
    let output = `
        <strong>Common String Methods:</strong><br><br>
        Original: "${message}"<br><br>
        <strong>Case methods:</strong><br>
        toLowerCase(): "${message.toLowerCase()}"<br>
        toUpperCase(): "${message.toUpperCase()}"<br><br>
        <strong>Whitespace methods:</strong><br>
        trim(): "${message.trim()}" (removes leading/trailing spaces)<br><br>
        <strong>Information methods:</strong><br>
        length: ${message.length} characters<br>
        charAt(2): "${message.charAt(2)}" (character at index 2)<br>
        indexOf("Script"): ${message.indexOf("Script")} (position of "Script")<br><br>
        <strong>Substring methods:</strong><br>
        substring(2, 12): "${message.substring(2, 12)}"<br>
        slice(-8, -3): "${message.slice(-8, -3)}" (negative indices)<br><br>
        <strong>Replace method:</strong><br>
        replace("Amazing", "Awesome"): "${message.replace("Amazing", "Awesome")}"<br><br>
        <strong>Split method:</strong><br>
        split(" "): [${message.trim().split(" ").map(word => `"${word}"`).join(", ")}]
    `;
    
    document.getElementById('string-output').innerHTML = output
}

function createPersonalInfo() {
    // Student should modify these variables
    const firstName = "Alex";
    const lastName = "Johnson";
    const age = 22;
    const isStudent = true;
    const favoriteColor = "blue";
    
    // Calculate future age
    const futureAge = age + 5;
    
    // Create formatted display
    const personalInfo = `
        <div style="border: 2px solid ${favoriteColor}; padding: 15px; border-radius: 8px; background-color: #f9f9f9;">
            <h4 style="color: ${favoriteColor}; margin-top: 0;">Personal Information Card</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Current Age:</strong> ${age} years old</p>
            <p><strong>Student Status:</strong> ${isStudent ? 'Yes, I am a student' : 'No, I am not a student'}</p>
            <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
            <p><strong>In 5 years:</strong> I will be ${futureAge} years old</p>
            <p><strong>Fun Fact:</strong> My name has ${firstName.length + lastName.length} letters total!</p>
        </div>
    `;
    
    document.getElementById('exercise1-output').innerHTML = personalInfo;
}

function createCustomInfo() {
    // Get user input
    const firstName = prompt("Enter your first name:") || "Student";
    const lastName = prompt("Enter your last name:") || "Learner";
    const age = parseInt(prompt("Enter your age:")) || 20;
    const isStudent = confirm("Are you currently a student?");
    const favoriteColor = prompt("Enter your favorite color:") || "purple";
    
    const futureAge = age + 5;
    
    const personalInfo = `
        <div style="border: 2px solid ${favoriteColor}; padding: 15px; border-radius: 8px; background-color: #f9f9f9;">
            <h4 style="color: ${favoriteColor}; margin-top: 0;">Your Personal Information Card</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Current Age:</strong> ${age} years old</p>
            <p><strong>Student Status:</strong> ${isStudent ? 'Yes, I am a student' : 'No, I am not a student'}</p>
            <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
            <p><strong>In 5 years:</strong> You will be ${futureAge} years old</p>
            <p><strong>Fun Fact:</strong> Your name has ${firstName.length + lastName.length} letters total!</p>
        </div>
    `;
    
    document.getElementById('exercise1-output').innerHTML = personalInfo;
}

function demonstrateTypeof() {
    // Different variables with different types
    let stringVar = "Hello";
    let numberVar = 42;
    let booleanVar = true;
    let undefinedVar;
    let nullVar = null;
    let objectVar = {};
    let arrayVar = [];
    let functionVar = function() {};
    
    let output = `
        <strong>Using the typeof Operator:</strong><br><br>
        <table style="border-collapse: collapse; width: 100%;">
            <tr style="background-color: #dee2e6;">
                <th style="padding: 8px; border: 1px solid #ccc;">Variable</th>
                <th style="padding: 8px; border: 1px solid #ccc;">Value</th>
                <th style="padding: 8px; border: 1px solid #ccc;">typeof Result</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">stringVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">"${stringVar}"</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof stringVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">numberVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${numberVar}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof numberVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">booleanVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${booleanVar}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof booleanVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">undefinedVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${undefinedVar}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof undefinedVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">nullVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${nullVar}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof nullVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">objectVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">{}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof objectVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">arrayVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">[]</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof arrayVar}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">functionVar</td>
                <td style="padding: 8px; border: 1px solid #ccc;">function() {}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof functionVar}</td>
            </tr>
        </table><br>
        <em>Note: typeof null returns "object" (this is a known JavaScript quirk)<br>
        Arrays also return "object" because they are objects in JavaScript</em>
    `;
    
    document.getElementById('typeof-output').innerHTML = output;
}

function typeCheckingPractice() {
    // Function to safely check types
    function getDetailedType(value) {
        if (value === null) return "null";
        if (Array.isArray(value)) return "array";
        return typeof value;
    }
    
    // Test values
    let testValues = [
        "JavaScript",
        42,
        true,
        undefined,
        null,
        {},
        [1, 2, 3],
        function() { return "hello"; }
    ];
    
    let output = `
        <strong>Better Type Checking:</strong><br><br>
        <table style="border-collapse: collapse; width: 100%;">
            <tr style="background-color: #dee2e6;">
                <th style="padding: 8px; border: 1px solid #ccc;">Value</th>
                <th style="padding: 8px; border: 1px solid #ccc;">typeof</th>
                <th style="padding: 8px; border: 1px solid #ccc;">Better Check</th>
            </tr>
    `;
    
    testValues.forEach((value, index) => {
        let displayValue;
        if (typeof value === 'string') displayValue = `"${value}"`;
        else if (Array.isArray(value)) displayValue = `[${value.join(', ')}]`;
        else if (typeof value === 'function') displayValue = 'function() {...}';
        else if (typeof value === 'object' && value !== null) displayValue = '{}';
        else displayValue = String(value);
        
        output += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">${displayValue}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${typeof value}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${getDetailedType(value)}</td>
            </tr>
        `;
    });
    
    output += `
        </table><br>
        <strong>Type Checking Tips:</strong><br>
        • Use typeof for primitives (string, number, boolean, undefined)<br>
        • Check for null explicitly: value === null<br>
        • Use Array.isArray() for arrays<br>
        • Functions have typeof "function"<br>
        • Everything else is "object"
    `;
    
    document.getElementById('typeof-output').innerHTML = output;
}