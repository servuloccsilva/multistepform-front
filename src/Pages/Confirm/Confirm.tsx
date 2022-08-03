import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect } from "react"


export const Confirm = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 4
        })
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

    return (
        <Theme>
            <C.Container>
                <p>Candidatura</p>
                <h1>Vamos confirmar todos os seus dados</h1>
                <p>Aqui voce poderá confirmar ou alterar seus dados enviados.</p>

                <hr/>

                <h3>Nome: {state.name}</h3>
                <h3>Experiência: {state.level ===  0 ? 'Iniciante' : 'Sênior'}</h3>
                <h3>E-mail: {state.email}</h3>
                <h3>LinkedIn: {state.linkedin}</h3>
                <h3>GitHub: {state.github}</h3>

                

            </C.Container>
        </Theme>
    )
}