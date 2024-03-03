export default function ProductsPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState("");
  const [ratingstar, setRatingStar] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const { state: globalState, dispatch: globalDispatch } = useContext(GlobalContext);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar
    };
    console.log(payload);
    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });

    setReview('');
    setRatingStar(0);
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then(json => setProduct(json.data));
  }, [productID]);

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity: productQuantity,
      totalPrice: product.price * productQuantity
    };

    globalDispatch({
      type: "ADD_TO_CART",
      cart: payload
    });

    Swal.fire({
      title: 'Added to Cart',
      text: 'Check your Cart for Check Out',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });
  };


    return (
      <div>
       <div className='d-flex mt-4'>
  <h5 className='mt-5 mx-2 albert-sans-regular'>
    <Link to="/" style={{ textDecoration: 'none', color:'#5A5A5A' }}>Home/</Link>
  </h5>
  <h5 className='mt-5 mx-2 albert-sans-regular'>
    <Link to="/Products" style={{ textDecoration: 'none', textTransform: 'capitalize', color:'#5A5A5A' }}>
      Products/
    </Link>
  </h5>
  <h5 className='mt-5 mx-2 albert-sans-regular'>
    <Link to={`/products/Category/${product.category}`} style={{ textDecoration: 'none', textTransform: 'capitalize', color:'#5A5A5A' }}>
              {product.category}/
    </Link>
  </h5>
  <h5 className='mt-5  mx-2 albert-sans-regular' style={{textTransform: 'capitalize', color:'black'}}>
    {product.title}      
  </h5>
</div>
        <div className='d-flex '>
        <div className='p-4'>
          {
              product?.images?.length > 0 && <ImageSection images={product.images} />
          }
          </div>
          <div>
            <div className="m-5">
              <h5 className='my-5 albert-sans-regular'>Product-ID:{productID}</h5>
              <h1 className='my-5 albert-sans-regular'>{product.title}</h1>
            <p className="text-secondary my-5">Product Details: {product.description}</p>
            <div className='d-flex my-5'>
            <ReactStars
               count={5}
               size={24}        
               edit={false}
               value={product.rating}
               color2={'#ffd700'} 
                />
                <h5 className='d-flex ms-2 mt-2 '>
                  ({product.rating})
                </h5>
                <div className='d-flex'>
                <h5 className='d-flex ms-4 mt-2'>
                  Stock:
                </h5>
                <h5 className='d-flex mt-2' style={{color: 'green'}}>&nbsp;  {product.stock < 1 ? (
          <div>Out of Stock</div>
        ) : (
          <div>In Stock</div>
                  )}
                  </h5>
                </div>
              </div>
              <div className=' d-flex mt-5'>
                <h1 className='me-5 albert-sans-regular'>${(product.price)- (product.price)*(product.discountPercentage/100)} </h1>
                <h1 className='albert-sans-regular-med' style={{textDecoration:'line-through', color:'grey'}}>${product.price} </h1>

              </div>
              <div>
              <h5 className='albert-sans-regular-med'>
                {product.discountPercentage}%  Discount
                </h5>
              </div>
              

            
        </div>
        {/* <div className="text-center my-3">
        <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
            {productQuantity}
            <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
        </div> */}
     <div className="text-center my-3">
        <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setProductQuantity(prev => prev - 1)}>-</button>
        {productQuantity}
        <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(prev => prev + 1)}>+</button>
            </div>
            <button className='btn btn-dark rounded-pill m-1 albert-sans-regular' style={{ width: "20rem", height: "3.6rem" }} onClick={addToCart}> Add to Cart </button>
            <button className='btn btn-danger rounded-pill mx-5 my-2 albert-sans-regular' style={{width: "40rem", height: "3.6rem" }} onClick={AddToCart}>
              Buy Now
            </button>

            <div className="d-flex mx-5 my-3 albert-sans-regular">
            <h5 className='me-5'><CiHeart /> Wishlist &nbsp;&nbsp;</h5>
            <h5 className='mx-5'><IoIosGitCompare /> &nbsp;&nbsp;Compare&nbsp;&nbsp;</h5>
              <h5 className='ms-5'><CiShare2 />&nbsp;&nbsp;Share</h5>
            </div>
            
            <hr />
            <div className='d-flex m-4'>
            <h5 className='albert-sans-regular'>
              Stock:&nbsp;
            </h5>
            <h5 className='albert-sans-regular-med'>
                {product.stock}
              </h5>
            </div>
            <div className='d-flex m-4'>
            <h5 className='albert-sans-regular'>
              Brand Name:&nbsp;
            </h5>
            <h5 className='albert-sans-regular-med'>
                {product.brand}
              </h5>
            </div>
            <div className='d-flex m-4'>            <h5 className='albert-sans-regular'>
              Category:&nbsp;
            </h5>
            <h5 className='albert-sans-regular-med'>
                {product.category}
              </h5></div>
          </div>
          
        </div>
        <div className="row-md-6">
            <div className="container">
              <div className='mb-5 my-5'>
              <h1 className='albert-sans-regular'>Review Us</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro </p>
              </div>
              <div>
              <div className="form-floating">
                  <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={review}
                  onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea albert-sans-regular">Comments</label>
              </div>

              <div className='mt-3 albert-sans-regular'>
                
                Rate Us :
                <div className="d-flex"> 
                <ReactStars
                     count={5}
                     size={24}
                     value={ratingstar}      
                     onChange={ratingChanged}
                     color2={'#ffd700'} 
                />
                <span className='ms-3'> ({ratingstar}) </span>
                </div>

              </div>
              <button className='my-3 btn btn-dark albert-sans-regular' onClick={submitReview} >Submit Review</button>
              </div>

            </div>
          </div>
    </div>
  )
}
