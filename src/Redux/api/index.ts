import { create } from "apisauce";

const API = create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

const getPostsAPI = ({
    _limit = 12,
    _start = 0,
}) => {
    return API.get("/articles/", {_limit, _start});
};

const getPostAPI = (id: string) => {
    return API.get(`/articles/${id}/`);
};

const getPostsCountAPI = ({}) => {
    return API.get("/articles/count");
};

export { getPostsAPI, getPostAPI, getPostsCountAPI };