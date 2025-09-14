export default class ProductData {
  constructor(category) {
    this.category = category;

    // Compatible local et GitHub Pages
    const base = (import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : "./";
    this.path = `${base}json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
      .then(res => {
        if (!res.ok) throw new Error("Bad Response");
        return res.json();
      });
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find(item => item.Id === id);
  }
}
