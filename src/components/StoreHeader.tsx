export default function StoreHeader() {
	return (
		<div className="mt-6 flex items-start justify-between gap-3">
			<div className="flex items-start gap-3">
				<div className="h-12 w-12 rounded-lg bg-gray-200" />
				<div>
					<h1 className="text-xl font-semibold text-gray-900">TONY the TAILOR</h1>
					<div className="text-xs text-gray-500 mt-1">Subtitle</div>
					<div className="text-[11px] text-gray-500 mt-2">
						www.tonythetailor.com | tonytailor@example.com | +91 9876543210 | #TonyTailor #BespokeTailoring
					</div>
				</div>
			</div>
			<div className="text-right min-w-[170px]">
				<div className="flex items-center justify-end gap-2">
					<div className="flex items-center gap-0.5 text-amber-500 text-base leading-none">
						<span>★</span>
						<span>★</span>
						<span>★</span>
						<span>★</span>
						<span className="text-amber-300">☆</span>
					</div>
					<div className="text-xs text-gray-600">4.0 • 120 reviews</div>
				</div>
				<div className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-600">Online Store</div>
			</div>
		</div>
	)
}

