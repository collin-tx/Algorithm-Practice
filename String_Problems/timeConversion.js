// Time Conversion
// Given a time in 12 hour AM/PM format, convert it to military (24-hour) time.
// Write a second function that converts military time to 12 hour AM/PM time.

const toMilitaryTime = time => {
    let hour = Number(time.slice(0, 2));
    if(time.includes('AM')){
        return (hour === 12 ? '00' + time.slice(2, time.length - 2) : time.slice(0, time.length - 2));
    }
    let pmHour = hour === 12 ? 12 : hour + 12;
    let converted = (String(pmHour)+ time.slice(2, time.length - 2));
    return converted;
};


const toStandardTime = time => {
    let hour = Number(time.slice(0, 2));
    if(hour === 0){
        return '12' + time.slice(2) + 'AM';
    } else if (hour > 12){
        return (String(hour - 12) + time.slice(2) + 'PM');
    } else if (hour === 12){
        return String(hour) + time.slice(2) + 'PM';
    }
    return String(hour) + time.slice(2) + 'AM';
};

