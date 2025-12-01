// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let menuIcon = null;

if (mobileMenuBtn) {
  menuIcon = mobileMenuBtn.querySelector("[data-lucide]");
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.toggle("show");
    }
    if (menuIcon) {
      if (mobileMenu && mobileMenu.classList.contains("show")) {
        menuIcon.setAttribute("data-lucide", "x");
      } else {
        menuIcon.setAttribute("data-lucide", "menu");
      }
      lucide.createIcons();
    }
  });
}
// Desktop Dropdown menus
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    // Close other dropdowns
    dropdowns.forEach((other) => {
      if (other !== dropdown) {
        other.classList.remove("active");
      }
    });
    dropdown.classList.toggle("active");
  });
});

// Close desktop dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideDropdown = e.target.closest(".dropdown");

  if (!isClickInsideDropdown) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// Mobile dropdown menus - IMPROVED VERSION
const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
mobileDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".mobile-dropdown-toggle");
  const menu = dropdown.querySelector(".mobile-dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isCurrentlyOpen = !menu.classList.contains("hidden");

    mobileDropdowns.forEach((other) => {
      const otherMenu = other.querySelector(".mobile-dropdown-menu");
      const otherToggle = other.querySelector(".mobile-dropdown-toggle");
      if (otherMenu) otherMenu.classList.add("hidden");
      if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
    });

    if (!isCurrentlyOpen) {
      menu.classList.remove("hidden");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      toggle.setAttribute("aria-expanded", "false");
    }

    lucide.createIcons();
  });
});

// Close mobile dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideMobileDropdown = e.target.closest(".mobile-dropdown");

  if (!isClickInsideMobileDropdown) {
    mobileDropdowns.forEach((dropdown) => {
      dropdown.querySelector(".mobile-dropdown-menu").classList.add("hidden");
    });
  }
});

// Close mobile dropdown menus when scrolling - IMMEDIATE
window.addEventListener(
  "scroll",
  function () {
    const siteNav = document.querySelector(".site-nav");
    if (siteNav) {
      if (window.scrollY > 0) {
        siteNav.classList.add("sticky-scrolled");
      } else {
        siteNav.classList.remove("sticky-scrolled");
      }
    }
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
      if (menuIcon) {
        menuIcon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      }
    }

    mobileDropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector(".mobile-dropdown-menu");
      const toggle = dropdown.querySelector(".mobile-dropdown-toggle");
      if (menu) menu.classList.add("hidden");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  },
  { passive: true }
);
// Close mobile dropdowns when clicking outside

// Contact modal
const contactModal = document.getElementById("contact-modal");
const contactBtns = [
  document.getElementById("contact-btn"),
  document.getElementById("mobile-contact-btn"),
  document.getElementById("hero-enquiry-btn"),
  document.getElementById("schedule-visit-btn"),
];
const closeModal = document.getElementById("close-modal");
const cancelBtn = document.getElementById("cancel-btn");
const contactForm = document.getElementById("contact-form");

function openModal() {
  contactModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  contactModal.classList.remove("show");
  document.body.style.overflow = "";
  contactForm.reset();
}

contactBtns.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", openModal);
  }
});

if (closeModal) {
  closeModal.addEventListener("click", closeContactModal);
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });
}

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Message sent successfully! We will get back to you within 24 hours."
    );
    closeContactModal();
  });
}

// Gallery modal
const galleryModal = document.getElementById("gallery-modal");
const galleryImage = document.getElementById("gallery-image");
const closeGallery = document.getElementById("close-gallery");
const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    galleryImage.src = item.src;
    galleryImage.alt = item.alt;
    galleryModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

function closeGalleryModal() {
  galleryModal.classList.remove("show");
  document.body.style.overflow = "";
}

if (closeGallery) {
  closeGallery.addEventListener("click", closeGalleryModal);
}

if (galleryModal) {
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      closeGalleryModal();
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.classList.remove("show");
        if (menuIcon) {
          menuIcon.setAttribute("data-lucide", "menu");
          lucide.createIcons();
        }
      }
    }
  });
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("show");
    }
    if (menuIcon) {
      menuIcon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    }
  });
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (contactModal && contactModal.classList.contains("show")) {
      closeContactModal();
    }
    if (galleryModal && galleryModal.classList.contains("show")) {
      closeGalleryModal();
    }
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// FAQ Accordion - DEFINE AS GLOBAL FUNCTION
window.toggleFAQ = function (id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (!content || !icon) return;

  // Check if this item is currently open
  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  // Close all FAQs
  for (let i = 1; i <= 5; i++) {
    const otherContent = document.getElementById(`content-${i}`);
    const otherIcon = document.getElementById(`icon-${i}`);
    if (otherContent && otherIcon) {
      otherContent.style.maxHeight = "0px";
      otherIcon.style.transform = "rotate(0deg)";
    }
  }

  // If this item wasn't open, open it
  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  }
};

// Open first FAQ by default
window.addEventListener("DOMContentLoaded", () => {
  if (typeof toggleFAQ === "function") {
    toggleFAQ(1);
  }
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// Search functionality for The Blueprint Schools
const searchInput = document.querySelector(".flex-1.outline-none");
const searchBtn = searchInput?.nextElementSibling;

// Create search results container
const searchResultsContainer = document.createElement("div");
searchResultsContainer.id = "search-results";
searchResultsContainer.className = "search-results";

// Insert after the search bar
const searchBar = document.querySelector(".max-w-xl.mx-auto.bg-white");
if (searchBar) {
  searchBar.parentElement.style.position = "relative";
  searchBar.parentElement.insertBefore(
    searchResultsContainer,
    searchBar.nextSibling
  );
}

// Define searchable content from your website
const searchableContent = [
  // Classes
  {
    title: "Daycare Program",
    content:
      "Nurturing care for children aged 6 months to 2 years with Islamic values and early childhood development.",
    type: "Academic Program",
    link: "Class.html",
  },
  {
    title: "Nursery School",
    content:
      "Foundation learning with play-based activities, Quran recitation, and basic Islamic teachings for young minds aged 2-5 years.",
    type: "Academic Program",
    link: "Class.html",
  },
  {
    title: "Primary Education",
    content:
      "Comprehensive primary education combining Nigerian curriculum with Islamic studies, Arabic, and moral education for ages 6-11 years.",
    type: "Academic Program",
    link: "Class.html",
  },
  {
    title: "College Program",
    content:
      "Advanced secondary education preparing students for university with strong Islamic foundation and academic excellence for ages 12-18 years.",
    type: "Academic Program",
    link: "Class.html",
  },

  // FAQs
  {
    title: "How can I apply for admission?",
    content:
      "You can apply by completing the online admission form available on our website or by visiting the school's admission office. Once the form is submitted, our admission team will contact you with details on entrance exams, interviews, and next steps.",
    type: "FAQ",
    link: "#",
  },
  {
    title: "What curriculum does the school follow?",
    content:
      "Our school follows a comprehensive curriculum that combines national standards with international best practices, ensuring students receive a well-rounded education that prepares them for global opportunities.",
    type: "FAQ",
    link: "#",
  },
  {
    title: "What are the school hours?",
    content:
      "Regular school hours are from 8:00 AM to 3:00 PM, Monday through Friday. Extended care programs are available for families who need earlier drop-off or later pick-up times.",
    type: "FAQ",
    link: "#",
  },
  {
    title: "Does the school provide transportation?",
    content:
      "Yes, we offer safe and reliable transportation services covering multiple routes throughout the area. Our buses are well-equipped and supervised by trained staff to ensure student safety.",
    type: "FAQ",
    link: "#",
  },
  {
    title: "How can parents stay updated on their child's progress?",
    content:
      "Parents can access class teachers physically or through mail for real-time updates on grades, attendance, and assignments. We also provide regular progress reports and parent-teacher meetings.",
    type: "FAQ",
    link: "#",
  },

  // School Offers
  {
    title: "Computer Literacy Program",
    content:
      "Modern computer education and digital literacy programs to prepare students for the digital age.",
    type: "School Offers",
    link: "#",
  },
  {
    title: "Arabic and French Language",
    content:
      "Comprehensive language education in Arabic for Islamic studies and French for global communication.",
    type: "School Offers",
    link: "#",
  },
  {
    title: "Medical and Counselling Services",
    content:
      "Professional medical care and psychological counselling services for student wellbeing.",
    type: "School Offers",
    link: "#",
  },
  {
    title: "Transportation and Boarding",
    content:
      "Safe transportation services and comfortable boarding facilities for students.",
    type: "School Offers",
    link: "#",
  },

  // Pages
  {
    title: "Principal's Address",
    content:
      "A message from our principal about our mission and vision for Islamic education and academic excellence.",
    type: "About",
    link: "/principal-address",
  },
  {
    title: "Our Story",
    content:
      "Established in 2010, The Blueprint Schools has been at the forefront of Islamic education in Nigeria, providing comprehensive learning experiences.",
    type: "About",
    link: "Story.html",
  },
  {
    title: "Teachers and Staff",
    content:
      "Meet our experienced and certified teachers dedicated to student success.",
    type: "About",
    link: "Staff.html",
  },
  {
    title: "School Gallery",
    content:
      "Take a visual journey through our modern facilities, vibrant classrooms, and the joyful learning experiences of our students.",
    type: "Gallery",
    link: "Gallery.html",
  },
  {
    title: "Admission Process",
    content:
      "Learn about our admission process, fees, and requirements for enrolling your child.",
    type: "Admission",
    link: "Admission.html",
  },
  {
    title: "Boarding Facilities",
    content:
      "Comfortable and safe boarding facilities for students from other states.",
    type: "Admission",
    link: "Admission.html",
  },
];

function performSearch(query) {
  if (!query || query.trim().length < 2) {
    hideSearchResults();
    return;
  }

  const lowercaseQuery = query.toLowerCase().trim();

  // Search through content
  const results = searchableContent.filter((item) => {
    return (
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      item.type.toLowerCase().includes(lowercaseQuery)
    );
  });

  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  if (results.length === 0) {
    searchResultsContainer.innerHTML = `
      <div class="search-result-item no-results">
        <div class="flex items-center justify-center py-8">
          <div class="text-center">
            <i data-lucide="search-x" class="h-12 w-12 text-gray-400 mx-auto mb-2"></i>
            <p class="text-gray-600">No results found for "${query}"</p>
            <p class="text-sm text-gray-500 mt-2">Try searching for courses, programs, or FAQs</p>
          </div>
        </div>
      </div>
    `;
  } else {
    searchResultsContainer.innerHTML = `
      <div class="search-results-header">
        <p class="text-sm text-gray-600 px-4 py-2 border-b">Found ${
          results.length
        } result${results.length !== 1 ? "s" : ""}</p>
      </div>
      ${results
        .map(
          (result) => `
        <a href="${result.link}" class="search-result-item">
          <div class="flex items-start">
            <div class="flex-1">
              <div class="search-result-title">${highlightQuery(
                result.title,
                query
              )}</div>
              <div class="search-result-content">${highlightQuery(
                truncateText(result.content, 120),
                query
              )}</div>
            </div>
            <span class="search-result-type">${result.type}</span>
          </div>
        </a>
      `
        )
        .join("")}
    `;
  }

  searchResultsContainer.classList.add("show");

  // Re-initialize lucide icons for the search icon
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function highlightQuery(text, query) {
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
}

function hideSearchResults() {
  searchResultsContainer.classList.remove("show");
  searchResultsContainer.innerHTML = "";
}

// Event listeners for search
if (searchInput) {
  // Real-time search as user types
  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  // Search on Enter key
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch(searchInput.value);
    }
  });

  // Clear search on Escape key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      hideSearchResults();
    }
  });
}

if (searchBtn) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    performSearch(searchInput.value);
  });
}

// Close search results when clicking outside
document.addEventListener("click", (e) => {
  if (
    searchResultsContainer &&
    !searchResultsContainer.contains(e.target) &&
    e.target !== searchInput &&
    e.target !== searchBtn
  ) {
    hideSearchResults();
  }
});

// Prevent search results from closing when clicking inside
if (searchResultsContainer) {
  searchResultsContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
