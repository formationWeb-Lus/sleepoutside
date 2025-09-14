import{g as r,s as o}from"./utils-wxzuc6yS.js";/* empty css              */import{P as i}from"./ProductData-DRTM1bS-.js";const c=new i("tents");async function d(){const a=new URLSearchParams(window.location.search).get("product"),n=document.getElementById("product-details");if(!a){n.innerHTML="<p>❌ Aucun produit sélectionné.</p>";return}const t=await c.findProductById(a);if(!t){n.innerHTML=`<p>❌ Produit ${a} introuvable.</p>`;return}n.innerHTML=`
    <section class="product-detail">
      <h2>${t.Name}</h2>
      <img src="${t.Image}" alt="${t.Name}">
      <p>${t.Description}</p>
      <p><strong>${t.FinalPrice} €</strong></p>
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </section>
  `,document.getElementById("addToCart").addEventListener("click",()=>s(t))}function s(a){let n=r("so-cart");Array.isArray(n)||(n=[]);const t=n.find(e=>e.Id===a.Id);t?t.quantity=(t.quantity||1)+1:(a.quantity=1,n.push(a)),o("so-cart",n),alert(`${a.Name} ajouté au panier ✅`)}d();
