import '../style.css';
let timeField = document.getElementById('time');

setInterval(() => {
  timeField.innerHTML = getTime();
}, 1000);

const getTime = () => {
  return new Date().toISOString();
};
