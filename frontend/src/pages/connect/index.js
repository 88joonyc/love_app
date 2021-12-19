import React, { useState } from "react";
import { useSelector } from "react-redux";

import ConnectorForm from "../../components/Connector";




const Connect = () => {

    const connected = useSelector(state => state.connection.connection)


    return (
        <>
            {!connected?.doveyId && <ConnectorForm />}
        </>
    )
}

export default Connect
