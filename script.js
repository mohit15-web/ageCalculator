const btn = document.getElementById("btn")
const birthdaybtn = document.getElementById("birthday")
const yearbtn = document.getElementById("yearbtn")
const monthbtn = document.getElementById("monthbtn")
const daybtn = document.getElementById("daybtn")

function calculateAge(){
    const birthdayValue = birthdaybtn.value;
    if(birthdayValue === ""){
        alert("please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
        const month = getMonth(birthdayValue)
        const day = getDay(birthdayValue)
        console.log(age);
        yearbtn.innerText = age
        monthbtn.innerText = month
        daybtn.innerText = day
    }
}

function getAge(birthdayValue){
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)
   

    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth()

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--
    }

    return age
}

function getMonth(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        month = 12 + month - 1; // Adjust month difference
    }

    return month;
}

function getDay(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    let day = currentDate.getDate() - birthdayDate.getDate();
    
    if (day < 0 || (day === 0 && currentDate.getMonth() < birthdayDate.getMonth())) {
        day = Math.abs(day); // Ensure day is positive
        day = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - day;
    }

    return day;
}

btn.addEventListener("click",calculateAge)