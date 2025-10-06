type Card = { title: string; img: string }

const cards: Card[] = [
	{title:'WINTER COLLECTION',img:'https://images.pexels.com/photos/848851/pexels-photo-848851.jpeg?auto=compress&cs=tinysrgb&w=1200'},
	{title:'WESTERN WEAR',img:'https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=1200'},
	{title:'ETHNIC WEAR',img:'https://images.pexels.com/photos/6311385/pexels-photo-6311385.jpeg?auto=compress&cs=tinysrgb&w=1200'},
	{title:'CLOTHES COLLECTION',img:'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1200'},
]

export default function CollectionsGrid() {
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{cards.map(card => (
					<div key={card.title} className="rounded-md border bg-white">
						<div className="px-4 pt-3 text-[11px] font-semibold text-gray-700">{card.title}</div>
						<div className="p-4">
							<div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100">
								<img
									className="h-full w-full object-cover"
									src={card.img}
									alt={card.title}
									loading="lazy"
									onError={(e)=>{(e.currentTarget as HTMLImageElement).src='https://picsum.photos/600/450?grayscale'}}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-3 flex justify-start">
				<button className="flex items-center gap-2 rounded-md border border-[#7A61FF] px-3 py-1.5 text-sm text-[#7A61FF] hover:bg-[#7A61FF]/10 transition-colors">
					See all
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
						<path d="M13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41L13.17 12Z"/>
					</svg>
				</button>
			</div>
		</div>
	)
}

