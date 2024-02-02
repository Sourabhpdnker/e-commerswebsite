const Convenience_CHARGE = 109;
let bagItemObjects;
onLoad();
function onLoad(){
    loadBagItemObjects();
    displayItemsOnCart();
    displayPriceSummary();
}
function displayPriceSummary(){
    let carSummaryElement= document.querySelector('.bag-summary');
    let totalItems = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscont =0;

    bagItemObjects.forEach(addToCartItem => {
        totalMRP += addToCartItem.original_price;
        totalDiscont += addToCartItem.original_price - addToCartItem.current_price;
    });
    let finalPrice = totalMRP - totalDiscont + 109;

    carSummaryElement.innerHTML= `
    <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscont}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${Convenience_CHARGE}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPrice}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}
function loadBagItemObjects() {
    console.log(addToCartItem);
    bagItemObjects = addToCartItem.map(itemId => {
      for (let i = 0; i < item.length; i++) {
        if (itemId == item[i].id) {
          return item[i];
        }
      }
    });
    console.log(bagItemObjects);
  }
function displayItemsOnCart(){
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML ='';
    bagItemObjects.forEach(addToCartItem => {
        innerHTML += genereteItemHtml(addToCartItem);
    });
    containerElement.innerHTML= innerHTML;
}
function removeItemFrmCart(itemId){
    addToCartItem = addToCartItem.filter(bagitemId => bagitemId != itemId);
    localStorage.setItem('addToCartItem',JSON.stringify(addToCartItem));
    loadBagItemObjects();
    cartItemCount();
    displayItemsOnCart();
    displayPriceSummary();
}

function genereteItemHtml(item){
    return`<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
    </div>

    <div class="remove-from-cart" onclick="removeItemFrmCart(${item.id})">X</div>
</div>`;
}
