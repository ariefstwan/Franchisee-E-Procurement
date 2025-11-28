// Simple front-end state stored in localStorage
const STORAGE_KEY = "rp_eprocurement_state_v1";
const PRODUCTS_BACKUP_KEY = "rp_products_backup";

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
    price: "IDR 50.000 / carton",
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
    price: "IDR 52.000 / carton",
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
    price: "IDR 9.000 / kg",
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
    price: "IDR 9.500 / kg",
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
    price: "IDR 9.000 / kg",
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
    price: "IDR 200.000 / visit",
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
    price: "IDR 200.000 / visit",
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
    price: "IDR 450.000 / month",
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
    price: "IDR 450.000 / month",
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
    price: "IDR 6.500 / pack",
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
    price: "IDR 9.500 / pack",
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
    price: "IDR 50.000 / set",
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
    price: "IDR 200.000 / set",
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
let editingAddressId = null;

function toggleAddressForm(show) {
  const formPage = document.getElementById("address-form-page");
  const listView = document.getElementById("addresses-view");
  if (!formPage || !listView) return;
  formPage.hidden = !show;
  listView.hidden = show;
  if (show) {
    formPage.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// --- Helpers -----------------------------------------------------------------

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with an example address for first-time
      state.addresses = [
        {
          id: generateId(),
          label: "Main Property - Bandung",
          recipient: "",
          phone: "",
          city: "Bandung",
          detail: "Jl. Dagopojok No.22, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135",
          isDefault: true
        }
      ];
      saveState();
      return;
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state = Object.assign(state, parsed);
      // Migrate older sample address (Yogyakarta) to Bandung property address
      if (state.addresses && Array.isArray(state.addresses)) {
        const legacy = state.addresses.find(
          (a) =>
            (a.detail || "").toLowerCase().includes("malioboro") ||
            (a.city || "").toLowerCase() === "yogyakarta"
        );
        if (legacy) {
          legacy.label = "Main Property - Bandung";
          legacy.city = "Bandung";
          legacy.detail =
            "Jl. Dagopojok No.22, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135";
          legacy.recipient = legacy.recipient || "";
          legacy.phone = legacy.phone || "";
          legacy.isDefault = true;
          saveState();
        }
      }
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

function activateTab(target) {
  const btn = document.querySelector(
    `.rp-tab-button[data-tab-target="${target}"]`
  );
  const section = document.getElementById("tab-" + target);
  if (!btn || !section) return;

  document
    .querySelectorAll(".rp-tab-button")
    .forEach((b) => b.classList.remove("rp-tab-button--active"));
  btn.classList.add("rp-tab-button--active");

  document
    .querySelectorAll(".rp-tab-section")
    .forEach((sec) => sec.classList.remove("rp-tab-section--active"));
  section.classList.add("rp-tab-section--active");
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
  const grid = document.getElementById("catalog-grid");
  const empty = document.getElementById("marketplace-empty");
  const countLabel = document.querySelector("[data-product-count-label]");
  grid.innerHTML = "";

  if (!products.length) {
    empty.hidden = false;
    countLabel.textContent = "0 item(s)";
    return;
  }

  empty.hidden = true;
  countLabel.textContent = `${products.length} item(s)`;

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "rp-product-card js-pdp-link";
    card.setAttribute("data-product-id", p.id);
    const unitLabel = p.unit.replace(/\s*\(.*?\)/, "");
    card.innerHTML = `
      <div class="rp-product-card__media">
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
        <div class="rp-product-badge">${p.category}</div>
      </div>
      <div class="rp-product-card__body">
        <div class="rp-product-name">${p.name}</div>
        <div class="rp-price">${p.price}</div>
        <div class="rp-product-meta">
          <span class="rp-pill rp-pill--muted">${p.priceType || "Fixed"}</span>
          <span class="rp-pill rp-pill--muted">${
            p.taxIncluded ? "Tax included" : "Tax excluded"
          }</span>
          <span class="rp-pill rp-pill--muted">Min ${p.minOrder} ${unitLabel}</span>
        </div>
        <div class="rp-product-vendor">
          <div class="rp-icon-text">
            <i class="fas fa-store rp-icon-inline" aria-hidden="true"></i>
            <span>${p.vendorName}</span>
          </div>
          <div class="rp-icon-text">
            <i class="fas fa-map-marker-alt rp-icon-inline" aria-hidden="true"></i>
            <span>${p.vendorCity || "City N/A"}</span>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Save a light backup for PDP usage
  localStorage.setItem(PRODUCTS_BACKUP_KEY, JSON.stringify(PRODUCTS));
}

function renderVendorSuggestions(currentVendor) {
  const container = document.getElementById("vendor-suggestions");
  if (!container) return;

  if (!currentVendor) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }

  const suggestions = PRODUCTS.filter(
    (p) =>
      p.vendorName === currentVendor &&
      !state.cart.some((c) => c.productId === p.id)
  ).slice(0, 3);

  if (!suggestions.length) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }

  container.hidden = false;
  const list = suggestions
    .map(
      (s) => {
        const unitLabel = s.unit.replace(/\s*\(.*?\)/, "");
        return `
      <div class="rp-suggestion-item">
        <div class="rp-suggestion-thumb" data-preview="${s.previewImage}">
          <img src="${s.previewImage}" alt="${s.name} preview" />
        </div>
        <div class="rp-suggestion-meta">
          <div class="rp-suggestion-name">${s.name}</div>
          <div class="rp-suggestion-vendor">${s.price} | Min ${s.minOrder} ${unitLabel}</div>
        </div>
        <button class="rp-button rp-button--sm js-add-suggestion"
                data-product-id="${s.id}">
          Add
        </button>
      </div>
    `;
      }
    )
    .join("");

  container.innerHTML = `
    <div class="rp-suggestions-title">More from this vendor you might also need</div>
    <div class="rp-suggestion-list">
      ${list}
    </div>
  `;
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
          <div class="rp-thumb-inline">
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
            <div>
              <div class="rp-product-name">${p.name}</div>
              <div class="rp-product-desc">${p.category}</div>
            </div>
          </div>
        </td>
        <td>
          ${p.variant ? `<div class="rp-product-desc">${p.variant}</div>` : ""}
          <div class="rp-product-desc">${p.description}</div>
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

  const vendor =
    state.cart.length && PRODUCTS.find((p) => p.id === state.cart[0].productId)
      ? PRODUCTS.find((p) => p.id === state.cart[0].productId).vendorName
      : null;
  renderVendorSuggestions(vendor);
  const suggestionsBox = document.getElementById("vendor-suggestions");
  if (suggestionsBox && !suggestionsBox.innerHTML.trim()) {
    suggestionsBox.hidden = true;
  }
}

function renderAddresses() {
  const tableBody = document.querySelector("#addresses-table tbody");
  const empty = document.getElementById("addresses-empty");
  const select = document.getElementById("delivery-address-select");
  const preview = document.querySelector("[data-address-preview]");

  tableBody.innerHTML = "";
  select.innerHTML = "";

  if (!state.addresses.length) {
    empty.hidden = false;
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "No address saved - please create one in Profile tab.";
    select.appendChild(opt);
    if (preview) {
      preview.textContent = "No address selected.";
    }
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
                 ${addr.isDefault ? "checked disabled" : ""} />
          <span>${addr.isDefault ? "Main address" : "Set as main address"}</span>
        </label>
      </td>
      <td class="rp-table-actions">
        <button class="rp-link-button js-edit-address" data-id="${addr.id}">
          Edit
        </button>
        <button class="rp-link-button js-remove-address" data-id="${addr.id}">
          Remove
        </button>
      </td>
    `;
    tableBody.appendChild(tr);

    // select options
    const opt = document.createElement("option");
    opt.value = addr.id;
    const citySuffix =
      addr.city &&
      !addr.label.toLowerCase().includes(addr.city.toLowerCase())
        ? ` - ${addr.city}`
        : "";
    opt.textContent = `${addr.label}${citySuffix || ""}`;
    opt.title = addr.detail || "";
    opt.dataset.detail = addr.detail || "";
    opt.dataset.recipient = addr.recipient || "";
    opt.dataset.phone = addr.phone || "";
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

  updateAddressPreview(select.value);
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

function updateAddressPreview(selectedId) {
  const preview = document.querySelector("[data-address-preview]");
  const select = document.getElementById("delivery-address-select");
  if (!preview || !select) return;

  const option = select.querySelector(`option[value="${selectedId}"]`);
  const detail = option?.dataset.detail || "";
  const recipient = option?.dataset.recipient || "";
  const phone = option?.dataset.phone || "";

  if (!detail) {
    preview.textContent = "No address selected.";
    return;
  }

  const lines = [detail];
  const meta = [recipient, phone].filter(Boolean).join(" · ");
  if (meta) lines.push(meta);

  preview.innerHTML = lines.join("<br>");
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

  const defaultCity = "bandung";
  if (uniqueCities.includes(defaultCity)) {
    select.value = defaultCity;
  }
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

function removeAddress(id) {
  state.addresses = state.addresses.filter((a) => a.id !== id);
  if (state.addresses.length && !state.addresses.some((a) => a.isDefault)) {
    state.addresses[0].isDefault = true;
  }
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

  // Catalog: add to cart (event delegation)
  document
    .getElementById("catalog-grid")
    .addEventListener("click", (evt) => {
      const card = evt.target.closest(".js-pdp-link");
      if (!card) return;
      const productId = card.getAttribute("data-product-id");
      if (!productId) return;
      window.location.href = `pdp.html?id=${encodeURIComponent(productId)}`;
    });

  document
    .getElementById("vendor-suggestions")
    .addEventListener("click", (evt) => {
      const thumb = evt.target.closest(".rp-suggestion-thumb");
      if (thumb) {
        const src = thumb.getAttribute("data-preview");
        if (src) openPreviewModal(src);
        return;
      }

      const btn = evt.target.closest(".js-add-suggestion");
      if (!btn) return;
      const productId = btn.getAttribute("data-product-id");
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return;

      const cartVendor =
        state.cart.length &&
        PRODUCTS.find((p) => p.id === state.cart[0].productId)?.vendorName;
      if (cartVendor && cartVendor !== product.vendorName) {
        state.cart = [];
      }
      upsertCartItem(productId, product.minOrder || 1);
      saveState();
      renderCart();
      activateTab("checkout");
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
      const preview = evt.target.closest(".js-preview");
      if (preview) {
        evt.preventDefault();
        const src = preview.getAttribute("data-preview");
        openPreviewModal(src);
        return;
      }
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
  document
    .getElementById("addresses-table")
    .addEventListener("click", (evt) => {
      const btn = evt.target.closest(".js-remove-address");
      if (btn) {
        const id = btn.getAttribute("data-id");
        if (
          !confirm(
            "Remove this address? You can add it again later from the form."
          )
        ) {
          return;
        }
        removeAddress(id);
        saveState();
        renderAddresses();
        return;
      }

      const editBtn = evt.target.closest(".js-edit-address");
      if (editBtn) {
        const id = editBtn.getAttribute("data-id");
        const addr = state.addresses.find((a) => a.id === id);
        if (!addr) return;
        editingAddressId = id;
        document.getElementById("address-form-title").textContent =
          "Edit Delivery Address";
        document.getElementById("addr-label").value = addr.label || "";
        document.getElementById("addr-recipient").value = addr.recipient || "";
        document.getElementById("addr-phone").value = addr.phone || "";
        document.getElementById("addr-city").value = addr.city || "";
        document.getElementById("addr-detail").value = addr.detail || "";
        document.getElementById("addr-default").checked = !!addr.isDefault;
        toggleAddressForm(true);
      }
    });

  document
    .getElementById("delivery-address-select")
    .addEventListener("change", (evt) =>
      updateAddressPreview(evt.target.value)
    );

  document
    .getElementById("add-address-btn")
    .addEventListener("click", () => {
      editingAddressId = null;
      document.getElementById("address-form-title").textContent =
        "Add Delivery Address";
      document.getElementById("address-form").reset();
      document.getElementById("addr-default").checked = false;
      toggleAddressForm(true);
    });

  document
    .getElementById("address-form-cancel")
    .addEventListener("click", () => {
      editingAddressId = null;
      document.getElementById("address-form").reset();
      toggleAddressForm(false);
      document.getElementById("address-form-title").textContent =
        "Add Delivery Address";
    });

  // Address form (inline)
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

    if (editingAddressId) {
      const addr = state.addresses.find((a) => a.id === editingAddressId);
      if (addr) {
        addr.label = label;
        addr.recipient = recipient;
        addr.phone = phone;
        addr.city = city;
        addr.detail = detail;
        if (makeDefault) {
          setDefaultAddress(addr.id);
        }
      }
    } else {
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
    }

    editingAddressId = null;
    document.getElementById("address-form").reset();
    toggleAddressForm(false);
    document.getElementById("address-form-title").textContent =
      "Add Delivery Address";
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
    alert("Your cart is empty. Please add items from the Catalog tab.");
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
  const select = document.getElementById("delivery-address-select");
  if (select) {
    updateAddressPreview(select.value || (state.addresses[0] && state.addresses[0].id));
  }
});
