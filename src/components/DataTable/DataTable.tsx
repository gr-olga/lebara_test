import data from '../../data/planData.json'
import PlanDetail from "../PlanDetail/PlanDetail";

export default function DataTable() {

    return (
        <div>
            {data && data.map((i: any) => {
                return (
                    <div>
                        <h3>{i.planType}</h3>
                        <p>{i.planDesc}</p>
                        <div>
                            <PlanDetail data={i.products}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}