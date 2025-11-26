const Weather = () => {
    let temp = 4                                                4;
    if (temp < 24) {
        return <h2>Its Cold Outside</h2>
    }
    else if (temp >= 15 && temp <= 25) {
        return <h2>Yes this is the Good weather</h2>
    }
    else if (temp > 20) {
        return <h1>THis is very hot season out side </h1>
    }



    return (
        <div>
            <Weather />
        </div>
    )
}
export default Weather;