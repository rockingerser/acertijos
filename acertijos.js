!function() {
	'use strict';

	var acertijos = [];
	var acerAct = 0;

	class Acertijo {
		constructor(nombre, descripcion, tiempo, contenido) {
			this.nombre = nombre;
			this.descripcion = descripcion;
			this.tiempo = tiempo;
			this.contenido = contenido;
		}
	}




    
    acertijos.push(new Acertijo('dea', 'cimoelarer', 1, ''));




	var b = document.createElement('div');
	var d = document.createElement('div');
	b.style = 'position: fixed; inset: 0px; width: 100%; height: 100%; background: #00000080;';
	d.style = 'position: absolute; inset: 0px; font-family: arial, helvetica neue, helvetica, sans-serif; background: white; border-radius: 10px; margin: auto; width: 900px; height: 500px;';
	d.id = 'acertijo-div';

	d.innerHTML =
	  `<style>
	      #acertijo-div #temporizador {
	      	  margin: 10px 0;
	      	  font-size: 3em;
	      }
	      #acertijo-div #acertijo {
	      	  margin: 70px 0;
	      	  font-size: 1.2em;
	      }
	      #acertijo-div .interfaz {
	      	  text-align: center;
	      	  position: absolute;
	      	  left: 50%;
	      	  transform: translateX(-50%);
	      }
	  </style>
	  <span id="temporizador" class="interfaz"></span>
	  <p id="acertijo" class="interfaz"></p>
	  <div id="contenido"></div>`;
	document.body.appendChild(b);
	b.appendChild(d);

	var temporizador = document.querySelector('#acertijo-div #temporizador');
	var t;
	function cargarAcertijo(n) {
		var ac = acertijos[n];
		


		try {
			clearInterval(t);
		} catch (e) {

		}
		temporizador.value = ac.tiempo;
		document.querySelector('#acertijo-div #acertijo').textContent = ac.descripcion;
		temporizador.textContent = temporizador.value;
		t = setInterval(()=>{
		temporizador.textContent = (temporizador.value--) - 1;
		if (temporizador.value == 0) {
			var a = document.querySelector('#acertijo-div #acertijo');
			a.textContent = 'Perdiste';
			a.style.color = 'red';
			temporizador.animate([
				{ opacity: 1 },
				{ opacity: 0 }
			], {
				duration: 500
			});
			temporizador.style.opacity = 0;
			var ap = document.querySelector('#acertijo-div #acertijo');
			ap.animate([
				{ top: '0px' },
				{ top: '-50px' }
			], {
				duration: 700
			});
			ap.style.top = '-50px';
			var ti = document.head.querySelector('title');
			var tib = ti.text;
			ti.textContent = '❌ ' + ti.text;
			document.querySelector('#acertijo-div #contenido').innerHTML = '';
			setTimeout(()=>{
				ti.textContent = tib;
				document.getElementById('acertijo-div').parentElement.remove();
			}, 5000);
			clearInterval(t);
		}
	}, 1000);
	}
	cargarAcertijo(0);
}();