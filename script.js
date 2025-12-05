
    const text = "Simon, a passionate front-end developer with a love for creating beautiful and responsive web experiences. I enjoy turning ideas into reality through code.";
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
type();