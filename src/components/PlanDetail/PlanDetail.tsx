import {Button, Divider} from "@chakra-ui/react"
import {PlanDetailType} from "../../types/PlanDetailType";
import "./PlanDetail.css"
import PromoCredit from "./PromoCredit/PromoCredit";

export default function PlanDetail(props: { data: Array<PlanDetailType> }) {
    const {data} = props
    return (
        <div className="option-list">
            {data.map((item) => {
                return (
                    <div>
                        <div key={item.id} className="option-box">
                            {item.promoCredit
                                ?
                                <PromoCredit credit={item.credit} promoCredit={item.promoCredit} cost={item.cost}/>
                                :
                                <span className="option-credit">{item.credit}</span>}
                            <div className="option-cost">
                                <span className="option-price"> €{item.cost}</span>
                                <Button className="btn" colorScheme='pink' onClick={() => window.open(item.url)}
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

