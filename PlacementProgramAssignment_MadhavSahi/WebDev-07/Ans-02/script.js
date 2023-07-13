function updateTime() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const time = `${hours}:${minutes}:${seconds}`;
    const date = now.toDateString();
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  setInterval(updateTime, 1000);
  