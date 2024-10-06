import { useState } from "react"


export default function InfoDisplay(props) {
    const {info} = props
    console.log(info)

    const [hovered, setHovered] = useState('')

    const handleMouseEnter = (element) => {
        setHovered(element)
    }
    
    const handleMouseLeave = () => {
        setHovered('')
    }

    return (
        <>
            {info ? 
            <>
                <h1>{info.name}</h1>
                <p className="fullName">{info.full_name.trim()}</p>
                <p>First Observed: {info.first_obs}</p>
                <p>Last Observed: {info.last_obs}</p>
                <p>Diameter: {info.diameter} km</p>
                <table>
                    <tr>
                        <th 
                            onMouseEnter={() => handleMouseEnter('a')} 
                            onMouseLeave={handleMouseLeave}> 
                            a
                            {hovered === 'a' && (
                            <div className="variables">Semi-major axis (size of the orbit)</div>
                            )}
                        </th> 
                        <th 
                            onMouseEnter={() => handleMouseEnter('e')} 
                            onMouseLeave={handleMouseLeave}> 
                            e
                            {hovered === 'e' && (
                            <div className="variables">Eccentricity (shape of the orbit)</div>
                            )}
                        </th> 
                        <th 
                            onMouseEnter={() => handleMouseEnter('i')} 
                            onMouseLeave={handleMouseLeave}> 
                            i
                            {hovered === 'i' && (
                            <div className="variables">Inclination (tilt of the orbit)</div>
                            )}
                        </th> 
                        <th 
                            onMouseEnter={() => handleMouseEnter('w')} 
                            onMouseLeave={handleMouseLeave}> 
                            ω
                            {hovered === 'w' && (
                            <div className="variables">Argument of periapsis (orientation within the orbital plane)</div>
                            )}
                        </th> 
                        <th 
                            onMouseEnter={() => handleMouseEnter('om')} 
                            onMouseLeave={handleMouseLeave}> 
                            Ω
                            {hovered === 'om' && (
                            <div className="variables">Longitude of the ascending node (horizontal orientation in space)</div>
                            )}
                        </th> 
                        <th 
                            onMouseEnter={() => handleMouseEnter('n')} 
                            onMouseLeave={handleMouseLeave}> 
                            n
                            {hovered === 'n' && (
                            <div className="variables">Mean motion (orbital speed)</div>
                            )}
                        </th> 
                    </tr>
                    <tr>
                        <td>{info.a} AU</td>
                        <td>{info.e}</td>
                        <td>{info.i}°</td>
                        <td>{info.w}°</td>
                        <td>{info.om}°</td>
                        <td>{info.n}°/day</td>
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