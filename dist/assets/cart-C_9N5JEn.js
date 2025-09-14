import{g as s,q as n}from"./utils-wxzuc6yS.js";/* empty css              */function o(){const t=s("so-cart")||[],r=n(".product-list");if(!r)return;if(t.length===0){r.innerHTML="<p>your cart is empty.</p>";return}const c=t.map(a=>`
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${a.Image}" alt="${a.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${a.Name}</h2>
      </a>
      <p class="cart-card__color">${a.Colors?.[0]?.ColorName||"N/A"}</p>
      <p class="cart-card__quantity">Quantité: ${a.quantity||1}</p>
      <p class="cart-card__price">$${a.FinalPrice}</p>
    </li>
  `);r.innerHTML=c.join("")}o();
