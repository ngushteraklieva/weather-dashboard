function HourlyForecast(data) {
    const {date, icon, summary, temperature, precipitation, wind} = data
    
    return (
        <div className="widget">
            <div className="day">{date}</div>
            <div className="time">{date}</div>
            <div className="icon-temp">
                div
            </div>
        </div>
    );
}

export default HourlyForecast;