const menu = [
  {
    id: 1,
    title: "Pancakes",
    category: "breakfast",
    price: 8.99,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?resize=768,574",
    desc: "Fluffy pancakes served with maple syrup and butter.",
  },
  {
    id: 2,
    title: "Cheeseburger",
    category: "lunch",
    price: 10.99,
    image:
      "https://media.istockphoto.com/id/1254672762/photo/delicious-homemade-hamburger-and-french-fries.jpg?s=612x612&w=0&k=20&c=9BgdcWXRMb8hPZd2049StXFqvhDRq3izLkXK7Cq2C9s=",
    desc: "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles.",
  },
  {
    id: 3,
    title: "Spaghetti Bolognese",
    category: "dinner",
    price: 12.99,
    image:
      "https://www.countdown.co.nz/Content/Recipes/230232-Classic-SpagBol_810x520.jpg",
    desc: "Classic Italian pasta dish with savory meat sauce and Parmesan cheese.",
  },
  {
    id: 4,
    title: "French Toast",
    category: "breakfast",
    price: 7.99,
    image:
      "https://www.allrecipes.com/thmb/VjVrkCVYaalH2JXogJMoFQ_a-zI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7016-french-toast-mfs-010-0e1007bf0b47433abe91f2f0c74e5a27.jpg",
    desc: "Slices of bread soaked in a mixture of eggs and milk, then fried until golden brown.",
  },
  {
    id: 5,
    title: "Caesar Salad",
    category: "lunch",
    price: 9.99,
    image:
      "https://www.thespruceeats.com/thmb/DRaBINVopeoHOpjJn66Yh7pMBSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg",
    desc: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
  },
  {
    id: 6,
    title: "Grilled Salmon",
    category: "dinner",
    price: 15.99,
    image:
      "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/AU-recipes/fish-&-other-seafood-dishes/grilled-salmon-balsamic-caramel/main-header.jpg",
    desc: "Fresh salmon fillet seasoned with herbs and grilled to perfection.",
  },
  {
    id: 7,
    title: "Eggs Benedict",
    category: "breakfast",
    price: 11.99,
    image:
      "https://www.allrecipes.com/thmb/QVMaPhXnj1HQ70C7Ka9WYtuipHg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg",
    desc: "Toasted English muffin topped with Canadian bacon, poached eggs, and hollandaise sauce.",
  },
  {
    id: 8,
    title: "Chicken Caesar Wrap",
    category: "lunch",
    price: 8.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-Wp-f60F4aaeewyMs_MTM7Ms4Xxr9cH9NCIlCwuBWw&s",
    desc: "Grilled chicken, romaine lettuce, Caesar dressing, and Parmesan cheese wrapped in a tortilla.",
  },
  {
    id: 9,
    title: "Beef Stroganoff",
    category: "dinner",
    price: 14.99,
    image:
      "https://mojo.generalmills.com/api/public/content/jPGxmgIg-UWSX_M7M4Q16A_gmi_hi_res_jpeg.jpeg?v=a6bf6ea4&t=466b54bb264e48b199fc8e83ef1136b4",
    desc: "Tender strips of beef cooked in a creamy mushroom sauce, served over egg noodles.",
  },
  {
    id: 10,
    title: "Blueberry Muffins",
    category: "breakfast",
    price: 6.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeg1dnTEwkbBIvcHd79-iltYMwx_k9bd36vxnnHdDjw&s",
    desc: "Moist muffins filled with juicy blueberries, perfect for a morning treat.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnsContainer = document.querySelector(".btns");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);

  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <div class="image-container">
        <img
          src=${item.image}
          class="photo"
          alt=""
        />
        </div>
        <div class="item-info">
          <header>
            <h5>${item.title}</h5>
            <h5 class="item-price">$${item.price}</h5>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = (button) => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoriesBtn = categories
    .map((category) => {
      return `<button type="button" class="btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnsContainer.innerHTML = categoriesBtn;
  const filterBtns = btnsContainer.querySelectorAll(".btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter((menuItem) => {
        filteredMenuItems = menuItem.category === category;
        if (filteredMenuItems) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
