import React from 'react';
import {GeneralButton} from '../button/buttons';
import style from '../heroarea/heroarea.module.css';

const Message = props =>{
    return(
        <div className={["col-12 col-md-6 text-center text-md-start order-2 order-md-1", style.messageWrapper].join(" ")}>
            <div className={style.innerContainer}>
                <h3 className="mb-3"> Next generation digital banking</h3>
                <p className="mb-3">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <GeneralButton>Request Invite</GeneralButton>
            </div>
        </div>
    )
}

export default Message;