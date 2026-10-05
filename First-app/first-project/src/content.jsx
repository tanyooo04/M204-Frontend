import StudentCard from "./studentCard"; 
function Content() {
     const etudiants=[
          {id:1,nom:"younes",note:15},
          {id:2,nom:"mehdi",note:19},
          {id:3,nom:"zakaria",note:17},
          ];
    return (
        <div className="flex">


            <main className="flex-1 p-8">

                <h2 className="text-3xl font-bold">
                    Liste des étudiants
                </h2>

                <div className="mt-6 grid grid-cols-3 gap-5">
                {/* {etudiants.map(function(item){
                    return <StudentCard key={item.id} etudiant={item}/>
                })} */}
                
                <StudentCard nom='mehdi' note={20}/>
                <StudentCard nom='reda' note={20}/>
                <StudentCard nom='younes' note={20}/>


                </div>

            </main>

        </div>
    );
}

export default Content;