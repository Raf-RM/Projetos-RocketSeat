//Classe para lidar com os dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root) 

    this.load()

  }

  load() {
    this.data = [
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '48',
        followers: '12054'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '64',
        followers: '21578'
      }
    ]
  }

}

//Classe para lidar com a visualização
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('tbody')
    this.update()
  }

  update() {
    this.removeAllTr()

    this.data.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.login}`
      row.querySelector('.user a').src = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = `${user.name}`
      row.querySelector('.user span').textContent = `${user.login}`
      row.querySelector('.repositories').textContent = `${user.public_repos}`
      row.querySelector('.followers').textContent = `${user.followers}`

      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement('tr')

    const data = `
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
        <a href="https://github.com/maykbrito" target="blank">
          <p>Mayk Brito</p>
          <span>/maykbrito</span>
        </a>
      </td>
      <td class="repositories">
        48
      </td>
      <td class="followers">
        22503
      </td>
      <td>
        <button class="remove" >Remover</button>
      </td>  
      `
    
      tr.innerHTML = data

      return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => tr.remove())
  }
}
