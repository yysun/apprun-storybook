import { app, Component } from 'apprun';
export default class HomeComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = 'Home';
        this.view = state => app.h("div", null,
            app.h("h1", null, state));
        this.update = {
            '#Home': state => state,
        };
    }
}
//# sourceMappingURL=Home.js.map