export class FruitComponent extends HTMLDivElement {
    constructor(storeService) {
        super();
        this.className = 'bg-primary text-white p-5 text-center mt-5'
        this.storeService = storeService;
        this.updateFruitName()
    }
    
    updateFruitName() {
        this.fruitName = this.storeService.getLastFruit();
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <section>
                <h1>Current fruit: ${this.fruitName}</h1>
            </section>
        `;
    }
}
customElements.define('fruit-component', FruitComponent, { extends: 'div' });
