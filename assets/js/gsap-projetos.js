const screenWidth = window.screen.width;

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", function() {    
    const cards = gsap.utils.toArray(".projeto__card");
    const images = gsap.utils.toArray(".projeto__images img");

    function getInitialTranslateZ(card){
        const style = window.getComputedStyle(card);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);

        if(matrix){
            const values = matrix[1].split(", ");
            return parseFloat(values[14] || 0);
        }

        return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax){
        return ((value-inMin)*(outMax-outMin))/(inMax-inMin)+outMin;
    }

    cards.forEach((card, index) => {
        const initialZ = getInitialTranslateZ(card);        

        ScrollTrigger.create({
            trigger: ".projeto-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self)=>{
                const progress = self.progress;
                const zIncrement = progress * 10000;
                const currentZ = initialZ+zIncrement;

                let opacity;

                if(currentZ > -2500){
                    opacity = mapRange(currentZ, -2500, 0, 0.5, 1)
                } else {
                    opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
                }                

                card.style.opacity = opacity;

                if(screenWidth >= 1024){
                    card.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;
                } else{
                    card.style.transform = `translateX(0%) translateY(-50%) translateZ(${currentZ}px)`;
                }

                if(currentZ < 100) {
                    gsap.to(images[index], 1.5, {
                        opacity: 1,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to(images[index], 1.5, {
                        opacity: 0,
                        ease: "power3.out",
                    });
                }
            }
        })
        
    });
})
