interface Props {
	params: { id: string };
}

export default function PokemonPage({ params }: Props) {

	return <div>Pokemon {params.id}</div>;
}
