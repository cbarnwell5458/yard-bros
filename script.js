const year = document.querySelector("#year");
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Hi BS Lawn Co, I'd like an estimate for a land or landscape project.",
    `Name: ${data.get("name") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    `Job: ${data.get("message") || ""}`,
  ].join("\n");
  window.location.href = `sms:+15418169905?&body=${encodeURIComponent(message)}`;
  note.textContent = "Opening a text message to BS Lawn Co.";
  form.reset();
});
