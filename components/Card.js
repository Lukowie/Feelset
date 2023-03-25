export default ({title, desc}) => {
    return (
        <div className="rounded-lg p-2 bg-gray-900 hover:bg-second-blue shadow-md shadow-black transition ease-in-out duration-500">
            <h3 className="text-3xl text-center mt-5">{title.title}</h3>
            <div className="text-center mt-10 mb-5">
                <span className="font-bold text-2xl">{desc}</span>
            </div>
        </div>
    )
}