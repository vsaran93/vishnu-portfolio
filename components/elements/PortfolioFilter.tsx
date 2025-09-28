'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export default function PortfolioFilter() {
	const pathname = usePathname();
	const basePath = pathname.split('/')[1];

	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("webapp")} onClick={handleFilterKeyChange("webapp")}>Web App Development</button>
						<button className={activeBtn("mobileapp")} onClick={handleFilterKeyChange("mobileapp")}>Mobile App Development</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 brand webapp app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src={`${basePath}/assets/imgs/projects/projects-1/project-1.png`} alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Web App Development</h3>
									<p>Donation Application</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 webapp brand dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src={`${basePath}/assets/imgs/projects/projects-1/project-2.png`} alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Web App Development</h3>
									<p>Online Exam Application</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 mobileapp app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src={`${basePath}/assets/imgs/projects/projects-1/project-3.png`} alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Mobile App Development</h3>
									<p>Medicine Delivery App</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 app mobileapp dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src={`${basePath}/assets/imgs/projects/projects-1/project-4.png`} alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Mobile App Development</h3>
									<p>Service Consuming App</p>
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
