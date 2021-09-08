import './header.scss';

export default class Header {
    constructor() {
        this.headerEl = document.querySelector('header');

        this.headerEl.innerHTML = `
            <div class="card">
                <h1>Header</h1>
            </div>
        `;
    }
}