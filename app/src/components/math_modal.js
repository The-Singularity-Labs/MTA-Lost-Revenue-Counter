import { html } from '@arrow-js/core'

export default function (isOpen, toggle) {
  return html`
    <dialog open="${isOpen}">
    <article>
    <header>
        <button aria-label="Close" rel="prev" @click="${toggle}"></button>
        <p>
        <strong>🧮 Check the Math</strong>
        </p>
    </header>
    <p>
        This counter is based on the $900 billion annual net revenue figure 
        reported by the MTA<sup><a target="_blank" href="https://new.mta.info/document/142706">0</a></sup>.
        This amounts to revenue losses of:
        </p>
    <ul>
        <li><b>Per Month</b>: $75M</li>
        <li><b>Per Week</b>: $17.3M</li>
        <li><b>Per Day</b>: $2.4M</li>
        <li><b>Per Hour</b>: $102.7K</li>
        <li><b>Per Minute</b>: $1.7K</li>
        <li><b>Per Second</b>: $28.54</li>
    </ul>
    <p> accruing since June 30th 2024</p>
    </article>
    </dialog>
  `
}