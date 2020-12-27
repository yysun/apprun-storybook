import { app, Component } from 'apprun';
export default class ContactComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = 'Contact';
        this.view = state => app.h("div", null,
            app.h("h1", null, state));
        this.update = {
            '#Contact': state => state,
        };
    }
}
//# sourceMappingURL=Contact.js.map