export default (text = "Start development") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};