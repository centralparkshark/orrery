# Project Title: NEO Orrery of Named Asteroids

## Link to Site
https://orrery-jade.vercel.app/ 

## Project Overview: 
The Near-Earth Objects (NEO) Orrery is a web application developed using React and Three.js Fiber to visualize and provide detailed information about near-Earth asteroids and their orbits. The application creates an interactive 3D space model where users can explore various NEOs, observe their paths, and learn about their orbital characteristics, including their semi-major axes, eccentricities, inclinations, and more.

## Development Highlights:
- Interactive 3D Visualization: Leveraging Three.js Fiber, the application provides an engaging visualization of the solar system with Earth at the center and NEOs represented as dynamic objects.
- User Interactivity: Users can click on NEOs to receive information, such as their names, orbital elements, and historical observational data. The application includes features like changing colors upon selection to enhance user experience.
- Data Integration: The project utilizes data from [NASA's Small-Body Database](https://ssd.jpl.nasa.gov/tools/sbdb_query.html), allowing users to access information about NEOs and their characteristics.
- User-Friendly Interface: The application features a clean interface that allows users to toggle visibility for orbital lines.

## Addressing the Challenge:
The project addresses the challenge of public awareness and education regarding near-Earth objects. By providing an intuitive platform for users to visualize and learn about these celestial bodies, it aims to enhance understanding of their characteristics and significance in space exploration. The interactive nature of the application fosters engagement, making complex astronomical concepts accessible to a broader audience.

Overall, the NEO Orrery not only enhances public knowledge of near-Earth objects but also contributes to the ongoing conversation about space exploration, making it a significant addition to educational and scientific resources.

## Resources
- NEO Asteroids with IAU Names from [Small-Body Database](https://ssd.jpl.nasa.gov/tools/sbdb_query.html), downloaded data located in src>assets>asteroids.js
- Orbital Code in R from [Elliptical Orbit Design - R Markdown](https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html)
- [Three.js Documentation](https://threejs.org/)
- [Drei Helper Functions for Three.js Fiber Documentation](https://drei.docs.pmnd.rs/)