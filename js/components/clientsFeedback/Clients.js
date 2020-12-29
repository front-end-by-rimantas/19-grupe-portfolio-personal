class renderClientsFeedback {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.maxItems = params.maxItems || 4;
        this.cloneCount = params.cloneCount || 4;
        this.isArrowsVisible = params.isArrowsVisible || true;
        this.visibilitystrategy = params.visibilitystrategy || 'random';

        this.testimonialsCount = this.data.length;
        this.DOM = null;
        this.listDOM = null;
        this.arrowsDOM = null;
        this.arrowsDOMs = null;

        this.init();
    }
    
    init() {
        // input validation 
        // for false info - generate valid default data
        if(!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
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
        const itemWidth = 100 / (this.data.length + 2 * this.cloneCount);

        const dataCopy = [this.data[1], this.data[0], ...this.data, this.data[0], this.data[1]];

        for(let testimonial of dataCopy) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }
            // style="width: 580px; height:170px">
            HTML += `<div class="clients-feedback-item" style="width: ${itemWidth}%;">
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

    generateArrows() {
        let HTML = '';
        if(!this.isArrowsVisible) {
            return HTML;
        }
        HTML = `<div class="cont-arrow clients-feedback">
                    ${this.isArrowsVisible ? '<svg class="clients-arrow lnr lnr-arrow-up"><use xlink:href="#lnr-arrow-up"></use></svg>' : ''}
                    ${this.isArrowsVisible ? '<svg class="clients-arrow lnr lnr-arrow-down"><use xlink:href="#lnr-arrow-down"></use></svg>' : ''}
                </div>`;

        return HTML;
    }

    render() {
        const listWidth = (this.data.length + 2 * this.cloneCount) * 50;

        // style="width: 500%;"
        const HTML = ` <div class="testimonial">
        <div class="view">
            <div class="clients-list" style="width: ${listWidth}%;">
                ${this.generateItems()}
            </div>
            ${this.generateArrows()}
        </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.clients-list');

        if(this.isArrowsVisible) {
            this.arrowsDOM = this.DOM.querySelector('.cont-arrow');

            if(this.isArrowsVisible) {
                this.arrowsDOMs = this.arrowsDOM.querySelectorAll('.clients-arrow');
            }
        }
    }

    addEvents() {
        for(let i = 0; i < this.arrowsDOMs.length; i++) {
            const arrow = this.arrowsDOMs[i];
            console.log(arrow);

            arrow.addEventListener('click', () => {
                this.listDOM.style.marginLeft = -100 * i + '%';
            })
        }
    }
}

export { renderClientsFeedback }