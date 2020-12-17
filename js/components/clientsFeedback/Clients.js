class renderClientsFeedback {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.maxItems = params.maxItems;
        this.cloneCount = params.cloneCount;
        this.visibilitystrategy = params.visibilitystrategy;

        
    }
    
    init() {
        this.render();
    }

    render() {

    }
}

export { renderClientsFeedback }