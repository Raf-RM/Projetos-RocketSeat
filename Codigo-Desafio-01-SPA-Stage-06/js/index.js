function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({},"",event.target.href)

  handle()
}

const routes = {
  "/":"/pages/home.html",
  "/universe":"/pages/universe.html",
  "/exploration":"/pages/exploration.html",
}



function handle() {
  const {pathname} = window.location
  const route = routes[pathname]

  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector("#app").innerHTML = html
  })
}

handle()

window.onpopstate = () => handle()
window.route = () => route()


