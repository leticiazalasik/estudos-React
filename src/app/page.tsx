import React from 'react';

function ProductList() {
  const products = [
    { id: 1, title: 'Notebook Pro', description: 'Notebook com 16GB RAM, SSD 512GB', price: '3499,99', onSale: false },
    { id: 2, title: 'Notebook Test', description: 'Notebook com 4GB RAM, SSD 112GB', price: '1799,99', onSale: true },
    { id: 3, title: 'Notebook Medium', description: 'Notebook com 8GB RAM, SSD 312GB', price: '2299,99', onSale: true },
    { id: 4, title: 'Notebook Medium', description: 'Notebook com 8GB RAM, SSD 312GB', price: '2299,99', onSale: true },
    { id: 5, title: 'Notebook', description: 'Notebook com 8GB RAM, SSD 312GB', price: '2299,99', onSale: false },
    { id: 6, title: 'Notebook', description: 'Notebook com 8GB RAM, SSD 312GB', price: '2299,99', onSale: false }



  ];

  const cardStyle: React.CSSProperties = {
    maxWidth: '300px',
    margin: '20px', // Espaçamento entre os cards
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    backgroundColor: 'white',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap', // Utiliza o cast para o tipo correto
    justifyContent: 'center',
    gap: '20px',
  };

  return (
    <div style={containerStyle}>
      {products.map(product => (
        <div key={product.id} style={cardStyle}>
          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px', color: 'black' }}>{product.title}</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>{product.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', color: product.onSale ? 'red' : '#333' }}>
              R$ {product.price}
            </span>
            {product.onSale && (
              <span style={{ backgroundColor: '#fdecea', color: '#d9534f', padding: '5px 10px', borderRadius: '5px' }}>
                Promoção
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
