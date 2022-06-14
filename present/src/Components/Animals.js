import Animal from "./Animal"

const Animals = ({ animals, choose }) => {

    return (
        <>
            {animals.map((t) => (
                <Animal key={t.id}
                    animal={t}
                    choose={choose}
                     />
            ))}
        </>
    )
}

export default Animals