const products=[
{name:"Sony WH-CH720N Wireless Headphones",cat:"Electronics",emoji:"🎧",price:"₹7,990",old:"₹12,990",deal:"38% OFF",rating:"4.4",reviews:"4,582",url:"https://www.amazon.in/"},
{name:"boAt Wave Call 2 Smartwatch",cat:"Fitness",emoji:"⌚",price:"₹1,499",old:"₹2,999",deal:"50% OFF",rating:"4.3",reviews:"8,764",url:"https://www.amazon.in/"},
{name:"Apple iPhone 13 (128GB)",cat:"Mobiles",emoji:"📱",price:"₹49,999",old:"₹59,900",deal:"17% OFF",rating:"4.6",reviews:"12,305",url:"https://www.amazon.in/"},
{name:"ASUS Vivobook 15 Core i3",cat:"Computers",emoji:"💻",price:"₹32,990",old:"₹45,900",deal:"28% OFF",rating:"4.2",reviews:"2,356",url:"https://www.amazon.in/"},
{name:"AGARO Imperial Espresso Coffee Maker",cat:"Home",emoji:"☕",price:"₹6,999",old:"₹11,999",deal:"42% OFF",rating:"4.1",reviews:"1,275",url:"https://www.amazon.in/"},
{name:"Leather Backpacks for Men",cat:"Fashion",emoji:"🎒",collection:true,description:"Browse leather backpacks for men on Amazon India.",url:'https://www.amazon.in/s?k=leather+backpack+for+men&s=exact-aware-popularity-rank&ds=v1%3AxDYuNB%2F3Fr1tG97iPnix0ytRizUOz372E7zWVBZcf4Y&crid=2UH0GS341IJ0&linkCode=ll2&linkId=4b0f43489057541d8cd8e35308ff8978&qid=1788511342&sprefix=%2Caps%2C277&tag=sahiltimoripi-21&ref=as_li_ss_tl'},
{name:"Amazon Fashion Best Sellers",cat:"Fashion",emoji:"👕",collection:true,description:"Browse popular and best-selling apparel on Amazon India.",url:'https://www.amazon.in/gp/bestsellers/apparel?&linkCode=ll2&tag=sahiltimoripi-21&linkId=2816515bef4902ba851ff591fff8d45b&ref_=as_li_ss_tl'},
{name:"Logitech G102 Gaming Mouse",cat:"Gaming",emoji:"🖱️",price:"₹1,199",old:"₹1,795",deal:"33% OFF",rating:"4.5",reviews:"9,102",url:"https://www.amazon.in/"},
{name:"Philips Beard Trimmer",cat:"Beauty",emoji:"✂️",price:"₹1,599",old:"₹2,495",deal:"36% OFF",rating:"4.4",reviews:"5,612",url:"https://www.amazon.in/"}
];

function render(list=products){
 const el=document.getElementById("products");
 el.innerHTML=list.map(p=>{
   if(p.collection){
     return `<article class="product"><div class="product-img">${p.emoji}</div><h3>${p.name}</h3><p style="font-size:11px;line-height:1.5;color:#687383;min-height:55px">${p.description}</p><div class="deal">Affiliate Collection</div><a class="amazon-btn" href="${p.url}" target="_blank" rel="nofollow sponsored noopener">a &nbsp; View on Amazon</a></article>`;
   }
   return `<article class="product"><div class="product-img">${p.emoji}</div><h3>${p.name}</h3><div class="stars">★★★★★ <span style="color:#697586">(${p.reviews})</span></div><div class="price">${p.price}<span class="old">${p.old}</span></div><div class="deal">${p.deal}</div><a class="amazon-btn" href="${p.url}" target="_blank" rel="nofollow sponsored noopener">a &nbsp; View on Amazon</a></article>`;
 }).join("");
}
function filterCategory(cat){render(products.filter(p=>p.cat===cat));document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function showAll(){render();document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function searchProducts(){const q=document.getElementById("searchInput").value.toLowerCase();render(products.filter(p=>(p.name+" "+p.cat).toLowerCase().includes(q)));document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function toggleMenu(){document.getElementById("navLinks").style.display=document.getElementById("navLinks").style.display==="flex"?"none":"flex"}
function subscribe(e){e.preventDefault();document.getElementById("toast").textContent="Thanks! Newsletter signup is ready to connect to your email service.";document.getElementById("toast").style.display="block";setTimeout(()=>document.getElementById("toast").style.display="none",3500);e.target.reset()}
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchProducts()});render();
