function choropleth(select, data){
				//arreglo con valores del data
	var mval	= [],
				//colores de menos a más
		colors	= ["#EDF8E9","#BAE4B3","#74C476","#238B45"];

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
};
