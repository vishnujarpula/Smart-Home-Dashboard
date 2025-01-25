// Lighting Control
const brightnessInput = document.getElementById('brightness');
const brightnessValue = document.getElementById('brightness-value');
const lightColorInput = document.getElementById('light-color');

brightnessInput.addEventListener('input', () => {
  brightnessValue.textContent = `${brightnessInput.value}%`;
});

lightColorInput.addEventListener('input', () => {
  document.body.style.backgroundColor = lightColorInput.value;
});

// Temperature Control
const tempInput = document.getElementById('temperature');
const tempValue = document.getElementById('temp-value');

tempInput.addEventListener('input', () => {
  tempValue.textContent = `${tempInput.value}°C`;
});

// Security Monitoring
const doorStatus = document.getElementById('front-door-status');
const toggleDoorBtn = document.getElementById('toggle-door');

toggleDoorBtn.addEventListener('click', () => {
  if (doorStatus.textContent === 'Locked') {
    doorStatus.textContent = 'Unlocked';
  } else {
    doorStatus.textContent = 'Locked';
  }
});

// Appliance Control
const tvControl = document.getElementById('tv-control');
const washingMachineControl = document.getElementById('washing-machine-control');

tvControl.addEventListener('change', () => {
  alert(`TV is now ${tvControl.checked ? 'ON' : 'OFF'}`);
});

washingMachineControl.addEventListener('change', () => {
  alert(`Washing Machine is now ${washingMachineControl.checked ? 'ON' : 'OFF'}`);
});
