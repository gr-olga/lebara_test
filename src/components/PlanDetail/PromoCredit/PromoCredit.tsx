import "./PromoCredit.css"

export default function PromoCredit(props: { credit: number, promoCredit: number, cost: number }) {

    return (
        <div className="number-box">
            <h4 className="numb">{props.cost}</h4>
            <p className="numb"> = </p>
            <h4 className="credit">{props.credit}</h4>
            <h4 className="numb">{props.promoCredit}</h4>
        </div>
    )
}