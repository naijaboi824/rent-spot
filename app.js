const categories = [
  {
    id: "house",
    title: "Rent a House",
    caption: "From R70",
    icon: "house",
    tone: "rose"
  },
  {
    id: "room",
    title: "Rent a Room",
    caption: "From R50",
    icon: "bed",
    tone: "mint"
  },
  {
    id: "buy",
    title: "Buy Property",
    caption: "From R100",
    icon: "apartment",
    tone: "sky"
  }
];

const quickActions = [
  {
    action: "saved",
    label: "Saved Properties",
    icon: "favorite"
  },
  {
    action: "nearby",
    label: "Near Me",
    icon: "location_on"
  },
  {
    action: "my-listings",
    label: "My Listings",
    icon: "home_work"
  },
  {
    action: "messages",
    label: "Messages",
    icon: "chat_bubble_outline",
    badge: "2"
  },
  {
    action: "profile",
    label: "Profile",
    icon: "account_circle"
  }
];

const imagePool = {
  house: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80"
  ],
  room: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  ],
  buy: [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  ],
  shack: [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=900&q=80"
  ]
};

const DEFAULT_AREA = "Strand";
const DEFAULT_CITY = "Cape Town";
const DEFAULT_LOCATION_LABEL = `${DEFAULT_AREA}, ${DEFAULT_CITY}`;

const listings = [
  {
    id: "strand-house",
    title: "3 Bedroom House",
    price: 7500,
    period: " /month",
    area: "Strand",
    city: "Cape Town",
    locationLabel: "Strand, Cape Town",
    type: "house",
    bedrooms: 3,
    badge: "FEATURED",
    badgeTone: "green",
    image: imagePool.house[0],
    owner: "Ayanda",
    description: "Bright family home with a secure yard, covered parking, and quick access to the Strand beachfront and main routes.",
    highlights: [
      { icon: "bed", value: "3" },
      { icon: "bathtub", value: "2" },
      { icon: "directions_car", value: "1" },
      { icon: "straighten", value: "120 m²" }
    ]
  },
  {
    id: "somerset-west-room",
    title: "Room in Shared House",
    price: 3200,
    period: " /month",
    area: "Somerset West",
    city: "Cape Town",
    locationLabel: "Somerset West, Cape Town",
    type: "room",
    bedrooms: 1,
    badge: "NEW",
    badgeTone: "blue",
    image: imagePool.room[0],
    owner: "Lerato",
    description: "Private room with shared kitchen access, Wi-Fi, and a furnished study corner near Somerset West transport links.",
    highlights: [
      { icon: "bed", value: "1" },
      { icon: "bathtub", value: "1" },
      { icon: "wifi", value: "Wi-Fi" },
      { icon: "weekend", value: "Furnished" }
    ]
  },
  {
    id: "strand-apartment",
    title: "2 Bedroom Apartment",
    price: 1450000,
    period: "",
    area: "Strand",
    city: "Cape Town",
    locationLabel: "Strand, Cape Town",
    type: "buy",
    bedrooms: 2,
    badge: "VERIFIED",
    badgeTone: "emerald",
    image: imagePool.buy[0],
    owner: "Nomsa",
    description: "Modern apartment with secure access, pool views, and an easy walk to Strand amenities and the beachfront.",
    highlights: [
      { icon: "bed", value: "2" },
      { icon: "bathtub", value: "2" },
      { icon: "directions_car", value: "1" },
      { icon: "straighten", value: "85 m²" }
    ]
  },
  {
    id: "gordons-bay-cottage",
    title: "Garden Cottage",
    price: 5800,
    period: " /month",
    area: "Gordon's Bay",
    city: "Cape Town",
    locationLabel: "Gordon's Bay, Cape Town",
    type: "room",
    bedrooms: 1,
    badge: "FEATURED",
    badgeTone: "green",
    image: imagePool.room[1],
    owner: "Kabelo",
    description: "Quiet garden cottage with a private entrance, kitchenette, and leafy patio near central Gordon's Bay.",
    highlights: [
      { icon: "bed", value: "1" },
      { icon: "bathtub", value: "1" },
      { icon: "local_laundry_service", value: "Laundry" },
      { icon: "nest_cam_iq_outdoor", value: "Secure" }
    ]
  },
  {
    id: "somerset-west-townhouse",
    title: "Townhouse in Somerset West",
    price: 1750000,
    period: "",
    area: "Somerset West",
    city: "Cape Town",
    locationLabel: "Somerset West, Cape Town",
    type: "buy",
    bedrooms: 3,
    badge: "FEATURED",
    badgeTone: "green",
    image: imagePool.house[1],
    owner: "Michelle",
    description: "Secure townhouse with a modern kitchen, entertainer patio, and fast access to Somerset West schools and shops.",
    highlights: [
      { icon: "bed", value: "3" },
      { icon: "bathtub", value: "2" },
      { icon: "directions_car", value: "2" },
      { icon: "straighten", value: "142 m²" }
    ]
  },
  {
    id: "strand-shack",
    title: "2 Room Shack",
    price: 1800,
    period: " /month",
    area: "Strand",
    city: "Cape Town",
    locationLabel: "Strand, Cape Town",
    type: "shack",
    bedrooms: 2,
    badge: "NEW",
    badgeTone: "blue",
    image: imagePool.shack[0],
    owner: "Sibongile",
    description: "Affordable two-room shack close to transport routes and local shops in Strand.",
    highlights: [
      { icon: "bed", value: "2" },
      { icon: "bathtub", value: "1" },
      { icon: "water_drop", value: "Water" },
      { icon: "bolt", value: "Electricity" }
    ]
  }
];

const filterOptions = {
  filters: [
    { value: "all", display: "Filters", label: "All listings" },
    { value: "featured", display: "Featured", label: "Featured listings" },
    { value: "verified", display: "Verified", label: "Verified listings" },
    { value: "new", display: "New", label: "New listings" }
  ],
  price: [
    { value: "any", display: "Price", label: "Any price" },
    { value: "under-5000", display: "Under R5k", label: "Under R5 000" },
    { value: "under-10000", display: "Under R10k", label: "Under R10 000" },
    { value: "under-1500000", display: "Under R1.5m", label: "Under R1 500 000" },
    { value: "custom", display: "Custom", label: "Custom price" }
  ],
  type: [
    { value: "any", display: "Type", label: "Any type" },
    { value: "house", display: "House", label: "Rent a House" },
    { value: "room", display: "Room", label: "Rent a Room" },
    { value: "shack", display: "Shack", label: "Shack" },
    { value: "buy", display: "Buy", label: "Buy Property" }
  ],
  bedrooms: [
    { value: "any", display: "Bedrooms", label: "Any size" },
    { value: "1", display: "1 Bed", label: "1 bedroom" },
    { value: "2", display: "2 Bed", label: "2 bedrooms" },
    { value: "3", display: "3+ Bed", label: "3 or more bedrooms" }
  ],
  more: [
    { value: "any", display: "More", label: "Any extras" },
    { value: "wifi", display: "Wi-Fi", label: "Wi-Fi" },
    { value: "furnished", display: "Furnished", label: "Furnished" },
    { value: "parking", display: "Parking", label: "Parking" }
  ]
};

const state = {
  activeCategory: "all",
  filterIndex: {
    filters: 0,
    price: 0,
    type: 0,
    bedrooms: 0,
    more: 0
  },
  searchQuery: "",
  locationLabel: DEFAULT_LOCATION_LABEL,
  customPrice: {
    min: "",
    max: ""
  },
  showAllListings: false,
  activeTab: "home",
  activeListingId: listings[0].id,
  favorites: new Set(),
  auth: {
    mode: "login",
    user: null
  }
};

const ui = {
  categoryGrid: document.getElementById("categoryGrid"),
  quickGrid: document.getElementById("quickGrid"),
  filterRow: document.getElementById("filterRow"),
  filterSelects: document.querySelectorAll("[data-filter-select]"),
  searchPanel: document.getElementById("searchPanel"),
  searchInput: document.getElementById("searchInput"),
  searchButton: document.getElementById("searchButton"),
  nearMeButton: document.getElementById("nearMeButton"),
  listingRow: document.getElementById("listingRow"),
  featuredSection: document.getElementById("featuredSection"),
  nearbyLocationLabel: document.getElementById("nearbyLocationLabel"),
  quickAccessButton: document.getElementById("quickAccessButton"),
  viewAllListingsButton: document.getElementById("viewAllListingsButton"),
  viewAllListingsText: document.getElementById("viewAllListingsText"),
  menuButton: document.getElementById("menuButton"),
  closeMenuButton: document.getElementById("closeMenuButton"),
  drawer: document.getElementById("drawer"),
  scrim: document.getElementById("scrim"),
  listingSheet: document.getElementById("listingSheet"),
  closeSheetButton: document.getElementById("closeSheetButton"),
  closeFormButton: document.getElementById("closeFormButton"),
  listingFormSheet: document.getElementById("listingFormSheet"),
  listingForm: document.getElementById("listingForm"),
  priceSheet: document.getElementById("priceSheet"),
  closePriceButton: document.getElementById("closePriceButton"),
  priceForm: document.getElementById("priceForm"),
  listingPhotoInput: document.getElementById("listingPhotos"),
  listingPhotoHint: document.getElementById("listingPhotoHint"),
  listingPhotoPreview: document.getElementById("listingPhotoPreview"),
  locationSheet: document.getElementById("locationSheet"),
  closeLocationButton: document.getElementById("closeLocationButton"),
  locationForm: document.getElementById("locationForm"),
  authSheet: document.getElementById("authSheet"),
  closeAuthButton: document.getElementById("closeAuthButton"),
  authSheetTitle: document.getElementById("authSheetTitle"),
  authGuestView: document.getElementById("authGuestView"),
  authAccountView: document.getElementById("authAccountView"),
  authCopy: document.getElementById("authCopy"),
  loginForm: document.getElementById("loginForm"),
  signupForm: document.getElementById("signupForm"),
  authTabs: document.querySelectorAll("#authSheet [data-auth-mode]"),
  accountName: document.getElementById("accountName"),
  accountMeta: document.getElementById("accountMeta"),
  accountPhone: document.getElementById("accountPhone"),
  accountEmail: document.getElementById("accountEmail"),
  sheetTitle: document.getElementById("sheetTitle"),
  sheetImage: document.getElementById("sheetImage"),
  sheetPrice: document.getElementById("sheetPrice"),
  sheetLocation: document.getElementById("sheetLocation"),
  sheetDescription: document.getElementById("sheetDescription"),
  sheetFeatures: document.getElementById("sheetFeatures"),
  sheetSaveButton: document.getElementById("sheetSaveButton"),
  sheetSaveText: document.getElementById("sheetSaveText"),
  toast: document.getElementById("toast"),
  navTabs: document.querySelectorAll(".nav-tab")
};

let toastTimer = 0;
let scrimTimer = 0;
let listingPhotoPreviewUrls = [];

function currency(value) {
  return `R${value.toLocaleString("en-ZA")}`;
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function titleCase(value) {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function getDisplayNameFromEmail(email) {
  const localPart = String(email || "")
    .split("@")[0]
    .replace(/[._-]+/g, " ");

  return titleCase(localPart || "RentSpot User");
}

function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}

function getTypeLabel(type) {
  if (type === "shack") return "Shack";
  const category = getCategoryById(type);
  return category ? category.title : "Property";
}

function getActiveFilter(name) {
  return filterOptions[name][state.filterIndex[name]];
}

function getCustomPriceDisplay() {
  const min = Number(state.customPrice.min || 0);
  const max = Number(state.customPrice.max || 0);

  if (min && max) {
    return `${currency(min)} - ${currency(max)}`;
  }

  if (max) {
    return `Up to ${currency(max)}`;
  }

  if (min) {
    return `From ${currency(min)}`;
  }

  return "Custom";
}

function getCustomPriceLabel() {
  const min = Number(state.customPrice.min || 0);
  const max = Number(state.customPrice.max || 0);

  if (min && max) {
    return `Between ${currency(min)} and ${currency(max)}`;
  }

  if (max) {
    return `Up to ${currency(max)}`;
  }

  if (min) {
    return `From ${currency(min)}`;
  }

  return "Custom price";
}

function getRenderedFilterOptions(name) {
  if (name !== "price") {
    return filterOptions[name];
  }

  return filterOptions.price.map((option) => {
    if (option.value !== "custom") return option;
    return {
      ...option,
      display: getCustomPriceDisplay(),
      label: getCustomPriceLabel()
    };
  });
}

function getFilterIndexByValue(name, value) {
  return filterOptions[name].findIndex((option) => option.value === value);
}

function setFilterValue(name, value) {
  const filterIndex = getFilterIndexByValue(name, value);
  if (filterIndex < 0) return;

  state.filterIndex[name] = filterIndex;

  if (name === "type") {
    state.activeCategory = value === "any" ? "all" : value;
  }
}

function updateLocationLabel(label) {
  ui.nearbyLocationLabel.textContent = label;
}

function clearListingPhotoPreviewUrls() {
  listingPhotoPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
  listingPhotoPreviewUrls = [];
}

function getListingPhotoFiles() {
  return Array.from(ui.listingPhotoInput?.files || []);
}

function validateListingPhotoSelection() {
  const files = getListingPhotoFiles();
  const valid = files.length >= 3;
  const message = valid ? "" : "Upload at least 3 photos of the property.";
  ui.listingPhotoInput.setCustomValidity(message);
  ui.listingPhotoHint.textContent = files.length
    ? `${files.length} photo${files.length === 1 ? "" : "s"} selected. Upload at least 3 photos.`
    : "Upload at least 3 photos of the property.";

  return valid;
}

function renderListingPhotoPreview() {
  const files = getListingPhotoFiles();
  clearListingPhotoPreviewUrls();

  if (!files.length) {
    ui.listingPhotoPreview.innerHTML = '<p class="photo-preview__empty">No photos selected yet.</p>';
    validateListingPhotoSelection();
    return;
  }

  ui.listingPhotoPreview.innerHTML = files
    .slice(0, 6)
    .map((file, index) => {
      const previewUrl = URL.createObjectURL(file);
      listingPhotoPreviewUrls.push(previewUrl);

      return `
        <div class="photo-preview__item">
          <img src="${previewUrl}" alt="Selected listing photo ${index + 1}" />
          <span class="photo-preview__badge">Photo ${index + 1}</span>
        </div>
      `;
    })
    .join("");

  validateListingPhotoSelection();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  ui.toast.textContent = message;
  ui.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    ui.toast.classList.remove("is-visible");
  }, 2200);
}

function showScrim() {
  window.clearTimeout(scrimTimer);
  ui.scrim.hidden = false;
  requestAnimationFrame(() => {
    ui.scrim.classList.add("is-visible");
  });
  document.body.classList.add("overlay-open");
}

function hideScrim() {
  ui.scrim.classList.remove("is-visible");
  scrimTimer = window.setTimeout(() => {
    if (!document.querySelector(".drawer.is-open, .sheet.is-open")) {
      ui.scrim.hidden = true;
      document.body.classList.remove("overlay-open");
    }
  }, 180);
}

function closeOverlays() {
  [ui.drawer, ui.listingSheet, ui.listingFormSheet, ui.priceSheet, ui.locationSheet, ui.authSheet].forEach((element) => {
    element.classList.remove("is-open");
    element.setAttribute("aria-hidden", "true");
  });
  hideScrim();
}

function openOverlay(element) {
  closeOverlays();
  element.classList.add("is-open");
  element.setAttribute("aria-hidden", "false");
  showScrim();
}

function openDrawer() {
  openOverlay(ui.drawer);
}

function openListingForm() {
  openOverlay(ui.listingFormSheet);
}

function openPriceSheet() {
  ui.priceForm.elements.minPrice.value = state.customPrice.min;
  ui.priceForm.elements.maxPrice.value = state.customPrice.max;
  openOverlay(ui.priceSheet);
}

function getLocationParts(label = DEFAULT_LOCATION_LABEL) {
  const [areaPart, cityPart] = String(label)
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return {
    area: areaPart || DEFAULT_AREA,
    city: cityPart || DEFAULT_CITY
  };
}

function openLocationSheet() {
  const currentLocation = ui.searchInput.value.trim() || state.locationLabel;
  const { area, city } = getLocationParts(currentLocation);
  ui.locationForm.elements.area.value = area;
  ui.locationForm.elements.city.value = city;
  openOverlay(ui.locationSheet);
}

function setAuthMode(mode) {
  state.auth.mode = mode;

  ui.authTabs.forEach((button) => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  const isSignup = mode === "signup";
  ui.loginForm.hidden = isSignup;
  ui.signupForm.hidden = !isSignup;
  ui.authSheetTitle.textContent = isSignup ? "Create your RentSpot account" : "Login to RentSpot";
  ui.authCopy.textContent = isSignup
    ? "Create an account to save homes, message owners, and publish new listings."
    : "Login to save properties, message owners, and manage your listings.";
}

function renderAuthSheet() {
  const user = state.auth.user;
  const isLoggedIn = Boolean(user);

  ui.authGuestView.hidden = isLoggedIn;
  ui.authAccountView.hidden = !isLoggedIn;

  if (!isLoggedIn) {
    setAuthMode(state.auth.mode);
    return;
  }

  ui.authSheetTitle.textContent = "Your Profile";
  ui.accountName.textContent = user.name;
  ui.accountMeta.textContent = `${user.email} · ${user.phone}`;
  ui.accountPhone.textContent = user.phone;
  ui.accountEmail.textContent = user.email;
}

function openProfileSheet(mode = "login") {
  if (!state.auth.user) {
    state.auth.mode = mode;
  }

  renderAuthSheet();
  openOverlay(ui.authSheet);
}

function updateActiveTab() {
  ui.navTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  });
}

function matchesPrice(item) {
  const value = getActiveFilter("price").value;
  if (value === "custom") {
    const min = Number(state.customPrice.min || 0);
    const max = Number(state.customPrice.max || 0);
    const minMatch = !min || item.price >= min;
    const maxMatch = !max || item.price <= max;
    return minMatch && maxMatch;
  }
  if (value === "under-5000") return item.price <= 5000;
  if (value === "under-10000") return item.price <= 10000;
  if (value === "under-1500000") return item.price <= 1500000;
  return true;
}

function matchesFilters(item) {
  const value = getActiveFilter("filters").value;
  if (value === "featured") return item.badge === "FEATURED";
  if (value === "verified") return item.badge === "VERIFIED";
  if (value === "new") return item.badge === "NEW";
  return true;
}

function matchesType(item) {
  const value = getActiveFilter("type").value;
  return value === "any" || item.type === value;
}

function matchesBedrooms(item) {
  const value = getActiveFilter("bedrooms").value;
  if (value === "any") return true;
  if (value === "3") return item.bedrooms >= 3;
  return item.bedrooms === Number(value);
}

function matchesSearch(item) {
  if (!state.searchQuery) return true;
  const haystack = `${item.title} ${item.area} ${item.city} ${item.locationLabel}`.toLowerCase();
  return haystack.includes(state.searchQuery);
}

function matchesCategory(item) {
  return state.activeCategory === "all" || item.type === state.activeCategory;
}

function matchesMore(item) {
  const value = getActiveFilter("more").value;
  if (value === "any") return true;
  if (value === "wifi") {
    return item.highlights.some((highlight) => highlight.icon === "wifi" || /wi-?fi/i.test(highlight.value));
  }
  if (value === "furnished") {
    return item.highlights.some((highlight) => highlight.icon === "weekend" || /furnished/i.test(highlight.value));
  }
  if (value === "parking") {
    return item.highlights.some((highlight) => highlight.icon === "directions_car" || /parking/i.test(highlight.value));
  }

  return true;
}

function getFilteredListings() {
  return listings.filter((item) => {
    return matchesSearch(item) && matchesCategory(item) && matchesFilters(item) && matchesPrice(item) && matchesType(item) && matchesBedrooms(item) && matchesMore(item);
  });
}

function makeFeaturePills(item) {
  return item.highlights
    .map((highlight) => {
      return `
        <span class="feature-pill">
          <span class="material-symbols-rounded">${highlight.icon}</span>
          <span>${highlight.value}</span>
        </span>
      `;
    })
    .join("");
}

function renderCategories() {
  ui.categoryGrid.innerHTML = categories
    .map((category) => {
      const active = state.activeCategory === category.id;
      return `
        <button class="category-card category-card--${category.tone} ${active ? "is-active" : ""}" data-category="${category.id}" type="button" aria-pressed="${active}">
          <span class="category-card__icon">
            <span class="material-symbols-rounded">${category.icon}</span>
          </span>
          <span class="category-card__content">
            <strong>${category.title}</strong>
            <small>${category.caption}</small>
          </span>
          <span class="category-card__arrow">
            <span class="material-symbols-rounded">arrow_forward</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderQuickActions() {
  ui.quickGrid.innerHTML = quickActions
    .map((item) => {
      return `
        <button class="quick-card" data-action="${item.action}" type="button">
          <span class="quick-card__icon">
            <span class="material-symbols-rounded">${item.icon}</span>
          </span>
          <span class="quick-card__label">${item.label}</span>
          ${item.badge ? `<span class="quick-card__badge">${item.badge}</span>` : ""}
        </button>
      `;
    })
    .join("");
}

function renderFilters() {
  ui.filterSelects.forEach((select) => {
    const key = select.dataset.filterSelect;
    const options = getRenderedFilterOptions(key);
    const option = getActiveFilter(key);

    select.innerHTML = options
      .map((item) => `<option value="${item.value}">${item.display}</option>`)
      .join("");
    select.value = option.value;

    const pill = select.closest(".filter-pill");
    pill.classList.toggle("is-active", option.value !== options[0].value);
    const activeOption = options.find((item) => item.value === option.value) || option;
    pill.setAttribute("aria-label", `${key} filter: ${activeOption.label}`);
  });
}

function renderListings() {
  const filtered = getFilteredListings();
  const visibleListings = state.showAllListings ? filtered : filtered.slice(0, 3);

  ui.viewAllListingsText.textContent = state.showAllListings ? "Show less" : "View all";

  if (!filtered.length) {
    ui.listingRow.innerHTML = `
      <div class="empty-state">
        <span class="material-symbols-rounded">search_off</span>
        <strong>No listings match this search</strong>
        <p>Try another suburb or reset the active filters.</p>
        <button class="empty-state__button" data-reset-filters type="button">Reset filters</button>
      </div>
    `;
    return;
  }

  ui.listingRow.innerHTML = visibleListings
    .map((item) => {
      const saved = state.favorites.has(item.id);
      const priceLabel = item.period ? `${currency(item.price)}<small>${item.period}</small>` : currency(item.price);
      return `
        <article class="listing-card">
          <button class="favorite-button ${saved ? "is-saved" : ""}" data-favorite-id="${item.id}" type="button" aria-pressed="${saved}" aria-label="${saved ? "Remove from saved" : "Save property"}">
            <span class="material-symbols-rounded">favorite</span>
          </button>

          <button class="listing-card__button" data-open-listing="${item.id}" type="button" aria-label="Open ${item.title}">
            <div class="listing-card__media">
              <img src="${item.image}" alt="${item.title}" />
              <span class="listing-tag listing-tag--${item.badgeTone}">${item.badge}</span>
              <span class="listing-card__price-pill">${priceLabel}</span>
            </div>
            <div class="listing-card__body">
              <strong>${item.title}</strong>
              <p>${item.locationLabel}</p>
              <div class="listing-card__meta">
                ${item.highlights
                  .map((highlight) => {
                    return `
                      <span class="listing-card__meta-item">
                        <span class="material-symbols-rounded">${highlight.icon}</span>
                        <span>${highlight.value}</span>
                      </span>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          </button>
        </article>
      `;
    })
    .join("");
}

function updateSheetSaveButton(listing) {
  const saved = state.favorites.has(listing.id);
  ui.sheetSaveButton.classList.toggle("is-saved", saved);
  ui.sheetSaveButton.setAttribute("aria-pressed", saved ? "true" : "false");
  ui.sheetSaveText.textContent = saved ? "Saved" : "Save";
}

function findListing(id) {
  return listings.find((item) => item.id === id);
}

function openListingSheet(id) {
  const listing = findListing(id);
  if (!listing) return;

  state.activeListingId = id;
  ui.sheetTitle.textContent = listing.title;
  ui.sheetImage.src = listing.image;
  ui.sheetImage.alt = listing.title;
  ui.sheetPrice.textContent = `${currency(listing.price)}${listing.period}`;
  ui.sheetLocation.textContent = `${listing.locationLabel} · ${getTypeLabel(listing.type)}`;
  ui.sheetDescription.textContent = listing.description;
  ui.sheetFeatures.innerHTML = makeFeaturePills(listing);
  updateSheetSaveButton(listing);
  openOverlay(ui.listingSheet);
}

function toggleFavorite(id) {
  const listing = findListing(id);
  if (!listing) return;

  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${listing.title} removed from saved properties.`);
  } else {
    state.favorites.add(id);
    showToast(`${listing.title} saved.`);
  }

  renderListings();

  if (state.activeListingId === id) {
    updateSheetSaveButton(listing);
  }
}

function resetFilters() {
  state.activeCategory = "all";
  state.filterIndex.filters = 0;
  state.filterIndex.price = 0;
  state.filterIndex.type = 0;
  state.filterIndex.bedrooms = 0;
  state.filterIndex.more = 0;
  state.customPrice.min = "";
  state.customPrice.max = "";
  state.searchQuery = "";
  state.showAllListings = false;
  state.locationLabel = DEFAULT_LOCATION_LABEL;
  ui.searchInput.value = "";
  updateLocationLabel(state.locationLabel);
  renderCategories();
  renderFilters();
  renderListings();
  showToast("Filters cleared.");
}

function applySearch() {
  const rawValue = ui.searchInput.value.trim();
  state.searchQuery = normalize(rawValue);
  state.locationLabel = rawValue ? titleCase(rawValue) : DEFAULT_LOCATION_LABEL;
  state.activeTab = "search";
  updateActiveTab();
  updateLocationLabel(state.locationLabel);
  renderListings();

  const matches = getFilteredListings().length;
  showToast(matches ? `${matches} listing${matches === 1 ? "" : "s"} near ${state.locationLabel}.` : `No matches near ${state.locationLabel}.`);
  ui.featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyLocation(area, city) {
  const normalizedArea = titleCase(area || DEFAULT_AREA);
  const normalizedCity = titleCase(city || DEFAULT_CITY);
  const locationText = `${normalizedArea}, ${normalizedCity}`;

  ui.searchInput.value = locationText;
  state.searchQuery = normalize(`${normalizedArea} ${normalizedCity}`);
  state.locationLabel = locationText;
  state.activeTab = "search";
  updateActiveTab();
  updateLocationLabel(state.locationLabel);
  renderListings();
  closeOverlays();

  const matches = getFilteredListings().length;
  showToast(matches ? `${matches} listing${matches === 1 ? "" : "s"} near ${state.locationLabel}.` : `No matches near ${state.locationLabel}.`);
  ui.featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useNearMe() {
  openLocationSheet();
}

function cycleFilter(name) {
  const options = filterOptions[name];
  state.filterIndex[name] = (state.filterIndex[name] + 1) % options.length;

  if (name === "type") {
    state.activeCategory = "all";
  }

  renderCategories();
  renderFilters();
  renderListings();
  showToast(`${name.charAt(0).toUpperCase() + name.slice(1)}: ${getActiveFilter(name).label}.`);
}

function updateFilterSelection(name, value) {
  setFilterValue(name, value);
  renderCategories();
  renderFilters();
  renderListings();

  const title = name === "filters" ? "Filters" : titleCase(name);
  showToast(`${title}: ${(getRenderedFilterOptions(name).find((item) => item.value === getActiveFilter(name).value) || getActiveFilter(name)).label}.`);
}

function toggleCategory(id) {
  const nextCategory = state.activeCategory === id ? "all" : id;
  state.activeCategory = nextCategory;
  setFilterValue("type", nextCategory === "all" ? "any" : nextCategory);
  renderCategories();
  renderFilters();
  renderListings();

  if (state.activeCategory === "all") {
    showToast("Showing all property types.");
    return;
  }

  const category = getCategoryById(state.activeCategory);
  showToast(`Showing ${category.title.toLowerCase()} listings.`);
}

function toggleVisibleListings() {
  const filtered = getFilteredListings();
  if (filtered.length <= 3) {
    showToast("All matching listings are already visible.");
    return;
  }

  state.showAllListings = !state.showAllListings;
  renderListings();
  showToast(state.showAllListings ? "Showing all matching listings." : "Showing featured listings only.");
}

function scrollToHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function runAction(action) {
  const activeListing = findListing(state.activeListingId);

  switch (action) {
    case "home":
      state.activeTab = "home";
      updateActiveTab();
      closeOverlays();
      scrollToHome();
      return;
    case "search":
      state.activeTab = "search";
      updateActiveTab();
      closeOverlays();
      ui.searchPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      ui.searchInput.focus();
      return;
    case "add-listing":
    case "my-listings":
      state.activeTab = "add";
      updateActiveTab();
      openListingForm();
      return;
    case "messages":
      state.activeTab = "messages";
      updateActiveTab();
      closeOverlays();
      showToast("Inbox preview opened.");
      return;
    case "profile":
      state.activeTab = "profile";
      updateActiveTab();
      openProfileSheet();
      return;
    case "logout":
      state.auth.user = null;
      state.auth.mode = "login";
      renderAuthSheet();
      showToast("You have been logged out.");
      return;
    case "notifications":
      closeOverlays();
      showToast("3 new property alerts available.");
      return;
    case "saved":
      closeOverlays();
      if (!state.favorites.size) {
        showToast("Tap any heart to save a property first.");
        return;
      }
      openListingSheet(Array.from(state.favorites)[0]);
      return;
    case "nearby":
      useNearMe();
      return;
    case "help":
      closeOverlays();
      showToast("Support will reply in under 10 minutes.");
      return;
    case "chat-owner":
      if (activeListing) {
        state.activeTab = "messages";
        updateActiveTab();
        showToast(`Message started about ${activeListing.title}.`);
      }
      return;
    case "call-owner":
      if (activeListing) {
        showToast(`Calling ${activeListing.owner} about ${activeListing.area}.`);
      }
      return;
    case "request-viewing":
      if (activeListing) {
        showToast(`Viewing requested for ${activeListing.locationLabel}.`);
      }
      return;
    default:
      return;
  }
}

function handleListingSubmit(event) {
  event.preventDefault();
  const formData = new FormData(ui.listingForm);
  const type = String(formData.get("listingType") || "house");
  const title = String(formData.get("title") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const price = Number(formData.get("price") || 0);
  const photoFiles = getListingPhotoFiles();

  if (!title || !location || !price) {
    showToast("Complete the title, location, and price first.");
    return;
  }

  if (photoFiles.length < 3) {
    validateListingPhotoSelection();
    ui.listingPhotoInput.reportValidity();
    showToast("Upload at least 3 photos before publishing your listing.");
    return;
  }

  const [areaPart, cityPart] = location.split(",").map((part) => part.trim()).filter(Boolean);
  const area = areaPart || location;
  const city = cityPart || DEFAULT_CITY;
  const isRoom = type === "room";
  const isBuy = type === "buy";
  const isShack = type === "shack";
  const nextListing = {
    id: `listing-${Date.now()}`,
    title,
    price,
    period: isBuy ? "" : " /month",
    area,
    city,
    locationLabel: `${area}, ${city}`,
    type,
    bedrooms: isRoom ? 1 : isShack ? 2 : 2,
    badge: "NEW",
    badgeTone: "blue",
    image: URL.createObjectURL(photoFiles[0]),
    owner: "You",
    description: `${getTypeLabel(type)} in ${area} added from your new listing form. You can expand the full posting flow next.`,
    highlights: isBuy
      ? [
          { icon: "bed", value: "2" },
          { icon: "bathtub", value: "2" },
          { icon: "directions_car", value: "1" },
          { icon: "straighten", value: "95 m²" }
        ]
      : isRoom
        ? [
            { icon: "bed", value: "1" },
            { icon: "bathtub", value: "1" },
            { icon: "wifi", value: "Wi-Fi" },
            { icon: "weekend", value: "Furnished" }
          ]
        : isShack
          ? [
              { icon: "bed", value: "2" },
              { icon: "bathtub", value: "1" },
              { icon: "water_drop", value: "Water" },
              { icon: "bolt", value: "Electricity" }
            ]
        : [
            { icon: "bed", value: "2" },
            { icon: "bathtub", value: "2" },
            { icon: "directions_car", value: "1" },
            { icon: "straighten", value: "110 m²" }
          ]
  };

  listings.unshift(nextListing);
  state.activeTab = "home";
  state.activeCategory = "all";
  state.filterIndex.price = 0;
  state.filterIndex.type = 0;
  state.filterIndex.bedrooms = 0;
  state.searchQuery = "";
  state.showAllListings = true;
  state.locationLabel = titleCase(city);
  ui.searchInput.value = "";
  ui.listingForm.reset();
  clearListingPhotoPreviewUrls();
  renderListingPhotoPreview();

  updateActiveTab();
  updateLocationLabel(state.locationLabel);
  renderCategories();
  renderFilters();
  renderListings();
  openListingSheet(nextListing.id);
  showToast("Listing is now live in Featured Listings.");
}

function handlePriceSubmit(event) {
  event.preventDefault();
  const formData = new FormData(ui.priceForm);
  const minPrice = String(formData.get("minPrice") || "").trim();
  const maxPrice = String(formData.get("maxPrice") || "").trim();
  const min = Number(minPrice || 0);
  const max = Number(maxPrice || 0);

  if (!minPrice && !maxPrice) {
    showToast("Enter a minimum or maximum price.");
    return;
  }

  if (minPrice && maxPrice && min > max) {
    showToast("Minimum price cannot be greater than maximum price.");
    return;
  }

  state.customPrice.min = minPrice;
  state.customPrice.max = maxPrice;
  setFilterValue("price", "custom");
  renderFilters();
  renderListings();
  closeOverlays();
  showToast(`Price: ${getCustomPriceLabel()}.`);
}

function handleLocationSubmit(event) {
  event.preventDefault();
  const formData = new FormData(ui.locationForm);
  const area = String(formData.get("area") || "").trim();
  const city = String(formData.get("city") || "").trim();

  if (!area || !city) {
    showToast("Enter both the suburb and city.");
    return;
  }

  applyLocation(area, city);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const formData = new FormData(ui.loginForm);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password) {
    showToast("Enter both your email and password.");
    return;
  }

  state.auth.user = {
    name: getDisplayNameFromEmail(email),
    phone: "Not added yet",
    email
  };

  ui.loginForm.reset();
  renderAuthSheet();
  showToast(`Logged in as ${state.auth.user.name}.`);
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const formData = new FormData(ui.signupForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();
  const confirmPassword = String(formData.get("confirmPassword") || "").trim();

  if (!name || !phone || !email || !password || !confirmPassword) {
    showToast("Complete every field to create your account.");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match.");
    return;
  }

  state.auth.user = {
    name,
    phone,
    email
  };

  ui.signupForm.reset();
  renderAuthSheet();
  showToast(`Account created for ${name}.`);
}

function handleDelegatedClick(event) {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  const openButton = event.target.closest("[data-open-listing]");
  if (openButton) {
    openListingSheet(openButton.dataset.openListing);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    toggleCategory(categoryButton.dataset.category);
    return;
  }

  const resetButton = event.target.closest("[data-reset-filters]");
  if (resetButton) {
    resetFilters();
    return;
  }

  const authModeButton = event.target.closest("[data-auth-mode]");
  if (authModeButton) {
    setAuthMode(authModeButton.dataset.authMode);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    runAction(actionButton.dataset.action);
  }
}

function bindEvents() {
  document.body.addEventListener("click", handleDelegatedClick);
  ui.menuButton.addEventListener("click", openDrawer);
  ui.quickAccessButton.addEventListener("click", openDrawer);
  ui.closeMenuButton.addEventListener("click", closeOverlays);
  ui.closeSheetButton.addEventListener("click", closeOverlays);
  ui.closeFormButton.addEventListener("click", closeOverlays);
  ui.closePriceButton.addEventListener("click", closeOverlays);
  ui.closeLocationButton.addEventListener("click", closeOverlays);
  ui.closeAuthButton.addEventListener("click", closeOverlays);
  ui.scrim.addEventListener("click", closeOverlays);
  ui.searchButton.addEventListener("click", applySearch);
  ui.nearMeButton.addEventListener("click", useNearMe);
  ui.viewAllListingsButton.addEventListener("click", toggleVisibleListings);
  ui.sheetSaveButton.addEventListener("click", () => toggleFavorite(state.activeListingId));
  ui.listingPhotoInput.addEventListener("change", renderListingPhotoPreview);
  ui.filterSelects.forEach((select) => {
    select.addEventListener("change", () => {
      if (select.dataset.filterSelect === "price" && select.value === "custom") {
        setFilterValue("price", "custom");
        renderFilters();
        openPriceSheet();
        return;
      }

      updateFilterSelection(select.dataset.filterSelect, select.value);
    });
  });
  ui.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      applySearch();
    }
  });
  ui.listingForm.addEventListener("submit", handleListingSubmit);
  ui.priceForm.addEventListener("submit", handlePriceSubmit);
  ui.locationForm.addEventListener("submit", handleLocationSubmit);
  ui.loginForm.addEventListener("submit", handleLoginSubmit);
  ui.signupForm.addEventListener("submit", handleSignupSubmit);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOverlays();
    }
  });
}

function init() {
  renderCategories();
  renderQuickActions();
  renderFilters();
  renderListings();
  renderAuthSheet();
  renderListingPhotoPreview();
  updateLocationLabel(state.locationLabel);
  updateActiveTab();
  bindEvents();
}

init();