function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return [x, y]
}
var img = document.getElementById('img')
const canvas = document.querySelector('canvas')
var scale = 2;
canvas.width = 10000;
canvas.height = 10000;
canvas.addEventListener('mousedown', function(e) {
    var x = getCursorPosition(canvas, e)
    console.log("mouse: "+x)
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, x[0]-50, x[1]-40, 100, 80);
})

canvas.addEventListener('touchend', function(e) {
    var x = getCursorPosition(canvas, e)
    e.
    console.log("tocuh"+x)
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, x[0]-50, x[1]-40, 100, 80);
})