import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../Components/Base_Url/Base_url"


export const Confirm = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    const [createNewForm, setCreateNewForm] = useState();

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 4
            })
        }
       
    },[])

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/candidate')
        } else {
            alert('Preencha os dados')
        }
    }

    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: FormActions.setName,
    //         payload: e.target.value
    //     })
    // }

    const returnExperience = () => {
        if(state.level === 1) {
            return "Júnior"
        } else if (state.level === 2) {
            return "Pleno"
        } else {
            return "Sênior"
        }
    }


    

    const createForm = () => {
        const body = {
            name: state.name,
            level: state.level,
            email: state.email,
            linkedin: state.linkedin,
            github: state.github
        }
        axios
          .post(`${BASE_URL}/confirm`, body)
          .then((res:any) => {
            console.log(res)
            setCreateNewForm(res);
            console.log(body)
          })
          .catch((err) => {
          });
      };

      console.log(state)

    return (
        <Theme>
            <C.Container>
                <p>Confirmação</p>
                <h1>Vamos confirmar todos os seus dados</h1>
                <p>Aqui voce poderá confirmar seus dados a serem enviados.</p>
                <p>Caso exista algum erro, retorne ao menu correspondente e altere os dados.</p>

                <hr/>
                <div className="formCard">
                    <h4>Nome: <span>{state.name}</span></h4>
                    <h4>Experiência: <span>{returnExperience()}</span></h4>
                    <h4>E-mail: <span>{state.email}</span></h4>
                    <h4>LinkedIn: <span>{state.linkedin}</span></h4>
                    <h4>GitHub: <span>{state.github}</span></h4>   
                </div>
               


                <Link to='/step2' className="backButton">Voltar</Link>
                <button 
                    onClick={()=> {
                    createForm();
                    handleNextStep()}} >
                    Enviar Informações
                </button>

                

            </C.Container>
        </Theme>
    )
}