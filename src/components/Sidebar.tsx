export default function Sidebar() {
	return (
		<div className="rounded-md border bg-white p-3">
			<div className="text-[11px] font-semibold text-gray-700">Cater to men and women</div>
			<div className="mt-2 h-28 rounded-md bg-violet-50 flex items-center justify-center text-[11px] text-[#972c96]">Rate Card</div>
			
			<div className="mt-4 text-[11px] font-semibold text-gray-700">Description</div>
			<div className="mt-1 text-[11px] text-gray-500 leading-relaxed">We craft bespoke outfits with perfect fits and premium fabrics.</div>
			<div className="mt-2 text-[11px] text-gray-600">+91 9876543210 • +91 9876543210</div>
			<div className="mt-2 flex items-center gap-3 text-gray-500">
				<svg aria-label="Facebook"  viewBox="0 0 24 24" className="h-5 w-5 fill-current">
					<path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.77 8.44-4.93 8.44-9.94Z"/>
				</svg>
				<svg aria-label="Instagram"  viewBox="0 0 24 24" className="h-5 w-5 fill-current">
					<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
				</svg>
				<svg aria-label="X"  viewBox="0 0 24 24" className="h-5 w-5 fill-current">
					<path d="M3 3h4.7l5.05 7.22L17.58 3H21l-7.2 9.86L21.5 21H16.8l-5.4-7.61L6.42 21H3l7.53-10.3L3 3Z"/>
				</svg>
			</div>
		</div>
	)
}

