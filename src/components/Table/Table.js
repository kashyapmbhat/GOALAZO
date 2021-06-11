import './Table.css';
const Table = ({TableSize,standingData}) => {


let rows=''
let table_header = (TableSize !=='short') ? 
`<th>Position</th>
<th>Club</th>
<th>Played</th>
<th>Won</th>
<th>Drawn</th>
<th>lost</th>
<th>GF</th>
<th>GA</th>
<th>GD</th>
<th>PTS</th>`: 
`<th>POS</th>
<th>CLUB</th>
<th>PL</th>
<th>GD</th>
<th>PTS</th>`;

  standingData[0].league.standings[0]
  .forEach((entry,index) => {
    if(TableSize === 'short' && index>=5){
        return;
    }
    if(TableSize === 'short'){
      rows +=`
          <tr>
              <td data-column='POS'>${entry.rank}</td>
              <td data-column='CLUB'><img src='${entry.team.logo}'>${entry.team.name}</td>
              <td data-column='PL'>${entry.all.played}</td>
              <td data-column='GD'>${entry.goalsDiff}</td>
              <td data-column='PTS'>${entry.points}</td>
          </tr>
      `
    }
    else if(TableSize === 'long'){
      rows +=`
          <tr>
              <td data-column='Position'>${entry.rank}</td>
              <td data-column='Club'><img src='${entry.team.logo}'>${entry.team.name}</td>
              <td data-column='Played'>${entry.all.played}</td>
              <td data-column='Won'>${entry.all.win}</td>
              <td data-column='Drawn'>${entry.all.draw}</td>
              <td data-column='Lost'>${entry.all.lose}</td>
              <td data-column='GF'>${entry.all.goals.for}</td>
              <td data-column='GA'>${entry.all.goals.against}</td>
              <td data-column='GD'>${entry.goalsDiff}</td>
              <td data-column='PTS'>${entry.points}</td>
          </tr>
      `
    }
  
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
    <div className={(TableSize === 'short') ? "standings-table" : "standings-table standings-table-long"}>
      <div className={(TableSize === 'short') ? 'head-table' : 'head-table head-table-long'}><img src={standingData[0].league.logo} alt=''/><div className='head-text'>{standingData[0].league.name}</div></div>
      <div className='table-container' dangerouslySetInnerHTML={{__html:body}}/>
      </div>
    )
}

export default Table