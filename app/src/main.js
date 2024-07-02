import "./assets/css/pico.slate.min.css";
import "./assets/css/mta.css";
import store from './store.js';
import { html} from '@arrow-js/core'

import mathModal from './components/math_modal.js';
import projectsModal from './components/projects_modal.js';
import expansionsModal from './components/expansions_modal.js';
import orgsModal from './components/orgs_modal.js';

const appElement = document.getElementById('app');

const toggleMathModal = () => {store.showCalculations = !store.showCalculations};
const toggleProjectsModal = () => {store.showProjects = !store.showProjects};
const toggleOrgsModal = () => {store.showOrgs = !store.showOrgs};
const toggleExpansionsModal = () => {store.showExpansions = !store.showExpansions};


const template = html`
<main id="home" class="container">

    <div class="grid-container">
        <h2>How much has Kathy Hochul cost the MTA?</h2>
        <br>
        <div class="counter vertical-center" @click="${toggleMathModal}">
         $${() => store.incomeLost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
        ${() => mathModal(store.showCalculations, toggleMathModal)}
    </div>
    <hr />
    <blockquote>
    “Be bold in the implementation and execution, and be undaunted by the opposition.”
    <footer>
        <cite>— <a target="_blank" href="https://youtu.be/UXNXySPpxWs?t=108">Gov. Kathy Hochul</a></cite>
    </footer>
    </blockquote>
    <hr />
    <div class="grid">
        <div>
            <button class="primary" @click="${toggleProjectsModal}">Projects Impacted 🔗</button></a>
            ${() => projectsModal(store.showProjects, toggleProjectsModal)}
        </div>
        <div>
            <button class="outline" @click="${toggleOrgsModal}">Fight for Congestion Pricing 📢</button>
            ${() => orgsModal(store.showOrgs, toggleOrgsModal)}
        </div>
        <div>
            <button class="outline" @click="${toggleExpansionsModal}">Support Transit Expansion 📈</button>
            ${() => expansionsModal(store.showExpansions, toggleExpansionsModal)}
        </div>
    </div>

</main>
`

// Define the Counter component
const Counter = () => html`

`;
 

template(appElement)