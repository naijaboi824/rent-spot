const listings = [
  {
    id: 1,
    title: "Modern Studio in Sea Point",
    price: 9200,
    location: "Cape Town",
    area: "Sea Point",
    rooms: 1,
    type: "room",
    description: "Bright studio with fast internet, secure access, and a short walk to the promenade.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    near: true
  },
  {
    id: 2,
    title: "Family House with Garden",
    price: 18500,
    location: "Cape Town",
    area: "Rondebosch",
    rooms: 3,
    type: "house",
    description: "Spacious 3-bedroom house, pet-friendly, with covered parking and quiet neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    near: false
  },
  {
    id: 3,
    title: "Room Near Campus",
    price: 6800,
    location: "Cape Town",
    area: "Observatory",
    rooms: 1,
    type: "room",
    description: "Single room in shared house, close to transport and shops, ideal for students.",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false,
    near: true
  },
  {
    id: 4,
    title: "Townhouse for Sale",
    price: 1450000,
    location: "Cape Town",
    area: "Durbanville",
    rooms: 3,
    type: "buy",
    description: "Secure townhouse in a gated estate with private patio and modern finishes.",
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    near: true
  }
];

const threads = [
  {
    id: "t1",
    name: "Lerato M.",
    preview: "Is the room still available?",
    messages: [
      { text: "Hi, is the room still available?", out: false },
      { text: "Yes, it is available from next week.", out: true },
      { text: "Great. Can I schedule a viewing tomorrow?", out: false }
    ]
  },
  {
    id: "t2",
    name: "Property Owner - Greenpoint",
    preview: "We can do Saturday at 10am.",
    messages: [
      { text: "Thanks for your interest.", out: false },
      { text: "Saturday works for me.", out: true },
      { text: "Perfect, see you at 10am.", out: false }
    ]
  }
];

let selectedListing = listings[0];
let activeThreadId = threads[0].id;

const splash = document.getElementById("splash");
const navButtons = document.querySelectorAll(".screen-nav__item");
const screens = document.querySelectorAll(".screen");
const featuredGrid = document.getElementById("featuredGrid");
const nearGrid = document.getElementById("nearGrid");
const searchResults = document.getElementById("searchResults");
const resultCount = document.getElementById("resultCount");

function currency(value) {
  return `R ${value.toLocaleString("en-ZA")}`;
}

function getTypeLabel(type) {
  if (type === "house") return "Rent a House";
  if (type === "room") return "Rent a Room";
  return "Buy Property";
}

function makePropertyCard(item) {
  const el = document.createElement("button");
  el.className = "property-card";
  el.type = "button";
  el.innerHTML = `
    <div class="property-card__image" style="background-image:url('${item.images[0]}')"></div>
    <div class="property-card__body">
      <strong>${item.title}</strong>
      <span class="property-card__price">${currency(item.price)}</span>
      <span class="property-card__meta">${item.area}, ${item.location}</span>
      <span class="property-card__meta">${getTypeLabel(item.type)} - ${item.rooms} room(s)</span>
    </div>
  `;
  el.addEventListener("click", () => {
    selectedListing = item;
    renderDetails();
    activateScreen("details");
  });
  return el;
}

function renderHome() {
  featuredGrid.innerHTML = "";
  nearGrid.innerHTML = "";

  listings
    .filter((item) => item.featured)
    .slice(0, 3)
    .forEach((item) => featuredGrid.appendChild(makePropertyCard(item)));

  listings
    .filter((item) => item.near)
    .slice(0, 3)
    .forEach((item) => nearGrid.appendChild(makePropertyCard(item)));
}

function renderResults() {
  const locationValue = document.getElementById("locationInput").value.trim().toLowerCase();
  const maxPrice = Number(document.getElementById("priceInput").value || 0);
  const roomsValue = document.getElementById("roomsInput").value;
  const typeValue = document.getElementById("typeInput").value;

  const filtered = listings.filter((item) => {
    const locationMatch = !locationValue || item.location.toLowerCase().includes(locationValue) || item.area.toLowerCase().includes(locationValue);
    const priceMatch = !maxPrice || item.price <= maxPrice;
    const roomsMatch = roomsValue === "any" || (roomsValue === "3" ? item.rooms >= 3 : item.rooms === Number(roomsValue));
    const typeMatch = typeValue === "any" || item.type === typeValue;
    return locationMatch && priceMatch && roomsMatch && typeMatch;
  });

  searchResults.innerHTML = "";
  filtered.forEach((item) => searchResults.appendChild(makePropertyCard(item)));

  resultCount.textContent = `${filtered.length} propert${filtered.length === 1 ? "y" : "ies"}`;
}

function renderDetails() {
  const gallery = document.getElementById("imageGallery");
  const title = document.getElementById("detailsTitle");
  const price = document.getElementById("detailsPrice");
  const location = document.getElementById("detailsLocation");
  const description = document.getElementById("detailsDescription");
  const mapText = document.getElementById("mapText");

  gallery.innerHTML = "";
  selectedListing.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = selectedListing.title;
    gallery.appendChild(img);
  });

  title.textContent = selectedListing.title;
  price.textContent = currency(selectedListing.price);
  location.textContent = `${selectedListing.area}, ${selectedListing.location}`;
  description.textContent = selectedListing.description;
  mapText.textContent = `Map preview for ${selectedListing.area}, ${selectedListing.location}`;
}

function activateScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === id);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === id);
  });
}

function setupNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => activateScreen(button.dataset.target));
  });

  document.getElementById("quickAddBtn").addEventListener("click", () => activateScreen("post"));
}

function setupCategoryChips() {
  const chips = document.querySelectorAll(".chip-row .chip[data-type]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      document.getElementById("typeInput").value = chip.dataset.type;
      activateScreen("search");
      renderResults();
    });
  });
}

function setupSearchActions() {
  document.getElementById("applySearchBtn").addEventListener("click", renderResults);

  document.getElementById("homeSearchBtn").addEventListener("click", () => {
    const val = document.getElementById("homeSearch").value.trim();
    document.getElementById("locationInput").value = val || "Cape Town";
    activateScreen("search");
    renderResults();
  });
}

function setupListingFlow() {
  const plans = document.querySelectorAll(".plan");
  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((p) => p.classList.remove("is-selected"));
      plan.classList.add("is-selected");
      plan.querySelector("input").checked = true;
    });
  });

  document.getElementById("listingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("paymentCard").classList.remove("hidden");
    document.getElementById("paymentCard").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  const paymentChips = document.querySelectorAll(".chip[data-payment]");
  paymentChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      paymentChips.forEach((c) => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
    });
  });

  document.getElementById("payBtn").addEventListener("click", () => {
    const status = document.getElementById("reviewStatus");
    status.textContent = "Listing under review. It will go live after approval.";
  });
}

function renderInbox() {
  const inbox = document.getElementById("inboxList");
  inbox.innerHTML = "";
  threads.forEach((thread) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `thread ${thread.id === activeThreadId ? "is-active" : ""}`;
    item.innerHTML = `<strong>${thread.name}</strong><small>${thread.preview}</small>`;
    item.addEventListener("click", () => {
      activeThreadId = thread.id;
      renderInbox();
      renderChat();
    });
    inbox.appendChild(item);
  });
}

function renderChat() {
  const active = threads.find((thread) => thread.id === activeThreadId);
  const head = document.getElementById("chatHead");
  const body = document.getElementById("chatBody");
  head.textContent = active ? active.name : "Select a conversation";
  body.innerHTML = "";

  if (!active) return;

  active.messages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${message.out ? "bubble--out" : "bubble--in"}`;
    bubble.textContent = message.text;
    body.appendChild(bubble);
  });

  body.scrollTop = body.scrollHeight;
}

function setupChatComposer() {
  document.getElementById("chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;

    const active = threads.find((thread) => thread.id === activeThreadId);
    if (!active) return;

    active.messages.push({ text, out: true });
    active.preview = text;
    input.value = "";
    renderInbox();
    renderChat();
  });
}

function setupAuthForm() {
  document.getElementById("authForm").addEventListener("submit", (event) => {
    event.preventDefault();
    activateScreen("home");
  });
}

function setupSaveButton() {
  const saveBtn = document.getElementById("saveBtn");
  let saved = false;
  saveBtn.addEventListener("click", () => {
    saved = !saved;
    saveBtn.textContent = saved ? "Saved" : "Save";
  });
}

function init() {
  setupNavigation();
  setupCategoryChips();
  setupSearchActions();
  setupListingFlow();
  setupChatComposer();
  setupAuthForm();
  setupSaveButton();

  renderHome();
  renderResults();
  renderDetails();
  renderInbox();
  renderChat();

  // Short splash to mimic first-time app launch.
  setTimeout(() => {
    splash.classList.add("is-hidden");
  }, 1200);
}

init();
