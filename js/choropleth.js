var choropleth = {
	do : function (select, data, colors) {
		//checa que el documento este listo

		var readyStateCheckInterval = setInterval(function() {
			if (document.readyState === "complete") {

				//arreglo con valores del data
				var mval	= [];

				for(l in data){
					mval.push(data[l])}

				//número de niveles según los colores
				var lvls	= colors.length-1,
					//valor máximo en data
					lMax	= Math.max.apply(Math,mval), 
					//svg
					map		= document.getElementById(select).contentDocument,
					//cuantiza
					q		= function(select){return~~(select*lvls	/lMax)};

				for(r in data){
					var region	= r,
						val		= data[r],
								rcol	= map.getElementById(region);
					rcol.style.fill = colors[q(val)]
				}

				//elimino el intervalo para checar documento listo
				clearInterval(readyStateCheckInterval);

			}
		}, 10);

	}
};
