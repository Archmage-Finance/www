document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target
                const $target = document.getElementById(target)
                el.classList.toggle('is-active')
                $target.classList.toggle('is-active')
            })
        })
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            const $target = document.getElementById('navbar')
            $target.classList.remove("offset-top")
        } else {
            const $target = document.getElementById('navbar')
            $target.classList.add("offset-top")
        }
    });
})