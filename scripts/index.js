let addToCartItem;
onLoad();

function onLoad(){
    let cartItemStr = localStorage.getItem('addToCartItem');
    addToCartItem = cartItemStr ? JSON.parse(cartItemStr) : [];
    displayItemsOnHome();
    cartItemCount();
}

function addToCart(itemId) {
    addToCartItem.push(itemId);
    localStorage.setItem('addToCartItem',JSON.stringify(addToCartItem));
    cartItemCount();
}
function cartItemCount(){
    let cartItemCountElement = document.querySelector('.cart-item-count');
    if (addToCartItem.length > 0){
        cartItemCountElement.style.visibility = "visible";
        cartItemCountElement.innerText = addToCartItem.length;
    }
    else{
        cartItemCountElement.style.visibility ='hidden';
    }
    
}
function displayItemsOnHome() {
    let itemeContainerElement = document.querySelector(".items-container");
    if (!itemeContainerElement){
        return;
    }
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
