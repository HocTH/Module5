import useClock from "./useClock";
import "./Clock.css"
function MyClock() {
    const [time,ampm] = useClock();
    return(
        <div className="Clock-style">
            {time}
            <span>
                {ampm}
            </span>
        </div>
    )
}
export default MyClock;