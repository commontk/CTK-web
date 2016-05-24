import React from 'react'
import { render } from 'react-dom'
import TransferFunctionEditor from 'ctk/widgets/TransferFunctionEditor'

const container = document.querySelector('.example-main-container')

render(
    <TransferFunctionEditor name="world">
    </TransferFunctionEditor>, container
)
