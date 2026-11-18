// 1. Seleccionamos el botón usando su ID
        const boton = document.getElementById('btnAzul');

        // 2. Escuchamos el evento 'click' en el botón
        boton.addEventListener('click', function() {
            // 3. Cambiamos la propiedad de estilo backgroundColor del body a 'blue'
            document.body.style.backgroundColor = 'blue';
        });