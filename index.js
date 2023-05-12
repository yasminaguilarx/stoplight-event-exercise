   
    // Grab all the button elements and the three bulbs
  let stopBtn = document.querySelector('#stopButton');
  let slowBtn = document.querySelector('#slowButton');
  let goBtn = document.querySelector('#goButton');
  
  let stopBulb = document.querySelector('#stopLight');
  let slowBulb = document.querySelector('#slowLight');
  let goBulb = document.querySelector('#goLight');
  
  const div = document.getElementsByTagName('div')[0];
    
  div.addEventListener('click', (event) => {
    if(event.target.id === 'stopButton') {
      stopBulb.classList.toggle('stop');
      console.log(`${stopBtn.textContent} bulb ${stopLight.classList.contains('stop') ? 'on' : 'off'}`)
    } 
    if(event.target.id === 'slowButton') {
      slowBulb.classList.toggle('slow');
      console.log(`${slowBtn.textContent} bulb ${slowLight.classList.contains('slow') ? 'on' : 'off'}`)
    } 
    if(event.target.id === 'goButton') {
      goBulb.classList.toggle('go');
      console.log(`${goBtn.textContent} bulb ${goLight.classList.contains('go') ? 'on' : 'off'}`)
    } 
  });
