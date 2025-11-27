// Simple front-end state stored in localStorage
const STORAGE_KEY = "rp_eprocurement_state_v1";

const VENDOR_WHATSAPP = "6289516428586"; // placeholder
const VENDOR_EMAIL = "arief.setiawan@reddoorz.com"; // placeholder

const PRODUCTS = [
  {
    id: "WTR-AQUA",
    name: "Mineral Water Supply",
    variant: "600ml bottles",
    vendorName: "Aqua (PT Tirta Investama)",
    vendorCity: "Jakarta",
    vendorPhone: "0838-2952-1353",
    vendorEmail: "",
    category: "F&B",
    unit: "carton (24)",
    price: "IDR 48.000 - 58.000 / carton",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "2-3 days",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "24 x 600ml bottles per carton."
  },
  {
    id: "WTR-RON88",
    name: "Mineral Water Supply",
    variant: "600ml bottles",
    vendorName: "RON 88",
    vendorCity: "Jakarta",
    vendorPhone: "0857-9962-6000",
    vendorEmail: "",
    category: "F&B",
    unit: "carton (24)",
    price: "IDR 48.000 - 58.000 / carton",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "2-3 days",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "24 x 600ml bottles per carton."
  },
  {
    id: "LND-DLAUNDRE",
    name: "Laundry Service",
    variant: "Standard wash & fold",
    vendorName: "D'Laundre",
    vendorCity: "Bandung",
    vendorPhone: "0812-8843-3383",
    vendorEmail: "dlaundreee@gmail.com",
    category: "Laundry",
    unit: "kg",
    price: "IDR 7.000 - 10.000 / kg",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "Same/next day",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Hotel linens/uniform wash & fold with pickup."
  },
  {
    id: "LND-NUSANTARA",
    name: "Laundry Service",
    variant: "Hotel linens",
    vendorName: "Nusantara Laundry",
    vendorCity: "Jakarta",
    vendorPhone: "0812-2061-2340",
    vendorEmail: "",
    category: "Laundry",
    unit: "kg",
    price: "IDR 8.000 - 11.000 / kg",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "Same/next day",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Hotel linen handling with pickup."
  },
  {
    id: "LND-LAUNDRIST",
    name: "Laundry Service",
    variant: "Pickup & delivery",
    vendorName: "Laundrist",
    vendorCity: "Bandung",
    vendorPhone: "0877-8616-1042",
    vendorEmail: "laundristbandung@gmail.com",
    category: "Laundry",
    unit: "kg",
    price: "IDR 7.000 - 10.000 / kg",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "Same/next day",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Pickup/delivery for linens and uniforms."
  },
  {
    id: "AC-ANUGERAH",
    name: "AC & Handyman Service",
    variant: "AC cleaning/repair",
    vendorName: "Anugerah Jaya Lestari",
    vendorCity: "Jakarta",
    vendorPhone: "0896-0600-6085",
    vendorEmail: "anugerahjayaac@gmail.com",
    category: "AC/Handyman",
    unit: "visit",
    price: "IDR 150.000 - 250.000 / visit",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "1-2 days",
    minOrder: 1,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "AC cleaning/repair and light handyman visit."
  },
  {
    id: "AC-AJE",
    name: "AC & Handyman Service",
    variant: "AC servicing & handyman",
    vendorName: "AJE",
    vendorCity: "Jakarta",
    vendorPhone: "0813-2043-1511",
    vendorEmail: "",
    category: "AC/Handyman",
    unit: "visit",
    price: "IDR 150.000 - 250.000 / visit",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "1-2 days",
    minOrder: 1,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "AC servicing and basic handyman support."
  },
  {
    id: "WIFI-CBN",
    name: "Wifi Internet Subscription",
    variant: "Fiber broadband",
    vendorName: "CBN",
    vendorCity: "Jakarta",
    vendorPhone: "0851-6305-0406",
    vendorEmail: "",
    category: "Wifi",
    unit: "subscription",
    price: "IDR 350.000 - 600.000 / month",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "3-5 days",
    minOrder: 1,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Fiber broadband installation and subscription."
  },
  {
    id: "WIFI-MEGAVISION",
    name: "Wifi Internet Subscription",
    variant: "Fiber broadband",
    vendorName: "Megavision",
    vendorCity: "Bandung",
    vendorPhone: "0811-9006-877",
    vendorEmail: "cs@megavision.net.id",
    category: "Wifi",
    unit: "subscription",
    price: "IDR 350.000 - 600.000 / month",
    priceType: "Negotiable",
    taxIncluded: false,
    leadTime: "3-5 days",
    minOrder: 1,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Fiber broadband installation and subscription."
  },
  {
    id: "AMN-BASIC",
    name: "Amenity Kit Basic",
    variant: "Shampoo, body wash, dental kit",
    vendorName: "Vita Amenities",
    vendorCity: "Jakarta",
    vendorPhone: "0812-9000-1234",
    vendorEmail: "sales@vitaamenities.com",
    category: "Amenities",
    unit: "pack",
    price: "IDR 5.500 - 7.000 / pack",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "3-5 days",
    minOrder: 100,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Basic hotel amenity pack in sachet."
  },
  {
    id: "AMN-PREMIUM",
    name: "Amenity Kit Premium",
    variant: "Tube packaging 30ml",
    vendorName: "LuxeCare Amenities",
    vendorCity: "Jakarta",
    vendorPhone: "0813-8000-5678",
    vendorEmail: "hello@luxecare.id",
    category: "Amenities",
    unit: "pack",
    price: "IDR 8.000 - 11.000 / pack",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "5-7 days",
    minOrder: 80,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Premium amenity set with branded tubes."
  },
  {
    id: "LIN-TOWEL",
    name: "Towel Set 450gsm",
    variant: "Bath + hand towel",
    vendorName: "CottonWorks Indonesia",
    vendorCity: "Bandung",
    vendorPhone: "0812-7000-3344",
    vendorEmail: "cs@cottonworks.id",
    category: "Linen",
    unit: "set",
    price: "IDR 45.000 - 55.000 / set",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "3-5 days",
    minOrder: 20,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "Hotel-grade cotton towel set."
  },
  {
    id: "LIN-BED",
    name: "Bed Linen Set 250TC",
    variant: "Fitted + flat + pillowcase",
    vendorName: "CottonWorks Indonesia",
    vendorCity: "Bandung",
    vendorPhone: "0812-7000-3344",
    vendorEmail: "cs@cottonworks.id",
    category: "Linen",
    unit: "set",
    price: "IDR 185.000 - 215.000 / set",
    priceType: "Fixed",
    taxIncluded: false,
    leadTime: "7-10 days",
    minOrder: 10,
    previewImage: "https://files.catbox.moe/gjsgjd.jpg",
    description: "250 thread count cotton bed linen set."
  }
];

// App state
let state = {
  cart: [],      // [{ productId, qty, note }]
  addresses: [], // [{ id, label, recipient, phone, city, detail, isDefault }]
  orders: []     // [{ id, createdAt, channel, addressLabel, items, totalQty, status }]
};

// --- Helpers -----------------------------------------------------------------

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with an example address for first-time
      state.addresses = [
        {
          id: generateId(),
          label: "Front Office",
          recipient: "Duty Manager",
          phone: "+62-812-0000-0000",
          city: "Yogyakarta",
          detail: "Jl. Malioboro No. 123, Front Office Desk",
          isDefault: true
        }
      ];
      saveState();
      return;
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state = Object.assign(state, parsed);
    }
  } catch (e) {
    console.warn("Failed to load state", e);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function generateId() {
  return "id_" + Math.random().toString(36).slice(2, 10);
}

function formatDateTime(d) {
  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
}

function parsePriceMin(priceStr) {
  if (!priceStr) return Infinity;
  const match = priceStr.match(/([\d.]+)/);
  if (!match) return Infinity;
  const num = parseInt(match[1].replace(/\./g, ""), 10);
  return Number.isFinite(num) ? num : Infinity;
}

function openPreviewModal(src) {
  const modal = document.getElementById("preview-modal");
  const img = document.getElementById("preview-image");
  if (!modal || !img) return;
  img.src = src || "";
  modal.hidden = false;
}

function closePreviewModal() {
  const modal = document.getElementById("preview-modal");
  if (!modal) return;
  modal.hidden = true;
  const img = document.getElementById("preview-image");
  if (img) img.src = "";
}

// --- Rendering ---------------------------------------------------------------

function renderProductTable(products) {
  const tbody = document.querySelector("#marketplace-table tbody");
  const empty = document.getElementById("marketplace-empty");
  const countLabel = document.querySelector("[data-product-count-label]");
  tbody.innerHTML = "";

  if (!products.length) {
    empty.hidden = false;
    countLabel.textContent = "0 item(s)";
    return;
  }

  empty.hidden = true;
  countLabel.textContent = `${products.length} item(s)`;

  products.forEach((p) => {
    const tr = document.createElement("tr");
    const unitLabel = p.unit.replace(/\s*\(.*?\)/, "");
    tr.innerHTML = `
      <td>
        <div class="rp-thumb-wrapper">
          <img
            src="${p.previewImage}"
            alt="${p.name} preview"
            class="rp-thumb js-preview"
            data-preview="${p.previewImage}"
          />
          <div class="rp-thumb-hint" title="Preview full size">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </td>
      <td>
        <div class="rp-product-name">${p.name}</div>
      </td>
      <td>
        ${p.variant ? `<div class="rp-product-desc">${p.variant}</div>` : ""}
        <div class="rp-product-desc">${p.description}</div>
      </td>
      <td>
        <div class="rp-product-name">${p.price}</div>
        <div class="rp-product-desc">
          ${p.priceType || "Fixed"} &middot; ${p.taxIncluded ? "Tax included" : "Tax excluded"}
        </div>
      </td>
      <td>${p.minOrder} ${unitLabel}</td>
      <td>${unitLabel}</td>
      <td>${p.category}</td>
      <td>
        <div class="rp-product-name">${p.vendorName}</div>
        <div class="rp-product-desc">${p.vendorCity || "City N/A"}</div>
      </td>
      <td>
        <div class="rp-cart-actions">
          <button class="rp-button rp-button--sm js-add-to-cart"
                  data-product-id="${p.id}"
                  data-min-order="${p.minOrder}">
            Buy
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderCart() {
  const tbody = document.querySelector("#checkout-table tbody");
  const empty = document.getElementById("checkout-empty");
  const totalQtyEl = document.querySelector("[data-total-qty]");
  const totalLinesEl = document.querySelector("[data-total-lines]");
  const cart = state.cart;

  tbody.innerHTML = "";

  if (!cart.length) {
    empty.hidden = false;
    totalQtyEl.textContent = "0";
    totalLinesEl.textContent = "0";
  } else {
    empty.hidden = true;
    let totalQty = 0;

    cart.forEach((line) => {
      const p = PRODUCTS.find((x) => x.id === line.productId);
      if (!p) return;

      totalQty += line.qty;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <div class="rp-product-name">${p.name}</div>
          <div class="rp-product-desc">${p.category}</div>
        </td>
        <td>
          <input type="number"
                 min="1"
                 class="rp-input rp-input--sm rp-cart-qty js-cart-qty"
                 data-product-id="${p.id}"
                 value="${line.qty}" />
        </td>
        <td>${p.unit}</td>
        <td>
          <input type="text"
                 class="rp-input rp-input--sm rp-cart-note-input js-cart-note"
                 data-product-id="${p.id}"
                 placeholder="Add delivery note per item (optional)"
                 value="${line.note || ""}" />
        </td>
        <td class="rp-table-actions">
          <button class="rp-link-button js-remove-from-cart"
                  data-product-id="${p.id}">
            Remove
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    totalQtyEl.textContent = String(totalQty);
    totalLinesEl.textContent = String(cart.length);
  }

  // Cart count in header
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);
  const cartBadge = document.querySelector("[data-cart-count]");
  cartBadge.textContent = String(cartCount);
}

function renderAddresses() {
  const tableBody = document.querySelector("#addresses-table tbody");
  const empty = document.getElementById("addresses-empty");
  const select = document.getElementById("delivery-address-select");

  tableBody.innerHTML = "";
  select.innerHTML = "";

  if (!state.addresses.length) {
    empty.hidden = false;
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "No address saved - please create one in Profile tab.";
    select.appendChild(opt);
    return;
  }

  empty.hidden = true;
  state.addresses.forEach((addr) => {
    // table
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${addr.label}</td>
      <td>
        <div>${addr.detail}</div>
        <div style="font-size:11px;color:#777;margin-top:2px;">
          ${addr.city || ""} ${
      addr.recipient ? "&middot; " + addr.recipient : ""
    } ${addr.phone ? "&middot; " + addr.phone : ""}
        </div>
      </td>
      <td>
        <label class="rp-checkbox">
          <input type="radio"
                 name="default-address"
                 class="js-default-address-radio"
                 data-id="${addr.id}"
                 ${addr.isDefault ? "checked" : ""} />
          <span>Default</span>
        </label>
      </td>
    `;
    tableBody.appendChild(tr);

    // select options
    const opt = document.createElement("option");
    opt.value = addr.id;
    opt.textContent = `${addr.label} - ${addr.city || "No city"}`;
    if (addr.isDefault) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  // If no address marked default, mark first
  if (!state.addresses.some((a) => a.isDefault)) {
    state.addresses[0].isDefault = true;
    saveState();
    renderAddresses();
  }
}

function renderOrders() {
  const tbody = document.querySelector("#orders-table tbody");
  const empty = document.getElementById("orders-empty");

  tbody.innerHTML = "";

  if (!state.orders.length) {
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  state.orders
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((o) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${o.id}</td>
        <td>${formatDateTime(new Date(o.createdAt))}</td>
        <td>${o.channel}</td>
        <td>${o.addressLabel || "-"}</td>
        <td>${o.items}</td>
        <td>${o.totalQty}</td>
        <td>
          <span class="rp-status-pill ${
            o.status === "Sent"
              ? "rp-status-pill--sent"
              : o.status === "Pending"
              ? "rp-status-pill--pending"
              : "rp-status-pill--draft"
          }">
            ${o.status}
          </span>
        </td>
      `;
      tbody.appendChild(tr);
    });
}

// --- Filters -----------------------------------------------------------------

function applyFilters() {
  const category = document.getElementById("filter-category").value;
  const city = document.getElementById("filter-city").value;
  const sort = document.getElementById("filter-sort").value;
  const q = document.getElementById("filter-search").value
    .trim()
    .toLowerCase();

  const filtered = PRODUCTS.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchCity = city === "all" || (p.vendorCity || "").toLowerCase() === city;
    const text = (
      p.name +
      " " +
      (p.variant || "") +
      " " +
      p.description +
      " " +
      p.category +
      " " +
      (p.vendorName || "") +
      " " +
      (p.vendorCity || "")
    ).toLowerCase();
    const matchSearch = !q || text.includes(q);
    return matchCategory && matchCity && matchSearch;
  });

  if (sort === "price-asc") {
    filtered.sort((a, b) => parsePriceMin(a.price) - parsePriceMin(b.price));
  } else if (sort === "minorder-asc") {
    filtered.sort((a, b) => (a.minOrder || 0) - (b.minOrder || 0));
  }

  renderProductTable(filtered);
}

function populateCityFilter() {
  const select = document.getElementById("filter-city");
  if (!select) return;
  const uniqueCities = Array.from(
    new Set(
      PRODUCTS.map((p) => (p.vendorCity || "").trim().toLowerCase()).filter(Boolean)
    )
  ).sort();

  select.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = "all";
  allOpt.textContent = "All Cities";
  select.appendChild(allOpt);

  uniqueCities.forEach((city) => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    select.appendChild(opt);
  });
}

// --- Cart manipulation -------------------------------------------------------

function upsertCartItem(productId, qtyToAdd) {
  if (!qtyToAdd || qtyToAdd < 1) return;
  const existing = state.cart.find((c) => c.productId === productId);
  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    state.cart.push({ productId, qty: qtyToAdd, note: "" });
  }
}

function setCartQty(productId, newQty) {
  const item = state.cart.find((c) => c.productId === productId);
  if (!item) return;
  item.qty = Math.max(1, newQty || 1);
}

function setCartNote(productId, note) {
  const item = state.cart.find((c) => c.productId === productId);
  if (!item) return;
  item.note = note || "";
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((c) => c.productId !== productId);
}

// --- Address manipulation ----------------------------------------------------

function setDefaultAddress(id) {
  state.addresses.forEach((a) => {
    a.isDefault = a.id === id;
  });
}

// --- Orders / send channel ---------------------------------------------------

function buildOrderMessage(address, channel) {
  const lines = [];
  lines.push("Order Request - RedPartners E-Procurement");
  lines.push("Source: RedPartners E-Procurement marketplace");
  lines.push("");
  lines.push(`Channel: ${channel}`);
  lines.push("");
  lines.push("Delivery Address:");
  lines.push(`- Label: ${address.label}`);
  if (address.recipient) lines.push(`- Contact: ${address.recipient}`);
  if (address.phone) lines.push(`- Phone: ${address.phone}`);
  if (address.city) lines.push(`- City: ${address.city}`);
  lines.push(`- Detail: ${address.detail}`);
  lines.push("");

  lines.push("Items:");
  state.cart.forEach((line, idx) => {
    const p = PRODUCTS.find((x) => x.id === line.productId);
    if (!p) return;
    lines.push(
      `${idx + 1}. ${line.qty} x ${p.name} (${p.unit}) - ${p.price} [${p.category}] (${p.priceType || "Fixed"}, ${p.taxIncluded ? "tax included" : "tax excluded"})`
    );
    if (line.note) {
      lines.push(`   Note: ${line.note}`);
    }
  });
  lines.push("");
  const totalQty = state.cart.reduce((sum, l) => sum + l.qty, 0);
  lines.push(`Total distinct products: ${state.cart.length}`);
  lines.push(`Total quantity (all items): ${totalQty}`);
  lines.push("");
  const extraNotes = document.getElementById("request-notes").value.trim();
  if (extraNotes) {
    lines.push("Special Instructions:");
    lines.push(extraNotes);
    lines.push("");
  }

  lines.push(
    "Note: This order is generated from RedPartners E-Procurement. Please confirm final price, availability, and delivery schedule directly with us as the vendor partner."
  );

  return lines.join("\n");
}

function createOrderRecord(address, channel) {
  const totalQty = state.cart.reduce((sum, l) => sum + l.qty, 0);
  const orderId =
    "RP-PO-" + new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 12);

  const record = {
    id: orderId,
    createdAt: Date.now(),
    channel,
    addressLabel: address.label,
    items: state.cart.length,
    totalQty,
    status: "Sent"
  };

  state.orders.push(record);
  saveState();
  renderOrders();
}

// --- Events ------------------------------------------------------------------

function bindEvents() {
  // Tabs
  const tabButtons = document.querySelectorAll(".rp-tab-button");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab-target");
      if (!target) return;

      document
        .querySelectorAll(".rp-tab-button")
        .forEach((b) => b.classList.remove("rp-tab-button--active"));
      btn.classList.add("rp-tab-button--active");

      document
        .querySelectorAll(".rp-tab-section")
        .forEach((sec) => sec.classList.remove("rp-tab-section--active"));
      document
        .getElementById("tab-" + target)
        .classList.add("rp-tab-section--active");
    });
  });

  // Filters
  document
    .getElementById("filter-category")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-city")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-sort")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-search")
    .addEventListener("input", applyFilters);
  document.getElementById("filter-clear").addEventListener("click", () => {
    document.getElementById("filter-category").value = "all";
    document.getElementById("filter-city").value = "all";
    document.getElementById("filter-sort").value = "none";
    document.getElementById("filter-search").value = "";
    applyFilters();
  });

  // Marketplace: add to cart (event delegation)
  document
    .getElementById("marketplace-table")
    .addEventListener("click", (evt) => {
      const btn = evt.target.closest(".js-add-to-cart");
      if (!btn) {
        const preview = evt.target.closest(".js-preview");
        if (preview) {
          evt.preventDefault();
          const src = preview.getAttribute("data-preview");
          openPreviewModal(src);
        }
        return;
      }

      const productId = btn.getAttribute("data-product-id");
      const product = PRODUCTS.find((p) => p.id === productId);
      const qty = product ? product.minOrder : 1;
      upsertCartItem(productId, qty);
      saveState();
      renderCart();
    });

  // Checkout: quantity & note change + remove
  document
    .getElementById("checkout-table")
    .addEventListener("input", (evt) => {
      if (evt.target.matches(".js-cart-qty")) {
        const productId = evt.target.getAttribute("data-product-id");
        const qty = parseInt(evt.target.value, 10) || 1;
        setCartQty(productId, qty);
        saveState();
        renderCart();
      } else if (evt.target.matches(".js-cart-note")) {
        const productId = evt.target.getAttribute("data-product-id");
        setCartNote(productId, evt.target.value);
        saveState();
      }
    });

  document
    .getElementById("checkout-table")
    .addEventListener("click", (evt) => {
      const btn = evt.target.closest(".js-remove-from-cart");
      if (!btn) return;
      const productId = btn.getAttribute("data-product-id");
      removeFromCart(productId);
      saveState();
      renderCart();
    });

  // Address default radio
  document
    .getElementById("addresses-table")
    .addEventListener("change", (evt) => {
      if (!evt.target.matches(".js-default-address-radio")) return;
      const id = evt.target.getAttribute("data-id");
      setDefaultAddress(id);
      saveState();
      renderAddresses();
    });

  // Address form
  document.getElementById("address-form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const label = document.getElementById("addr-label").value.trim();
    const recipient = document.getElementById("addr-recipient").value.trim();
    const phone = document.getElementById("addr-phone").value.trim();
    const city = document.getElementById("addr-city").value.trim();
    const detail = document.getElementById("addr-detail").value.trim();
    const makeDefault = document.getElementById("addr-default").checked;

    if (!label || !detail) {
      alert("Please fill at least label and full address.");
      return;
    }

    const addr = {
      id: generateId(),
      label,
      recipient,
      phone,
      city,
      detail,
      isDefault: false
    };

    state.addresses.push(addr);
    if (makeDefault || state.addresses.length === 1) {
      setDefaultAddress(addr.id);
    }

    document.getElementById("address-form").reset();
    saveState();
    renderAddresses();
  });

  // Send buttons
  document
    .getElementById("send-whatsapp")
    .addEventListener("click", () => handleSend("WhatsApp"));
  document
    .getElementById("send-email")
    .addEventListener("click", () => handleSend("Email"));

  const previewModal = document.getElementById("preview-modal");
  if (previewModal) {
    previewModal.addEventListener("click", (evt) => {
      if (
        evt.target.matches("[data-close-modal]") ||
        evt.target.id === "preview-modal"
      ) {
        closePreviewModal();
      }
    });
  }
}

function handleSend(channel) {
  if (!state.cart.length) {
    alert("Your cart is empty. Please add items from the Marketplace tab.");
    return;
  }

  if (!state.addresses.length) {
    alert(
      "No delivery address found. Please create at least one in the Profile tab."
    );
    return;
  }

  const select = document.getElementById("delivery-address-select");
  const selectedId = select.value || state.addresses.find((a) => a.isDefault).id;
  const address = state.addresses.find((a) => a.id === selectedId);
  if (!address) {
    alert("Please select a delivery address.");
    return;
  }

  const message = buildOrderMessage(address, channel);
  createOrderRecord(address, channel);

  if (channel === "WhatsApp") {
    const url =
      "https://wa.me/" +
      encodeURIComponent(VENDOR_WHATSAPP) +
      "?text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  } else {
    const subject = "Order Request via RedPartners E-Procurement";
    const mailto =
      "mailto:" +
      encodeURIComponent(VENDOR_EMAIL) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = mailto;
  }

  // After sending, keep cart for now (so they can resend), but we could clear:
  // state.cart = []; saveState(); renderCart();
}

// --- Init --------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  populateCityFilter();
  renderProductTable(PRODUCTS);
  renderCart();
  renderAddresses();
  renderOrders();
  bindEvents();
  applyFilters(); // to set count label correctly
});
