import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { Container, Grid, Card, CardContent, Typography, Select, MenuItem } from '@mui/material';
import './styles.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Laptop');
  const [company, setCompany] = useState('AMZ');
  const [sort, setSort] = useState('price');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(company, category, 10, 1, 10000);
      setProducts(data);
    };
    loadProducts();
  }, [category, company]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="mb-20" gutterBottom>
        Top Products
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} className="mb-20">
          <Select value={sort} onChange={handleSortChange}>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="discount">Discount</MenuItem>
          </Select>
        </Grid>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} className="card">
            <Card>
              <CardContent>
                <div className="product-image">Image</div>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Company: {product.company}</Typography>
                <Typography>Category: {product.category}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Rating: {product.rating}</Typography>
                <Typography>Discount: {product.discount}%</Typography>
                <Typography>Availability: {product.availability}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProductsPage;
