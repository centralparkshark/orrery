export default function InfoDisplay(props) {
    const {info} = props
    console.log(info)
    return (
        <>
            {info ? 
            <>
                <h1>{info.name}</h1>
                <p>{info.full_name.trim()}</p>
                <p>First Observed: {info.first_obs}</p>
                <p>Last Observed: {info.last_obs}</p>
                <table>
                    <tr>
                        <th>a</th>
                        <th>e</th>
                        <th>i</th>
                        <th>ω</th>
                        <th>Ω</th>
                        <th>n</th>
                    </tr>
                    <tr>
                        <td>{info.a}</td>
                        <td>{info.e}</td>
                        <td>{info.i}</td>
                        <td>{info.w}</td>
                        <td>{info.om}</td>
                        <td>{info.n}</td>
                    </tr>

                </table>
            </> : <h1>Near Earth Objects Orrery</h1>  
        }
        </>
    )
}

// a, e, i, w, om, n

// a = Semi-Major Axis
// e = Eccentricity
// i = Inclination
// w (ω) = Argument of Periapsis
// om (Ω) = Longitude of the Ascending Node
// n = Mean Motion