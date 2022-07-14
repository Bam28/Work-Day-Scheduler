const signUpForm = document.querySelector('#sign-up');
const signInForm = document.querySelector('#sign-in');
const signUpButton = document.querySelector('#sign-up-button');
const signInButton = document.querySelector('#sign-in-button');
const daySectionElement = document.querySelector('.hours-section')

signUpButton.addEventListener('click', function signUp(event) {
    event.preventDefault()
    signUpForm.classList.add('hide')
    signInForm.classList.remove('hide')
});

let todayDate = () => {
    let todayDateFormat = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todayDateFormat;
    let currentHour = moment().format("HH");
}
//create a for loop for each hour of the day

const dayScheduler = {
    dayCreatorPerHour() {
        for(let i = 0; i <= 24; i++){
            let perHourInput = document.createElement('input')
            let perHourLabel = document.createElement('label')
            let hourText = i
            perHourInput.type = 'text'
            perHourLabel.class = 'hour form-label'
            perHourLabel.innerHTML = hourText
            daySectionElement.appendChild(perHourLabel)
            daySectionElement.appendChild(perHourInput)
        }
    },
    currentHourColor() {
        var timeDiv = $(this).attr("id").split("-")[1];
        
        if (currentHour == timeDiv) {
          $(this).addClass("present");
          $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currentHour > timeDiv) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      }
}

todayDate()
dayScheduler.dayCreatorPerHour()


