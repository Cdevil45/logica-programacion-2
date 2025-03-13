function convertirTemperatura() {
        let celsius = prompt("Por favor, ingrese la temperatura en grados Celsius:");

    // Validar que el dato ingresado sea un número
    if (isNaN(celsius) || celsius === null || celsius.trim() === "") {
        alert("Error: Por favor, ingrese un número válido.");
        convertirTemperatura(); 
    } else {
        // Convertir Celsius a número
        celsius = parseFloat(celsius);

        // Convertir a °F y K
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        // Mostrar los resultados en consola
        console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
        console.log(`Temperatura en Kelvin: ${kelvin.toFixed(2)} K`);

        // Mostrar los resultados en el DOM
        document.body.innerHTML = `
            
            <h1 style="color:red;">Resultados</h1>
            <p>Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
           <hr>
            <p style="color:random;">Temperatura en Kelvin: ${kelvin.toFixed(2)} K</p>
        `;
    }
}

convertirTemperatura();
