document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const business = data.get("business");
      const name = data.get("name");
      const email = data.get("email");
      const phone = data.get("phone") || "Not provided";
      const service = data.get("service");
      const message = data.get("message");

      const subject = encodeURIComponent(`ZYROCORP Discovery Request — ${business}`);
      const body = encodeURIComponent(
`Business: ${business}
Contact: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Workflow / requirement:
${message}

Submitted from the ZYROCORP website test project.`
      );

      /*
       * The final production mailbox should be configured once
       * zyrocorp.com email is activated. For the test project,
       * the form opens the visitor's default email application.
       */
      window.location.href = `mailto:hello@zyrocorp.com?subject=${subject}&body=${body}`;
      status.textContent = "Your email application should open with the request prepared.";
    });
  }
});
