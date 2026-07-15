
function calculate(){

    let input = document.getElementById("numbers").value;

    if(input.trim() === ""){
        alert("Please enter some numbers.");
        return;
    }

    let numbers = input.split(",").map(function(num){
        return Number(num.trim());
    });

    if(numbers.some(isNaN)){
        alert("Please enter valid numbers.");
        return;
    }

    let sum = numbers.reduce(function(total, num){
        return total + num;
    }, 0);

    let average = sum / numbers.length;
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);
    let range = highest - lowest;

    let evenCount = numbers.filter(function(num){
        return num % 2 === 0;
    }).length;

    let oddCount = numbers.filter(function(num){
        return num % 2 !== 0;
    }).length;

    document.getElementById("results").innerHTML =
        "<p><strong>Total Numbers:</strong> " + numbers.length + "</p>" +
        "<p><strong>Sum:</strong> " + sum + "</p>" +
        "<p><strong>Average:</strong> " + average.toFixed(2) + "</p>" +
        "<p><strong>Highest Number:</strong> " + highest + "</p>" +
        "<p><strong>Lowest Number:</strong> " + lowest + "</p>" +
        "<p><strong>Range:</strong> " + range + "</p>" +
        "<p><strong>Even Numbers:</strong> " + evenCount + "</p>" +
        "<p><strong>Odd Numbers:</strong> " + oddCount + "</p>";
}

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if(task.trim() === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
