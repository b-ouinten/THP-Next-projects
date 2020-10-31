import showdown from "showdown";

const createMarkup = (markdown) => {
  const converter = new showdown.Converter();
  return  {__html: converter.makeHtml(markdown)}; 
}

export default createMarkup;
