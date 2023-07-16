import axios from "axios";

export const mintNFT = async () => {
    // console.log("underdog apikey @ createUnderdogNFT >> ", process.env.NEXT_PUBLIC_UNDERDOG_APIKEY)
    const options = {
        method: "POST",
        url: `https://dev.underdogprotocol.com/v2/projects/1/nfts`,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_UNDERDOG_APIKEY,
        },
        data: {
            upsert: false,
            image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
            animationUrl: "https://example.com/animation.mp4",
            receiverAddress: "B87kcCR7uEKo5wLGbQ7gwh1vCY6Xwt12hRe3GaYiUb4V",
            name: "Doors_V1",
            symbol: "UPDG",
            description: "I minted this NFT with the Underdog API",
            projectId: 1,
        },
    };

    axios
        .request(options)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

export const createProject = async () => {
    // console.log("underdog apikey @ createUnderdogNFT >> ", process.env.NEXT_PUBLIC_UNDERDOG_APIKEY)
    const options = {
        method: "POST",
        url: `https://dev.underdogprotocol.com/v2/projects`,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_UNDERDOG_APIKEY,
        },
        data: {
            name: "My latest accomplishment",
            symbol: "UPDG",
            image: "https://i.imgur.com/vQ5f2Zy.jpeg",
            // animationUrl: "https://example.com/animation.mp4",
            description: "I minted this NFT with the Underdog API",
            transferrable: false,
            externalUrl: "",
            compressed: false, // dynamic

        },
    };

    axios
        .request(options)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getProjects = async () => {
    // console.log("underdog apikey @ createUnderdogNFT >> ", process.env.NEXT_PUBLIC_UNDERDOG_APIKEY)
    const options = {
        method: "GET",
        url: `https://dev.underdogprotocol.com/v2/projects`,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_UNDERDOG_APIKEY,
        },
        data: { page: '1', limit: '4' },
    };

    axios
        .request(options)
        .then((response) => {
            const data = response.data;
            const totalPages = data.totalPages;
            const totalResults = data.totalResults;
            const projects = data.results; // array of projects
            console.log("setting projects to localStorage: ", projects)
            // window.localStorage.setItem("projects", projects);
            return data.results;
        })
        .catch((error) => {
            console.error(error);
        });
};