$.ajax({
    type: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian',
    success: function(response){
        for(var i=0; i<response.meals.length; i++){
            var newItem = `<div class="col-3 my-3 mx-4 shadow-lg bg-body rounded text-center"> 
            <h5 class="font-weight-bold my-2"> ${response.meals[i].strMeal} </h5> 
            <img src = "${response.meals[i].strMealThumb}" class="img-fluid" /> 
            <p class="my-2">${response.meals[i].idMeal}</p> 
            </div>`
            $('#myitems').append(newItem);
        }
    },
    error: function(error){
        console.log(error);
    }
})