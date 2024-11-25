import React from 'react';

function ProductList(){
const products = [
  {id: 1, title: 'Notebook Pro', description: 'Notebook com 16GB RAM, SSD 512GB', price: '3499,99', onSale:false},
  {id: 2, title: 'Notebook Test', description: 'Notebook com 4GB RAM, SSD 112GB', price: '1799,99', onSale:true},
  {id: 3, title: 'Notebook Medium', description: 'Notebook com 8GB RAM, SSD 312GB', price: '2299,99', onSale:true}

];


  return (
    {products.map(product =>(
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <h2 className="font-bold text-xl mb-2">{product.title}</h2>
      <p className="text-gray-700 text-base mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-lg ${product.onSale ? 'text-red-600' : 'text-gray-900'}`}>
          R$ {product.price}
        </span>
        {product.onSale && (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Promoção
          </span>
        )}
      </div>
    </div>
  );
});
}

export default ProductList;
