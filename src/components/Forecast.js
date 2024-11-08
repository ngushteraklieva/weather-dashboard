import "../styles/components/Forecast.scss"
import HourlyForecast from "./HourlyForecast"
import DailyForecast from "./DailyForecast"

function Forecast({title, type, data}) {
    return (
        <div className="Forecast">
           <div className="forecast-container">
                <h3>{title}</h3>
                <div className="widget-container">
                    {data.map((singleData)=>(
                        <div>
                            {type === 'hourly' ? (
                                <HourlyForecast data={singleData}/>
                            ) : (
                                <DailyForecast data={singleData}/> 
                            )}
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
}

export default Forecast;