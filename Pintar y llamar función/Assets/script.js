document.getElementById("ele1").addEventListener("click", (event, color) => {
    const ele = event.target
    ele.style.backgroundColor = color || 'yellow'
  })
  
  