export default class Alerts {
  constructor(categoryOrPath, containerSelector) {
    // Chemin dynamique vers le JSON, compatible GitHub Pages
    this.jsonPath = `${import.meta.env.BASE_URL}${categoryOrPath}`;
    this.container = document.querySelector(containerSelector);
  }

  async init() {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) throw new Error("Bad Response");
      const alerts = await response.json();
      this.render(alerts);
    } catch (error) {
      console.error("Erreur de chargement des alertes :", error);
    }
  }

  render(alerts) {
    if (!this.container) return;

    this.container.innerHTML = ""; // vide le container avant ajout

    alerts.forEach(alert => {
      const div = document.createElement("div");
      div.textContent = alert.message;
      div.style.backgroundColor = alert.background;
      div.style.color = "#000";
      div.style.padding = "10px";
      div.style.margin = "5px 0";
      div.style.borderRadius = "5px";
      div.style.fontWeight = "bold";
      this.container.appendChild(div);
    });
  }
}
