import { GithubUser } from "./GithubUser.js"

//Classe para lidar com os dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root) 

    this.load()
  }

  delete(user) {
    const dataFiltered = this.data.filter(entry => entry.login !== user.login)
    this.data = dataFiltered
    this.update()
    this.save()
    this.isEmptyListScreen()
  }

  load() {
    this.data = JSON.parse(localStorage.getItem('github-favorites')) || []
    this.isEmptyListScreen()
  }

  save() {
    localStorage.setItem('github-favorites', JSON.stringify(this.data))
    this.isEmptyListScreen()
  }

  isEmptyListScreen() {    
    const emptyList = this.root.querySelector('.empty-list');
    const tableWrapper = this.root.querySelector('.table-wrapper');

    if (JSON.stringify(this.data).length == 2) { 
      emptyList.classList.remove('hide');
      tableWrapper.classList.add('hide')
    }
    else {
      emptyList.classList.add('hide');
      tableWrapper.classList.remove('hide')
    }
  }
}

//Classe para lidar com a visualização
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('tbody')
    this.update()
    this.onadd()
  }

  async add(username) {
    try {

      const userExists = this.data.find(user => user.login.toUpperCase() === username.toUpperCase())
      

      if (userExists) {
        throw new Error('Usuário já cadastrado!')
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }
      
      this.data = [user, ...this.data]
      this.update()
      this.save()

    } 
    catch(error) {
      alert(error.message)
    }
  }

  onadd() {
    const addButton = this.root.querySelector('.right-wrapper button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.right-wrapper input')

      this.add(value)
    }
    
  }

  update() {
    this.removeAllTr()

    this.data.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.login}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = `${user.name}`
      row.querySelector('.user span').textContent = `/${user.login}`
      row.querySelector('.repositories').textContent = `${user.public_repos}`
      row.querySelector('.followers').textContent = `${user.followers}`

      row.querySelector('.remove').onclick = () => {
        const confirmed = confirm('Tem certeza que deseja deletar esse usuário?')
        if(confirmed) {
          this.delete(user)
        }
      }

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



