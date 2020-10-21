import React from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import FormContainer from './FormContainer'


export default function searchmeter() {
    return (
        <div>
            <Header/>
            <Menu />
            <div className="content-wrapper" style={{minHeight: '1203.6px',overflow: "hidden",transform:"scale(1)"}}>
                <FormContainer />
            </div>
        </div>
    )
}