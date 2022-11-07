import { React, useState, useRef } from "react";

export default function MintNFT() {

    const inputRef = useRef(null);
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setimgUrl] = useState("");

    const handleInputChange = (e) => {
        const val = e.target.value;
        setUserName(val);
    };
    const handleValueChange = (e) => {
        const val = e.target.value;
        setDescription(val);
    };

    const onSubmit = async (params) => {
        const form = new FormData();
        console.log(inputRef);
        form.append("file", inputRef.current.files[0]);

        const options = {
            method: "POST",
            body: form,
            headers: {
                Authorization: "4d39babc-c228-48b1-8b72-0e1de703a39a",
            },
        };

        await fetch("https://api.nftport.xyz/v0/files", options)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                // Handle the response
                console.log(responseJson);
                console.log(responseJson.ipfs_url);

                setimgUrl(responseJson.ipfs_url);

                // const { ipfs_url } = responseJson;
                // document.getElementById('image').textContent = image;
            });

        await fetch(
            "https://api.nftport.xyz/v0/mints/easy/files?" +
            new URLSearchParams({
                chain: "polygon",
                name: userName,
                description: description,
                mint_to_address: "0x723F3343a867eFfE37F77538C33E4Fb03b325208",
            }),
            options
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (responseJson) {
                // Handle the response
                console.log(responseJson);
            });
    };
    return (
        <>
            <div className=" flex flex-col justify-center items-center">
                <div className=" bg-green-100 rounded-3xl p-7 mt-6">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center">
                                <div className="font-bold text-2xl">
                                    MINT YOUR WORK AS AN NFT
                                </div>

                                <div className="flex flex-col mt-8">
                                    <input
                                        type="text"
                                        placeholder="UserName"
                                        className="border-[#334155] border bg-green-50 rounded-lg text-black py-2 px-10 w-[400px] mb-5"
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Description"
                                        className="border-[#334155] border bg-green-50 rounded-lg text-black py-2 px-10 w-[400px]"
                                        onChange={handleValueChange}
                                    />
                                </div>
                                <form>
                                    <input
                                        type="file"
                                        className="border-[#334155] border bg-green-50 rounded-lg text-black py-2 px-10 w-[400px] mt-5"
                                        id="myFile"
                                        name="filename"
                                        ref={inputRef}
                                    />
                                </form>
                            </div>
                            <div className="flex mt-10 mb-10 space-x-4">
                                <button
                                    className="font-roboto text-xl font-bold rounded-lg border-2 px-[40px] py-2  bg-[#7CBD1E] hover:bg-[#BCEB3C]"
                                    onClick={onSubmit}
                                >
                                    MINT NFT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}