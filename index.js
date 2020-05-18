import { fire, ready } from 'domassist';

export function loadSVG(url, callback = () => { }) {
  if (!url) {
    return;
  }

  const ajax = new XMLHttpRequest();

  ajax.open('GET', url, true);
  ajax.send();
  ajax.onload = () => {
    callback(ajax.responseText);
  };

  ajax.onerror = () => {
    callback(null);
  };
}

export function injectSVG(url) {
  loadSVG(url, svg => {
    const div = document.createElement('div');
    div.classList.add('svg-injector');
    div.innerHTML = svg;
    document.body.insertBefore(div, document.body.childNodes[0]);
    fire(document.body, 'svgicons:loaded');
  });
}

ready(() => {
  injectSVG(window.svgLocation);
  window.svgLocation = null;
});
