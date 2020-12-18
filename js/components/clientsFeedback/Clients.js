class renderClientsFeedback {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.maxItems = params.maxItems || 4;
        this.cloneCount = params.cloneCount || 2;
        this.visibilitystrategy = params.visibilitystrategy || 'random';

        this.DOM = null;

        this.init();
    }
    
    init() {
        // input validation 
        // for false info - generate valid default data
        if(!this.isValidSelector()) {
            return;
        }
        this.render();
    }

    isValidSelector() {
        let DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isValidTestimonial(testimonial) {
        return true;
    }

    generateItems() {
        let HTML = '';
        for(let testimonial of this.data) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }
            HTML += `<div class="clients-feedback-item" style="width: 580px; height:170px">
                        <div class="cont-left">
                            <img src="${testimonial.img}" alt="An image of a user">
                        </div>
                        <div class="cont-right">
                            <p class="cont-right-text">${testimonial.comment}</p>
                            <h4 class="cont-right-text">${testimonial.name}</h4>
                            <p class="cont-right-text">${testimonial.position}</p>
                        </div>
                    </div>`;
        }
        return HTML;
    }

    render() {
        const HTML = ` <div class="testimonial">
        <div class="view">
            <div class="clients-list" style="width: 500%;">
                ${this.generateItems()}
            </div>
        </div>
        <div class="cont-arrow clients-feedback">
            <svg class="lnr lnr-arrow-up"><use xlink:href="#lnr-arrow-up"></use></svg> 
            <svg class="lnr lnr-arrow-down"><use xlink:href="#lnr-arrow-down"></use></svg> 
        </div>
        </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { renderClientsFeedback }