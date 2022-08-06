import {Button} from "@chakra-ui/react"
import {PlanDetailType} from "../../types/PlanDetailType";
import "./PlanDetail.css"

export default function PlanDetail(props: { data: Array<PlanDetailType> }) {
    const {data} = props
    return (
        <div className="optionList">
            {data.map((item) => {
                return (
                    <div key={item.id} className="optionBox">
                        <h4>{item.cost}</h4>
                        <h4>{item.credit}</h4>
                        <h4>{item.promoCredit}</h4>
                        <h4> €{item.cost}</h4>
                        <Button colorScheme='pink' onClick={() => window.open(item.url)}
                                aria-label="link">TopUp</Button>
                    </div>
                )
            })}
        </div>
    )
}

