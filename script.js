const themes = [
  { name: "purple", message: "Embrace creativity — your ideas are royal." },
  { name: "seagreen", message: "Stay calm and grow strong like the sea." },
  { name: "dark", message: "Peace is found in the quiet of the dark." }
];


const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('[aria-live="polite"]');
const menuItems = document.querySelectorAll('[role="menuitem"]');


themeSwitcher.addEventListener("click", () => {
  const expanded = themeDropdown.hidden;
  themeDropdown.hidden = !expanded;
  themeSwitcher.setAttribute("aria-expanded", String(expanded));
});


menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.textContent.trim().toLowerCase();
    const theme = themes.find(t => t.name === themeName);
    if (!theme) return;

    
    document.body.className = `theme-${theme.name}`;

   
    liveRegion.textContent = theme.message;

   
    themeDropdown.hidden = true;
    themeSwitcher.setAttribute("aria-expanded", "false");
  });
});
