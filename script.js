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
    let displayDate = document.querySelector('#currentDay');
    displayDate.innerHTML = todayDateFormat;
    let currentHour = moment().format("HH");
}
//create a for loop for each hour of the day

const dayScheduler = {
    dayCreatorPerHour() {
        let hoursArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']
        for(let i = 0; i < hoursArray.length; i++){
            let perHourInput = document.createElement('input')
            let perHourLabel = document.createElement('label')
            let hourText = hoursArray[i]
            perHourInput.type = 'text'
            perHourLabel.class = 'hour form-label'
            perHourLabel.innerHTML = hourText
            daySectionElement.appendChild(perHourLabel)
            daySectionElement.appendChild(perHourInput)
        }
    },
    currentHourColor() {
        if (currentHour) {
            addClass("present");
            addClass("white-text");
        } else if (currentHour) {
            removeClass("present");
            addClass("future");
        } else if (currentHour) {
            removeClass("future");
            addClass("past");
        }
      }
}

todayDate()
dayScheduler.dayCreatorPerHour()


