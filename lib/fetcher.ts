

const fetcher = (args: string) => fetch(`https://voting-backend.uda.ke/${args}`).then(res => res.json());

export default fetcher