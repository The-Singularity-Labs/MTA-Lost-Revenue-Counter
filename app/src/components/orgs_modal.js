import { html } from '@arrow-js/core'

export default function (isOpen, toggle) {
  return html`
    <dialog open="${isOpen}">
    <article>
    <header>
        <button aria-label="Close" rel="prev" @click="${toggle}"></button>
        <p>
        <strong>Fight for Congestion Pricing 📢</strong>
        </p>
    </header>
    <p>
        There are many organizations and communities fighting to save congestion pricing.
        Get involved! 
        </p>
    <ul>
        <li><a target="_blank" href="https://www.ridersalliance.org/take-action">Riders Alliance</a></li>
        <li><a target="_blank" href="https://rpa.org/about">Regional Plan Association</a></li>
        <li><a target="_blank" href="https://transalt.org/">Transportation Alternatives</a></li>
        <li><a target="_blank" href="https://www.streetspac.org/">StreetsPAC</a></li>
        <li><a target="_blank" href="https://nyc-eja.org/">New York City Environmental Justice Alliance</a></li>
        <li><a target="_blank" href="https://reddit.com/r/MicromobilityNYC/">Micromobility NYC</a></li>
    </ul>
    </article>
    </dialog>
  `
}