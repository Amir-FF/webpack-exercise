class Button {
    render() {
        const button = document.createElement("button");
        button.innerHTML = "وب پروگ";
        button.classList.add("btn");
        button.classList.add("btn-dark");
        const body = document.querySelector("body");
        body.appendChild(button);

        button.onclick = () => {
            const p = document.createElement("p");
            p.innerHTML = "WebProg.ir";
            p.classList.add("text-info");
            body.appendChild(p);

            // It always runs.
            import ('ImageApp/ImageModule').then (module => {
                const Image = module.default;
                const image = new Image();
                image.render();
            });


            // It runs once.
            // import ('../../image').then (module => {

            // });
        };
    }
}

export default Button;
