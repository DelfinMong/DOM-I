const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('nav a')[0].textContent = siteContent['nav']['nav-item-1'];
const links1 = document.querySelectorAll('nav a')[1].textContent = siteContent['nav']['nav-item-2'];
const links2 = document.querySelectorAll('nav a')[2].textContent = siteContent['nav']['nav-item-3'];
const links3 = document.querySelectorAll('nav a')[3].textContent = siteContent['nav']['nav-item-4'];
const links4 = document.querySelectorAll('nav a')[4].textContent = siteContent['nav']['nav-item-5'];
const links5 = document.querySelectorAll('nav a')[5].textContent = siteContent['nav']['nav-item-6'];

const color = document.querySelectorAll('nav a')[0].style.color = 'green';
const color1 = document.querySelectorAll('nav a')[1].style.color = 'green';
const color2 = document.querySelectorAll('nav a')[2].style.color = 'green';
const color3 = document.querySelectorAll('nav a')[3].style.color = 'green';
const color4 = document.querySelectorAll('nav a')[4].style.color = 'green';
const color5 = document.querySelectorAll('nav a')[5].style.color = 'green';


let pic = document.getElementById("cta-img");
pic.setAttribute('src', siteContent["cta"]["img-src"]);

const dis = document.querySelector('.cta .cta-text h1').textContent = siteContent['cta']['h1'];

const btn = document.querySelector('.cta .cta-text button').textContent = siteContent['cta']['button'];


const features = document.querySelectorAll('.top-content .text-content h4')[0].textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelectorAll('.top-content .text-content P')[0].textContent = siteContent['main-content']['features-content'];

const about = document.querySelectorAll('.top-content .text-content h4')[1].textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelectorAll('.top-content .text-content P')[1].textContent = siteContent['main-content']['about-content'];


let pic2 = document.getElementById("middle-img");
pic2.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const  services = document.querySelectorAll('.bottom-content .text-content h4')[0].textContent = siteContent['main-content']['services-h4'];
const  servicesContent = document.querySelectorAll('.bottom-content .text-content p')[0].textContent = siteContent['main-content']['services-content'];

const product = document.querySelectorAll('.bottom-content .text-content h4')[1].textContent = siteContent['main-content']['product-h4'];
const  productContent = document.querySelectorAll('.bottom-content .text-content p')[1].textContent = siteContent['main-content']['product-content'];

const  vision = document.querySelectorAll('.bottom-content .text-content h4')[2].textContent = siteContent['main-content']['vision-h4'];
const  visionContent = document.querySelectorAll('.bottom-content .text-content p')[2].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

const contact1 = document.querySelectorAll('.contact p')[0].textContent = siteContent['contact']['address'];
const contact2 = document.querySelectorAll('.contact p')[1].textContent = siteContent['contact']['phone'];
const contact3 = document.querySelectorAll('.contact p')[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

const nav1 = document.querySelector('nav');
const app = document.createElement('a');
app.textContent = 'portfolio';
app.style.color = 'green';
nav1.appendChild(app);

const nav2 = document.querySelector('nav');
const prep = document.createElement('a');
prep.textContent = 'resume';
prep.style.color = 'green';
nav2.prepend(prep);
