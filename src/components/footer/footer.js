import './footer.scss';

export default class Footer {
    constructor() {
        this.footerEl = document.querySelector('footer');

        this.footerEl.innerHTML = `
            <div class="card">
                <h1>Footer</h1>
            </div>`;
    }
}
