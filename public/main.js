$(document).ready(function(){
	cookBook = []
	$(searchName).on('click', function(){
		let search = $(searchRes).val();
		$(searchRes).val("");
		$.ajax({
			type: 'GET',
			url: 'https://api.edamam.com/search?q=chicken&app_id=73daf4ea&app_key=41b1b0c181878d888fbf62c7a70f0045'
		}).done(function(data){
			data.hits.forEach(function(r){
				let newRecipe = {
					label: r.recipe.label,
					ingredients: r.recipe.ingredientLines,
					url: r.recipe.url,
					image: r.recipe.image,
				}
				cookBook.push(newRecipe)
				$(searchRes.value).html("")
				for (let r in data.hits[0]){
					if(r == newRecipe.ingredients){

						console.log(r)
				
					// console.log($('#recipeList').append('<tr><td>' + newRecipe.label + '</td>' + '<td>' + newRecipe.ingredients + '</td>' + '<td><a>' + newRecipe.url + '</a></td>' + '<td><a>' + newRecipe.image + '</a></td>' + '</tr>'))
					}
				}
			})
		})
	})
})