// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "/img/female2.png"
  },
  {
    name: "Roberto Ciao",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "/img/female3.png"
  }
];

const formEL = document.getElementById('form')
const NewCardName = document.getElementById('newcard-name')
const NewCardRole = document.getElementById('newcard-role')
const NewCardEmail = document.getElementById('newcard-email')
const NewCardImg = document.getElementById('newcard-img')

form.addEventListener('submit', (event) => {

  event.preventDefault() //prevengo refresh
  const col = document.createElement('div')

  let name = NewCardName.value
  let role = NewCardRole.value
  let email = NewCardEmail.value
  let image = NewCardImg.value

  let newMember = {
    name: name,
    role: role,
    email: email,
    img: image
  }
  teamMembers.push(newMember)
  console.log(teamMembers)
  console.log(name);
  
  let newcard = `
  <div class="row g-0 h-100 bg-black">
    <div class="col-4">
      <img src="assets/${image}" alt"" class="w-100">
    </div>
    <div class="col-7 text-white px-3 mt-2">
      <h5 class="fw-bolder">${name}</h5>
      <p>${role}</p>
      <p class="text-info mb-0">${email}</p>
    </div>
  </div>
  `
  col.appendChild(newcard)
  container.appendChild(col)
})

//seleziono il contenitore
const container = document.getElementById('team-container')

//ciclo per creare una card per ogni membro del team
for (let i = 0; i < teamMembers.length; i++) {

  const thisMember = teamMembers[i]

  //creo la colonna bootstrap
  const col = document.createElement('div')
  col.className = 'col-md-6 col-lg-4 mb-4' //3 colonne a partire da schermi medium

  //creo la card bootstrap
  const card = document.createElement('div')

  //aggiungo il contenuto alla card
  card.innerHTML = `
  <div class="row g-0 h-100 bg-black">
    <div class="col-4">
      <img src="assets/${thisMember.img}" alt"" class="w-100">
    </div>
    <div class="col-7 text-white px-3 mt-2">
      <h5 class="fw-bolder">${thisMember.name}</h5>
      <p>${thisMember.role}</p>
      <p class="text-info mb-0">${thisMember.email}</p>
    </div>
  </div>
  `

  //aggiungo in pagina
  col.appendChild(card)
  container.appendChild(col)
}