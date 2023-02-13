import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Overview = () =>{
    let currentDisplay = useSelector(selectDisplay)
    return (
    <div className="stack">
        <h1>{currentDisplay.name.official}</h1>
        <h2>AKA</h2>
        <h1>"{currentDisplay.name.common}"</h1>

        <table>
            <tr>
                <td>Capital:</td>
                {currentDisplay.capital.map(e => <td>{e}</td>)}
            </tr>
            <tr>
                <td>Population:</td>
                {currentDisplay.population}
            </tr>
            <tr>
                <td>United Nations:</td>
                {currentDisplay.unMember ? "is Member" : "is not a Member"}
            </tr>

            {/* <tr>
                <td>Currency: </td>
                {currentDisplay.population}
                {currentDisplay.currencies.props.name.map((e, i, arr) => {
                        if (i + 1 === arr.length) {
                            return `${e}`
                        } else {
                            return `${e}, `
                        }
                    })}
            </tr> */}
            <tr>
                <td>Borders: </td>
                <td>
                    {currentDisplay.borders ?
                    currentDisplay.borders.map((e, i, arr) => {
                        if (i + 1 === arr.length) {
                            return `${e}`
                        } else {
                            return `${e}, `
                        }
                    }) : "N/A"}
                </td>
            </tr>
        </table>
    </div>
    )
}

export default Overview