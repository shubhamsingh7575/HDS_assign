export default function TopNav() {
	return (
		<div className="w-full border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-3 items-center">
				<div className="flex items-center gap-2">
					<div className="text-2xl font-semibold bg-gradient-to-r from-[#A48CFB] to-[#6E59F7] bg-clip-text text-transparent">TailorAlly</div>
				</div>
				<div className="text-center text-sm text-gray-700">
					Welcome to <span className="font-semibold text-[#7A61FF]">Store Name</span> store
				</div>
				<div className="flex items-center justify-end gap-4 text-gray-600">
					<svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
						<path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Zm6-6V11a6 6 0 1 0-12 0v5L4 18v1h16v-1l-2-2Z"/>
					</svg>
					<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
						<path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
					</svg>
				</div>
			</div>
		</div>
	)
}

