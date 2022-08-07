import "./PromoCredit.css"

export default function PromoCredit(props: { credit: number, promoCredit: number, cost: number }) {

    return (
        <div className="number-box">
            <span className="num --cost">{props.cost}</span>
            <span className="num --equal"> = </span>
            <span className="num --credit">{props.credit}</span>
            <span className="num --promo-credit">{props.promoCredit}</span>
        </div>
    )
}