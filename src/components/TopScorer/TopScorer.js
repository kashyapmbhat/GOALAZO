import './TopScorer.css'
const TopScorer = ({topScorersData}) => {
    let rows=''
let table_header = 
`<th>Position</th>
<th>Name</th>
<th>Goals</th>
<th>Apps</th>`;

topScorersData
  .forEach((entry,index) => {
      rows +=`
          <tr>
              <td data-column='Position'>${index+1}</td>
              <td data-column='Name'>${entry.player.name}</td>
              <td data-column='Goals'>${entry.statistics[0].goals.total}</td>
              <td data-column='Apps'>${entry.statistics[0].games.appearences}</td>
          </tr>
      `
  })

let body =`
            <table>
              <thead>
                <tr>
                  ${table_header}
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
`

    return (
    <div className="tp-table ">
      <div className='tp-head-table'><div className='tp-head-text'>Top Scorers</div></div>
      <div className='table-container' dangerouslySetInnerHTML={{__html:body}}/>
      </div>
    )
}


export default TopScorer
