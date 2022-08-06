import data from '../../data/planData.json'
import PlanDetail from "../PlanDetail/PlanDetail";
import './DataTable.css'

export default function DataTable() {
    return (
        <ul className="plansList">
            {data && data.map((i) => {
                return (
                    <li key={i.id} className="planBox">
                        <h3 className="planTitle">{i.planType}</h3>
                        <p className="planDesc">{i.planDesc}</p>
                        <div>
                            <PlanDetail data={i.products}/>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

