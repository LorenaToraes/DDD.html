document.getElementById("cities").addEventListener("click", function(event) {
	const lista = document.getElementById("lista")
	lista.textContent = ''
	const ddd = document.getElementById("ddd").value || '27'
	
	const api = `https://brasilapi.com.br/api/ddd/v1/${ddd}`
	
	fetch(api)
	.then((itens) => itens.json())
	.then(function(data) {
		const estado = data.state || ''
		const cidades = data.cities || []
		
		const h4 = document.querySelector('h4')
		h4.innerHTML = `Estado: ${estado}`
		
		cidades.forEach(function(cidade) {
			let li = document.createElement('li')
			li.innerHTML = cidade
			lista.appendChild(li)
		})
	})
}, false);
