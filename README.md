## MTA Lost Revenue Counter
[![Hippocratic License HL3-BDS-BOD-CL-ECO-EXTR-FFD-MEDIA-MY-SOC-SUP-SV-TAL-USTA-XUAR](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-BDS-BOD-CL-ECO-EXTR-FFD-MEDIA-MY-SOC-SUP-SV-TAL-USTA-XUAR&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/bds-bod-cl-eco-extr-ffd-media-my-soc-sup-sv-tal-usta-xuar.html)
==========

### Overview
The project aims to provide a real-time visualization of the financial impact on the MTA due to the cancellation of congestion pricing. Congestion pricing was intended to generate significant revenue for the MTA by charging vehicles entering certain parts of New York City. This project estimates and displays the accumulating lost revenue over time.



### Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/The-Singularity-Labs/congestionpricing-doomsday-clock
   cd congestionpricing-doomsday-clock
   ```

2. **Install Dependencies:**
   ```bash
   cd app
   yarn install
   ```

3. **Run Locally:**
   ```bash
   make dev
   ```

4. **Open app:**
   - Open the URL displayed in your terminal

### How It Works

1. **Initialization:**
   - The project initializes the starting timestamp corresponding to the planned start date of the congestion pricing: June 30th, 2024, at 00:00 EST.
   - The lost revenue is calculated by finding the difference between the current timestamp and the start date, and multiplying that difference by the earnings per second.

2. **Reactive State:**
   - An [Arrow.js](https://www.arrow-js.com/docs/#reactive-data) reactive state is used to keep track of the lost revenue.
   - The state is updated every second to reflect the continuously accumulating lost revenue.

3. **Calculation:**
This counter is based on the [$900 billion annual net revenue figure reported by the MTA](https://new.mta.info/document/142706).

4. **Display:**
   - The project displays the continuously updating lost revenue as a large number on the screen.
   - The display is styled with MTA colors and fonts for an authentic look and feel.
   - CSS animations enhance the visual presentation, emphasizing the growing number.


### Example Calculation

Assuming the congestion pricing was supposed to start on June 30th, 2024, at 00:00 EST, the project will initialize to the current lost revenue based on the elapsed time. For example, if the earnings rate is $100 per second, the displayed number will be calculated as `(current epoch - start epoch) * 100`.

### Deployment

- **Build Chain:** [Parcel](https://parceljs.org/) is used for building the project due to its simplicity.
- **Deployment:** Final versions are deployed on [Arweave](https://www.arweave.org/) to ensure the project is decentralized and not dependent on a single host or GitHub.


### Project Structure

- **index.html:** The main HTML file that sets up the structure and includes references to the CSS and JavaScript files.
- **app/assets/css:** Contains the CSS files, styled with MTA themes and animations.
- **app/src/main.js:** The entry point for the JavaScript application.
- **app/src/store.js:** Manages the reactive state of the application.
- **components:** Contains additional components for informational modals.
- **pico.css:** A lightweight and accessible CSS framework used for styling.

### Contributions

Contributions are welcome! Please open a PR with your changes. 

### Notes

- **Accessibility:** [Pico.css](https://picocss.com/) is chosen for its small size and accessibility features.
- **Style:** The project uses MTA-themed fonts and colors to maintain an authentic look and feel.

