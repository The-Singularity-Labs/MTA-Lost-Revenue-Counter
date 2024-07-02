import { html } from '@arrow-js/core'

export default function (isOpen, toggle) {
  return html`
    <dialog open="${isOpen}">
    <article>
    <header>
        <button aria-label="Close" rel="prev" @click="${toggle}"></button>
        <p>
        <strong>Support Transit Expansion 📈</strong>
        </p>
    </header>
    <p>
        Saving congestion pricing is just the start. More people need access to low cost and environmentally friendly methods of transportation.
        </p>
    <ul>
        <li><a target="_blank" href="https://thequeenslink.org/">Queenslink</a></li>
        <li><a target="_blank" href="https://www.etany.org/modernizing-commuter-rail-brief">Effective Transit Alliance</a></li>
        <li><a target="_blank" href="https://friendsoftheqns.org/">Friends of QNS</a></li>
        <li><a target="_blank" href="https://www.riseandresist.org/elevator-action-group">Elevator Action Group</a></li>
        <li><a target="_blank" href="https://reddit.com/r/NYCRail/">NYCRail</a></li>
        
    </ul>
    </article>
    </dialog>
  `
}