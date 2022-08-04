import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../Components/Base_Url/Base_url"

type Form = {
    name:string,
    level: number,
    email: string,
    linkedin: string,
    github: string
}
export const Candidatura = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    const [getForm, setGetForm] = useState([]);

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 5
            })
        }
        getForms();
    },[])

  


    const getForms = async () => {
        await axios
          .get(`${BASE_URL}/candidate`)
          .then((res:any) => {
            setGetForm(res.data);
          })
          .catch((err:any) => {
            console.log(err)
            
          });
      };

      const mapeandoForm = getForm.map((form: Form) => {
        const returnExperience = () => {
            if(form.level === 1) {
                return "Júnior"
            } else if (form.level === 2) {
                return "Pleno"
            } else {
                return "Sênior"
            }
        }
        return (
            <div className="formCard">
                <p>Nome: {form.name}</p>
                <p>Nível Profissional: {returnExperience()}</p>
                <p>E-mail: {form.email}</p>
                <p>LinkedIn: {form.linkedin}</p>
                <p>GitHub: {form.github}</p>
                <p>Status da Candidatura: Ativo </p>
            </div>
        )
      });

    return (
        <Theme>
            <C.Container>
                <p>Candidatura</p>
                <h1>Vamos ver sua candidatura.</h1>
                <p>Aqui você pode ver suas informações já eviadas ao nosso banco de dados</p>

                <hr/>

                <div>
                    {mapeandoForm[mapeandoForm.length-1]}
                </div>


            </C.Container>
        </Theme>
    )
}