export default class Alerts {
  constructor(jsonFileName, containerSelector) {
    this.jsonPath = `/sleepoutside/json/${jsonFileName}`;
    this.container = document.querySelector(containerSelector);
  }

  async init() {
    try {
      const response = await fetch(this.jsonPath);
      const alerts = await response.json();
      this.render(alerts);
    } catch (error) {
      console.error("Error loading alerts:", error);
    }
  }

  render(alerts) {
    if (!this.container) return;

    alerts.forEach(alert => {
      const div = document.createElement("div");
      div.textContent = alert.message;
      div.style.backgroundColor = alert.background;
      div.style.color = "#fff"; // texte blanc
      div.style.padding = "10px";
      div.style.margin = "5px 0";
      div.style.borderRadius = "5px";
      div.style.fontWeight = "bold";
      div.style.fontFamily = "Arial, sans-serif";
      this.container.appendChild(div);
    });
  }
}
