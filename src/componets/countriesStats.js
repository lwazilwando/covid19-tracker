

function CountriesStats(props){



    return(

        <div>

            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Active Cases</th>
                </tr>

                {props.countries.map((country)=>{
                    <tr>
                        <td>{country.country}</td>
                        <td>{country.TotalConfirmed}</td>
                        <td>{country.NewConfirmed}</td>
                    </tr>
                })}

            </table>

        </div>
    );
}

export default CountriesStats;