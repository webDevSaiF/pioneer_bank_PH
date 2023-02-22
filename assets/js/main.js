// * LOGIN BUTTON EVENT HANDLER

const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.querySelector(".login-area");
  const transactionArea = document.querySelector(".transaction-area");

  loginArea.style.display = "none";
  transactionArea.classList.remove("d-none");
});

// * DEPOSIT BUTTON EVENT HANDLER

const depositBtn = document.querySelector("#btn-deposit");
const depositValue = document.querySelector("#deposit-amount");

depositBtn.addEventListener("click", function () {
  let depositAmount = parseFloat(depositValue.value);

  if (depositAmount) {
    updateSpanText(".total-deposit-balance", depositAmount);
    updateSpanText(".total-balance", depositAmount);
  }
});

// * WITHDRAW BUTTON EVENT HANDLER

const withdrawBtn = document.querySelector("#btn-withdraw");
const withdrawValue = document.querySelector("#withdraw-amount");
const totalBalance = document.querySelector(".total-balance");

withdrawBtn.addEventListener("click", function () {
  let withdrawAmount = parseFloat(withdrawValue.value);
  let totalAmount = parseFloat(totalBalance.textContent);

  if (withdrawAmount >= 100 && totalAmount > withdrawAmount) {
    updateSpanText(".total-withdraw-balance", withdrawAmount);
    updateSpanText(".total-balance", -1 * withdrawAmount);
  }
});

// * UPDATE SPAN TEXT
function updateSpanText(htmlCLass, value) {
  const cls = document.querySelector(htmlCLass);
  cls.textContent = parseFloat(cls.textContent) + value;
}
