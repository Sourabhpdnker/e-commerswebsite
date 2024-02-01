let addToCartItem =[];
displayItemsOnHome();
function addToCart(itemId) {
    addToCartItem.push(itemId);
    
    cartItemCount();
}
function cartItemCount(){
    let cartItemCountElement = document.querySelector('.cart-item-count');
    cartItemCountElement.innerText = addToCartItem.length;
}


function displayItemsOnHome() {
    let itemeContainerElement = document.querySelector(".items-container");
    let innerHtml = ``;
    item.forEach(item => {
        innerHtml += `<div class="item-container">
    <img class="item-image" src="${item.image}">
    <div class="rating">
        <p>${item.rating.stars} ⭐| ${item.rating.count}k</p>
    </div>
    <div class="company-name">
        ${item.company}
    </div>
    <div class="item-name">
        ${item.item_name}
    </div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-cart" onclick="addToCart(${item.id})">Add to Cart</button>
    
</div>`
    });
    itemeContainerElement.innerHTML = innerHtml;
}
