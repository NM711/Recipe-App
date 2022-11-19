const bgImg = document.getElementById('mealPicture');
const mealName = document.getElementById('mealName');
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
const btn = document.getElementById('generateBtn');
const instructionsHead = document.getElementById('instructionsHead');
const ingredientList = document.querySelector('.ingredientList');
const mealInstCont = document.getElementById('mealInstructions');
const measurementsList = document.getElementById('measurementsList');
let clicks = 0;

btn.addEventListener('click', () =>{
    fetch(url)
.then (response => response.json())
.then ((data) => {
    function mealFunc(){
    mealName.textContent = data.meals[0].strMeal
    bgImg.style.backgroundImage = `url(${data.meals[0].strMealThumb})`
    bgImg.textContent = "";
    
    const instructionsText = document.createElement('p');
   instructionsText.textContent = data.meals[0].strInstructions
   instructionsHead.appendChild(instructionsText);

   const ing1 = data.meals[0].strIngredient1
   const ing2 = data.meals[0].strIngredient2
   const ing3 = data.meals[0].strIngredient3
   const ing4 = data.meals[0].strIngredient4
   const ing5 = data.meals[0].strIngredient5
   const ing6 = data.meals[0].strIngredient6
   const ing7 = data.meals[0].strIngredient7
   const ing8 = data.meals[0].strIngredient8
   const ing9 = data.meals[0].strIngredient9
   const ing10 = data.meals[0].strIngredient10
   const ing11 = data.meals[0].strIngredient11
   const ing12 = data.meals[0].strIngredient12
   const ing13 = data.meals[0].strIngredient13
   const ing14 = data.meals[0].strIngredient14
   const ing15 = data.meals[0].strIngredient15
   const ing16 = data.meals[0].strIngredient16
   const ing17 = data.meals[0].strIngredient17
   const ing18 = data.meals[0].strIngredient18
   const ing19 = data.meals[0].strIngredient19
   const ing20 = data.meals[0].strIngredient20

   const ingredientArr = [ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9, ing10, ing11, ing12,
    ing13, ing14, ing15, ing16, ing17, ing18, ing19, ing20]
    
    ingredientArr.forEach((ing) =>{
        let li = document.createElement('li');
        li.textContent = ing;
        ingredientList.appendChild(li)
    })

    const measure1 = data.meals[0].strMeasure1
    const measure2 = data.meals[0].strMeasure2
    const measure3 = data.meals[0].strMeasure3
    const measure4 = data.meals[0].strMeasure4
    const measure5 = data.meals[0].strMeasure5
    const measure6 = data.meals[0].strMeasure6
    const measure7 = data.meals[0].strMeasure7
    const measure8 = data.meals[0].strMeasure8
    const measure9 = data.meals[0].strMeasure9
    const measure10 = data.meals[0].strMeasure10
    const measure11 = data.meals[0].strMeasure11
    const measure12 = data.meals[0].strMeasure12
    const measure13 = data.meals[0].strMeasure13
    const measure14 = data.meals[0].strMeasure14
    const measure15 = data.meals[0].strMeasure15
    const measure16 = data.meals[0].strMeasure16
    const measure17 = data.meals[0].strMeasure17
    const measure18 = data.meals[0].strMeasure18
    const measure19 = data.meals[0].strMeasure19
    const measure20 = data.meals[0].strMeasure20

    const measurementArr = [measure1, measure2, measure3, measure4, measure5, measure6, measure7,
    measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16,
    measure17, measure18, measure19, measure20];

    measurementArr.forEach((measure) =>{
        let li = document.createElement('li')
        li.textContent = measure;
        measurementsList.appendChild(li);
    })
}
    if (clicks == 0){
        mealFunc()
        clicks++
    }else {
        while (ingredientList.lastChild){
            ingredientList.lastChild.remove()
            console.log('New Ingredients:')
        };

        while (measurementsList.lastChild){
            measurementsList.lastChild.remove()
            console.log('New Measurements')
        };

        instructionsHead.lastChild.remove()
        mealFunc()//function is ran again and everything that was deleted appears again with new recipe
    }
})
})