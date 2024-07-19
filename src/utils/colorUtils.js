function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {
        border: `rgb(${r}, ${g}, ${b})`, 
        background: `rgb(${r}, ${g}, ${b}, 0.1)`}
  }

export { getRandomRGBColor };
  