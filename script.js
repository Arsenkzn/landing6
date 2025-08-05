const courses = [
  {
    id: 1,
    title: "SPACE DEFI BASICS",
    price: 0.3,
    category: "DEFI",
    preview: "img/prev1.png",
  },
  {
    id: 2,
    title: "NFT GALAXY GUIDE",
    price: 1.5,
    category: "NFTS",
    preview: "img/prev2.png",
  },
  {
    id: 3,
    title: "TOKEN SNIPING",
    price: 2.0,
    category: "SNIPING",
    preview: "https://source.unsplash.com/random/300x200/?telescope,scope",
  },
  {
    id: 4,
    title: "COSMIC SECURITY",
    price: 1.8,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?shield,space",
  },
  {
    id: 5,
    title: "BUILD SPACE DAPPS",
    price: 1.2,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?satellite,tech",
  },
  {
    id: 6,
    title: "WALLET SAFETY",
    price: 0.5,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?vault,space",
  },
  {
    id: 7,
    title: "YIELD FARMING",
    price: 1.7,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?farm,stars",
  },
  {
    id: 8,
    title: "NFT FLIPPING",
    price: 2.5,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?coin,galaxy",
  },
  {
    id: 9,
    title: "AIRDROP HUNTING",
    price: 1.0,
    category: "SNIPING",
    preview: "https://source.unsplash.com/random/300x200/?comet,sky",
  },
  {
    id: 10,
    title: "SOLIDITY 101",
    price: 0.8,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?code,space",
  },
  {
    id: 11,
    title: "ADVANCED DEFI",
    price: 3.0,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?chart,stars",
  },
  {
    id: 12,
    title: "GENERATIVE ART",
    price: 2.2,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?art,cosmos",
  },
  {
    id: 13,
    title: "MEV PROTECTION",
    price: 1.5,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?shield,planet",
  },
  {
    id: 14,
    title: "FLASH LOANS",
    price: 2.8,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?lightning,space",
  },
  {
    id: 15,
    title: "NFT ROYALTIES",
    price: 0.7,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?crown,star",
  },
  {
    id: 16,
    title: "GAS OPTIMIZATION",
    price: 1.3,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?rocket,engine",
  },
  {
    id: 17,
    title: "RUG PULL DETECTION",
    price: 1.0,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?warning,space",
  },
  {
    id: 18,
    title: "LIQUIDITY POOLS",
    price: 1.6,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?pool,water",
  },
  {
    id: 19,
    title: "NFT METADATA",
    price: 0.9,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?data,server",
  },
  {
    id: 20,
    title: "FRONTRUNNING BOTS",
    price: 3.5,
    category: "SNIPING",
    preview: "https://source.unsplash.com/random/300x200/?robot,ai",
  },
  {
    id: 21,
    title: "DAO GOVERNANCE",
    price: 1.4,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?meeting,space",
  },
  {
    id: 22,
    title: "3D NFTS",
    price: 2.0,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?3d,model",
  },
  {
    id: 23,
    title: "MULTI-SIG WALLETS",
    price: 0.6,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?safe,lock",
  },
  {
    id: 24,
    title: "ORACLES",
    price: 1.9,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?oracle,temple",
  },
  {
    id: 25,
    title: "IMPERMANENT LOSS",
    price: 1.1,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?loss,space",
  },
  {
    id: 26,
    title: "NFT COMMUNITIES",
    price: 1.8,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?community,people",
  },
  {
    id: 27,
    title: "PRIVATE KEYS",
    price: 0.4,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?key,door",
  },
  {
    id: 28,
    title: "UPGRADEABLE CONTRACTS",
    price: 2.3,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?upgrade,stairs",
  },
  {
    id: 29,
    title: "LEVERAGED YIELD",
    price: 3.2,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?lever,construction",
  },
  {
    id: 30,
    title: "NFT VALUATION",
    price: 1.7,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?valuation,money",
  },
];

// Generate course cards
const courseGrid = document.querySelector(".course-grid");

courses.forEach((course) => {
  const card = document.createElement("div");
  card.className = "course-card";

  card.innerHTML = `
        <div class="course-preview" style="background-image: url('${course.preview}')"></div>
        <div class="course-info">
            <h3 class="course-title">${course.title}</h3>
            <div class="course-price">
                <i class="fas fa-coins"></i>
                <span>${course.price} KNOW</span>
            </div>
            <div class="course-categories">
                <span class="category">${course.category}</span>
            </div>
            <button class="unlock-btn">UNLOCK</button>
        </div>
    `;

  courseGrid.appendChild(card);
});

// Connect wallet button functionality
const connectWalletBtn = document.querySelector(".connect-btn");
connectWalletBtn.addEventListener("click", () => {
  alert("ALERT! Connect your cosmic wallet to access space knowledge!");
});

// Unlock buttons functionality
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("unlock-btn")) {
    alert("🚀 Connect your wallet to unlock this space course!");
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.textContent;
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach((card) => {
      const category = card.querySelector(".category").textContent;
      if (filter === "ALL" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Add keyframes for confetti
const style = document.createElement("style");
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Money effect on click
document.addEventListener("click", function (e) {
  // Don't create money if clicking on interactive elements
  if (
    e.target.tagName === "BUTTON" ||
    e.target.tagName === "A" ||
    e.target.closest("button") ||
    e.target.closest("a")
  ) {
    return;
  }

  const moneyContainer = document.getElementById("money-container");
  const moneyCount = 5 + Math.floor(Math.random() * 10);

  for (let i = 0; i < moneyCount; i++) {
    const money = document.createElement("div");
    money.className = "money-bill";
    money.textContent = Math.floor(Math.random() * 50) + 1;

    // Position near click
    const x = e.clientX + (Math.random() * 100 - 50);
    const y = e.clientY + (Math.random() * 100 - 50);

    money.style.left = x + "px";
    money.style.top = y + "px";
    money.style.opacity = "1";

    // Random rotation
    const rotation = Math.random() * 60 - 30;
    money.style.transform = `translateY(0) rotate(${rotation}deg)`;

    moneyContainer.appendChild(money);

    // Animate money
    const duration = 1 + Math.random() * 2;
    money.style.transition = `all ${duration}s ease-out`;

    setTimeout(() => {
      money.style.opacity = "0";
      money.style.transform = `translateY(-100px) rotate(${rotation + 45}deg)`;

      // Remove after animation
      setTimeout(() => {
        money.remove();
      }, duration * 1000);
    }, 50);
  }
});

// Initial confetti burst
setTimeout(createConfetti, 1000);
