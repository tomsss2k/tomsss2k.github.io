const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const cookieButtonclose = document.querySelector(".cookie-btn-close");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal < 0.89){
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);