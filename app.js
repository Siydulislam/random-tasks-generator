const generateTasks = document.getElementById("generateBtn");
generateTasks.addEventListener("click", function(){
    //console.log("button clicked")
    fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then(data => {
        document.getElementById("randomTasks").innerText = data.activity;
        document.getElementById("tasksType").innerText = data.type;
    })
})

