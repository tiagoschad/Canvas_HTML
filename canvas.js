var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

c.fillStyle = 'yellow'
c.fillRect(100,100,100,100)

c.beginPath()
c.moveTo(50,500)
c.lineTo(300,100)
c.strokeStyle = "red"
c.stroke()

c.beginPath()
c.arc(400,400,60,0, Math.PI*2, false)
c.strokeStyle = "blue"
c.stroke()