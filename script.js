// fetching data of categories menu
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url).then(res => res.json()).then(data => displayCategories(data.categories));
}

// calling load categories function to load categories data
loadCategories();

// displaying categories to UI
const displayCategories = (categories) => {
  console.log(categories);
  const caregoriesContainer = document.getElementById('categories');
  categories.forEach(categorieInfo => {
    caregoriesContainer.innerHTML  += `
    <button id="menu-btn-${categorieInfo.id}" onclick="loadPlantCardData(${categorieInfo.id})" class="btn w-full justify-start p-3 bg-[#f0fdf4] text-black border-0 shadow-none font-normal">${categorieInfo.category_name}</button>
  `;
  })
}

// fetching plant card data
const loadPlantCardData = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url).then(res => res.json()).then(data => displayPlantCard(data.plants));
}

// show plant card by fetching data
const displayPlantCard = (plantData) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  plantData.forEach(plant => {
    console.log(plant);
    cardContainer.innerHTML += `
      <div class="card bg-base-100 shadow-sm p-4 h-auto">
          <figure>
            <img class="w-full rounded-lg"
              src="${plant.image}"
              alt="" />
          </figure>
          <div class="card-body p-0 mt-2 gap-2">
            <h2 class="card-title text-base">${plant.name}</h2>
            <p>${plant.description}</p>
            <div class="flex justify-between">
              <div class="badge badge-soft badge-success bg-[#DCFCE7] text-[#15803D] rounded-xl font-semibold">Fruit
                Tree</div>
              <button class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i><span
                  class="font-semibold">${plant.price}</span></button>
            </div>
            <div class="card-actions">
              <button
                class="btn btn-primary shadow-none border-0 w-full rounded-3xl bg-[#15803D] font-medium text-white">Add
                to Cart</button>
            </div>
          </div>
        </div>
    `;
  });
}