import { loadSVG, injectSVG } from '../index';
import { once } from 'domassist';
import test from 'tape-rollup';

window.svgLocation = './test/fixture/example.svg';

function teardown() {
  const svg = document.querySelector('svg');

  if (svg) {
    svg.remove();
  }
}

test('load svg url from window', assert => {
  once(document.body, 'svgicons:loaded', () => {
    assert.ok(document.querySelector('svg'), 'SVG exists in DOM');
    assert.end();
  });
});

test('loadSVG', assert => {
  loadSVG('./test/fixture/example.svg', svg => {
    assert.ok(svg.indexOf('<svg') !== -1, 'SVG file loaded');
    assert.end();
  });
});

test('injectSVG', assert => {
  teardown();

  injectSVG('./test/fixture/example.svg');

  once(document.body, 'svgicons:loaded', () => {
    assert.ok(document.querySelector('svg'), 'SVG exists in DOM');
    assert.end();
  });
});
