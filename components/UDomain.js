import React, { useState } from "react"
import UAuth from "@uauth/js"


const uauth = new UAuth({
    clientID: "e2c88390-e1ca-4c61-9fc3-e3406e7ab79e",
    redirectUri: "https://www.decademia.org/",
    scope: "openid wallet"
})

function UDomain() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            // eslint-disable-next-line no-undef
            await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    async function logOut() {
        uauth.logout()
        logOut()
    }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
            logOut()
        }
    }

    return (
        <>
            <button className="p-2 ml-2 shadow-none text-white underline-offset-auto " onClick={log}>{Uauth != null ? Uauth["sub"] : "Unstoppable Domain "}</button>
        </>
    )
}

export default UDomain
