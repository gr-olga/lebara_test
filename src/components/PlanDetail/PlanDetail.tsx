export default function PlanDetail(props: { data: Array<PlanDetailType> }) {
    const {data} = props
    return (
        <div>
            {data.map((item) => {
                return (
                    <div>
                        <h4>{item.cost}</h4>
                        <h4>{item.credit}</h4>
                        <h4>{item.promoCredit}</h4>
                        <button>{item.url}</button>
                    </div>
                )
            })}
        </div>
    )
}

interface PlanDetailType {
    readonly id: number,
    readonly credit: number,
    readonly promoCredit: number,
    readonly cost: number,
    readonly url: string
}