const signUpForm = document.querySelector('#sign-up');
const signInForm = document.querySelector('#sign-in');
const signUpButton = document.querySelector('#sign-up-button');
const signInButton = document.querySelector('#sign-in-button');
const daySectionElement = document.querySelector('.hours-section')


let todayDate = () => {
    let todayDateFormat = moment().format("MMMM Do YYYY");
    let displayDate = document.querySelector('#currentDay');
    displayDate.innerHTML = todayDateFormat;
    let currentHour = moment().format("HH");
}
//create a for loop for each hour of the day

const dayScheduler = {
    dayCreatorPerHour() {
        let hoursArray = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
        for(let i = 0; i < hoursArray.length; i++){
            let perHourSection = document.createElement('section');
            let perHourForm = document.createElement('form');
            let perHourInput = document.createElement('input');
            let perHourLabel = document.createElement('label');
            let perHourButton = document.createElement('input');
            let hourText = hoursArray[i]
            perHourSection.classList.add('perHourSection');
            // perHourSection.setAttribute('id', `${i + 1}`);
            perHourInput.type = 'text';
            perHourButton.type = 'button';
            perHourButton.classList.add('perHourButton');
            perHourLabel.classList.add('hour');
            perHourLabel.innerHTML = hourText;
            perHourButton.value = 'Save';
            daySectionElement.appendChild(perHourSection);
            perHourSection.appendChild(perHourForm)
            perHourForm.appendChild(perHourLabel);
            perHourForm.appendChild(perHourInput);
            perHourForm.appendChild(perHourButton);
        }
    },
    currentHourColor() {
        let currentHour = moment().format("HH");
        let hoursArray = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
        if (currentHour > hoursArray) {
            addClass("past");
            addClass("white-text");
        } else if (currentHour = id) {
            removeClass("present");
            addClass("future");
        } else if (currentHour < id) {
            removeClass("future");
            addClass("past");
        }
    },
    saveNote(note) {
        let key = note.substring(0, 3);
        localStorage.setItem(key, note);
    }
}


todayDate()
dayScheduler.dayCreatorPerHour()
dayScheduler.currentHourColor()


/*
function makeColorCode()
{
        timerInterval = setInterval(function()
    {
            for(t=0;t<timeofDayCount;t++)
        {
            var colouredTextA =$("#"+timeofDayCounter);
            var timeForNow = moment();
            var timeForNow2=timeForNow.format("HH");
            var slotTime = moment(timeOfDay[t],"HH mm a");
            if(timeForNow2==timeofDayCounter)
            {
                colouredTextA.addClass("present");
            }
            else
            {
                if(timeForNow.isAfter(slotTime))
                {
                    colouredTextA.addClass("past");
                }
                else
                {
                    colouredTextA.addClass("future");
                }
            }
            timeofDayCounter++;
        }
    }, 100);
}
*/