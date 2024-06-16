import {Route, Routes} from "react-router-dom";
import PostList from "../feature/PostList";
import PostForm from "../feature/PostForm";

function Page() {
	return (
		<Routes>
			<Route path="/" element={<PostList />} />
			<Route path="/create" element={<PostForm />} />
		</Routes>
	)
}
export default Page;