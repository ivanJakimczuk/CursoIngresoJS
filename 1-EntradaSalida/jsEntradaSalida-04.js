	/* 
	Apellido y nombre: Jakimczuk Ivan
	ej: E/S 4
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'ID' al presionar el botón 'mostrar'
	*/
	function mostrar()
	{
		//declaro
		let nombre;
		//declaro el dato
		nombre= prompt("Ingrese su edad");
		//lo muestro
		document.getElementById("txtIdNombre").value = nombre;
	}

	//txtIdNombre
	/**
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * let nombre;
		nombre = prompt("Ingresa tu nombre");
		document.getElementById("txtIdNombre").value = nombre;
	*/