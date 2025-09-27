import Counter from "@components/Couter";

export default async function Page() {
	// Fetch data from an API this is the power of server components
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return (
		<div>
			<h1>Cabins page</h1>
			<ul>
				{data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			<Counter users={data} />
		</div>
	);
}
