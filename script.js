// fetching data of categories menu
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url).then(res => res.json()).then(data => {
    displayCategories(data.categories);
  });
}

// calling load categories function to load categories data
loadCategories();

// Removing active class from every categories
const removeActive = () => {
  const categoriesBtns = document.querySelectorAll('#categories button');
  categoriesBtns.forEach(categoriesBtn => categoriesBtn.classList.remove('active'));
}

// displaying categories to UI
const displayCategories = (categories) => {
  const caregoriesContainer = document.getElementById('categories');
  categories.forEach(categorieInfo => {
    caregoriesContainer.innerHTML += `
    <button id="menu-btn-${categorieInfo.id}" onclick="loadPlantCardData(${categorieInfo.id})" class="btn md:w-full justify-start p-3 bg-[#f0fdf4] text-black border-0 shadow-none font-normal hover:bg-[#15803D] hover:text-white">${categorieInfo.category_name}</button>
  `;
  })
}

// fetching All cards/plants data
const loadAllCardData = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url).then(res => res.json()).then(data => {
    displayAllPlants(data.plants);
  });
}

// Displaying All cards/plants to UI
const displayAllPlants =  (plants) => {
  const cardContainer = document.getElementById('card-container');
  plants.forEach(plant => {
    cardContainer.innerHTML += `
        <div class="card bg-base-100 shadow-sm p-4 h-auto">
          <figure>
            <img class="w-full rounded-lg h-[185px] object-cover"
              src="${plant.image}"
              alt="" />
          </figure>
          <div class="card-body p-0 mt-2 gap-2">
            <h2 onclick="loadModelData(${plant.id})" class="card-title text-base cursor-pointer">${plant.name}</h2>
            <p class="text-sm">${plant.description}</p>
            <div class="flex justify-between">
              <div class="badge badge-soft badge-success bg-[#DCFCE7] text-[#15803D] rounded-xl font-semibold">${plant.category}</div>
              <button id="tree-price-${plant.id}" class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i><span
                  class="font-semibold">${plant.price}</span></button>
            </div>
            <div class="card-actions">
              <button id="add-tocart-btn${plant.id}" 
                onclick="loadBalanceData(${plant.id}); loadTotalBalance(${plant.id});"
                class="btn btn-primary shadow-none border-0 w-full rounded-3xl bg-[#15803D] font-medium text-white mt-1">Add
                to Cart</button>
            </div>
          </div>
        </div>
    `;
  })
}

loadAllCardData();

const loadModelData = id => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then(res => res.json()).then(data => displayModal(data.plants));
}

const displayModal = plant => {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = `
    <div class="space-y-2">
      <h3 class="text-lg font-bold">${plant.name}</h3>
      <img class="w-full rounded-lg h-[210px] object-cover"
        src="${plant.image}"
        alt="" />
      <p><span class="font-semibold">Category:</span> <span>${plant.category}</span></p>
      <p><span class="font-semibold">Price:</span> ৳<span>${plant.price}</span></p>
      <p><span class="font-semibold">Description:</span> <span>${plant.description}</span></p>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  `;
  document.getElementById('my_modal').showModal();
}

const loadBalanceData = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then(res => res.json()).then(data => cartBalance(data.plants));
}

const cartBalance = (plant) => {
  const cartBalanceContainer = document.getElementById('cart-balance-container');
  cartBalanceContainer.innerHTML += `
    <div id="cart-info-${plant.id}" class="flex items-center bg-[#f0fdf4] py-1 px-2 justify-between mt-2 rounded-lg">
      <div>
        <h5 class="font-semibold text-[#1F2937] text-base mb-1">${plant.name}</h5>
        <p class="font-light text-[#1F2937]">৳<span>${plant.price}</span></p>
      </div>
      <img onclick="removeCartInfo(${plant.id})" class="cursor-pointer" src="./assets/close.png" alt="">
    </div>
  `;
}

const removeCartInfo = id => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then(res => res.json()).then(data => minusRemovePlantBalance(data.plants));
  const cartBalanceContainer = document.getElementById('cart-balance-container');
  const cartInfo = document.getElementById(`cart-info-${id}`);
  cartBalanceContainer.removeChild(cartInfo);
};

const minusRemovePlantBalance = plant => {
  let cartBalance = parseInt(document.getElementById('cart-total-balance').innerText);
  let treePrice = plant.price;
  let cartUpadatedBalance = cartBalance - treePrice;
  document.getElementById('cart-total-balance').innerText = cartUpadatedBalance;
}

// fetching plant card data
const loadPlantCardData = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url).then(res => res.json()).then(data => {
    removeActive();

    const categoryBtn = document.getElementById(`menu-btn-${id}`);
    categoryBtn.classList.add('active');
    displayPlantCard(data.plants);
  });
}

// show plant card by fetching data
const displayPlantCard = (plantData) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  plantData.forEach(plant => {
    cardContainer.innerHTML += `
      <div class="card bg-base-100 shadow-sm p-4 h-auto">
          <figure>
            <img class="w-full rounded-lg h-[185px] object-cover"
              src="${plant.image}"
              alt="" />
          </figure>
          <div class="card-body p-0 mt-2 gap-2">
            <h2 onclick="loadModelData(${plant.id})" class="card-title text-base cursor-pointer">${plant.name}</h2>
            <p class="text-sm">${plant.description}</p>
            <div class="flex justify-between">
              <div class="badge badge-soft badge-success bg-[#DCFCE7] text-[#15803D] rounded-xl font-semibold">${plant.category}</div>
              <button class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i><span
                  class="font-semibold">${plant.price}</span></button>
            </div>
            <div class="card-actions">
              <button onclick="loadTotalBalance(${plant.id}); loadBalanceData(${plant.id})"
                class="btn btn-primary shadow-none border-0 w-full rounded-3xl bg-[#15803D] font-medium text-white mt-1">Add
                to Cart</button>
            </div>
          </div>
        </div>
    `;
  });
}

const loadTotalBalance = id => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then(res => res.json()).then(data => cartTotalBalance(data.plants));
};

const cartTotalBalance = plant => {
  let cartBalance = parseInt(document.getElementById('cart-total-balance').innerText);
  let treePrice = plant.price;
  let cartUpadatedBalance = cartBalance + treePrice;
  document.getElementById('cart-total-balance').innerText = cartUpadatedBalance;
}