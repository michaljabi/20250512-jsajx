
const FruitComponent = (() => {
    
    class FruitComponent extends HTMLElement {
        constructor(storeService) {
            super();
            this.storeService = storeService;
            this.updateFruitName()
        }
        
        updateFruitName() {
            this.fruitName = this.storeService.getLastFruit();
            this.render();
        }
        
        render() {
            this.innerHTML = `<h1>Current fruit: ${this.fruitName}</h1>`;
        }
    }
    customElements.define('fruit-component', FruitComponent);
    
    return FruitComponent;
})();
