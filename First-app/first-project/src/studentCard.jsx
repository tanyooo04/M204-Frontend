export default function StudentCard(props){

    return(
        <>
            
                <div className="mt-6 grid grid-cols-3 gap-5">

                    <div className="rounded-xl bg-white p-5 shadow">
                        <h3 className="text-lg font-bold">
                            {/* {props.etudiant.nom} */}
                            {props.nom}
                        </h3>

                        <p className="mt-2 text-slate-500">
                            Note:
                            {/* {props.etudiant.note} */}
                            {props.note}/20
                        </p>
                    </div>


                </div>
        </>
    )
}