import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate, Link } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect } from "react"
import {SelectOption} from '../../Components/SelectOption/SelectOption'


export const FormStep2 = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 2
            })
        }
    },[])

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step3')
        } else {
            alert('Preencha os dados')
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type:FormActions.setLevel,
            payload: level
        })
    }



    return (
        <Theme>
            <C.Container>
                <p>Passo 2</p>
                <h1>{state.name}, qual seu nível de experiência?</h1>
                <p>Escolha a opção que melhor descreve sua atual experiência profissional nessa área.</p>

                <hr/>

                <SelectOption 
                    title="Sou Iniciante - Júnior"
                    description="Experiência de 0-2 anos"
                    icon="👼"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                <SelectOption 
                    title="Tenho Alguma Experiência - Pleno"
                    description="Experiência de 2 a 5 anos"
                    icon="🧑‍💻"
                    selected={state.level === 2}
                    onClick={()=>setLevel(2)}
                />

                <SelectOption 
                    title="Sou Experiente - Sênior"
                    description="Experiência de mais de 5 anos"
                    icon="😎"
                    selected={state.level === 3}
                    onClick={()=>setLevel(3)}
                />

                
                <Link to='/' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}