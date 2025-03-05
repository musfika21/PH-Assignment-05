function showDayAndDate() {
    let now = new Date();
  
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayName = daysOfWeek[now.getDay()];
  
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthName = monthNames[now.getMonth()];
  
    let day = now.getDate();
    let year = now.getFullYear();
  
    // Format date like "Jul 28 2025"
    let dateString = `${monthName} ${day} ${year}`;
    
  
    // Show inside the div
    document.getElementById('dateDiv').innerHTML = `${dayName} , <br> ${dateString}`;
  }
  
  // Call the function when the page loads
  showDayAndDate();