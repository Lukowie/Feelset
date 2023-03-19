export default ({title, info}) => {
    return (
        <div className="rounded-lg p-2 bg-second-blue">
            <h3 className="text-2xl text-center font-bold">{title.title}</h3>
            <h4>{info}</h4>
        </div>
    )
}