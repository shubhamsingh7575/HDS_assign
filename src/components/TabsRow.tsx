const tabs = ['Collections','Products','Gallery','Reviews','Location']

export default function TabsRow() {
	return (
		<div className="mt-4 flex flex-wrap gap-3">
			{tabs.map(label => (
				<button key={label} className={`rounded-full border px-4 py-1 text-sm ${label==='Collections' ? 'bg-[#7A61FF] text-white border-[#7A61FF]' : 'bg-white text-gray-700'}`}>{label}</button>
			))}
		</div>
	)
}

