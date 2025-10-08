import GetPatientWithId from "../getpatientWithId";

export default async function IdPage({params}:{
    params:Promise<{id:number}>}){
        const{id}= await params;
    
    return(
        <div>


     <GetPatientWithId patient_id={id} />
             </div>

  )
}