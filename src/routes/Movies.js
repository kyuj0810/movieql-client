import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
	query getMovies {
		allMovies {
			title
			id
		}
		allTweets {
			id
			text
			author {
				fullName
			}
		}
	}
`;

export default function Movies() {
	// hook : 우리가 declarative code(선언형 코드)를 쓰게 해줌. (선언형 코드 : 원하는 걸 설명하기 위한 코드만 적는 것)
	// 반면에 imperative(명령형)은 모든 단계의 코드를 적는 것
	const { data, loading, error } = useQuery(ALL_MOVIES);
	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Could not fetch :(</h1>;
	}
	return (
		<ul>
			<h1>Movies</h1>
			{data.allMovies.map((movie) => (
				<li key={movie.id}>
					<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
				</li>
			))}
		</ul>
	);
}
