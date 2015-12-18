export default (urls) => {
  document.querySelector('#images').innerHTML = urls.map(url => {
    return `<img src="${url}">`;
  }).join("\n");
}