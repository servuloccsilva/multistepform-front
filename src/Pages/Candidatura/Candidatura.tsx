import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect } from "react"


export const Candidatura = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 5
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
                <h1>Vamos ver sua candidatura.</h1>
                <p>Aqui você pode ver suas informações e editá-las.</p>

                <hr/>

                <div>
                    Aqui estarão as informações.
                </div>


            </C.Container>
        </Theme>
    )
}