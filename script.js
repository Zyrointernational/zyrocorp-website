const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector("#nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#leadForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent("Zyro International Business Enquiry — "+f.get("division"));
  const body=encodeURIComponent(
`Name: ${f.get("name")}
Company: ${f.get("company")}
Email: ${f.get("email")}
Area: ${f.get("division")}

Message:
${f.get("message")}`);
  window.location.href=`mailto:info@zyrointernational.com?subject=${subject}&body=${body}`;
});
