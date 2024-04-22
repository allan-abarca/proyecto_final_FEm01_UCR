(function() {

    let inicioHeight = document.getElementById("inicio").offsetHeight;

    window.addEventListener("resize", () => {
        inicioHeight = document.getElementById("inicio").offsetHeight;
    })

    const options = document.querySelectorAll(".options");
    console.log(options)
    options.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(item)
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - inicioHeight,
                    behavior: "smooth"
                });
            }
        })
    })
})();
