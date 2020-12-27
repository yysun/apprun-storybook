import { app, Component } from 'apprun';
export default class AboutComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = 'About';
        this.view = state => app.h("div", null,
            app.h("h1", null, state));
        this.update = {
            '#About': state => state,
        };
    }
}
//# sourceMappingURL=About.js.map