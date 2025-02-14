function determineDays(){
  var daysRemaining;
      
  // How many days' supply remaining
  var resultDays = document.getElementById("resultDays");
  
  // Estimated date you'll run out of your medication
  var resultDate = document.getElementById("resultDate");
  
  // The value of the supply slider
  var supply = parseInt(document.getElementById("supply").value);
  
  // The value of the dose slider
  var dose = parseInt(document.getElementById("dose").value);
  
  // The value of the dose interval slider
  var interval = parseInt(document.getElementById("interval").value);
    
  // The values of supply, dose, and dose interval are displayed on the webpage using textContent
  document.getElementById("supply-val").textContent = supply + " mL";
  document.getElementById("dose-val").textContent = (dose / 100) + " mL";
  document.getElementById("interval-val").textContent = interval + " days";
    
  // The formula to calculate how many days' worth of medication you have
  // Assumes that 95% of what's in the vial(s) will end up in your body and that 5% will be wasted
  daysRemaining = ((supply * 0.95) / (dose/100)) * interval.toFixed(1);

  // How day count ends up being displayed on the page
  resultDays.textContent = daysRemaining.toFixed(0) + " days' worth";
      
  // Function to tack daysRemaining onto current date
  function addDays(date, days) {
      const futureDate = new Date(date);
      futureDate.setDate(date.getDate() + days);
      return futureDate;
  }

    // Get the current date
    const todayDate = new Date();

    // Number of days that we want to add to the current date
    const days = daysRemaining;

    // Function call to add days
    const futureDate = addDays(todayDate, days);
    
    // How the date medication is projected to run out is displayed on the page
    resultDate.textContent = "(" + futureDate.toDateString().substring(4) + ")";
  
    // Your supply is very low. Order a refill ASAP.
    if(daysRemaining < 14) {
      resultDays.style.color = "#ff0000";
      resultDate.style.color = "#ff0000";
    }
  
    // Your supply is getting low. You should considering ordering a refill if you haven't already.
    else if( daysRemaining >= 14.1 && daysRemaining <= 28 ) {
      resultDays.style.color = "#f27013";
      resultDate.style.color = "#f27013";
    }
  
    // Good to go - you have more than four weeks to two years' worth on hand.
    else if( daysRemaining >= 28.1 && daysRemaining <= 730 ) {
      resultDays.style.color = "#008000";
      resultDate.style.color = "#008000";
    }
  
    // If you have over a two year supply on hand, you might be at risk 
    // of some of it spoiling due to exceeding shelf life. Use caution. 
    else {
      resultdays.style.color = "#f27013";
      resultDate.style.color = "#f27013";
    }

    // Display the information on the webpage.
    document.getElementById("category").textContent = category;
  }

  window.onload = determineDays;