import data from '../../data/planData.json'
import PlanDetail from "../PlanDetail/PlanDetail";
import './DataTable.css'

export default function DataTable() {
    return (
        <ul className="plan-list">
            {data && data.map((i) => {
                return (
                    <li key={i.id} className="plan-box">
                        <div className="title-container">
                        <h3 className="plan-title">{i.planType}</h3>
                            <button className="info">i</button>
                        </div>
                        <p className="plan-desc">{i.planDesc}</p>
                        <div>
                            <PlanDetail data={i.products}/>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

