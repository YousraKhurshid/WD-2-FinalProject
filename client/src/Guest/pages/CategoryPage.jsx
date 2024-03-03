import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CategoryPage() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`)
            .then(response => setProducts(response.data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, [categoryName]);

    return (
        <div className="container albert-sans-regular">
            <div className="my-5 text-center albert-sans-regular">
                <h1 style={{ fontSize: '2.5rem', color: '#000', marginBottom: '20px', textTransform: 'uppercase' }}>{categoryName}</h1>
            </div>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4 my-3" key={index}>
                        <Link className='text-decoration-none' to={`/products/${product.id}`}>
                            <Card style={{ backgroundColor: '#d9dfff', color: '#000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden', transition: 'transform 0.3s' }}>
                                <div style={{ width: '26rem', height: '22rem', overflow: 'hidden' }}>
                                    <img style={{ width: '26rem', height: '100%' }} src={product.thumbnail} alt={product.title} />
                                </div>
                                
                            </Card>
                            <Card.Body className='my-4 mb-5' style={{width:'100%', height:'3rem'}}>
                                <Card.Title style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
                                <div className='d-flex my-2'>
                                    
                                <Card.Text style={{ color: 'red'}}>${(product.price)- (product.price)*(product.discountPercentage/100)}</Card.Text>
                                <Card.Text className='ms-3' style={{ color: 'grey', textDecoration:'line-through'}}>${product.price}</Card.Text>
                                </div>
                                </Card.Body>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
