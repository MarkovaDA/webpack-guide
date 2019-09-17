export default (text = "Start development") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};