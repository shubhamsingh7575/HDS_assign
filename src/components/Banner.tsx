export default function Banner() {
	return (
		<div className="mt-4 h-56 w-full overflow-hidden rounded-md border bg-gray-100">
			<img
				className="h-full w-full object-cover"
				src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt="Store banner"
				loading="lazy"
				onError={(e)=>{(e.currentTarget as HTMLImageElement).src='https://picsum.photos/1600/400?blur=1'}}
			/>
		</div>
	)
}

