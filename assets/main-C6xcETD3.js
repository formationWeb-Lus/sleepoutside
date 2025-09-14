import{r as n}from"./utils-wxzuc6yS.js";import{P as a}from"./ProductData-DRTM1bS-.js";function o(r){return`
    <li class="product-card">
      <a href="product.html?product=${r.Id}">
        <img src="${r.Image}" alt="${r.Name}">
        <h2>${r.Brand.Name}</h2>
        <h3>${r.Name}</h3>
        <p class="product-card__price">$${r.FinalPrice}</p>
      </a>
    </li>
    `}class i{constructor(t,s,e){this.category=t,this.dataSource=s,this.listElement=e}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){n(o,this.listElement,t)}}class c{constructor(t,s){this.jsonPath=t,this.container=document.querySelector(s)}async init(){try{const s=await(await fetch(this.jsonPath)).json();this.render(s)}catch(t){console.error("Erreur de chargement des alertes :",t)}}render(t){this.container&&t.forEach(s=>{const e=document.createElement("div");e.textContent=s.message,e.style.backgroundColor=s.background,e.style.color="#000",e.style.padding="10px",e.style.margin="5px 0",e.style.borderRadius="5px",e.style.fontWeight="bold",this.container.appendChild(e)})}}const l=new a("tents"),d=document.querySelector(".product-list"),h=new i("Tents",l,d);h.init();const m=new c("./public/json/alerts.json","#alerts");m.init();
