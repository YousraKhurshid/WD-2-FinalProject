import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function AboutUs() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <div style={{ width: '95vw', height: '100vh' }} className="d-flex justify-content-center align-items-center">
        <div>
          <animated.img
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto', ...fadeIn }}
            src="https://img.freepik.com/premium-vector/perfect-design-icon-online-couple_362714-971.jpg"
            alt=""
          />
        </div>
        <animated.div className="container" style={fadeIn}>
          <h1 className="my-5 text-dark text-center albert-sans-regular">About Us</h1>
          <p className="text-secondary albert-sans-regular-med">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magni porro officiis. Saepe vel nisi
            nulla alias, nam neque consequuntur sapiente asperiores illo placeat blanditiis culpa qui odit temporibus
            facere.
          </p>
        </animated.div>
      </div>
    </>
  );
}
