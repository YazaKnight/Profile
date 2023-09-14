window.onload = () => {
    const title = document.querySelector('h3')
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
                {t: 0, type: 'transform', value: 'translateY(-30px)', timingFunction: 'cubic-bezier(.19,.81,.42,1)'},
                {t: 40, type: 'transform', value: 'translateY(10px)', timingFunction: 'cubic-bezier(.19,.05,.73,.02)'},
                {t: 80, type: 'transform', value: 'translateY(0)', timingFunction: 'ease-out'}
              ], {
                duration: 1500,
                name: 'bounce',
                element: title.children[i],
                iterations: 'infinite',
                iterationsDelay: 2000
              })
            }, i * 50)
        }
    }

    function animate(steps, options) {
        for (let i=0; i<steps.length; i++) {
            if(steps[i]?.t >= 0 && steps[i]?.type && steps[i]?.value && steps[i]?.timingFunction) {
                window.setTimeout(() => {
                    options.element.style[steps[i].type] = steps[i].value
                    if(i === steps.length - 1) {
                    options.element.style.transition = steps[i].type  + ' ' + (100 - steps[i].t) * options.duration / 100 + 'ms ' + steps[i].timingFunction
                    } else {
                    options.element.style.transition = steps[i].type  + ' ' + (steps[i + 1].t - steps[i].t) * options.duration / 100 + 'ms ' + steps[i].timingFunction
                    }
                }, steps[i].t * options.duration / 100)
            } else {
                console.error('You forget mandatory animation property in step ' + k + ', step need (t, type, value, timingFunction)')
            }
        }
    }

    bounceAnimation()
}