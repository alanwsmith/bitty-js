// deno-fmt-ignore-file

export default class {
  $showValue(el, _) {
    const counters = this.bridge.querySelectorAll("bitty-js");
    let count = 0;
    counters.forEach((counter) => {
      if (counter.widget !== undefined) {
        count += counter.widget.value;
      }
    });
    el.innerHTML = count;
  }

  template() {
    return `
<div>
  Calculated Total: <span data-r="showValue"></span>
</div>
<div>
  <div>Counter 1</div>
  <bitty-js
    data-bridge="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>

  <div>Counter 2</div>
  <bitty-js
    data-bridge="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>
</div>
`;
  }
}
