const products=[
{name:"Sony WH-CH720N Wireless Headphones",cat:"Electronics",emoji:"🎧",price:"₹7,990",old:"₹12,990",deal:"38% OFF",rating:"4.4",reviews:"4,582"},
{name:"boAt Wave Call 2 Smartwatch",cat:"Fitness",emoji:"⌚",price:"₹1,499",old:"₹2,999",deal:"50% OFF",rating:"4.3",reviews:"8,764"},
{name:"Apple iPhone 13 (128GB)",cat:"Mobiles",emoji:"📱",price:"₹49,999",old:"₹59,900",deal:"17% OFF",rating:"4.6",reviews:"12,305"},
{name:"ASUS Vivobook 15 Core i3",cat:"Computers",emoji:"💻",price:"₹32,990",old:"₹45,900",deal:"28% OFF",rating:"4.2",reviews:"2,356"},
{name:"AGARO Imperial Espresso Coffee Maker",cat:"Home",emoji:"☕",price:"₹6,999",old:"₹11,999",deal:"42% OFF",rating:"4.1",reviews:"1,275"},
{name:"Nike Revolution 6 Next Nature",cat:"Fashion",emoji:"👟",price:"₹3,295",old:"₹5,495",deal:"40% OFF",rating:"4.4",reviews:"2,789"},
{name:"Logitech G102 Gaming Mouse",cat:"Gaming",emoji:"🖱️",price:"₹1,199",old:"₹1,795",deal:"33% OFF",rating:"4.5",reviews:"9,102"},
{name:"Philips Beard Trimmer",cat:"Beauty",emoji:"✂️",price:"₹1,599",old:"₹2,495",deal:"36% OFF",rating:"4.4",reviews:"5,612"}];

function render(list=products){
 const el=document.getElementById("products");
 el.innerHTML=list.map(p=>`<article class="product"><div class="product-img">${p.emoji}</div><h3>${p.name}</h3><div class="stars">★★★★★ <span style="color:#697586">(${p.reviews})</span></div><div class="price">${p.price}<span class="old">${p.old}</span></div><div class="deal">${p.deal}</div><a class="amazon-btn" href="https://www.amazon.in/" target="_blank" rel="nofollow sponsored noopener">a &nbsp; View on Amazon</a></article>`).join("");
}
function filterCategory(cat){render(products.filter(p=>p.cat===cat));document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function showAll(){render();document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function searchProducts(){const q=document.getElementById("searchInput").value.toLowerCase();render(products.filter(p=>(p.name+" "+p.cat).toLowerCase().includes(q)));document.getElementById("deals").scrollIntoView({behavior:"smooth"})}
function toggleMenu(){document.getElementById("navLinks").style.display=document.getElementById("navLinks").style.display==="flex"?"none":"flex"}
function subscribe(e){e.preventDefault();document.getElementById("toast").textContent="Thanks! Newsletter signup is ready to connect to your email service.";document.getElementById("toast").style.display="block";setTimeout(()=>document.getElementById("toast").style.display="none",3500);e.target.reset()}
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchProducts()});render();
