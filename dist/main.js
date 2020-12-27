import app from 'apprun';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
app.render(document.body, app.h(Layout, null));
const element = 'my-app';
new Home().start(element);
new About().mount(element);
new Contact().mount(element);
//# sourceMappingURL=main.js.map