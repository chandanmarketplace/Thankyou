import React, { useEffect, useRef, useState } from "react";
import Countdown from 'react-countdown';


export const ProductUpsellView = (
    {discountType,
        offerTimer,
        titleText,
        productTitle,
        discount,
        product,
        offerDays = 0,
        offerHours = 0,
        offerMinutes = 0,
        offerSeconds = 0}
) => {
    const [count, setCount] = useState(1)
    const Ref = useRef(null);
    // const [timer, setTimer] = useState('00:00:00');
    const [d, sd] = useState(null);
    const [h, sh] = useState(null);
    const [m, sm] = useState(null);
    const [s, ss] = useState(null);

    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } 
                = getTimeRemaining(e);
    if (total >= 0) {

        // update the timer
        // check if less than 10 then we need to 
        // add '0' at the beginning of the variable
        sh(hours > 9 ? hours : '0' + hours);
        sm(minutes > 9 ? minutes : '0' + minutes);
        ss(seconds > 9 ? seconds : '0' + seconds);
        // setTimer(
        //     (hours > 9 ? hours : '0' + hours) + ':' +
        //     (minutes > 9 ? minutes : '0' + minutes) + ':'
        //     + (seconds > 9 ? seconds : '0' + seconds)
        // )
    }
}
const clearTimer = (e) => {
  
  // If you adjust it you should also need to
  // adjust the Endtime formula we are about
  // to code next  
  sh(offerHours);
  sm(offerMinutes);
  ss(offerSeconds);  
  // setTimer('00:00:10');

  // If you try to remove this line the 
  // updating of timer Variable will be
  // after 1000ms or 1sec
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
      startTimer(e);
  }, 1000)
  Ref.current = id;
}

const getDeadTime = () => {
  let deadline = new Date();

  // This is where you need to adjust if 
  // you entend to add more time
  deadline.setSeconds(deadline.getSeconds() + offerSeconds + (offerMinutes* 60) + (offerHours*60*60));
  return deadline;
}

useEffect(() => {
  clearTimer(getDeadTime());
  // console.log("useEffect");
  // console.log(product)
}, [offerHours, offerMinutes, offerHours]);

    return (<section className="discount-offer-section-os">
    <div className="discount-offer-all-data-os">
      <div className="discount-offer-heading-os">{titleText}</div>
      <div className="discount-offer-deadline-os">
        Offer expires in:
        (<span className="discount-offer-deadline-duration" data-hours={offerHours} data-minutes={offerMinutes} data-seconds={offerSeconds}>
          {h}:{m}:{s}
        {/* <Countdown date={Date.now() + 10000} /> */}
        {/* <DateCountdown
        // 'January 01, 2023 00:00:00 GMT+03:00'
        // {offerDays+" " + offerHours + " " + offerMinutes + " " + offerSeconds}
        dateTo="January 01, 2023 00:00:00 GMT+03:00" callback={()=>alert('Hello')}  /> */}
        </span>)
      </div>
      <div className="discount-offer-data-row-os">
        <div className="discount-offer-data-col-os-1">
          <img src={product?.imgUrl || "https://cdn.stilyoapps.com/v1/assets/img/placeholder.png"} alt="" />
        </div>
        <div className="discount-offer-data-col-os-2">
          <div className="discount-offer-product-name-os">{productTitle}</div>
          <div className="discount-offer-price-data-os">
            <div className="discount-offer-sale-os">Sale</div>
            {discountType === "price" ? <div className="discount-offer-product-price-os">{product?.price - discount}</div>: 
            <div className="discount-offer-product-price-os">{product?.price -   ((product?.price * discount)/100)}</div>}
            <div className="discount-offer-compare-at-price-os">${product.price}</div>
          </div>
          <div className="discount-offer-quantity-selector-os">
            <span
              // onclick="decrement()"
              onClick={() => {count > 0 && setCount(count-1)}}
              className="discount-offer-quantity-increment-os"
            >
              -
            </span>
            <input type="text" value={1} placeholder={count} style={{maxWidth: "84%"}} />
            <span className="discount-offer-quantity-decrement-os" onClick={() => {setCount(count+1)}}>+</span>
          </div>
          <a href="#" data-variant={product.variants?.[0]?.id} className="discount-offer-get-50per-off-btn-os thankyou-checkout">
            GET 50% Off
          </a>
        </div>
      </div>
    </div>
  </section>)
}