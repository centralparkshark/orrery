// kepler equation and math
// from: https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html

function keplerStart3(e, M) {
    const t34 = e ** 2;
    const t35 = e * t34;
    const t33 = Math.cos(M);
    return M + (-0.5 * t35 + e + (t34 + 1.5 * t33 * t35) * t33) * Math.sin(M);
  }

//   function eps1(e, M, x) {
//     return (x - e * Math.sin(x) - M)/(1 - e * Math.cos(x))
//   }

//   function eps2(e,M,x) {
//     const t1 = -1 + e * Math.cos(x)
//     const t2 = e * Math.sin(x)
//     const t3 = -x + t2 + M
//     return t3/(1/2 *t3 * t2/t1 + t1)
//   }
  
  function eps3(e,M,x) {
    const t1 = Math.cos(x)
    const t2 = -1 + e * t1
    const t3 = Math.sin(x)
    const t4 = e*t3
    const t5 = -x + t4 + M
    const t6 = t5/(1/2 * t5 * t4/t2 + t2)
    return t5/((1/2 * t3 - 1/6 * t1 * t6) * e * t6 + t2)
 }
  
  export function keplerSolve(e, M) {
    const tol = 1.0e-14;
    const Mnorm = M % (2 * Math.PI);
    let E0 = keplerStart3(e, Mnorm);
    let dE = Math.abs(tol + 1);
    let count = 0;
  
    while (dE > tol) {
      const E = E0 - eps3(e, Mnorm, E0);
      dE = Math.abs(E - E0);
      E0 = E;
      count += 1;
  
      if (count === 100) {
        console.error("KeplerSolve failed to converge!");
        break;
      }
    }
  
    return E0;
  }
  