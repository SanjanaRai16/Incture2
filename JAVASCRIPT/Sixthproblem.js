/* function suggestWorkoutin12hour(time) {

    let hours=Date.gethours();
    switch(hours){
        case 1:hours>5&&hours<=9
            console.log("cardio session");
            break;
        case 2:hours>9&&hours<=12
            console.log("strength training");
            break;
        case 3:hours>12&&hours<=17
            console.log("yoga and flexibility");
            break;
        case 4:hours>17&&hours<=20
            console.log("high intensity interval training");
            break;
        case 5:hours>20&&hours<=24
            console.log("cool down and stretching");                
            break;
        default:            
            console.log("Invalid time");
            break;                              
    }
}
console.log(suggestWorkoutin12hour(3));
   */
/* function suggestWorkoutin12hour(timeStr) {
  let parts = timeStr.trim().split(' ');
  let hour = Number(parts[0]);
  let period = parts[1] ? parts[1].toUpperCase() : '';

  if (hour < 1 || hour > 12 || (period !== 'AM' && period !== 'PM')) {
    return "invalidt";
  }

  if (period === 'AM') {
    if (hour >= 6 && hour < 9) {
      return "cardio session";
    } else if (hour >= 9 && hour <= 12) {
      return "strength training";
    } 
  } else {
   if (hour > 12 || (hour >= 1 && hour <= 4)) {
      return "yoga and flexibility";
    } else if (hour >= 5 && hour < 8) {
      return "high intensity interval training";
    } else if (hour >= 8 && hour <= 12) {
      return "light stretching and cooldown";
    }
  }
}

console.log(suggestWorkoutin12hour("6:30 AM"));
console.log(suggestWorkoutin12hour("11 AM"));
console.log(suggestWorkoutin12hour("12 PM"));
console.log(suggestWorkoutin12hour("4 PM"));
console.log(suggestWorkoutin12hour("7 PM"));
console.log(suggestWorkoutin12hour("10 PM")); */



/* function suggestWorkoutin12hour(timeStr) {
  let parts = timeStr.trim().split(' '); 
  if (parts.length !== 2) return "invalidt";

  let timePart = parts[0]; 
  let period = parts[1].toUpperCase();  

  let hourMinute = timePart.split(':');
  let hour = Number(hourMinute[0]);

  if (isNaN(hour) || hour < 1 || hour > 12) {
    return "invalidt";
  }
  if (period !== 'AM' && period !== 'PM') {
    return "invalidt";
  }

  if (period === 'AM') {
    if (hour >= 6 && hour < 9) {
      return "cardio session";
    } else if (hour >= 9 && hour <= 12) {
      return "strength training";
    } else {
      return "light stretching and cooldown";
    }
  } else {
    if (hour === 12 || (hour >= 1 && hour <= 4)) {
      return "yoga and flexibility";
    } else if (hour >= 5 && hour < 8) {
      return "high intensity interval training";
    } else if (hour >= 8 && hour <= 11) {
      return "light stretching and cooldown";
    }
  }
}


console.log(suggestWorkoutin12hour("6:30 AM"));  
console.log(suggestWorkoutin12hour("10:15 AM"));    
console.log(suggestWorkoutin12hour("3 PM"));   
console.log(suggestWorkoutin12hour("5:45 PM"));     
console.log(suggestWorkoutin12hour("9:10 PM"));     
 
 */
/* 
function Workout(Time) {
  let parts = Time.trim().split(' '); 
  if (parts.length !== 2) return "invalidt";

  let time = parts[0]; 
  let period = parts[1].toUpperCase(); 

  let hourMinute = time.split(':');
  let hour = Number(hourMinute[0]);

  if (hour < 1 || hour > 12) {
    return "invalidt";
  }
  if (period !== 'AM' && period !== 'PM') {
    return "invalidt";
  }

  if (period === 'AM') {
    if (hour >= 6 && hour < 9) {
      return "cardio session";
    } else if (hour >= 9 && hour <= 11) {
      return "strength training";
    } else {
      return "light stretching and cooldown";
    }
  } else {
    if (hour === 12) {
      return "strength training";
    }
     else if (hour >= 1 && hour <= 5) {
      return "yoga and flexibility";
    } 
     else if (hour >= 6 && hour <= 8) {
      return "high intensity interval training";
     }else if (hour >= 9 && hour <= 11) {
      return "light stretching and cooldown";
    }
  }

  return "light stretching and cooldown";
}

console.log(Workout("6:30 AM"));
console.log(Workout("10:15 AM"));
console.log(Workout("3 PM"));
console.log(Workout("5:45 PM"));
console.log(Workout("9:10 PM"));
console.log(Workout("12:00 PM")); */


function Workout(Time) {
  let parts = Time.trim().split(' '); 
  if (parts.length !== 2) return "invalidt";

  let time = parts[0]; 
  let period = parts[1].toUpperCase(); 

  let hourMinute = time.split(':');
  let hour = Number(hourMinute[0]);
  let minute = hourMinute[1] ? Number(hourMinute[1]) : 0;

  if (hour < 1 || hour > 12 || isNaN(minute)) {
    return "invalidt";
  }
  if (period !== 'AM' && period !== 'PM') {
    return "invalidt";
  }

  let totalMinutes = (hour % 12) * 60 + minute;
  if (period === 'PM') {
    totalMinutes += 12 * 60;
  }

  if (totalMinutes >= 360 && totalMinutes < 540) {
    return "cardio session";
  } else if (totalMinutes >= 540 && totalMinutes < 720) {
    return "strength training";
  } else if (totalMinutes >= 720 && totalMinutes < 1020) {
    return "yoga and flexibility";
  } else if (totalMinutes >= 1020 && totalMinutes < 1200) {
    return "high intensity interval training";
  } else {
    return "light stretching and cooldown";
  }
}

console.log(Workout("6:30 AM"));
console.log(Workout("10:15 AM"));
console.log(Workout("3 PM"));
console.log(Workout("5:45 PM"));
console.log(Workout("9:10 PM"));
console.log(Workout("12:00 PM"));