import React, { useState } from "react";
import { useSelector } from "react-redux";

import ConnectorForm from "../../components/Connector";
import ConnectedNavi from "../../components/ConnectedNavi";


const Connect = () => {

    const connected = useSelector(state => state.connection.connection)


    return (
        <>
            {!connected?.doveyId && <ConnectorForm />}
            {connected?.doveyId && <ConnectedNavi />}
        </>
    )
}

export default Connect
