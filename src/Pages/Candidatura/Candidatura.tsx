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
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 5
        });
        getForms();
    },[])

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/')
        } else {
            alert('Preencha os dados')
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }


    const getForms = () => {
        axios
          .get(`${BASE_URL}`)
          .then((res) => {
            setGetForm(res.data);
          })
          .catch((err) => {
            
          });
      };

      const mapeandoForm = getForm.map((form: Form) => {
        return (
            <div>
                <p>Nome: {form.name}</p>
                <p>Nível Profissional: {form.level === 0 ? "Júnior" : "Pleno"}</p>
                <p>E-mail: {form.email}</p>
                <p>LinkedIn: {form.linkedin}</p>
                <p>GitHub: {form.github}</p>
                <br/>
            </div>
        )
      });

    return (
        <Theme>
            <C.Container>
                <p>Candidatura</p>
                <h1>Vamos ver sua candidatura.</h1>
                <p>Aqui você pode ver suas informações e editá-las.</p>

                <hr/>

                <div>
                    {mapeandoForm[mapeandoForm.length-1]}
                </div>


            </C.Container>
        </Theme>
    )
}