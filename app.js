const url = `https://calm-chimera-0ce8b2.netlify.app/.netlify/functions/get_teams`
const buttons = document.querySelectorAll('.button') 
const container = document.querySelector('.container')

const drawTeams = (teams) => {
  console.log("t ", teams)
  buttons.forEach(button => {
    button.remove()
  })

  teams.teams.forEach(team => {
    const button = document.createElement("button")
    button.classList.add("team", team.code)
    button.innerText = team.name
    container.append(button)
  })
}

buttons.forEach(button => {
  button.addEventListener('click', async () => {
    const { sport } = button.dataset
    try {
      const data = await fetch(url + `?sport=${sport}`) 
      const teams = await data.json()
      drawTeams(teams)
    } catch(error) {
      console.error('err ', error)
    }
  })
})
