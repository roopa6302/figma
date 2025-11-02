document.addEventListener("DOMContentLoaded", () => {
  const companySelect = document.getElementById("companySelect");
  const accountSelect = document.getElementById("accountSelect");
  const balanceValue  = document.getElementById("balanceValue");
  const txnTableBody  = document.querySelector("#txnTable tbody");

  let companies = [];
  let accounts  = [];

  // 1. Fetch companies from a public API for example
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      // Map first 3 users as companies
      companies = data.slice(0,3).map(u => ({ id: u.id, name: u.company.name }));
      populateCompanies();
    })
    .catch(err => {
      console.error("Error fetching companies:", err);
    });

  function populateCompanies() {
    companySelect.innerHTML = `<option value="">Company Name</option>`;
    companies.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.text  = c.name;
      companySelect.appendChild(opt);
    });
  }

  companySelect.addEventListener("change", () => {
    const compId = companySelect.value;
    if (!compId) {
      resetAccountSection();
      return;
    }
    accountSelect.disabled = true;
    accountSelect.innerHTML = `<option>Loading Accounts…</option>`;

    // 2. Fetch accounts for selected company (for demo use same API)
    fetch(`https://jsonplaceholder.typicode.com/users?companyId=${compId}`)
      .then(res => res.json())
      .then(data => {
        // Map first 2 results as accounts
        accounts = data.slice(0,2).map(u => ({ id: u.id, name: u.name }));
        populateAccounts();
      })
      .catch(err => {
        console.error("Error fetching accounts:", err);
        // Fallback demo
        accounts = [
          { id: "a1", name: "Account 1" },
          { id: "a2", name: "Account 2" }
        ];
        populateAccounts();
      });
  });

  function populateAccounts() {
    accountSelect.disabled = false;
    accountSelect.innerHTML = `<option value="">Account Name</option>`;
    accounts.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a.id;
      opt.text  = a.name;
      accountSelect.appendChild(opt);
    });
  }

  accountSelect.addEventListener("change", () => {
    const accId = accountSelect.value;
    if (!accId) {
      resetTableAndBalance();
      return;
    }

    // 3. Fetch balance & transactions (demo using random values)
    const randomBalance = Math.floor(Math.random()*500000) + 10000;
    balanceValue.textContent = `₹ ${randomBalance.toLocaleString('en-IN')}`;

    // Generate demo transactions
    const txns = Array.from({ length: 5 }).map((_, idx) => ({
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      credit: `₹ ${(Math.floor(Math.random()*10000)+500).toLocaleString('en-IN')}`,
      balance: `₹ ${(Math.floor(Math.random()*randomBalance)).toLocaleString('en-IN')}`,
      utr: `UTR${100000+idx}`,
      upi: `UPI${1000+idx}`
    }));
    populateTransactions(txns);
  });

  function populateTransactions(txns) {
    if (!txns || txns.length === 0) {
      txnTableBody.innerHTML = `<tr><td colspan="5" class="no-data">No transactions found</td></tr>`;
      return;
    }
    txnTableBody.innerHTML = "";
    txns.forEach(t => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${t.date}</td>
        <td>${t.credit}</td>
        <td>${t.balance}</td>
        <td>${t.utr}</td>
        <td>${t.upi}</td>
      `;
      txnTableBody.appendChild(tr);
    });
  }

  function resetAccountSection() {
    accountSelect.innerHTML = `<option value="">Account Name</option>`;
    accountSelect.disabled = true;
    resetTableAndBalance();
  }

  function resetTableAndBalance() {
    balanceValue.textContent = "₹ 0,00,00,00,000";
    txnTableBody.innerHTML = `<tr><td colspan="5" class="no-data">Please select company & account</td></tr>`;
  }
});
