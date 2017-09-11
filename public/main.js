$(document).ready(function(){
	$(searchName).on('click', function(){
		let search = $(searchRes).val();
		$(searchRes).val("");

		let url1 = 'https://api.edamam.com/search?q=';
		let url2 = '&app_id=73daf4ea&app_key=41b1b0c181878d888fbf62c7a70f0045';

		$.ajax({
			type: 'GET',
			url: url1 + search + url2
		}).done(function(data){
			data.hits.forEach(function(r){
				let newRecipe = {
					label: r.recipe.label,
					ingredients: r.recipe.ingredientLines,
					url: r.recipe.url,
					image: r.recipe.image,
				};
				let table = $('#recipeList').append('<tr><td><b>' + newRecipe.label + '<b></td>' + '<td>' + newRecipe.ingredients + '</td>' + '<td><a href="' + newRecipe.url + '" target="_blank">' + newRecipe.url + '</a></td>' + '<td><a>' + newRecipe.image + '</a></td>' + '</tr>');
				// table.clear();
				console.log(table);
			})
		})
	})
})