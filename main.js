function displayTime() {
    // Local time
   

    const localDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Bahrain"});
    document.getElementById("localTime").innerHTML = localDate;
  
    // Time in New York (Eastern Time Zone)
    const nyDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    document.getElementById("nyTime").innerHTML = nyDate;
  
    // Time in London (GMT)
    const londonDate = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    document.getElementById("londonTime").innerHTML = londonDate;
  }
  
  // Update time every second
  setInterval(displayTime, 1000);
  
  // Display time initially
  displayTime();
  