import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FormStep1} from '../Pages/FormStep1/FormStep1' 
import {FormStep2} from '../Pages/FormStep2/FormStep2' 
import {FormStep3} from '../Pages/FormStep3/FormStep3'
import {Confirm} from '../Pages/Confirm/Confirm'
import { Candidatura } from '../Pages/Candidatura/Candidatura'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FormStep1/>}/>
                <Route path="/step2" element={<FormStep2/>}/>
                <Route path="/step3" element={<FormStep3/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
                <Route path="/candidate" element={<Candidatura/>}/>
            </Routes>
        </BrowserRouter>
    )
}

