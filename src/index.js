import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";
import component from "./components/component";

let rootComponent = component();
document.body.appendChild(rootComponent);

if (module.hot) {
  module.hot.accept("./components/component", () => {
    const nextComponent = component();
    document.body.replaceChild(nextComponent, rootComponent);
    rootComponent = nextComponent;
  });
}
