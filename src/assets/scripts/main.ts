"use strict";
console.log('This is the main.ts file inside the src/assets directory.');
const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

document.addEventListener("DOMContentLoaded", function() {

    console.log('hi')


    let dateElement : HTMLTimeElement | null = document.querySelector("time");
    if (!dateElement) {
        return;
    }

    // Get the date value from the datetime attribute
    let dateValue = dateElement?.getAttribute("datetime");
    if (!dateValue) {
        return;
    }

    // Create a Date object from the date value
    const date = new Date(dateValue);
    const now = new Date();
    const diffInMilliseconds = date.getTime() - now.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    console.log(date, now, diffInMilliseconds, diffInDays);

    // Format the date using the browser's Localization APIs
    var formattedDate = formatter.format(diffInDays, 'day');

    // Set the formatted date in the appropriate locations
    dateElement.setAttribute("title", formattedDate);
    dateElement.textContent = formattedDate;
});