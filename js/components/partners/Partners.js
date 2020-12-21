class Partners {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.maxItems = params.maxItems || 5;
        this.cloneCount = params.cloneCount || 2;
        this.visibilityStrategy = params.visibilityStrategy || 'random';

        this.init();
    }
    
    init() {
        this.render();
    }

    isValidSelector() {
        return true;
    }

    render () {
        if(!this.isValidSelector()) {
            return;
        }
        const HTML = `<div class="partners-block">
                        <div class="view">
                            <div class="list">
                                <div class="item">
                                    <a href="#"><img class="partner" src="./img/partners/l1.png" alt="logo"></a>
                                    <a href="#"><img class="partner" src="./img/partners/l2.png" alt="logo"></a>
                                    <a href="#"><img class="partner" src="./img/partners/l3.png" alt="logo"></a>
                                    <a href="#"><img class="partner" src="./img/partners/l4.png" alt="logo"></a>
                                    <a href="#"><img class="partner" src="./img/partners/l5.png" alt="logo"></a>
                                </div>
                            </div>
                        </div>
                    </div>`;

        const DOM = document.querySelector(this.selector);
        DOM.innerHTML = HTML;
    }
}

export { Partners }