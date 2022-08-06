import {Button, Divider} from "@chakra-ui/react"
import {PlanDetailType} from "../../types/PlanDetailType";
import "./PlanDetail.css"
import PromoCredit from "./PromoCredit/PromoCredit";

export default function PlanDetail(props: { data: Array<PlanDetailType> }) {
    const {data} = props
    return (
        <div className="optionList">
            {data.map((item) => {
                return (
                    <div>
                        <div key={item.id} className="optionBox">
                            {item.promoCredit
                                ?
                                <PromoCredit credit={item.credit} promoCredit={item.promoCredit} cost={item.cost}/>
                                :
                                <h4>{item.credit}</h4>}
                            <div className="optionCost">
                                <h4 className="optionPrice"> €{item.cost}</h4>
                                <Button colorScheme='pink' onClick={() => window.open(item.url)}
                                        aria-label="link">TopUp</Button>
                            </div>
                        </div>
                        <Divider orientation='horizontal'/>
                    </div>
                )
            })}
        </div>
    )
}

