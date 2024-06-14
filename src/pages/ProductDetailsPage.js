import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { fetchProducts } from '../services/api';
import './styles.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const allProducts = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000);
      const selectedProduct = allProducts.find(p => p.id === productId);
      setProduct(selectedProduct);
    };
    loadProduct();
  }, [productId]);

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Container className="container">
      <Card>
        <CardContent>
          <div className="product-image">Image</div>
          <Typography variant="h4" className="mt-20">{product.name}</Typography>
          <Typography className="mt-20">Company: {product.company}</Typography>
          <Typography className="mt-20">Category: {product.category}</Typography>
          <Typography className="mt-20">Price: ${product.price}</Typography>
          <Typography className="mt-20">Rating: {product.rating}</Typography>
          <Typography className="mt-20">Discount: {product.discount}%</Typography>
          <Typography className="mt-20">Availability: {product.availability}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailsPage;
