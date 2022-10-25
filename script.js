let monthlybtn = document.getElementById("monthly");
let annuallybtn = document.getElementById("annually");
let toggle = document.getElementById("toggle");
let monthlyPrice = document.querySelectorAll("#monthly-price");
let annuallyPrice = document.querySelectorAll("#annual-price");

monthlybtn.addEventListener("click", (e) => {
  annuallyPrice.forEach((annual) => {
    annual.style.display = "none";
  });

  monthlyPrice.forEach((monthly) => {
    monthly.style.display = "flex";
  });

  monthlybtn.style.display = "none";
  toggle.style.justifyContent = "flex-end";

  annuallybtn.style.display = "flex";
});

annuallybtn.addEventListener("click", (e) => {
  annuallyPrice.forEach((annual) => {
    annual.style.display = "flex";
  });

  monthlyPrice.forEach((monthly) => {
    monthly.style.display = "none";
  });

  monthlybtn.style.display = "flex";
  toggle.style.justifyContent = "flex-start";
  annuallybtn.style.display = "none";
});
