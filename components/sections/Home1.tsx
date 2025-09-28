
import Link from "next/link"
import { basePath } from '../../util/config';

export default function Home1() {

	return (
		<>

			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">👋 Hi there, I'm Vishnusaran</span>
							<h1 className="ds-3 mb-4">Engineering Intuitive Solutions with <span className="text-primary-1">Clean &amp; Efficient Code</span></h1>
							<p className="text-300 mb-6">I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.</p>
							<Link href={`${basePath}/assets/resume/vishnusaran_cv.pdf`} className="btn btn-gradient me-2" target="_blank">
								Download CV
								<i className="ri-download-line ms-2" />
							</Link>
							{/* <Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>Hire me</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link> */}
							<p className="text-400 mt-6 mb-3">+ 7 years with professional software development</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-6.svg`} alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-1.svg`} alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-4.svg`} alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-11.svg`} alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-10.svg`} alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<img src={`${basePath}/assets/imgs/home-page-2/hero-1/icon-5.svg`} alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					{/* <img className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="man" /> */}
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src={`${basePath}/assets/imgs/hero/hero-1/decorate.png`} alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background={`${basePath}assets/imgs/hero/hero-1/background.png`} />
			</section>

		</>
	)
}
