import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 headpic"
            style={{ maxHeight: '90vh', objectFit: 'cover' }}
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce-checkout-flow.png?format=jpg&quality=90&v=1679692675"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Starting Shopping Now with Accessories & Fashion Dame</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 headpic"
            style={{ maxHeight: '90vh', objectFit: 'cover' }}
            src="https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?w=2000"
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark">
            <h3>Experience Excellent Outlook</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 headpic"
            style={{ maxHeight: '90vh', objectFit: 'cover' }}
            src="https://img.freepik.com/premium-photo/online-shopping-promotion-sales-black-friday-graphic-banner-luxury-black-red-theme_67155-26163.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>And More</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}
