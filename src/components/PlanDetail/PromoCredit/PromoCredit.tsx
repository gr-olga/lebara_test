import "./PromoCredit.css"

export default function PromoCredit(props: { credit: number, promoCredit: number, cost: number }) {

    return (
        <div className="numberBox">
            <h4>{props.cost}</h4>
            <p> = </p>
            <h4 className="credit">{props.credit}</h4>
            <h4>{props.promoCredit}</h4>
        </div>
    )
}