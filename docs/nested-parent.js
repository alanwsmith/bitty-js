// deno-fmt-ignore-file

export default class {
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  template() {
    return `
<div>Total from internal counter<br><span data-r="showValue"></div>
<div>
  <bitty-js
    data-bridge="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-js>
  <bitty-js
    data-bridge="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-js>
</div>
`;
  }
}
