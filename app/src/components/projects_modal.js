import { html } from '@arrow-js/core'
import projectsImg from "url:../assets/images/congestion-pricing-projects.webp"; 

export default function (isOpen, toggle) {
  return html`
    <dialog open="${isOpen}">
    <article>
    <header>
        <button aria-label="Close" rel="prev" @click="${toggle}"></button>
        <p>
        <strong>🔗 Projects Impacted</strong>
        </p>
    </header>
    <a href="${projectsImg}" target="_blank">
        <img src="${projectsImg}">
    </a>

    </article>
    </dialog>
  `
}