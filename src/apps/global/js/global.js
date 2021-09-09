import '../scss/global.scss';
import '../../../utilities/utilities';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

class Global {
    constructor() {
        this.initCommons();
    }

    initCommons() {
        new Header();
        new Footer();
    }
}

new Global();
