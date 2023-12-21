/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts: array of objects 
 * @returns {number} total price
 */
function totalPrice(products) {
  return products.reduce( (sum, product) => sum + product.price, 0);
}

export {totalPrice};