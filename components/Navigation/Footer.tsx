import Image from 'next/image'

interface FooterLinks{
	content: string
	link?: URL
}

interface SectionLinks{
	group: string
	subsets: string[]
	collecttions: FooterLinks[]
}

interface ContentFooter{
	group: string
	subsets: string[]
	collecttions?: FooterLinks[]
}

/* function Section_links ({group, subsets}: SectionLinks) {
	return(
		<div className="flex flex-col mb-8">
			<span className="mb-3 font-extrabold uppercase">{group}</span>
			{subsets.map(sub => 
				<div>
					<a className="">{sub}</a>
				</div>
			)}
		</div>
	)
} */

function FooterMC({content}: {content: ContentFooter[]}) {
    return(
    <div className="footer px-4 pt-16 bg-[#162147] text-[rgb(142,155,209)] flex flex-col gap-8 md:flex-row md:gap-20 print:hidden">
		<div >
			<Image width={140} height={100} alt="Logo MC" src="/PageAsset/logoMC.png"/>
			<span className="text-[40pt] text-[#a9955a]">2026</span>
			<br></br>
			<span className="text-[20pt] text-[#d0c1a2]">
			&quot;Self move for identity&quot;
			</span>
			{/* original move for priority */}
		</div>
		<div>
			<div className="tbl:w-[750px] w-full grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-[repeat(4,1fr)] md:gap-20  "> 
				{/* move Frameworks from the footer into the emphasized content */}
				{content.map(section => (
					<div className="flex flex-col">
						<span className="mb-3 font-extrabold uppercase"> {section.group} </span>
						<ul className='pl-0'>
							{section.subsets.map(subset => (
								<li key={subset}><a className="">{subset}</a></li>
							))}
						</ul>
					</div>
				))}
				
			</div>
		</div>
    </div>
)}

export {FooterMC}