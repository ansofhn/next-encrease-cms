import { useEffect, useState } from "react"
import Image from "next/image";
import { appConfig } from "../config/app";
const SuperAgent = require("superagent");



export const InfoContact = ({data, currentUser}) => {

    const [user, setUser] = useState([])

    useEffect(() => {

        const userId = data.users.find(element => element !== currentUser);

        getData(userId)

    }, [])

    const getData = async (id) => {
        await SuperAgent.get(`${appConfig.apiUrl}/users/${id}`)
        .then((res) => {
            setUser(res.body.data)
        })
    }

    return (
        <div>
        <div className="gap-3 flex items-center">
            <div className="p-1 bg-gray-200 rounded-full">
                <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
                    <Image
                    src={"https://source.unsplash.com/random/40x40?people"}
                    width={40}
                    height={40}
                    alt="Profile Image"
                    />
                </div>
            </div>

            <div className="flex-1 border-b border-grey-lighter py-4">
                <div className="flex justify-between">
                    <p className="text-grey-darkest">
                        {user.fullname}
                    </p>
                    <p className="text-xs text-grey-darkest">
                        12:45 pm
                    </p>
                </div>

            </div>
        </div>
        </div>
    )
}