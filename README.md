# Anish-Portfolio
Frameworks/Libraries Used: Next.JS w/ TypeScript, Tailwind CSS, Framer Motion, React-Typed, EmailJS,

All the SVG Icons used in this project are not mine. 

-Auto dark mode: Utilized Nextjs pre-built dark/light mode based on the user's device mode.

- Folder Structure following best practices: Each page has its folder and inside the folder is a page.tsx. Only the components folder has the name of the component file.

- Persistent Navbar with blur: Only rendered the first time the site is opened saving time and storage - added the Navbar component to the global layout.tsx. -icons obtained from font awesome.

- Created a separate animated navbar for mobile screens using useState(false) to keep track of the clicked state of the menu icon. Created a function to toggle the value of the useState() when the menu icon is clicked, it hides the menu icon showing the close icon as well as the menu options. Used the value of the function to determine wether to set the display to hidden or block in tailwind css. If false, it sets the display attribute to hidden. Used the same toggle function on the onClick function of each menu item so that the menu closes once an item is clicked.

- Dynamic Header with slide-in animation: Updates the header text based on the clicked navigation bar item or the URL. - utilized useContext(), usePathname() to update the header. Without usePathname(), if we manually entered the URL for a specific route, it would not update the header text. - utilized framer motion for animation.

- Hero Section with typing animation and Gradient colors: Created a grid with a column span of 12 and used 7 spans for text and 5 spans for image to appear on the same x-axis. - utilized React Typed for animation, and made responsive using grid columns. Used framer motion to animated the colors of the body text.

- Framer motion animated SVG circle: utilized SVG code to create a circle and animate it with Framer motion.

- Hire Me section: Made responsive with grid-columns 1 on small screen and 2 on medium and larger screens. 

- Used form tag to create the Contact Me section. Used useState() to handle the user input and sent it to email via EmailJS.

- Let's Connect Section: SVG icons with clickable links and a phone/mail icon open default apps to call/mail. Created custom template parameters for storing the name, number, email, and message of the sender.

- CheckValidity()(checks the requirements) and reportValidity()(shows which fields need to be filled to the user) were used to ensure the user entered the required data.

- The timeline is made by using the map() function, which takes data from timelineContents.js to populate the timeline cards.

- The skills section is created using flex so that it is responsive and the gradient border effect is achieved by another div behind the div of the SVG icons.
