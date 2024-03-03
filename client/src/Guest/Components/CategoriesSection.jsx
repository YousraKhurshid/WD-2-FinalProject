import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

export default function CategoriesSection() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
    }, []);

    return (
        <div className="container">
            <div className="my-5 text-center">
                <h1 className='albert-sans-regular'>Product Categories</h1>
                <img src="" alt="" />
                <p className="text-secondary albert-sans-regular-med">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum saepe ipsum quo nam, expedita
                    facere est alias incidunt fuga mollitia cupiditate rem id quos aperiam quisquam laboriosam dele
                    </p>
            </div>
            <div className="row albert-sans-regular">
                {categories.map((val, key) => (
                    <div className="col-md-4 my-3" key={key}>
                        <Link className="text-decoration-none" to={`/products/category/${val}`}>
                      <Card className="card" style={{
                        background: `#d9dfff`,
                        // background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
                                color: 'black',
                                borderRadius: '50px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s',
                                border: 'none',
                            }}>
                                {/* Add the style to make the image responsive */}
                                <div className="card-image">
                                    <Card.Img src={val.image} alt={val.title} className="img-fluid" />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ maxWidth: '100%', height: 'auto' }}>
                                        {key + 1} - {val.toUpperCase().replace('-', ' ')}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
            <AboutUs />
        </div>
    );
}
