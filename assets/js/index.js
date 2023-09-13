document.onload = () => {
    const title = document.querySelector('h1')
    const letters = title.innerText.split('')

    title.innerText = ''
    for (let i=0; i<letters.length; i++) {
        let s = document.createElement('span')
        s.innerText = letters[i]
        title.appendChild(s)
    }

    function bounceAnimation() {
        for (let i=0; i<title.children.length; i++) {
            window.setTimeout(() => {
                animate([
                    {t: 0, type: 'transform' , value: 'translateY(-30px)', timmingFunction: 'cubic-bezier(.19,.81,.42,1)'},
                    {t: 40, type: 'transform' , value: 'translateY(10px)', timmingFunction: 'cubic-bezier(.19,.05,.73,.02)'},
                    {t: 80, type: 'transform' , value: 'translateY(0)', timmingFunction: 'ease-out'}
                ], {
                    duration: 1500,
                    name: 'bounce',
                    element: title.children[i],
                    iterations: 'infinite',
                    iterationsDelay: 5000
                })
            }, i*50)
        }
    }

    
}