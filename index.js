$(function () {
  setInterval(() => {
    let height = Math.round(Math.random() * 300);
    let width = Math.round(Math.random() * 300);
    let left = Math.round(Math.random() * 1500);
    let top = Math.round(Math.random() * 700);
    
    $('.block').animate({
      'height': `${height}px`,
      'width': `${width}px`,
      'left': `${left}px`,
      'top': `${top}px`,
    }, 3000, 'easeOutSine');
  })

  setInterval(() => {
    let colorR = Math.round(Math.random() * 255);
    let colorG = Math.round(Math.random() * 255);
    let colorB = Math.round(Math.random() * 255);
    let sizeShadow = Math.round(Math.random() * 50);
    let opacity = Math.random().toFixed(1);
    $('.block').css({
      'background-color': `rgb(${colorR}, ${colorG}, ${colorB})`,
      'box-shadow': `0 0 ${sizeShadow}px rgba(${colorR}, ${colorG}, ${colorB}, ${opacity})`
    });

  }, 500);
});