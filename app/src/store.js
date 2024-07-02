
import { reactive, watch } from '@arrow-js/core'

const congestionEpoch = 1719723600;
const incomeLostPerSecond = 28.58;
const now = Date.now();
const currentEpooch = Math.floor(now / 1000);

// Define reactive state
const store = reactive({
    incomeLost: (currentEpooch - congestionEpoch) * incomeLostPerSecond,
    showCalculations: false,
    showProjects: false,
    showExpansions: false,
    showOrgs: false,
});

function oneModalAtATime () {
    if (store.showCalculations) {
        store.showProjects = false;
        store.showExpansions = false;
        store.showOrgs = false;
    }

    if (store.showProjects) {
        store.showCalculations = false;
        store.showExpansions = false;
        store.showOrgs = false;
    }

    if (store.showExpansions) {
        store.showCalculations = false;
        store.showProjects = false;
        store.showOrgs = false;
    }

    if (store.showOrgs) {
        store.showCalculations = false;
        store.showProjects = false;
        store.showExpansions = false;
    }
}

watch(oneModalAtATime)

// Increment the value every second
setInterval(() => {
    store.incomeLost += incomeLostPerSecond;
}, 1000);




// Always set the darkness mode
document.documentElement.setAttribute('data-theme', "light");
store.$on('isLightMode', (isLightMode) => {
    if (store.isLightMode === false) {
        document.documentElement.setAttribute('data-theme', "dark");
    } else {
        document.documentElement.setAttribute('data-theme', "light");
    }
});

// Always set the store articleSlug to the url fragment.
// watch(() => {
//     if (store.articleSlug === undefined) {
//         initAppState();
//     }
// });


export default store;