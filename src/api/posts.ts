import axiosInstance from "@/config/axios";

export const getPosts = async () => {
	const { data } = await axiosInstance.get("/posts");
	return data;
};
