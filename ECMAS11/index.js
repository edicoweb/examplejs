const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const moduleGreeting = await import("./file.js");
    moduleGreeting.greeting();
});