import "./PromoCredit.css"

export default function PromoCredit(props: { credit: number, promoCredit: number, cost: number }) {

    return (
        <div className="number-box">
            <span className="num">{props.cost}</span>
            <span className="num"> = </span>
            <span className="credit">{props.credit}</span>
            <span className="num">{props.promoCredit}</span>
        </div>
    )
}