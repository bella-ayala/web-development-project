function displayTime() { //to get different timezones
   

    const bahrainDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Bahrain"}); //creates the date and time in Bahrain
    document.getElementById("bahrainTime").innerHTML = bahrainDate; //this is what I call in HTML for each different timezone
  
    const jeddahDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Riyadh"});//creates the date and time in Jeddah
    document.getElementById("jeddahTime").innerHTML = jeddahDate;

    const melbourneDate = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne"});//creates the date and time in Melbourne
    document.getElementById("melbourneTime").innerHTML = melbourneDate;

    const tokyoDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});//creates the date and time in Tokyo
    document.getElementById("tokyoTime").innerHTML = tokyoDate;

    const shanghaiDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});//creates the date and time in Shanghai
    document.getElementById("shanghaiTime").innerHTML = shanghaiDate;

    const miamiDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});//creates the date and time in  Miami
    document.getElementById("miamiTime").innerHTML = miamiDate;

    const imolaDate = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});//creates the date and time in Imola
    document.getElementById("imolaTime").innerHTML = imolaDate;

    const monacoDate = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});//creates the date and time in Monaco
    document.getElementById("monacoTime").innerHTML = monacoDate;

    const montrealDate = new Date().toLocaleString("en-US", {timeZone: "America/Toronto"});//creates the date and time in Montreal
    document.getElementById("montrealTime").innerHTML = montrealDate;

    const catalunyaDate = new Date().toLocaleString("en-US", {timeZone: "Europe/Madrid"});//creates the date and time in Catalunya
    document.getElementById("catalunyaTime").innerHTML = catalunyaDate;

    const spielbergDate = new Date().toLocaleString("en-US", {timeZone: "Europe/Vienna"});//creates the date and time in Spielberg
    document.getElementById("spielbergTime").innerHTML = spielbergDate;

    const silverstoneDate = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});//creates the date and time in Silverstone
    document.getElementById("silverstoneTime").innerHTML = silverstoneDate;


  }


  
  // Update time every second
  setInterval(displayTime, 1000);
  
  // Display time initially
  displayTime();
  