var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var x = 200;
var y = 200;
var auxX = 15;
var auxY = 5;
var cor = gerar_cor_hexadecimal()

function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}

ctx.fillStyle = cor 
    ctx.fillRect(200, 200, 200, 200); 

function animateY(){
  requestAnimationFrame(animateY)

  ctx.clearRect(0, 0, innerWidth, innerHeight)

   ctx.fillStyle = cor
   ctx.fillRect(200, y, 200, 200);

   if ((y + 200) > innerHeight) {
    auxY = -auxY
  }
  else if (y<0) auxY = -auxY
y = y + auxY
}

function animateX(){
 requestAnimationFrame(animateX)

ctx.clearRect(0, 0, innerWidth, innerHeight)

   ctx.fillStyle = cor
   ctx.fillRect(x, 200, 200, 200);

   if ((x + 200) > innerWidth) {
     auxX = -auxX
   }
   else if (x<0) auxX = -auxX
x = x + auxX
} 

function parar(){
  requestAnimationFrame(parar)
  ctx.clearRect(0, 0, innerWidth, innerHeight)
  ctx.fillStyle = cor
  ctx.fillRect(200, 200, 200, 200);
}

/*
//Desafio 1 
for (var i = 0; i < 10; i++) {

    auxX = x + auxX; //Reposiciona em X

    //Quadrado
    c.fillStyle = "green" //Escolhe a cor
    c.fillRect(auxX, 200, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //Iní­cio do comando
    c.moveTo(auxX,500); //Início da linha
    c.lineTo(auxX, 100); //Final da linha
    c.strokeStyle = 'red' //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //Círculo
    c.beginPath()
    c.arc(auxX, 400, 20, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue'
    c.stroke()
}
*/

/*
//Desafio 2
for (var i = 0; i < 10; i++) {

    auxX = Math.random()*500 + Math.random()*50; //Reposiciona em X
    auxY = Math.random()*150 + Math.random()*300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = 'pink' //Escolhe a cor
    c.fillRect(auxX, auxY, 100, 100); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX-Math.random()*50, x+auxX); //InÃ­cio da linha
    c.lineTo(auxX-Math.random()*50, y+auxY); //Final da linha
    c.strokeStyle = "red" //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY*Math.random(), 20, 0, Math.PI * 2, false);
    c.strokeStyle = "black"
    c.stroke();
}
*/

/*
//Desafio 3
for (var i = 0; i < 10; i++) {

    auxX = Math.random()*500 + Math.random()*50; //Reposiciona em X
    auxY = Math.random()*150 + Math.random()*300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = gerar_cor_hexadecimal() //Escolhe a cor
    c.fillRect(auxX, auxY, 100, 100); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxX - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = gerar_cor_hexadecimal(); //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY * Math.random() * 5, 20, 0, Math.PI * 2, false);
    c.strokeStyle = gerar_cor_hexadecimal();
    c.stroke();
}
*/


/*
//Desafio 4
//CÃ­rculo
c.beginPath();
c.arc(x, y, Math.random()*20, 0, Math.PI * 2, false);
c.strokeStyle = gerar_cor_hexadecimal()
c.stroke();
*/

/*
//Coração
ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
    */

    /*
    //Estrela Brilhante//
ctx.fillStyle = gerar_cor_hexadecimal();
ctx.beginPath();
ctx.moveTo(108, 0.0);
ctx.lineTo(141, 70);
ctx.lineTo(218, 78.3);
ctx.lineTo(162, 131);
ctx.lineTo(175, 205);
ctx.lineTo(108, 170);
ctx.lineTo(41.2, 205);
ctx.lineTo(55, 131);
ctx.lineTo(1, 78);
ctx.lineTo(75, 68);
ctx.lineTo(108, 0);
ctx.closePath();
ctx.fill();


    //Símbolo do Morcegão
    ctx.transform( 1 , 0 , 0 , -1 , canvas.width * 0.5 , canvas.height * 0.5 ); 
ctx.save( ); 

ctx.scale( 1, -1 );
ctx.font = '15px Arial';
var authorName = '@tiagoschad';
var authorNameMeasured = ctx.measureText( authorName );
ctx.fillStyle = '#10C4C4'; 
ctx.textBaseline = 'bottom'; 
ctx.fillText( authorName, ( authorNameMeasured.width * -0.5 ), ( canvas.height * 0.5 - 25 ) ); 
ctx.restore( ); 

var pencil = {
  'thickness': 1, 
  'color': {
    'black': '#000000',
    'blue': 'blue',
    'pink': 'pink',
    'orange': 'orange',
    'green': '#58f721',
    'red': '#fb4b4b',
    'purple': '#c07eff'
  }
};

a = 40; 

var graph = {
  'step': 0.5, 
  plot: function( curveObject ) {
      ctx.beginPath( );
      ctx.lineWidth = pencil.thickness;
      ctx.strokeStyle = curveObject.pencilColor; 
      for( var i = curveObject.lowerLimit ; i <= curveObject.upperLimit ; i += this.step  ) {

        switch( curveObject.inequalityFor ) {

          case 'x_axis':
            ctx.lineTo( i , curveObject.func( i ) ); 
            break;

          case 'y_axis':
            ctx.lineTo( curveObject.func( i ) , i ); 
            break;

          default:
            console.log( 'Curve object is missing inequalityFor property or has a value other than x_axis and y_axis' );

        };
          ctx.stroke( );
    };
  },
  clear: function( ) {
      ctx.clearRect( canvas.width * -0.5 , canvas.height * -0.5 , canvas.width , canvas.height );
  }
};

var curve_1 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_2 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_3 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( -( ( ( 3 * Math.sqrt( 33 ) ) - 7 ) * Math.pow( x , 2 ) ) / ( 112 * Math.pow( a , 2 ) ) + ( Math.abs( x / a ) / 2) + ( Math.sqrt( 1 - ( Math.pow( ( Math.abs( Math.abs( x / a ) - 2 ) - 1 ) , 2 ) ) ) ) - 3 );
  },
  'lowerLimit': -4 * a,
  'upperLimit': 4 * a,
  'pencilColor': pencil.color.black
};

var curve_4 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.black
};

var curve_5 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.black
};

var curve_6 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': 0.75 * a,
  'upperLimit': a,
  'pencilColor': pencil.color.black
};

var curve_7 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': -a,
  'upperLimit': -0.75 * a,
  'pencilColor': pencil.color.black
};

var curve_8 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': 0.5 * a,
  'upperLimit': 0.75 * a,
  'pencilColor': pencil.color.black
};

var curve_9 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': -0.75 * a,
  'upperLimit': -0.5 * a,
  'pencilColor': pencil.color.black
};

var curve_10 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 2.25 * a;
  },
  'lowerLimit': -0.5 * a,
  'upperLimit': 0.5 * a,
  'pencilColor': pencil.color.black
};

var curve_11 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': a,
  'upperLimit': 3 * a,
  'pencilColor': pencil.color.black
};

var curve_12 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': -3 * a,
  'upperLimit': -a,
  'pencilColor': pencil.color.black
};

function drawBatLogo( curveArray ) {
  for( var i = 0; i < curveArray.length; i++ ) {
    graph.plot( curveArray[i] );
  };
};

drawBatLogo( [curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9, curve_10, curve_11, curve_12] );
*/